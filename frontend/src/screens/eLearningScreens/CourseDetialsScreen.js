import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../../actions/eLearningActions/courseActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import CourseItemDetails from '../../components/eLearningComponents/CourseItemDetails';
import Comment from '../../components/eLearningComponents/comment';

const CourseDetailsScreen = ({ match }) => {
 const { id } = match.params;
 const dispatch = useDispatch();

 const courseDetail = useSelector((state) => state.courseDetail);
 const { loading, error, course } = courseDetail;

 useEffect(() => {
  window.scrollTo(0, 0);
  if (!course || id !== course._id) dispatch(getCourseById(id));
 }, [dispatch, id]);
 return (
  <div style={{ minHeight: '90vh' }}>
   {loading ? (
    <div className="py-3">
     <Loader wd={40} hg={40} />
    </div>
   ) : error ? (
    <Message variant="danger">{error}</Message>
   ) : (
    <>
     <div className="">
      <div className="py-3 bg-dark">
       <div
        className="container _courseDetailHeader"
        style={{ minHeight: '40vh' }}
       >
        <div className="row h-100">
         <div className="col-md-8 d-none d-lg-block mt-5 pt-3">
          <h1 style={{ fontSize: '3rem' }} className="ubuntu text-info">
           {course.name}
          </h1>
          <p className="text-info">{course.description}</p>
         </div>
         <div className="col-lg-4">
          <CourseItemDetails course={course} />
         </div>
        </div>
       </div>
      </div>
     </div>

     <div className="container py-2">
      <div className="col-lg-8">
       <h5>Course Content</h5>
       <CourseContent sections={course.section} cid={course._id} />
       <h5 className="kh mt-4">មតិផ្សេងៗ</h5>
       <Comment cid={id} />
      </div>
     </div>
    </>
   )}
  </div>
 );
};

export default CourseDetailsScreen;
