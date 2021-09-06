import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import {
 COURSE_LIST_REQUEST,
 COURSE_LIST_SUCCESS,
 COURSE_LIST_FAIL,
 COURSE_DELETE_REQUEST,
 COURSE_DELETE_SUCCESS,
 COURSE_DELETE_FAIL,
 COURSE_CREATE_REQUEST,
 COURSE_CREATE_SUCCESS,
 COURSE_CREATE_FAIL,
 COURSE_UPDATE_REQUEST,
 COURSE_UPDATE_SUCCESS,
 COURSE_UPDATE_FAIL,
 COURSE_DETAILS_REQUEST,
 COURSE_DETAILS_SUCCESS,
 COURSE_DETAILS_FAIL,
} from '../../constants/eLearningConstants/courseConstants';
import { logout } from '../userActions/userActions';

export const SearchCourses = (keyword) => async (dispatch) => {
 try {
  // dispatch({ type: COURSE_LIST_REQUEST });

  const { data } = await axios.get(`/api/search?keyword=${keyword.trim()}`);
  dispatch({
   type: COURSE_LIST_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: COURSE_LIST_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const listCourses =
 (courseType, pageNumber, keyword = '', pageSize = '') =>
 async (dispatch) => {
  try {
   //  dispatch({ type: LOADER_TOP_TRUE });
   dispatch({ type: COURSE_LIST_REQUEST });
   const { data } = await axios.get(
    `/api/courses/courseType/${courseType}?pageNumber=${pageNumber}&keyword=${keyword}&pageSize=${pageSize}`
   );
   dispatch({
    type: COURSE_LIST_SUCCESS,
    payload: data,
   });
   //  dispatch({ type: LOADER_TOP_FALSE });
  } catch (error) {
   dispatch({
    type: COURSE_LIST_FAIL,
    payload:
     error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
   });
  }
 };

export const getCourseById = (id) => async (dispatch) => {
 try {
  dispatch({ type: COURSE_DETAILS_REQUEST });

  const { data } = await axios.get(`/api/courses/${id}`);
  dispatch({
   type: COURSE_DETAILS_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: COURSE_DETAILS_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const deleteCourse = (id) => async (dispatch, getState) => {
 try {
  dispatch({ type: COURSE_DELETE_REQUEST });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };

  await axios.delete(`/api/courses/${id}`, config);

  dispatch({ type: COURSE_DELETE_SUCCESS });
 } catch (error) {
  const message =
   error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
  if (message === 'Not authorized, token failed') {
   dispatch(logout());
  }
  dispatch({
   type: COURSE_DELETE_FAIL,
   payload: message,
  });
 }
};

export const createCourse =
 (newCourse, image) => async (dispatch, getState) => {
  try {
   dispatch({ type: COURSE_CREATE_REQUEST });

   const {
    userLogin: { userInfo },
   } = getState();

   const config = {
    headers: {
     Authorization: `Bearer ${userInfo.token}`,
    },
   };

   const { name, courseType, description } = newCourse;
   const { data } = await axios.post(
    `/api/courses`,
    { name, courseType, description, image },
    config
   );

   dispatch({
    type: COURSE_CREATE_SUCCESS,
    payload: data,
   });
  } catch (error) {
   const message =
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message;
   if (message === 'Not authorized, token failed') {
    dispatch(logout());
   }
   dispatch({
    type: COURSE_CREATE_FAIL,
    payload: message,
   });
  }
 };

export const updateCourse =
 (updateCourse, image, courseId) => async (dispatch, getState) => {
  const { name, courseType, description } = updateCourse;
  try {
   dispatch({ type: COURSE_UPDATE_REQUEST });

   const {
    userLogin: { userInfo },
   } = getState();

   const config = {
    headers: {
     'Content-Type': 'application/json',
     Authorization: `Bearer ${userInfo.token}`,
    },
   };

   const { data } = await axios.put(
    `/api/courses/${courseId}`,
    { name, courseType, description, image },
    config
   );
   dispatch({
    type: COURSE_UPDATE_SUCCESS,
    payload: data,
   });
  } catch (error) {
   const message =
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message;
   if (message === 'Not authorized, token failed') {
    dispatch(logout());
   }
   dispatch({
    type: COURSE_UPDATE_FAIL,
    payload: message,
   });
  }
 };
