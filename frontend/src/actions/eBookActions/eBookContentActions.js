import {
 GET_CONTENT_REQUEST,
 GET_CONTENT_SUCCESS,
 GET_CONTENT_FAIL,
 GET_CONTENT_BY_LANG_FAIL,
 GET_CONTENT_BY_LANG_SUCCESS,
 GET_CONTENT_BY_LANG_REQUEST,
 ADD_CONTENT_FAIL,
 ADD_CONTENT_SUCCESS,
 ADD_CONTENT_REQUEST,
 DELETE_CONTENT_FAIL,
 DELETE_CONTENT_SUCCESS,
 DELETE_CONTENT_REQUEST,
 UPDATE_CONTENT_FAIL,
 UPDATE_CONTENT_SUCCESS,
 UPDATE_CONTENT_REQUEST,
} from '../../constants/eBookConstants/eBookContentConstants';
import axios from 'axios';
// CONTENTS

const getContents = () => async (dispatch) => {
 try {
  dispatch({ type: GET_CONTENT_REQUEST });
  const { data } = await axios.get(`/api/ebook/contents`);

  dispatch({
   type: GET_CONTENT_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: GET_CONTENT_FAIL,
   payload: error.message,
  });
 }
};
const getContent = (lang) => async (dispatch) => {
 try {
  dispatch({ type: GET_CONTENT_BY_LANG_REQUEST });
  const { data } = await axios.get(`/api/ebook/contents/lang/${lang}`);

  dispatch({
   type: GET_CONTENT_BY_LANG_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: GET_CONTENT_BY_LANG_FAIL,
   payload: error.message,
  });
 }
};

const addContent = (title, section, lang) => async (dispatch) => {
 try {
  dispatch({
   type: ADD_CONTENT_REQUEST,
  });
  const { data } = await axios.post(`/api/ebook/contents`, {
   title,
   section,
   lang,
  });

  dispatch({
   type: ADD_CONTENT_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: ADD_CONTENT_FAIL,
   payload: error.message,
  });
 }
};

//DELETE CONTENTS
const deleteContent = (id) => async (dispatch) => {
 try {
  dispatch({
   type: DELETE_CONTENT_REQUEST,
  });
  const { data } = await axios.delete(`/api/ebook/contents/${id}`);

  dispatch({
   type: DELETE_CONTENT_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: DELETE_CONTENT_FAIL,
   payload: error.message,
  });
 }
};

//UPDATE THE CONTENT
const updateContent = (id, title, section) => async (dispatch) => {
 try {
  dispatch({
   type: UPDATE_CONTENT_REQUEST,
  });
  const { data } = await axios.put(`/api/ebook/contents/${id}`, {
   title,
   section,
  });

  dispatch({
   type: UPDATE_CONTENT_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: UPDATE_CONTENT_FAIL,
   payload: error.message,
  });
 }
};

export { getContents, getContent, addContent, deleteContent, updateContent };
