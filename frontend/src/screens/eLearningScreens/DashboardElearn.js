import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../../actions/eLearningActions/courseActions';
import CoursesShow from '../../components/eLearningComponents/CoursesShow';
import Slider from '../../components/eLearningComponents/Slider';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import SlideChangeHooks from '../../components/eLearningComponents/Test';
import Categories from '../../components/eLearningComponents/Categories';
import axios from 'axios';
import {
 LOADER_TOP_FALSE,
 LOADER_TOP_TRUE,
} from '../../constants/navbarConstants';
import { COURSE_LIST_SUCCESS } from '../../constants/eLearningConstants/courseConstants';
import { useHistory } from 'react-router-dom';

const DashboardElearn = () => {
 const dispatch = useDispatch();
 const history = useHistory();

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

 const gotoCourseType = async (type) => {
  dispatch({ type: LOADER_TOP_TRUE });
  const { data } = await axios.get(
   `/api/courses/courseType/${type}?pageNumber=1`
  );

  if (data) {
   dispatch({ type: COURSE_LIST_SUCCESS, payload: data });
   dispatch({ type: LOADER_TOP_FALSE });
   history.push(`/elearning/courses?courseType=${type}`);
  }
 };

 return (
  <div className="px-1 pt-1">
   <SlideChangeHooks />
   <div
    style={{
     minHeight: '90vh',
     maxWidth: 1300,
     margin: '0 auto',
     overflow: 'hidden',
    }}
   >
    <br />
    <br />
    <br />
    <h2 className="kh text-center text-sm-left">
     ជម្រើសដ៏ទូលំទូលាយនៃការសិក្សាជាវីដីអូអនឡាញ
    </h2>
    <h5 className="kh ms-1">
     ជ្រើសរើសវគ្គសិក្សាវីដេអូតាមអ៊ិនធរណេតចំនួន ១៥៥,០០០
     ជាមួយនឹងការបន្ថែមថ្មីដែលបានផ្សព្វផ្សាយជារៀងរាល់ខែ
    </h5>
    <br />
    <br />

    <div className="bg-light round">
     <h4 className="kh text-center fw-bold bg-info p-2 rounded-top">
      ជម្រើសដ៏ល្អសម្រាប់អ្នក
     </h4>
     {loadingList ? (
      <div className="py-3">
       <Loader wd={40} hg={40} />
      </div>
     ) : errorList ? (
      <Message variant="danger">{errorList}</Message>
     ) : (
      <div className="py-2">
       <Slider courseList={coursesList} />
      </div>
     )}
    </div>

    <h4 className="kh text-center bg-info p-2 rounded-top">
     មុខវិទ្យាតាមផ្នែក
    </h4>
    <Categories />
    <h4 className="kh text-center mt-5 bg-info p-2 rounded-top">
     ផ្នែកធំៗទាំងអស់នៃមុខវិទ្យា
    </h4>
    <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mb-5">
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('AllCourses')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType"
      >
       មុខវិទ្យាទាំងអស់
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('WebDevelopment')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType"
      >
       ផ្នែកសរសេរវែបផ្សាយ
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('Programming')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType"
      >
       ផ្នែកសរសេរកម្មវិធី
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('EmbededSystem')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType"
      >
       ផ្នែកប្រព័ន្ធបញ្ចារ
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('MobileDevelopment')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType"
      >
       ផ្នែកសរសេរកម្មវិធីទូរស័ព្ទ
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('MachineLearning')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType"
      >
       ផ្នែករៀនពីមា៉ស៊ីន
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default DashboardElearn;
