import axios from 'axios';
import {
 ADD_ENROLL_VIDEO_FAIL,
 ADD_ENROLL_VIDEO_REQUEST,
 ADD_ENROLL_VIDEO_SUCCESS,
 COUSRE_ENROLL_FAIL,
 COUSRE_ENROLL_REQUEST,
 COUSRE_ENROLL_SUCCESS,
 GET_ENROLL_SECTION_FAIL,
 GET_ENROLL_SECTION_SUCCESS,
 GET_ENROLL_VIDEO_FAIL,
 GET_ENROLL_VIDEO_REQUEST,
 GET_ENROLL_VIDEO_SUCCESS,
 //  GET_ENROLL_SECTION_REQUEST,
 USER_ENROLL_COURSE_FAIL,
 USER_ENROLL_COURSE_REQUEST,
 USER_ENROLL_COURSE_SUCCESS,
 USER_ENROLL_CREATE_FAIL,
 USER_ENROLL_CREATE_REQUEST,
 USER_ENROLL_CREATE_SUCCESS,
} from '../../constants/eLearningConstants/enrollConstants';

export const getCourseEnroll = (id) => async (dispatch, getState) => {
 try {
  dispatch({ type: COUSRE_ENROLL_REQUEST });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };
  const { data } = await axios.get(`/api/courses/${id}/enroll`, config);
  dispatch({
   type: COUSRE_ENROLL_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: COUSRE_ENROLL_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const getUserEnrollCourses = (uid) => async (dispatch, getState) => {
 try {
  dispatch({ type: USER_ENROLL_COURSE_REQUEST });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };
  const { data } = await axios.get(`/api/users/${uid}/enroll`, config);

  dispatch({
   type: USER_ENROLL_COURSE_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: USER_ENROLL_COURSE_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const addUserEnrollCourses = (uid, enrolls) => async (
 dispatch,
 getState
) => {
 try {
  dispatch({ type: USER_ENROLL_CREATE_REQUEST });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };
  const { data } = await axios.post(
   `/api/eLearning/enrolls/${uid}`,
   { enrolls },
   config
  );

  dispatch({
   type: USER_ENROLL_CREATE_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: USER_ENROLL_CREATE_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const getEnrollSections = (id) => async (dispatch, getState) => {
 try {
  //   dispatch({ type: GET_ENROLL_SECTION_REQUEST });
  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };
  const { data } = await axios.get(
   `/api/eLearning/enrolls/${id}/section`,
   config
  );

  dispatch({
   type: GET_ENROLL_SECTION_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: GET_ENROLL_SECTION_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};
export const getEnrollVideo = (id, vid) => async (dispatch, getState) => {
 try {
  dispatch({ type: GET_ENROLL_VIDEO_REQUEST });
  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };
  const { data } = await axios.get(
   `/api/eLearning/enrolls/${id}/video/${vid}`,
   config
  );

  dispatch({
   type: GET_ENROLL_VIDEO_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: GET_ENROLL_VIDEO_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const addEnrollVideo = (eid, vid) => async (dispatch, getState) => {
 try {
  dispatch({ type: ADD_ENROLL_VIDEO_REQUEST });
  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };
  const { data } = await axios.post(
   `/api/eLearning/enrolls/${eid}/videos`,
   { vid },
   config
  );

  dispatch({
   type: ADD_ENROLL_VIDEO_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: ADD_ENROLL_VIDEO_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};
