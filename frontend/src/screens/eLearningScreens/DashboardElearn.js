import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../../actions/eLearningActions/courseActions';
import CoursesShow from '../../components/eLearningComponents/CoursesShow';
import Slider from '../../components/eLearningComponents/Slider';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import SlideChangeHooks from '../../components/eLearningComponents/Test';
import Categories from '../../components/eLearningComponents/Categories';

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
  <div className="px-1 pt-1 bg-light">
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
    <h1 className="kh text-center text-sm-left" style={{ fontSize: '2rem' }}>
     ជម្រើសដ៏ទូលំទូលាយនៃការសិក្សាជាវីដីអូអនឡាញ
    </h1>
    <h5 className="kh ms-1">
     ជ្រើសរើសវគ្គសិក្សាវីដេអូតាមអ៊ិនធរណេតចំនួន ១៥៥,០០០
     ជាមួយនឹងការបន្ថែមថ្មីដែលបានផ្សព្វផ្សាយជារៀងរាល់ខែ
    </h5>
    <br />
    <br />
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

    <h2 className="kh text-center text-sm-left">មុខវិទ្យាតាមផ្នែក</h2>

    <Categories />
   </div>
  </div>
 );
};

export default DashboardElearn;
