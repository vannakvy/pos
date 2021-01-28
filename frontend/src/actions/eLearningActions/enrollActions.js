import axios from 'axios';
import {
 COUSRE_ENROLL_FAIL,
 COUSRE_ENROLL_REQUEST,
 COUSRE_ENROLL_SUCCESS,
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

  console.log(data);

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
