import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
 createCourse,
 deleteCourse,
 listCourses,
 SearchCourses,
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
import { useHistory } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const AdminCourses = () => {
 let no = 1;
 const [courseId, setCourseId] = useState('');
 const [keyword, setKeyword] = useState('');
 const [courseType, setCourseType] = useState('All Courses');
 const [image, setImage] = useState(
  '/uploads/elearningUploads/imageDefualt.jpg'
 );
 const [uploading, setUploading] = useState(false);
 const [newCourse, setNewCourse] = useState({
  name: '',
  courseType: 'Web Development',
  description: '',
 });

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
  dispatch(deleteCourse(id));
 };

 const editCourseHandler = (course) => {
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
  setKeyword(value);
  dispatch(SearchCourses(value));
 };

 const onSubmitSearchHandler = (e) => {
  e.preventDefault();
  dispatch(SearchCourses(keyword));
 };

 useEffect(() => {
  dispatch({ type: COURSE_UPDATE_RESET });
  dispatch({ type: COURSE_CREATE_RESET });
  dispatch({ type: COURSE_DELETE_RESET });
  dispatch(listCourses(courseType));
 }, [dispatch, successCreate, successDelete, successUpdate, courseType]);

 return (
  <>
   <h4 className="text-center mt-2">Admin Courses</h4>

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
        className="form-control mb-3"
        onChange={onChangeHandler}
        value={newCourse.name}
       />
       <h6>Course Type:</h6>
       <select
        className="form-control mb-3"
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
         type="text"
         placeholder="Enter image url"
         value={image}
         name="image"
         onChange={(e) => setImage(e.target.value)}
        ></Form.Control>
        <Form.File
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
        className="form-control mb-3"
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
    <div className="form-group shadow bg-light rounded">
     <select
      className="custom-select rounded"
      style={{ width: '350px' }}
      value={courseType}
      onChange={(e) => setCourseType(e.target.value)}
     >
      <option value="All Courses">All Courses</option>
      <option value="Web Development">Web Development</option>
      <option value="Programming">Programming</option>
      <option value="Embeded System">Embeded System</option>
      <option value="Mobile Development">Mobile Development</option>
      <option value="Machine Learning">Machine Learning</option>
     </select>
    </div>
    <form onSubmit={onSubmitSearchHandler}>
     <div
      className="input-group mb-3 shadow rounded bg-light"
      style={{ width: '350px' }}
     >
      <input
       type="text"
       className="form-control rounded"
       placeholder="Course name..."
       aria-label="Username"
       aria-describedby="basic-addon1"
       onChange={onChangeSearch}
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
     <table className="table table-sm">
      <thead className="thead-dark text-center">
       <tr>
        <th scope="col">No</th>
        <th scope="col">Name</th>
        <th scope="col">Course Type</th>
        <th scope="col">Description</th>
        <th scope="col">Admin</th>
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
          <td>{course.user}</td>
          <td className="text-center py-2 px-0" style={{ fontSize: '17px' }}>
           <Button onClick={() => courseDetail(course._id)}>
            <i
             className="fas fa-sign-in-alt text-info"
             style={{ fontSize: '130%' }}
            ></i>
           </Button>
           <Button
            color="primary"
            onClick={() => editCourseHandler(course)}
            data-toggle="collapse"
            data-target="#multiCollapseExample2"
            aria-expanded={false}
            aria-controls="multiCollapseExample2"
           >
            <i className="fas fa-pen-alt" style={{ fontSize: '130%' }}></i>
           </Button>
           <Button
            color="secondary"
            onClick={() => deleteCourseHandler(course._id)}
           >
            <i className="fas fa-trash" style={{ fontSize: '130%' }}></i>
           </Button>
          </td>
         </tr>
        ))}
      </tbody>
     </table>
    </>
   )}
  </>
 );
};

export default AdminCourses;
