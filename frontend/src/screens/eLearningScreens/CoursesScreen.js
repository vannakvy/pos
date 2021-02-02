import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
 listCourses,
 SearchCourses,
} from '../../actions/eLearningActions/courseActions';
import CourseItem from '../../components/eLearningComponents/CourseItem';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Search from '../../components/eLearningComponents/Search';

const CoursesScreen = () => {
 const [courseType, setCourseType] = useState('All Courses');
 const dispatch = useDispatch();

 const courseList = useSelector((state) => state.courseList);
 const {
  loading: loadingList,
  error: errorList,
  courses: coursesList,
 } = courseList;

 useEffect(() => {
  dispatch(listCourses(courseType));
 }, [dispatch, courseType]);

 return (
  <div
   style={{
    // background: 'url(/uploads/img/lightning_PNG19.png) no-repeat fixed center',
    backgroundSize: '100%',
    minHeight: '100vh',
   }}
  >
   <div className="container">
    <h4 className="text-center pt-3 kh">មុខវិទ្យាទាំងអស់</h4>

    <div className="d-flex justify-content-between flex-wrap">
     <div style={{ width: '330px' }}>
      <select
       className="form-control mb-3 shadow-sm rounded w-100 kh font-weight-bold"
       value={courseType}
       name="courseType"
       style={{ width: '340px', background: '#fff' }}
       onChange={(e) => setCourseType(e.target.value)}
      >
       <option className="font-weight-bold" value="All Courses">
        មុខវិទ្យាទាំងអស់
       </option>
       <option className="font-weight-bold" value="Web Development">
        ផ្នែកសរសេរវែបផ្សាយ
       </option>
       <option className="font-weight-bold" value="Programming">
        ផ្នែកសរសេរកម្មវិធី
       </option>
       <option className="font-weight-bold" value="Embeded System">
        ផ្នែកប្រព័ន្ធបញ្ចារ
       </option>
       <option className="font-weight-bold" value="Mobile Development">
        ផ្នែកសរសេរកម្មវិធីទូរស័ព្ទ
       </option>
       <option className="font-weight-bold" value="Machine Learning">
        ផ្នែករៀនពីមា៉ស៊ីន
       </option>
      </select>
     </div>
     <div>
      <Search dispatch={dispatch} SearchCourses={SearchCourses} />
     </div>
    </div>
    <h5 className="kh">
     {courseType === 'All Courses'
      ? 'មុខវិទ្យាទាំងអស់'
      : courseType === 'Web Development'
      ? 'ផ្នែកសរសេរវែបផ្សាយ'
      : courseType === 'Programming'
      ? 'ផ្នែកសរសេរកម្មវិធី'
      : courseType === 'Embeded System'
      ? 'ផ្នែកប្រព័ន្ធបញ្ចារ'
      : courseType === 'Mobile Development'
      ? 'ផ្នែកសរសេរកម្មវិធីទូរស័ព្ទ'
      : courseType === 'Machine Learning'
      ? 'ផ្នែករៀនពីមា៉ស៊ីន'
      : null}
    </h5>

    {loadingList ? (
     <Loader wd={40} hg={40} />
    ) : errorList ? (
     <Message variant="danger">{errorList}</Message>
    ) : coursesList.length !== 0 ? (
     <>
      <div className="row">
       {coursesList &&
        coursesList.map((course) => (
         <div key={course._id} className="col-md-6 col-lg-4 my-2">
          <CourseItem course={course} />
         </div>
        ))}
      </div>
     </>
    ) : (
     <h5 className="text-center mt-5 kh">មិនមានមុខវិទ្យាដើម្បីរៀនទេ</h5>
    )}
   </div>
  </div>
 );
};

export default CoursesScreen;
