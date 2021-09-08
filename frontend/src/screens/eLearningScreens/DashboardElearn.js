import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../../actions/eLearningActions/courseActions';
import CoursesShow from '../../components/eLearningComponents/CoursesShow';
import Slider from '../../components/eLearningComponents/Slider';
import { Loader } from 'semantic-ui-react';
import Message from '../../components/Message';
import SlideChangeHooks from '../../components/eLearningComponents/Test';
import Categories from '../../components/eLearningComponents/Categories';
import axios from 'axios';
import {
 LOADER_TOP_FALSE,
 LOADER_TOP_TRUE,
} from '../../constants/navbarConstants';
import { COURSE_LIST_SUCCESS } from '../../constants/eLearningConstants/courseConstants';
import { FcSearch } from 'react-icons/fc';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import CourseItem from '../../components/eLearningComponents/CourseItem';
import { MdCancel } from 'react-icons/md';
import { BiBook } from 'react-icons/bi';

const DashboardElearn = ({ match, history }) => {
 const dispatch = useDispatch();
 const location = useLocation();
 const query = queryString.parse(location.search);
 const courseType = query.courseType || 'AllCourses';
 const keyword = query.keyword || '';
 const pageNumber = match.params.pageNumber || 1;
 const [searchKey, setSearchKey] = useState(keyword);

 const { courses, loading, page, pages, count } = useSelector(
  (state) => state.courseList
 );

 useEffect(() => {
  if (keyword) {
   dispatch(listCourses(courseType, pageNumber, keyword));
  } else {
   //  window.scroll(0, 0);
  }
 }, [dispatch, keyword]);

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

 const searchHandler = (e) => {
  e.preventDefault();
  history.push(`/elearning?keyword=${e.target.keyword.value}`);
 };

 const changeSearch = (e) => {
  setSearchKey(e.target.value);
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
    <h3 className="kh text-center text-sm-left">
     ជម្រើសដ៏ទូលំទូលាយនៃការសិក្សាជាវីដីអូអនឡាញ
    </h3>
    <h5 className="kh ms-1">
     ជ្រើសរើសវគ្គសិក្សាវីដេអូតាមអ៊ិនធរណេតចំនួន ១៥៥,០០០
     ជាមួយនឹងការបន្ថែមថ្មីដែលបានផ្សព្វផ្សាយជារៀងរាល់ខែ
    </h5>
    <br />

    <div className="d-flex justify-content-end mx-1">
     <form
      className="input-group mb-3 shadow-sm round"
      style={{ maxWidth: '300px' }}
      onSubmit={searchHandler}
     >
      <input
       type="text"
       name="keyword"
       className="form-control"
       style={{
        background: '#fff',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
       }}
       placeholder="ស្វែងរកទីនេះ..."
       onChange={changeSearch}
       value={searchKey}
      />
      <button
       className="btn btn-light"
       type={keyword ? 'button' : 'submit'}
       onClick={
        keyword
         ? () => {
            setSearchKey('');
            history.push('/elearning');
           }
         : null
       }
       style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
      >
       {keyword ? (
        <>
         {loading ? (
          <Loader active inline="centered" size="tiny" />
         ) : (
          <MdCancel style={{ color: 'red' }} size={20} />
         )}
        </>
       ) : (
        <FcSearch style={{ fontSize: 20 }} />
       )}
      </button>
     </form>
    </div>

    <div className="round shadow-sm">
     <h4 className="kh text-center fw-bold bg-info p-2 rounded-top">
      {keyword ? 'ស្វែងរក-' + keyword : 'ជម្រើសដ៏ល្អសម្រាប់អ្នក'}
     </h4>
    </div>
    <div
     className="py-2 rounded-bottom"
     style={{ background: 'rgb(240,240,240)' }}
    >
     {keyword ? (
      <>
       {loading ? (
        <div className="p-5">
         <Loader active inline="centered" className="fw-bold">
          កំពុងដំណើរការ...
         </Loader>
        </div>
       ) : (
        <>
         <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 w-100 mx-auto">
          {courses &&
           courses.map((course) => (
            <div
             key={course._id}
             className="col px-2 d-flex justify-content-center"
            >
             <CourseItem course={course} />
            </div>
           ))}
         </div>
         {courses && courses.length === 0 && (
          <div className="p-5 text-center">
           <BiBook size={70} className="text-danger mb-3" />

           <p className="fw-bold">មិនមានមុខវិទ្យានឹងទេ</p>
          </div>
         )}
        </>
       )}
      </>
     ) : (
      <Slider />
     )}
    </div>

    <br />
    <Categories />
    <h4 className="kh text-center mt-5 bg-info p-2 rounded-top">
     ផ្នែកធំៗទាំងអស់នៃមុខវិទ្យា
    </h4>
    <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 mb-5 px-3">
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('AllCourses')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType rounded"
      >
       មុខវិទ្យាទាំងអស់
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('WebDevelopment')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType rounded"
      >
       ផ្នែកសរសេរវែបផ្សាយ
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('Programming')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType rounded"
      >
       ផ្នែកសរសេរកម្មវិធី
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('EmbededSystem')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType rounded"
      >
       ផ្នែកប្រព័ន្ធបញ្ចារ
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('MobileDevelopment')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType rounded"
      >
       ផ្នែកសរសេរកម្មវិធីទូរស័ព្ទ
      </div>
     </div>
     <div className="col px-1">
      <div
       onClick={() => gotoCourseType('MachineLearning')}
       className="bg-light py-3 px-4 kh fw-bold text-center mb-1 mx-0 shadow-sm courseType rounded"
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
