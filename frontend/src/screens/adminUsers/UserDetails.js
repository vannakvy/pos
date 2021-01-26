import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getUserEnrollCourses } from '../../actions/eLearningActions/enrollActions';
import { getUserDetails } from '../../actions/eShopActions/userActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { USER_ENROLL_COURSE_RESET } from '../../constants/eLearningConstants/enrollConstants';
import { USER_DETAILS_RESET } from '../../constants/userConstants';
import CourseItemAdmin from '../../components/eLearningComponents/CourseItemAdmin';

const UserDetails = () => {
 const { uid } = useParams();
 const dispatch = useDispatch();
 const history = useHistory();

 const userDetails = useSelector((state) => state.userDetails);
 const {
  loading: loadingUserDetails,
  error: errorUserDetail,
  user,
 } = userDetails;

 const userEnrollCourses = useSelector((state) => state.userEnrollCourses);
 const {
  loading: loadingUserEnrollCourses,
  error: errorUserEnrollCourses,
  coursesEnroll,
 } = userEnrollCourses;

 console.log(coursesEnroll);

 useEffect(() => {
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_ENROLL_COURSE_RESET });
  dispatch(getUserDetails(uid));
  dispatch(getUserEnrollCourses(uid));
 }, [dispatch, uid]);

 const back = () => {
  history.push('/adminUsers');
 };
 return (
  <>
   <button className="btn btn-sm btn-info my-1 rounded shadow" onClick={back}>
    Back
   </button>
   <div className="bg-light rounded p-3 shadow">
    {loadingUserDetails ? (
     <Loader wd={40} hg={40} />
    ) : errorUserDetail ? (
     <Message variant="danger">{errorUserDetail}</Message>
    ) : (
     <div className="text-center">
      <h4>{user.name}</h4>
      <small>{user.isAdmin ? 'Admin' : 'user'}</small>
      <br />
      <small>ID: {user._id}</small>
      <br />
      <small>email: {user.email}</small>
     </div>
    )}
   </div>
   <h5 className="mt-3">Courses Enrolled</h5>
   {loadingUserEnrollCourses ? (
    <Loader wd={40} hg={40} />
   ) : errorUserEnrollCourses ? (
    <Message variant="danger">errorUserEnrollCourses</Message>
   ) : (
    <>
     {coursesEnroll && coursesEnroll.length !== 0 ? (
      <>
       <div className="row">
        {coursesEnroll &&
         coursesEnroll.map((enroll) => (
          <div key={enroll._id} className="col-xl-4 col-lg-6">
           <CourseItemAdmin course={enroll.courseId} />
          </div>
         ))}
       </div>
      </>
     ) : (
      <h6 className="mt-3 text-center">No any single course enrolled</h6>
     )}
    </>
   )}
  </>
 );
};

export default UserDetails;
