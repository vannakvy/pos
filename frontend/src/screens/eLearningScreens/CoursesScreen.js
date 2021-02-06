import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
 listCourses,
 SearchCourses,
} from '../../actions/eLearningActions/courseActions';
import CourseItem from '../../components/eLearningComponents/CourseItem';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Search from '../../components/eLearningComponents/Search';
import Paginate from '../../components/eLearningComponents/Paginate';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import ConvertNum from '../../components/eLearningComponents/ConvertNum';
import { IoMdArrowBack } from 'react-icons/io';

const CoursesScreen = ({ match, history }) => {
 const dispatch = useDispatch();
 const pageNumber = match.params.pageNumber || 1;
 const location = useLocation();
 const query = queryString.parse(location.search);
 const courseType = query.courseType || 'AllCourses';
 const keyword = query.keyword || '';

 const courseList = useSelector((state) => state.courseList);
 const {
  loading: loadingList,
  error: errorList,
  courses,
  page,
  pages,
  count,
 } = courseList;

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(listCourses(courseType, pageNumber, keyword));
 }, [dispatch, courseType, pageNumber, keyword]);

 const changeCourseType = (e) => {
  history.push(`/elearning/courses?courseType=${e.target.value}`);
 };

 return (
  <div
   style={{
    // background: 'url(/uploads/img/lightning_PNG19.png) no-repeat fixed center',
    backgroundSize: '100%',
    minHeight: '60vh',
   }}
  >
   <div className="container">
    <div className="row py-2">
     <div className="col-4">
      <button
       className=" btn btn-dark kh font-weight-bolder p-3 rounded shadow border-none"
       onClick={() => history.push(`/elearning`)}
      >
       <h6 className="m-0 text-light">
        <IoMdArrowBack style={{ fontSize: 18 }} />
        <span className="ml-2">ត្រឡប់ក្រោយ</span>
       </h6>
      </button>
     </div>
     <h4 className="col-4 text-center kh mt-1">មុខវិទ្យាទាំងអស់</h4>
    </div>

    <div
     className="d-flex justify-content-between flex-wrap sticky-top"
     style={{ top: 80 }}
    >
     <div style={{ width: '330px' }}>
      <select
       className="form-control mb-3 shadow-sm rounded w-100 kh font-weight-bold"
       value={courseType}
       name="courseType"
       style={{ width: '340px', background: '#fff' }}
       onChange={changeCourseType}
      >
       <option className="font-weight-bold" value="AllCourses">
        មុខវិទ្យាទាំងអស់
       </option>
       <option className="font-weight-bold" value="WebDevelopment">
        ផ្នែកសរសេរវែបផ្សាយ
       </option>
       <option className="font-weight-bold" value="Programming">
        ផ្នែកសរសេរកម្មវិធី
       </option>
       <option className="font-weight-bold" value="EmbededSystem">
        ផ្នែកប្រព័ន្ធបញ្ចារ
       </option>
       <option className="font-weight-bold" value="MobileDevelopment">
        ផ្នែកសរសេរកម្មវិធីទូរស័ព្ទ
       </option>
       <option className="font-weight-bold" value="MachineLearning">
        ផ្នែករៀនពីមា៉ស៊ីន
       </option>
      </select>
     </div>
     <div>
      <Search
       dispatch={dispatch}
       SearchCourses={SearchCourses}
       pageNumber={pageNumber}
      />
     </div>
    </div>
    <h5 className="kh">
     {courseType === 'AllCourses'
      ? 'មុខវិទ្យាទាំងអស់'
      : courseType === 'WebDevelopment'
      ? 'ផ្នែកសរសេរវែបផ្សាយ'
      : courseType === 'Programming'
      ? 'ផ្នែកសរសេរកម្មវិធី'
      : courseType === 'EmbededSystem'
      ? 'ផ្នែកប្រព័ន្ធបញ្ចារ'
      : courseType === 'MobileDevelopment'
      ? 'ផ្នែកសរសេរកម្មវិធីទូរស័ព្ទ'
      : courseType === 'MachineLearning'
      ? 'ផ្នែករៀនពីមា៉ស៊ីន'
      : null}
     (
     <span className="text-danger">
      <ConvertNum num={count && count} />
     </span>
     )
    </h5>

    {loadingList ? (
     <Loader wd={40} hg={40} />
    ) : errorList ? (
     <Message variant="danger">{errorList}</Message>
    ) : courses.length !== 0 ? (
     <>
      <div className="row">
       {courses &&
        courses.map((course) => (
         <div key={course._id} className="col-md-6 col-lg-4 my-2">
          <CourseItem course={course} />
         </div>
        ))}
      </div>
      <div className="d-flex justify-content-around">
       <Paginate
        pages={pages}
        page={page}
        keyword={keyword ? keyword : ''}
        courseType={courseType}
       />
      </div>
     </>
    ) : (
     <div className="container">
      <h5 className="text-center mt-5 kh">
       {keyword !== ''
        ? `មិនមានមុខវិទ្យាឈ្មោះ "${keyword}" ឡើយ`
        : 'មិនមានមុខវិទ្យាដើម្បីរៀនទេ'}
      </h5>
     </div>
    )}
   </div>
  </div>
 );
};

export default CoursesScreen;
