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
import { createNotify } from '../../actions/notifyActions';
import { BsClipboardData } from 'react-icons/bs';
import ModalSize from '../../components/Modal';

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

 const createNoti = async (n) => {
  const descrip = `<span class="text-success">ស្នើរសុំរៀនបានជោគជ័យ</span>`;
  dispatch(createNotify(n, descrip));
 };

 return (
  <div>
   <h4 className="kh text-center my-2">សិស្សដែលបានស្នើរសុំរៀនមុខវិទ្យា</h4>
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
        <tr className="bg-light">
         <th scope="row">{i++}</th>
         <td>{reqE.user.name}</td>
         <td>{reqE.cid.name}</td>
         <td>{reqE.descrip}</td>
         <td className="pt-2 pb-0">
          <span>
           <ModalSize
            id={'Suc' + reqE._id}
            text={`យល់ព្រមការស្នើសុំរបស់ ${reqE.user.name} ?`}
            size={'sm'}
            btn="success"
            funs={() => {
             createNoti(reqE);
             dispatch(addUserEnrollCourses(reqE.user._id, [reqE.cid._id]));
             deleteReqEnrollHandler(reqE._id);
            }}
           />
          </span>
          <button
           className="btn btn-sm btn-success me-2 my-0"
           data-bs-toggle="modal"
           data-bs-target={`#idSuc${reqE._id}`}
           //  onClick={() => {
           //   if (window.confirm('get user a course?')) {
           //    createNoti(reqE);
           //    dispatch(addUserEnrollCourses(reqE.user._id, [reqE.cid._id]));
           //    deleteReqEnrollHandler(reqE._id);
           //   }
           //  }}
          >
           <FaCheck />
          </button>

          <button
           className="btn btn-sm btn-danger my-0"
           data-bs-toggle="modal"
           data-bs-target={`#idDel${reqE._id}`}
          >
           <i className="fas fa-trash text-light"></i>
          </button>
          <span>
           <ModalSize
            id={'Del' + reqE._id}
            text={`លុបការស្នើសុំរបស់ ${reqE.user.name} ?`}
            size={'sm'}
            btn="danger"
            funs={() => deleteReqEnrollHandler(reqE._id)}
           />
          </span>
         </td>
        </tr>
       ))}
      {reqEnrolls && reqEnrolls.length === 0 && (
       <tr>
        <td colspan="5" className="bg-light py-5 text-center">
         <BsClipboardData style={{ fontSize: '50px' }} />
         <br />
         <br />
         <span className=" fw-bold">មិនមានទិន្នន័យ</span>
        </td>
       </tr>
      )}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default AdminStudents;
