import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../../actions/eLearningActions/courseActions';
import LandingElearn from '../../components/eLearningComponents/LandingElearn';
import Slider from '../../components/eLearningComponents/Slider';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const DashboardElearn = () => {
 const dispatch = useDispatch();

 const courseList = useSelector((state) => state.courseList);
 const {
  loading: loadingList,
  error: errorList,
  courses: coursesList,
 } = courseList;

 useEffect(() => {
  dispatch(listCourses('All Courses'));
 }, [dispatch]);

 return (
  <>
   {loadingList ? (
    <div className="py-5">
     <Loader wd={180} hg={180} />
    </div>
   ) : errorList ? (
    <Message variant="danger">{errorList}</Message>
   ) : (
    <>
     <LandingElearn />
     <div className="position-relative" style={{ bottom: '150px' }}>
      <Slider courseList={coursesList} />
     </div>
    </>
   )}
  </>
 );
};

export default DashboardElearn;
