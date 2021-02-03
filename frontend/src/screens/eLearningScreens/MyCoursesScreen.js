import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEnrollCourses } from '../../actions/eLearningActions/enrollActions';
import ConvertNum from '../../components/eLearningComponents/ConvertNum';
import CourseItemAdmin from '../../components/eLearningComponents/CourseItemAdmin';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const MyCoursesScreen = () => {
 const dispatch = useDispatch();

 const userLogin = useSelector((state) => state.userLogin);

 const userEnrollCourses = useSelector((state) => state.userEnrollCourses);
 const {
  loading: loadingUserEnrollCourses,
  error: errorUserEnrollCourses,
  coursesEnroll,
 } = userEnrollCourses;

 useEffect(() => {
  dispatch(getUserEnrollCourses(userLogin.userInfo._id));
 }, [dispatch, userLogin]);

 return (
  <>
   <h4 className="text-center kh mt-3">មុខវិទ្យារបស់ខ្ញុំ</h4>
   <div className="container-xl" style={{ maxWidth: '1500px' }}>
    <h5 className="mt-2">
     <span className="kh">មុខវិទ្យារបស់ខ្ញុំដែលបានចូលរៀន</span>(
     <span className="text-danger">
      <ConvertNum num={coursesEnroll && coursesEnroll.enrollCourses.length} />
     </span>
     )
    </h5>
    {loadingUserEnrollCourses ? (
     <Loader wd={40} hg={40} />
    ) : errorUserEnrollCourses ? (
     <Message variant="danger">{errorUserEnrollCourses}</Message>
    ) : (
     <>
      {coursesEnroll && coursesEnroll.enrollCourses.length !== 0 ? (
       <>
        <div className="row">
         {coursesEnroll &&
          coursesEnroll.enrollCourses.map((enroll) => (
           <div key={enroll._id} className="col-xl-4 col-md-6">
            <CourseItemAdmin enroll={enroll} />
           </div>
          ))}
        </div>
       </>
      ) : (
       <h6 className="mt-3 text-center">No any single course enrolled</h6>
      )}
     </>
    )}
   </div>
  </>
 );
};

export default MyCoursesScreen;
