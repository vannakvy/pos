import axios from 'axios';

import {
 GET_DETAIL_REQUEST,
 GET_DETAIL_SUCCESS,
 GET_DETAIL_FAIL,
 GET_DETAIL_BY_CONTENT_ID_REQUEST,
 GET_DETAIL_BY_CONTENT_ID_SUCCESS,
 GET_DETAIL_BY_CONTENT_ID_FAIL,
 CREATE_DETAIL_REQUEST,
 CREATE_DETAIL_SUCCESS,
 CREATE_DETAIL_FAIL,
 DELETE_DETAIL_REQUEST,
 DELETE_DETAIL_SUCCESS,
 DELETE_DETAIL_FAIL,
 GET_ONE_DETAIL_REQUEST,
 GET_ONE_DETAIL_SUCCESS,
 GET_ONE_DETAIL_FAIL,
 UPDATE_DETAIL_REQUEST,
 UPDATE_DETAIL_SUCCESS,
 UPDATE_DETAIL_FAIL,
} from '../../constants/eBookConstants/eBookDetailContants';

const getDetails = (id, lang) => async (dispatch) => {
 try {
  dispatch({ type: GET_DETAIL_REQUEST });
  const { data } = await axios.get(`/api/ebook/${lang}/${id}`);
  dispatch({
   type: GET_DETAIL_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: GET_DETAIL_FAIL,
   payload: error.message,
  });
 }
};

const getDetailByContentId = (id) => async (dispatch) => {
 try {
  // dispatch({ type: GET_DETAIL_BY_CONTENT_ID_REQUEST });
  const { data } = await axios.get(`/api/ebook/details/content/${id}`);
  dispatch({
   type: GET_DETAIL_BY_CONTENT_ID_SUCCESS,
   payload: data,
  });
 } catch (err) {
  dispatch({ type: GET_DETAIL_BY_CONTENT_ID_FAIL, payload: err.message });
 }
};

const addDetail = (contents, id, codeLive, codeShow, h) => async (dispatch) => {
 try {
  dispatch({ type: CREATE_DETAIL_REQUEST });
  const { data } = await axios.post(`/api/ebook/details`, {
   codeShow,
   codeLive,
   contents,
   id,
   h,
  });
  dispatch({
   type: CREATE_DETAIL_SUCCESS,
   payload: data,
  });
 } catch (err) {
  dispatch({
   type: CREATE_DETAIL_FAIL,
   payload: err.message,
  });
 }
};
//DELETE DETAIL

const deleteDetail = (id) => async (dispatch) => {
 try {
  dispatch({
   type: DELETE_DETAIL_REQUEST,
  });
  const { data } = await axios.delete(`/api/ebook/details/${id}`);
  dispatch({
   type: DELETE_DETAIL_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: DELETE_DETAIL_FAIL,
   payload: error.message,
  });
 }
};

const getOneDetail = (id) => async (dispatch) => {
 try {
  dispatch({ type: GET_ONE_DETAIL_REQUEST });
  const { data } = await axios.get(`/api/ebook/details/${id}`);

  dispatch({
   type: GET_ONE_DETAIL_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({ type: GET_ONE_DETAIL_FAIL, payload: error.message });
 }
};

const updateDetail =
 (contents, id, codeLive, codeShow, h) => async (dispatch) => {
  try {
   dispatch({
    type: UPDATE_DETAIL_REQUEST,
   });
   const { data } = await axios.put(`/api/ebook/details/${id}`, {
    codeShow,
    contents,
    codeLive,
    h,
   });

   dispatch({
    type: UPDATE_DETAIL_SUCCESS,
    payload: data,
   });
  } catch (error) {
   dispatch({
    type: UPDATE_DETAIL_FAIL,
    payload: error.message,
   });
  }
 };

export {
 getDetails,
 getDetailByContentId,
 addDetail,
 deleteDetail,
 getOneDetail,
 updateDetail,
};
