import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../../actions/eLearningActions/courseActions';
import CoursesShow from '../../components/eLearningComponents/CoursesShow';
import Slider from '../../components/eLearningComponents/Slider';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import SlideChangeHooks from '../../components/eLearningComponents/Test';

const DashboardElearn = () => {
 const dispatch = useDispatch();

 const courseList = useSelector((state) => state.courseList);
 const {
  loading: loadingList,
  error: errorList,
  courses: coursesList,
 } = courseList;

 useEffect(() => {
  window.scroll(0, 0);
  dispatch(listCourses('AllCourses'));
 }, [dispatch]);

 return (
  <div className="px-1 mt-1">
   <SlideChangeHooks />
   <div style={{ minHeight: '90vh', maxWidth: 1300, margin: '0 auto' }}>
    <h5 className="text-dark mt-3 kh">ផ្នែកបង្រៀនជាវីឌីអូ</h5>
    {loadingList ? (
     <div className="py-3">
      <Loader wd={40} hg={40} />
     </div>
    ) : errorList ? (
     <Message variant="danger">{errorList}</Message>
    ) : (
     <>
      <div>
       <Slider courseList={coursesList} />
      </div>
     </>
    )}
   </div>
  </div>
 );
};

export default DashboardElearn;
