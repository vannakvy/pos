import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { FaTelegram } from 'react-icons/fa';
import { createComment, getCommentByCourse } from '../../actions/comment';
import CommentCom from './commentCom';

const Comment = ({ cid }) => {
 const dispatch = useDispatch();

 const { userInfo } = useSelector((state) => state.userLogin);
 const { comments } = useSelector((state) => state.comments);

 useEffect(() => {
  dispatch(getCommentByCourse(cid));
 }, [cid]);

 const submitComment = (e) => {
  e.preventDefault();
  dispatch(createComment({ comment: e.target.comment.value, cid }));
  e.target.comment.value = '';
 };

 return (
  <div className="w-100">
   <div className="row d-flex justify-content-center">
    <div className="col-md-12">
     <div className="">
      {userInfo && userInfo._id && (
       <form onSubmit={submitComment}>
        <div className="d-flex flex-row p-3 bg-light round mb-2">
         <img
          className="img-fluid img-responsive rounded-circle me-3"
          src={userInfo && userInfo.profile}
          width="40"
         />
         <input
          type="text"
          name="comment"
          className="form-control me-1 round kh"
          placeholder="ផ្ដល់មតិ..."
          style={{ background: 'rgb(224,224,224)' }}
          required
         />
         <button className="btn rounded m-0 p-0 px-2" type="submit">
          <FaTelegram style={{ fontSize: 30 }} />
         </button>
        </div>
       </form>
      )}
      {comments &&
       comments.map((com) => (
        <CommentCom userInfo={userInfo} comment={com} key={com.id} />
       ))}
     </div>
    </div>
   </div>
  </div>
 );
};

export default Comment;
