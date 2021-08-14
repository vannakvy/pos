import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import Duration from '../Duration';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteReplyComByUser } from '../../actions/comment';

const ReplyComment = ({ comId, userInfo }) => {
 const dispatch = useDispatch();
 const [replyComments, setReplyComments] = useState([]);
 useEffect(() => {
  function fetchData() {
   try {
    let ref = db
     .collection('replyComs')
     .where('comId', '==', comId)
     .orderBy('createdAt', 'desc');
    ref.onSnapshot((queryS) => {
     const items = [];
     queryS.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
     });
     setReplyComments(items);
    });
   } catch (error) {
    alert(error.message);
   }
  }
  fetchData();
 }, [comId]);
 return (
  <>
   {replyComments.map((reply) => (
    <div key={reply.id} className="d-flex justify-content-between mb-2">
     <img
      src={reply.profile}
      width="40"
      height="40"
      className="user-img rounded-circle me-3"
     />
     <div className="user d-flex flex-row w-100">
      <div className="w-100">
       <div className="font-weight-bold w-100 bg-light p-3 me-1 round">
        <span className="fw-bold text-info kh">{reply.name}: </span>
        <span className="kh">{reply.replyCom}</span>
       </div>
       <div className="reply mx-1">
        {((userInfo && userInfo._id === reply.uid) ||
         (userInfo && userInfo.isAdmin)) && (
         <>
          <small onClick={() => dispatch(deleteReplyComByUser(reply.id))}>
           <AiFillDelete style={{ color: 'red', fontSize: 18 }} />
          </small>
          <span className="dots mx-3"></span>
         </>
        )}

        <span className="" style={{ color: 'blue', fontSize: 11 }}>
         <Duration itemDate={reply.createdAt} />
        </span>
       </div>
      </div>
     </div>
    </div>
   ))}
  </>
 );
};

export default ReplyComment;
