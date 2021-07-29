import {
 USER_NOTI_LIST_FAI,
 USER_NOTI_LIST_REQ,
 USER_NOTI_LIST_SUC,
} from '../constants/notifyConstants';
import db from '../firebase';

export const createNotify = (n, descrip) => async (dispatch, getState) => {
 try {
  const {
   userLogin: { userInfo },
  } = getState();

  await db.collection('notification').add({
   uid: n.user._id,
   name: n.cid.name,
   descrip: descrip,
   img: n.cid.imgUrl,
   url: `/elearning/courses/${n.cid._id}`,
   createdAt: new Date().getTime(),
   createdBy: userInfo._id,
  });
 } catch (error) {
  alert(error.message);
 }
};

export const getNotifyByUser = (id) => async (dispatch) => {
 try {
  dispatch({ type: USER_NOTI_LIST_REQ });
  let ref = db
   .collection('notification')
   .where('uid', '==', id)
   .orderBy('createdAt', 'desc');
  ref.onSnapshot((queryS) => {
   const items = [];
   queryS.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
   });
   dispatch({ type: USER_NOTI_LIST_SUC, payload: items });
  });
 } catch (error) {
  dispatch({ type: USER_NOTI_LIST_FAI, payload: error.message });
 }
};

export const deleteNotifyByUser = (id) => async (dispatch) => {
 try {
  dispatch({ type: USER_NOTI_LIST_REQ });
  await db.collection('notification').doc(id).delete();
 } catch (error) {
  alert(error.message);
 }
};
