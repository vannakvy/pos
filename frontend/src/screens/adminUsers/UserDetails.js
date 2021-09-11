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
// import { Button } from '@material-ui/core';
import EnrollModal from '../../components/eLearningComponents/EnrollModal';
import ConvertNum from '../../components/eLearningComponents/ConvertNum';
import { Button } from 'react-bootstrap';
import ModalSize from '../../components/Modal';

const UserDetails = () => {
 let i = 1;
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
  // dispatch({ type: USER_DETAILS_RESET });
  dispatch(getUserDetails(uid));
 }, [dispatch, uid]);

 const deleteEnrollCourses = useSelector((state) => state.deleteEnrollCourses);
 const { success: sucessDeleteEnrollCourse } = deleteEnrollCourses;

 useEffect(() => {
  window.scroll(0, 0);
  dispatch({ type: USER_ENROLL_CREATE_RESET });
  dispatch({ type: USER_ENROLL_DELETE_RESET });
  dispatch(getUserEnrollCourses(uid));
 }, [dispatch, uid, successCreateEnroll, sucessDeleteEnrollCourse]);

 const deleteEnrollHandler = (eid) => {
  dispatch(deleteUserEnrollCourses(eid));
 };

 return (
  <>
   {loadingUserDetails ? (
    <Loader wd={40} hg={40} />
   ) : errorUserDetail ? (
    <Message variant="danger">{errorUserDetail}</Message>
   ) : (
    <div className="bg-dark">
     <div className="container py-1">
      <div className="row">
       <div className="text-center text-light col-sm-6 py-5">
        <h1 className="kh text-info" style={{ fontSize: '5rem' }}>
         {user.name}
        </h1>
        <small className="kh">តួនាទីៈ {user.isAdmin ? 'Admin' : 'user'}</small>
        <br />
        <small>ID: {user._id}</small>
        <br />
        <small>email: {user.email}</small>
       </div>
       <div className="col-sm-6 text-center">
        <span
         className="text-danger pt-4 d-block"
         style={{ fontSize: '7rem', minxHeight: '100px' }}
        >
         <ConvertNum
          num={coursesEnroll && coursesEnroll.enrollCourses.length}
         />
        </span>
        <p className="kh text-info fw-bold">ចំនួនមុខវិទ្យា</p>
       </div>
      </div>
     </div>
    </div>
   )}

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
     <table class="table table-sm table-striped table-hover bg-light pb-3">
      <thead>
       <tr className="bg-dark text-light kh">
        <th scope="col">#</th>
        <th scope="col">ឈ្មោះមុខវិទ្យា</th>
        <th scope="col">ប្រភេទមុខវិទ្យា</th>
        <th scope="col">ទិន្នន័យបានរៀន(%)</th>
        <th scope="col" className="text-center">
         ការកំណត់
        </th>
       </tr>
      </thead>
      <tbody>
       {coursesEnroll && coursesEnroll.enrollCourses.length !== 0 ? (
        <>
         {coursesEnroll &&
          coursesEnroll.enrollCourses.map((e) => (
           <tr key={e._id}>
            <td>{i++}</td>
            <td>{e.courseId.name}</td>
            <td>{e.courseId.courseType}</td>
            <td>{e.progressBar}%</td>
            <td className="pt-2 pb-0 text-center">
             <span>
              <ModalSize
               id={'Del' + e._id}
               text={`លុបមុខវិទ្យា ${e.courseId.name} របស់ ${e.user.name} ?`}
               size={'sm'}
               btn="danger"
               funs={() => {
                deleteEnrollHandler(e._id);
               }}
              />
             </span>
             <Button
              className="me-2"
              // onClick={() => deleteEnrollHandler(e._id)}
              data-bs-toggle="modal"
              data-bs-target={`#idDel${e._id}`}
              type="button"
              variant="danger"
              size="sm"
             >
              <i className="fas fa-trash text-light"></i>
             </Button>
             <Button type="button" variant="info" size="sm">
              <i className="fas fa-external-link-alt"></i>
             </Button>
            </td>
           </tr>
          ))}
        </>
       ) : (
        <tr className="kh">
         <td colSpan="5" className="text-center">
          គ្មានមុខវិទ្យាដើម្បីរៀនទេ
         </td>
        </tr>
       )}
      </tbody>
     </table>
    </>
   )}
  </>
 );
};

export default UserDetails;
