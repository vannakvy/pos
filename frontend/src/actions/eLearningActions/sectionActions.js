import axios from 'axios';
import { logout } from '../userActions/userActions';
import {
 SECTION_LIST_SUCCESS,
 SECTION_LIST_FAIL,
 SECTION_CREATE_REQUEST,
 SECTION_CREATE_SUCCESS,
 SECTION_CREATE_FAIL,
 SECTION_DELETE_REQUEST,
 SECTION_DELETE_SUCCESS,
 SECTION_DELETE_FAIL,
 VIDEO_CREATE_REQUEST,
 VIDEO_CREATE_SUCCESS,
 VIDEO_CREATE_FAIL,
 SECTION_UPDATE_REQUEST,
 SECTION_UPDATE_SUCCESS,
 SECTION_UPDATE_FAIL,
 VIDEO_DELETE_REQUEST,
 VIDEO_DELETE_SUCCESS,
 VIDEO_DELETE_FAIL,
 VIDEO_UPDATE_REQUEST,
 VIDEO_UPDATE_SUCCESS,
 VIDEO_UPDATE_FAIL,
} from '../../constants/courseConstants';

export const getSections = (id) => async (dispatch) => {
 try {
  // dispatch({ type: SECTION_LIST_REQUEST });

  const { data } = await axios.get(`/api/courses/${id}/section`);
  dispatch({
   type: SECTION_LIST_SUCCESS,
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
   type: SECTION_LIST_FAIL,
   payload: message,
  });
 }
};

export const createSection = (id, section) => async (dispatch, getState) => {
 try {
  dispatch({ type: SECTION_CREATE_REQUEST });

  const {
   userLogin: { userInfo },
  } = getState();
  const config = {
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userInfo.token}`,
   },
  };

  if (section.trim() === '') {
   dispatch({
    type: SECTION_CREATE_FAIL,
    payload: `Input Section name!`,
   });
  } else {
   const { data } = await axios.put(
    `/api/courses/${id}/section`,
    { section },
    config
   );

   dispatch({
    type: SECTION_CREATE_SUCCESS,
    payload: data,
   });
  }
 } catch (error) {
  const message =
   error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
  if (message === 'Not authorized, token failed') {
   dispatch(logout());
  }
  dispatch({
   type: SECTION_CREATE_FAIL,
   payload: message,
  });
 }
};

export const deleteSection = (id, sectionId) => async (dispatch, getState) => {
 try {
  dispatch({ type: SECTION_DELETE_REQUEST });

  const {
   userLogin: { userInfo },
  } = getState();
  const config = {
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userInfo.token}`,
   },
  };

  await axios.delete(`/api/courses/${id}/section/${sectionId}`, config);
  dispatch({ type: SECTION_DELETE_SUCCESS });
 } catch (error) {
  const message =
   error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
  if (message === 'Not authorized, token failed') {
   dispatch(logout());
  }
  dispatch({
   type: SECTION_DELETE_FAIL,
   payload: message,
  });
 }
};

export const updateSectionById = (id, sectionId, name) => async (
 dispatch,
 getState
) => {
 try {
  dispatch({ type: SECTION_UPDATE_REQUEST });

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
   `/api/courses/${id}/section/${sectionId}`,
   { name },
   config
  );

  dispatch({
   type: SECTION_UPDATE_SUCCESS,
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
   type: SECTION_UPDATE_FAIL,
   payload: message,
  });
 }
};

// Videos
export const createVideo = (id, sectionId, video) => async (
 dispatch,
 getState
) => {
 const { name, url } = video;
 try {
  dispatch({ type: VIDEO_CREATE_REQUEST });

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
   `/api/courses/${id}/section/${sectionId}/video`,
   { name, url },
   config
  );

  dispatch({
   type: VIDEO_CREATE_SUCCESS,
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
   type: VIDEO_CREATE_FAIL,
   payload: message,
  });
 }
};

export const deleteVideoById = (id, sectionId, videoId) => async (
 dispatch,
 getState
) => {
 try {
  dispatch({ type: VIDEO_DELETE_REQUEST });

  const {
   userLogin: { userInfo },
  } = getState();
  const config = {
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userInfo.token}`,
   },
  };

  await axios.delete(
   `/api/courses/${id}/section/${sectionId}/video/${videoId}`,
   config
  );

  dispatch({ type: VIDEO_DELETE_SUCCESS });
 } catch (error) {
  const message =
   error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
  if (message === 'Not authorized, token failed') {
   dispatch(logout());
  }
  dispatch({
   type: VIDEO_DELETE_FAIL,
   payload: message,
  });
 }
};

export const updateVideoById = (id, sectionId, video) => async (
 dispatch,
 getState
) => {
 const { name, url, vid } = video;

 try {
  dispatch({ type: VIDEO_UPDATE_REQUEST });

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
   `/api/courses/${id}/section/${sectionId}/video/${vid}`,
   { name, url },
   config
  );

  dispatch({
   type: VIDEO_UPDATE_SUCCESS,
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
   type: VIDEO_UPDATE_FAIL,
   payload: message,
  });
 }
};
