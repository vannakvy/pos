import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../../actions/eLearningActions/courseActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import RatingBar from '../../components/Rating';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import CourseItemDetails from '../../components/eLearningComponents/CourseItemDetails';

const CourseDetailsScreen = ({ match }) => {
 const [test, setTest] = useState(false);
 const [opii, setOpii] = useState(0);
 const { id } = match.params;

 const dispatch = useDispatch();

 const courseDetail = useSelector((state) => state.courseDetail);
 const { loading, error, course } = courseDetail;

 useEffect(() => {
  window.scrollTo(0, 0);
  let scrollY = 0;
  let opi = 0;
  window.onscroll = function () {
   scrollY = window.pageYOffset;
   opi = (scrollY - 100) / 150;
   if (opi > 1) {
    opi = 1;
   } else if (opi <= 0) {
    opi = 0;
   }
   setOpii(opi);

   if (scrollY > 100) {
    setTest(true);
   } else {
    setTest(false);
   }
  };
  dispatch(getCourseById(id));
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
      <div className=" py-3 shadow">
       <div
        className="container _courseDetailHeader"
        style={{ minHeight: '40vh' }}
       >
        <div className="row">
         <div className="col-lg-8 d-none d-lg-block">
          <h3>{course.name}</h3>
          <p>{course.description}</p>
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
      </div>
     </div>
    </>
   )}
  </div>
 );
};

export default CourseDetailsScreen;
