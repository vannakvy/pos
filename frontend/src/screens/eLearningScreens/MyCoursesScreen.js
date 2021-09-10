import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEnrollCourses } from '../../actions/eLearningActions/enrollActions';
import ConvertNum from '../../components/eLearningComponents/ConvertNum';
import CourseItemOwn from '../../components/eLearningComponents/CourseItemOwn';
import Message from '../../components/Message';
import { AiFillStepBackward } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import Watch from '../../components/eLearningComponents/Watch';

const MyCoursesScreen = () => {
 const dispatch = useDispatch();
 const history = useHistory();
 const userLogin = useSelector((state) => state.userLogin);
 const userEnrollCourses = useSelector((state) => state.userEnrollCourses);
 const {
  loading: loadingUserEnrollCourses,
  error: errorUserEnrollCourses,
  coursesEnroll,
 } = userEnrollCourses;

 useEffect(() => {
  window.scrollTo(0, 0);
  if (!coursesEnroll) {
   dispatch(getUserEnrollCourses(userLogin.userInfo._id));
  }
 }, [dispatch, userLogin]);

 return (
  <>
   <div
    className=""
    style={{ minHeight: '100vh', maxWidth: 1300, margin: '0 auto' }}
   >
    <div className="row p-2 w-100 mt-2">
     <div className="col-4">
      <h5
       className="m-0 text-dark"
       style={{ cursor: 'pointer' }}
       onClick={() => window.history.back()}
      >
       <AiFillStepBackward style={{ fontSize: 18 }} />
       <span className="ml-1">ត្រឡប់ក្រោយ</span>
      </h5>
     </div>
     <h4 className="col-4 text-center kh mt-1 text-info">មុខវិទ្យារបស់ខ្ញុំ</h4>
    </div>
    <h5 className="mt-2 ms-3">
     <span className="kh pl-2 w-100">មុខវិទ្យារបស់ខ្ញុំដែលបានចូលរៀន</span>(
     <span className="text-danger">
      <ConvertNum num={coursesEnroll && coursesEnroll.enrollCourses.length} />
     </span>
     )
    </h5>
    {loadingUserEnrollCourses ? (
     //  <Loader wd={40} hg={40} />
     <div className="text-center">
      <Watch color="#282c34" height={40} type="Watch" width={40} />
     </div>
    ) : errorUserEnrollCourses ? (
     <Message variant="danger">{errorUserEnrollCourses}</Message>
    ) : (
     <>
      {coursesEnroll && coursesEnroll.enrollCourses.length !== 0 ? (
       <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2 w-100 mx-auto">
        {coursesEnroll &&
         coursesEnroll.enrollCourses.map((enroll) => (
          <div
           key={enroll._id}
           className="col px-2 d-flex justify-content-center"
          >
           <CourseItemOwn enroll={enroll} />
          </div>
         ))}
       </div>
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
