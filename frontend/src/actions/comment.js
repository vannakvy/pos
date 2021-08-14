import { db } from '../firebase';

export const createComment = (data) => async (dispatch, getState) => {
 try {
  const {
   userLogin: { userInfo },
  } = getState();

  await db.collection('comments').add({
   uid: userInfo._id,
   name: userInfo.name,
   profile: userInfo.profile,
   comment: data.comment,
   cid: data.cid,
   heart: [],
   createdAt: new Date().getTime(),
  });
 } catch (error) {
  alert(error.message);
 }
};

export const getCommentByCourse = (id) => async (dispatch) => {
 try {
  dispatch({ type: 'GET_COMMENTS_REQ' });
  let ref = db
   .collection('comments')
   .where('cid', '==', id)
   .orderBy('createdAt', 'desc');
  ref.onSnapshot((queryS) => {
   const items = [];
   queryS.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
   });
   dispatch({ type: 'GET_COMMENTS', payload: items });
  });
 } catch (error) {
  dispatch({ type: 'GET_COMMENTS_FAI', payload: error.message });
 }
};

export const deleteCommentByUser = (id) => async (dispatch) => {
 try {
  await db.collection('comments').doc(id).delete();
  const re = await db.collection('replyComs').where('comId', '==', id).get();
  re.forEach(async (doc) => {
   db.collection('replyComs').doc(doc.id).delete();
  });
  await db.collection('comments').doc(id).delete();
 } catch (error) {
  alert(error.message);
 }
};

export const likeComment = (id, heart) => async (dispatch, getState) => {
 try {
  const {
   userLogin: { userInfo },
  } = getState();

  heart.push(userInfo._id);

  await db.collection('comments').doc(id).update({
   heart: heart,
  });
 } catch (error) {
  alert(error.message);
 }
};

export const unLikeComment = (id, heart) => async (dispatch, getState) => {
 try {
  const {
   userLogin: { userInfo },
  } = getState();

  db
   .collection('comments')
   .doc(id)
   .update({
    heart: heart.filter((h) => h !== userInfo._id),
   });
 } catch (error) {
  alert(error.message);
 }
};

export const createReplyCom = (data) => async (dispatch, getState) => {
 try {
  const {
   userLogin: { userInfo },
  } = getState();

  await db.collection('replyComs').add({
   uid: userInfo._id,
   name: userInfo.name,
   profile: userInfo.profile,
   replyCom: data.replyCom,
   comId: data.comId,
   heart: [],
   createdAt: new Date().getTime(),
  });
 } catch (error) {
  alert(error.message);
 }
};

export const deleteReplyComByUser = (id) => async (dispatch) => {
 try {
  await db.collection('replyComs').doc(id).delete();
 } catch (error) {
  alert(error.message);
 }
};
