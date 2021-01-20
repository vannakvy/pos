import axios from 'axios';
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
} from '../../constants/courseConstants';
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

export const listCourses = (type) => async (dispatch) => {
 let courseType = '';

 if (type === 'All Courses') {
  courseType = 'AllCourses';
 } else if (type === 'Web Development') {
  courseType = 'WebDevelopment';
 } else if (type === 'Programming') {
  courseType = 'Programming';
 } else if (type === 'Embeded System') {
  courseType = 'EmbededSystem';
 } else if (type === 'Mobile Development') {
  courseType = 'MobileDevelopment';
 } else if (type === 'Machine Learning') {
  courseType = 'MachineLearning';
 }

 try {
  dispatch({ type: COURSE_LIST_REQUEST });

  const { data } = await axios.get(`/api/courses/courseType/${courseType}`);
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

export const createCourse = (newCourse, image) => async (
 dispatch,
 getState
) => {
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

export const updateCourse = (updateCourse, image, courseId) => async (
 dispatch,
 getState
) => {
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
