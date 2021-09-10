import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../../actions/eLearningActions/courseActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import CourseItemDetails from '../../components/eLearningComponents/CourseItemDetails';
import Comment from '../../components/eLearningComponents/comment';
import ReactHtmlParser from 'html-react-parser';
import RatingElearn from '../../components/eLearningComponents/RatingElearn';

const CourseDetailsScreen = ({ match }) => {
 const { id } = match.params;
 const dispatch = useDispatch();
 const [scrollY, setScrollY] = useState(0);

 const courseDetail = useSelector((state) => state.courseDetail);
 const { loading, error, course } = courseDetail;

 useEffect(() => {
  window.scrollTo(0, 0);
  function updatePosition() {
   setScrollY(window.pageYOffset);
  }
  window.addEventListener('scroll', updatePosition);
  updatePosition();
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
     <div className="container d-block d-lg-none">
      <CourseItemDetails course={course} />
     </div>
     <div className="d-none d-lg-block">
      <div className="position-relative">
       <div
        className="w-100"
        style={{
         height: '400px',
         overflow: 'hidden',
         filter: 'blur(1px)',
         opacity: 1,
        }}
       >
        <img className="w-100" src={course.imgUrl} alt="" />
        <div
         className="w-100 h-100"
         style={{
          position: 'absolute',
          top: 0,
          background: 'black',
          opacity: 0.8,
         }}
        ></div>
       </div>
       <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <div
         className="container _courseDetailHeader"
         style={{ minHeight: '20vh', margin: '0 auto' }}
        >
         <div className="row h-100">
          <div className="col-md-8 d-none d-lg-block mt-5 pt-3">
           <h1 style={{ fontSize: '3rem' }} className="kh text-info">
            {course.name}
           </h1>
           <div className="mt-5">
            <h5 className="text-info">
             ចំណាត់ថ្នាក់ <RatingElearn /> (
             <span className="text-warning">325</span> សិស្ស)
            </h5>
            <p className="text-light">{course.courseType}</p>
            <button
             className="btn text-dark rounded"
             style={{ background: 'rgb(255,94,20)' }}
            >
             អោយចំណាត់ថ្នាក់
            </button>
           </div>
          </div>
          <div className="col-lg-4">
           <CourseItemDetails course={course} />
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>

     <div className="container py-2">
      <div className="row">
       <div className="col-lg-8">
        <div className="bg-light shadow-sm mt-4 px-4 py-4 border round mb-4">
         <h4 className="text-center text-info mb-4">ចប់មេរៀននេះសិស្សអាច៖</h4>
         <div className="row row-cols-md-2 row-cols-sm-1">
          {ReactHtmlParser(
           (course && course.objective) ||
            '<h6 class="text-center">មិនទាន់មាន</h6>'
          )}
         </div>
        </div>
        <h4 className="text-center text-info">ជំពូកមេរៀន</h4>
        <CourseContent sections={course.section} cid={course._id} />
        <h4 className="kh mt-4 text-center text-info">មតិផ្សេងៗ</h4>
        <Comment cid={id} />
       </div>
       <div className="col-lg-4 d-none d-lg-block">
        <div
         style={{
          position: 'sticky',
          top: '70px',
          display: scrollY > 650 ? 'block' : 'none',
         }}
        >
         <CourseItemDetails course={course} />
        </div>
       </div>
      </div>
     </div>
    </>
   )}
  </div>
 );
};

export default CourseDetailsScreen;
