import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
 createCourse,
 deleteCourse,
 listCourses,
 updateCourse,
} from '../../actions/eLearningActions/courseActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { Col, Form, Row } from 'react-bootstrap';
import {
 COURSE_CREATE_RESET,
 COURSE_DELETE_RESET,
 COURSE_UPDATE_RESET,
} from '../../constants/eLearningConstants/courseConstants';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import queryString from 'query-string';
import Paginate from '../../components/eLearningComponents/Paginate';
import { BiDetail } from 'react-icons/bi';

const AdminCourses = ({ match }) => {
 const [courseId, setCourseId] = useState('');
 const [image, setImage] = useState(
  '/uploads/elearningUploads/imageDefualt.jpg'
 );
 const [uploading, setUploading] = useState(false);
 const [newCourse, setNewCourse] = useState({
  name: '',
  courseType: 'Web Development',
  description: '',
 });

 const pageNumber = match.params.pageNumber || 1;
 let no = pageNumber === 1 ? 1 : (pageNumber - 1) * 20 + 1;
 const location = useLocation();
 const query = queryString.parse(location.search);
 const courseType = query.courseType || 'AllCourses';
 const keyword = query.keyword || '';

 const history = useHistory();

 const onChangeHandler = (e) => {
  const { name, value } = e.target;
  setNewCourse({ ...newCourse, [name]: value });
 };

 const dispatch = useDispatch();

 const courseDelete = useSelector((state) => state.courseDelete);
 const { success: successDelete } = courseDelete;

 const courseCreate = useSelector((state) => state.courseCreate);
 const { error: errorCreate, success: successCreate } = courseCreate;

 const courseUpdate = useSelector((state) => state.courseUpdate);
 const { success: successUpdate, error: errorUpdate } = courseUpdate;

 const courseList = useSelector((state) => state.courseList);
 const {
  loading: loadingList,
  error: errorList,
  courses: coursesList,
  page,
  pages,
 } = courseList;

 const handdleSubmit = (e) => {
  e.preventDefault();
 };

 const resetCourse = () => {
  setImage('/uploads/elearningUploads/imageDefualt.jpg');
  setCourseId('');
  setNewCourse({
   name: '',
   courseType: 'Web Development',
   description: '',
  });
 };

 const createCourseHandler = () => {
  dispatch(createCourse(newCourse, image));
  resetCourse();
 };

 const deleteCourseHandler = (id) => {
  if (window.confirm('Are you sure?')) {
   dispatch(deleteCourse(id));
  }
 };

 const editCourseHandler = (course) => {
  window.scrollTo(0, 0);
  setCourseId(course._id);
  setImage(course.imgUrl);
  setNewCourse({
   name: course.name,
   courseType: course.courseType,
   description: course.description,
  });
 };

 const updateCourseHandler = () => {
  dispatch(updateCourse(newCourse, image, courseId));
  resetCourse();
 };

 const uploadFileHandler = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('image', file);
  setUploading(true);

  try {
   const config = {
    headers: {
     'Content-Type': 'multipart/form-data',
    },
   };

   const { data } = await axios.post(
    '/api/eLearning/uploads',
    formData,
    config
   );

   setImage(data);
   setUploading(false);
  } catch (error) {
   console.error(error);
   setUploading(false);
  }
 };

 const courseDetail = (id) => {
  history.push(`/adminElearn/courses/${id}`);
 };

 const onChangeSearch = (e) => {
  const { value } = e.target;
  history.push(`/adminElearn/courses/search/page/1?keyword=${value}`);
 };

 const onSubmitSearchHandler = (e) => {
  e.preventDefault();
  history.push(`/adminElearn/courses/search/page/1?keyword=${keyword}`);
 };

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch({ type: COURSE_UPDATE_RESET });
  dispatch({ type: COURSE_CREATE_RESET });
  dispatch({ type: COURSE_DELETE_RESET });
  dispatch(listCourses(courseType, pageNumber, keyword, 20));
 }, [
  dispatch,
  successCreate,
  successDelete,
  successUpdate,
  courseType,
  pageNumber,
  keyword,
 ]);

 const onChangeCourseType = (e) => {
  window.scrollTo(0, 0);
  history.push(`/adminElearn/courses?courseType=${e.target.value}`);
 };

 return (
  <>
   {/* <h4 className="text-center mt-2">Admin Courses</h4> */}
   <div className="d-flex justify-content-between">
    <div></div>
    <div
     data-toggle="collapse"
     data-target="#multiCollapseExample2"
     aria-expanded={false}
     aria-controls="multiCollapseExample2"
     onClick={resetCourse}
    >
     <h6 className="grediant btn my-1 py-2 rounded-lg text-dark adminHover">
      CREATE COURSE<i className="fas fa-plus"></i>
     </h6>
    </div>
   </div>
   {errorCreate && <Message variant="danger">{errorCreate}</Message>}
   {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

   <div className="collapse" id="multiCollapseExample2">
    <h5 className="pb-2">CREATE COURSE</h5>
    <form className="form-group" onSubmit={handdleSubmit}>
     <Row>
      <Col md={6}>
       <h6>Name:</h6>
       <input
        type="text"
        name="name"
        className="form-control mb-3 bg-light rounded"
        onChange={onChangeHandler}
        value={newCourse.name}
       />
       <h6>Course Type:</h6>
       <select
        className="form-control mb-3 bg-light rounded"
        name="courseType"
        onChange={onChangeHandler}
        value={newCourse.courseType}
       >
        <option value="Web Development">Web Development</option>
        <option value="Programming">Programming</option>
        <option value="Embeded System">Embeded System</option>
        <option value="Mobile Development">Mobile Development</option>
        <option value="Machine Learning">Machine Learning</option>
       </select>
       <h6>Image:</h6>
       <Form.Group controlId="image">
        <Form.Control
         className="bg-light rounded"
         type="text"
         placeholder="Enter image url"
         value={image}
         name="image"
         onChange={(e) => setImage(e.target.value)}
        ></Form.Control>
        <Form.File
         className="bg-light"
         id="image-file"
         label="Choose File"
         custom
         onChange={uploadFileHandler}
        ></Form.File>
        {uploading && <Loader />}
       </Form.Group>
      </Col>
      <Col md={6}>
       <h6>Description:</h6>
       <textarea
        className="form-control mb-3 bg-light rounded"
        rows="11"
        name="description"
        onChange={onChangeHandler}
        value={newCourse.description}
       ></textarea>
      </Col>
     </Row>
     {courseId === '' ? (
      <button
       className="btn px-5 grediant rounded adminHover text-dark mr-3"
       data-toggle="collapse"
       data-target="#multiCollapseExample2"
       aria-expanded={true}
       aria-controls="multiCollapseExample2"
       onClick={createCourseHandler}
       type="submit"
      >
       Create
      </button>
     ) : (
      <button
       className="btn px-5 grediant rounded adminHover text-dark mr-3"
       data-toggle="collapse"
       data-target="#multiCollapseExample2"
       aria-expanded={true}
       aria-controls="multiCollapseExample2"
       onClick={updateCourseHandler}
       type="submit"
      >
       Update
      </button>
     )}
     <button
      className="btn px-5 grediant text-dark rounded adminHover"
      data-toggle="collapse"
      data-target="#multiCollapseExample2"
      aria-expanded={true}
      aria-controls="multiCollapseExample2"
      onClick={resetCourse}
      type="btn"
     >
      Cancel
     </button>
    </form>
   </div>

   <div className="d-flex mt-2 justify-content-between">
    <div style={{ width: '330px' }}>
     <select
      className="form-control mb-3 shadow-sm rounded w-100 kh font-weight-bold"
      value={courseType}
      name="courseType"
      style={{ width: '350px', background: '#fff' }}
      onChange={onChangeCourseType}
     >
      <option className="font-weight-bold" value="AllCourses">
       មុខវិទ្យាទាំងអស់
      </option>
      <option className="font-weight-bold" value="WebDevelopment">
       ផ្នែកសរសេរវែបផ្សាយ
      </option>
      <option className="font-weight-bold" value="Programming">
       ផ្នែកសរសេរកម្មវិធី
      </option>
      <option className="font-weight-bold" value="EmbededSystem">
       ផ្នែកប្រព័ន្ធបញ្ចារ
      </option>
      <option className="font-weight-bold" value="MobileDevelopment">
       ផ្នែកសរសេរកម្មវិធីទូរស័ព្ទ
      </option>
      <option className="font-weight-bold" value="MachineLearning">
       ផ្នែករៀនពីមា៉ស៊ីន
      </option>
     </select>
    </div>

    <form onSubmit={onSubmitSearchHandler}>
     <div className="input-group mb-3 rounded" style={{ width: '350px' }}>
      <input
       type="text"
       className="form-control rounded shadow"
       placeholder="Course name..."
       aria-label="courseName"
       aria-describedby="basic-addon1"
       onChange={onChangeSearch}
       style={{ background: '#fff' }}
      />
      <div className="input-group-prepend">
       <button type="submit" className="input-group-text btn rounded bg-dark">
        <BsSearch className="text-light" />
       </button>
      </div>
     </div>
    </form>
   </div>

   {loadingList ? (
    <Loader wd={40} hg={40} />
   ) : errorList ? (
    <Message variant="danger">{errorList}</Message>
   ) : (
    <>
     <table className="table table-sm bg-light">
      <thead className="thead-dark text-center">
       <tr>
        <th scope="col">No</th>
        <th scope="col">Name</th>
        <th scope="col">Course Type</th>
        <th scope="col">Description</th>
        <th scope="col">Actions</th>
       </tr>
      </thead>
      <tbody>
       {coursesList &&
        coursesList.map((course) => (
         <tr key={course._id} className="adminHover">
          <td className="text-center">{no++}</td>
          <td>{course.name}</td>
          <td>{course.courseType}</td>
          <td>{course.description.slice(0, 30)}...</td>
          <td
           className="text-center py-2 px-0"
           style={{ fontSize: '17px', width: 160 }}
          >
           <button
            className="btn-sm btn bg-info text-light"
            onClick={() => courseDetail(course._id)}
           >
            <BiDetail style={{ fontSize: '130%' }} />
           </button>
           <button
            className="btn-sm btn bg-warning text-light mx-1"
            onClick={() => editCourseHandler(course)}
           >
            <i className="fas fa-pen-alt" style={{ fontSize: '130%' }}></i>
           </button>
           <button
            className="btn-sm btn bg-danger text-light"
            onClick={() => deleteCourseHandler(course._id)}
           >
            <i className="fas fa-trash" style={{ fontSize: '130%' }}></i>
           </button>
          </td>
         </tr>
        ))}
      </tbody>
     </table>
    </>
   )}
   <Paginate
    pages={pages}
    page={page}
    keyword={keyword ? keyword : ''}
    isAdmin
    courseType={courseType}
   />
  </>
 );
};

export default AdminCourses;
