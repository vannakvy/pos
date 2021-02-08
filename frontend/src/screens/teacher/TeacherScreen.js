import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import queryString from 'query-string';
import { BiDetail } from 'react-icons/bi';
import axios from 'axios';

const TeacherScreen = ({ match }) => {
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

 const location = useLocation();
 const query = queryString.parse(location.search);
 const keyword = query.keyword || '';

 const history = useHistory();
 const dispatch = useDispatch();

 const onChangeHandler = (e) => {
  const { name, value } = e.target;
  setNewCourse({ ...newCourse, [name]: value });
 };

 useEffect(() => {}, []);

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
  // dispatch(createCourse(newCourse, image));
  resetCourse();
 };

 const deleteCourseHandler = (id) => {
  if (window.confirm('Are you sure?')) {
   //  dispatch(deleteCourse(id));
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
  // dispatch(updateCourse(newCourse, image, courseId));
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

 return (
  <>
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
  </>
 );
};

export default TeacherScreen;
