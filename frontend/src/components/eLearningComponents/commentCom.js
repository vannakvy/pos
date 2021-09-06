import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
 createReplyCom,
 deleteCommentByUser,
 likeComment,
 unLikeComment,
} from '../../actions/comment';
import { Button } from 'semantic-ui-react';
import Duration from '../Duration';
import { AiFillDelete } from 'react-icons/ai';
import ReplyComment from './ReplyComment';
import ConvertNum from './ConvertNum';
import { FaTelegram } from 'react-icons/fa';

const CommentCom = ({ comment, userInfo }) => {
 const dispatch = useDispatch();
 const [heart, setHeart] = useState(false);
 useEffect(() => {
  if (userInfo && userInfo._id) {
   const d = comment.heart.find((c) => {
    return c == userInfo._id;
   });
   if (d) {
    setHeart(true);
   } else {
    setHeart(false);
   }
  }
 }, [comment]);

 const likeCom = (id, heart) => {
  dispatch(likeComment(id, heart));
 };
 const unLikeCom = (id, heart) => {
  dispatch(unLikeComment(id, heart));
  setHeart(false);
 };
 const submitReply = (e) => {
  e.preventDefault();
  dispatch(
   createReplyCom({ replyCom: e.target.replyCom.value, comId: comment.id })
  );
  e.target.replyCom.value = '';
 };
 return (
  <div className="bg-light position-relative mb-2 p-3 round">
   <div className="d-flex justify-content-between">
    <img
     src={comment.profile}
     width="40"
     height="40"
     className="user-img rounded-circle me-3"
    />
    <div className="user d-flex flex-row w-100">
     <div className="w-100">
      <div className="font-weight-bold w-100 p-3 bg-light mx-1 round">
       <div className="like"></div>
       <span className="fw-bold text-info kh">{comment.name}: </span>
       <span className="kh">{comment.comment}</span>
      </div>
      <div className="action d-flex justify-content-between align-items-center mt-1 mb-2">
       <div className="reply mx-1">
        <Button
         disabled={userInfo ? false : true}
         content="ចូលចិត្ដ"
         icon="heart"
         color={heart ? 'pink' : 'grey'}
         size="mini"
         label={{
          as: 'a',
          basic: true,
          content: ConvertNum({ num: comment.heart.length }) || 0,
         }}
         labelPosition="right"
         onClick={() => {
          heart
           ? unLikeCom(comment.id, comment.heart)
           : likeCom(comment.id, comment.heart);
         }}
        />

        {((userInfo && userInfo._id === comment.uid) ||
         (userInfo && userInfo.isAdmin)) && (
         <>
          <span className="dots mx-3"></span>
          <small onClick={() => dispatch(deleteCommentByUser(comment.id))}>
           <AiFillDelete style={{ color: 'red', fontSize: 18 }} />
          </small>
         </>
        )}
       </div>

       <small style={{ color: 'blue' }}>
        <Duration itemDate={comment.createdAt} />
       </small>
      </div>
      <div>
       <div className="mt-3">
        {userInfo && userInfo._id && (
         <form onSubmit={submitReply}>
          <div className="d-flex flex-row mb-2">
           <img
            className="img-fluid img-responsive rounded-circle me-3"
            src={userInfo && userInfo.profile}
            width="40"
           />
           <input
            type="text"
            name="replyCom"
            className="form-control me-1 round kh"
            placeholder="ឆ្លើយតបមតិ..."
            style={{ background: 'rgb(224,224,224)' }}
            required
           />
           <button className="btn rounded m-0 p-0 px-2" type="submit">
            <FaTelegram style={{ fontSize: 30 }} />
           </button>
          </div>
         </form>
        )}
        <ReplyComment comId={comment.id} userInfo={userInfo} />
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default CommentCom;
