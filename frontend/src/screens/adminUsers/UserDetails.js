import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
 addUserEnrollCourses,
 deleteUserEnrollCourses,
 getUserEnrollCourses,
} from '../../actions/eLearningActions/enrollActions';
import { getUserDetails } from '../../actions/eShopActions/userActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import {
 USER_ENROLL_COURSE_RESET,
 USER_ENROLL_CREATE_RESET,
 USER_ENROLL_DELETE_RESET,
} from '../../constants/eLearningConstants/enrollConstants';
import { USER_DETAILS_RESET } from '../../constants/userConstants';
import CourseItemAdmin from '../../components/eLearningComponents/CourseItemAdmin';
import { Button } from '@material-ui/core';
import EnrollModal from '../../components/eLearningComponents/EnrollModal';
import ConvertNum from '../../components/eLearningComponents/ConvertNum';

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

 const createEnrollCourses = useSelector((state) => state.createEnrollCourses);
 const { success: successCreateEnroll } = createEnrollCourses;

 useEffect(() => {
  dispatch({ type: USER_DETAILS_RESET });
  dispatch(getUserDetails(uid));
 }, [dispatch, uid]);

 const deleteEnrollCourses = useSelector((state) => state.deleteEnrollCourses);
 const { success: sucessDeleteEnrollCourse } = deleteEnrollCourses;

 useEffect(() => {
  dispatch({ type: USER_ENROLL_COURSE_RESET });
  dispatch({ type: USER_ENROLL_CREATE_RESET });
  dispatch({ type: USER_ENROLL_DELETE_RESET });
  dispatch(getUserEnrollCourses(uid));
 }, [dispatch, uid, successCreateEnroll, sucessDeleteEnrollCourse]);

 const deleteEnrollHandler = (eid) => {
  if (window.confirm('Are you sure? Delete this enroll Course!')) {
   dispatch(deleteUserEnrollCourses(eid));
  }
 };

 const back = () => {
  history.push('/adminUsers');
 };
 return (
  <>
   <Button
    variant="contained"
    color="secondary"
    className="my-2"
    onClick={back}
   >
    back
   </Button>
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
   <div className="d-flex justify-content-between mt-3">
    <h5 className="mt-2 kh">
     មុខវិទ្យាដែលបានចូលរៀន(
     <span className="text-danger">
      <ConvertNum num={coursesEnroll && coursesEnroll.enrollCourses.length} />
     </span>
     )
    </h5>
    <EnrollModal
     courses={coursesEnroll && coursesEnroll.noEnrollCourses}
     addUserEnrollCourses={addUserEnrollCourses}
    />
   </div>
   {loadingUserEnrollCourses ? (
    <Loader wd={40} hg={40} />
   ) : errorUserEnrollCourses ? (
    <Message variant="danger">errorUserEnrollCourses</Message>
   ) : (
    <>
     {coursesEnroll && coursesEnroll.enrollCourses.length !== 0 ? (
      <>
       <div className="row">
        {coursesEnroll &&
         coursesEnroll.enrollCourses.map((enroll) => (
          <div key={enroll._id} className="col-lg-6 col-xl-4">
           <CourseItemAdmin
            enroll={enroll}
            deleteEnrollHandler={deleteEnrollHandler}
           />
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
