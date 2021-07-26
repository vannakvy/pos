import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
 DELETE_REQ_ENROLL_RESET,
 DELETE_REQ_ENROLL_SUC,
 GET_REQ_ENROLL_SUC,
} from '../../constants/eLearningConstants/enrollConstants';
import { addUserEnrollCourses } from '../../actions/eLearningActions/enrollActions';

const AdminStudents = () => {
 let i = 1;
 const dispatch = useDispatch();

 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;
 const reqEnroll = useSelector((state) => state.reqEnroll);
 const { reqEnrolls } = reqEnroll;
 const deleteReqEnroll = useSelector((state) => state.deleteReqEnroll);
 const { success: deleteReqEnrollSuc } = deleteReqEnroll;

 const config = {
  headers: {
   Authorization: `Bearer ${userInfo.token}`,
  },
 };

 useEffect(async () => {
  window.scroll(0, 0);
  dispatch({ type: DELETE_REQ_ENROLL_RESET });
  const { data } = await axios.get(
   `/api/eLearning/enrolls/user/request`,
   config
  );
  if (data) {
   dispatch({ type: GET_REQ_ENROLL_SUC, payload: data });
  }
 }, [deleteReqEnrollSuc]);

 const deleteReqEnrollHandler = async (qid) => {
  const { data } = await axios.delete(
   `/api/eLearning/enrolls/user/request/${qid}`,
   config
  );
  if (data) {
   dispatch({ type: DELETE_REQ_ENROLL_SUC, payload: data });
  }
 };

 const createNotify = async (n) => {
  const { data } = await axios.post(
   `/api/notify`,
   {
    uid: n.user._id,
    name: n.cid.name,
    descrip: 'ស្នើរសុំរៀនបានជោគជ័យ',
    img: n.cid.imgUrl,
    url: `/elearning/courses/${n.cid._id}`,
   },
   config
  );

  if (data) {
  }
 };

 return (
  <div>
   <h4 className="kh text-center mb-4">សិស្សដែលបានស្នើរសុំរៀនមុខវិទ្យា</h4>
   <div className="px-2">
    <table className="table table-sm table-striped w-100 kh table-hover bg-light shadow">
     <thead>
      <tr className="bg-dark text-light kh">
       <th scope="col">#</th>
       <th scope="col">ឈ្មោះសិស្ស</th>
       <th scope="col">ឈ្មោះមុខវិទ្យា</th>
       <th scope="col">ព័ត៌មានផ្សេងៗ</th>
       <th scope="col">ការកំណត់</th>
      </tr>
     </thead>
     <tbody>
      {reqEnrolls &&
       reqEnrolls.map((reqE) => (
        <tr>
         <th scope="row">{i++}</th>
         <td>{reqE.user.name}</td>
         <td>{reqE.cid.name}</td>
         <td>{reqE.descrip}</td>
         <td className="pt-2 pb-0">
          <button
           className="btn btn-sm btn-success me-2 my-0"
           onClick={() => {
            if (window.confirm('get user a course?')) {
             createNotify(reqE);
             dispatch(addUserEnrollCourses(reqE.user._id, [reqE.cid._id]));
             deleteReqEnrollHandler(reqE._id);
            }
           }}
          >
           <FaCheck />
          </button>

          <button
           className="btn btn-sm btn-danger my-0"
           onClick={() => {
            if (window.confirm('Delete this enroll request?')) {
             deleteReqEnrollHandler(reqE._id);
            }
           }}
          >
           <i className="fas fa-trash text-light"></i>
          </button>
         </td>
        </tr>
       ))}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default AdminStudents;
