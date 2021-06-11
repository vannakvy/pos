import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../../actions/eLearningActions/courseActions';
import CoursesShow from '../../components/eLearningComponents/CoursesShow';
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
  window.scroll(0, 0);
  dispatch(listCourses('AllCourses'));
 }, [dispatch]);

 return (
  <div style={{ minHeight: '90vh' }}>
   {loadingList ? (
    <div className="py-3">
     <Loader wd={40} hg={40} />
    </div>
   ) : errorList ? (
    <Message variant="danger">{errorList}</Message>
   ) : (
    <>
     <LandingElearn />
     <div>
      <Slider courseList={coursesList} />
      <CoursesShow courseType={'WebDevelopment'} type={'ផ្នែកសរសេរវែបផ្សាយ'} />
      <CoursesShow courseType={'Programming'} type={'ផ្នែកសរសេរកម្មវិធី'} />
      <CoursesShow courseType={'EmbededSystem'} type={'ផ្នែកប្រព័ន្ធបញ្ចា'} />
      <CoursesShow
       courseType={'MobileDevelopment'}
       type={'ផ្នែកសរសេរកម្មវិធីទូរស័ព្ទ'}
      />
      <CoursesShow courseType={'MachineLearning'} type={'ផ្នែករៀនពីមា៉ស៊ីន'} />
     </div>
    </>
   )}
  </div>
 );
};

export default DashboardElearn;
