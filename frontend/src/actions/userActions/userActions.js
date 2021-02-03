import axios from 'axios';
import { GET_ENROLL_SECTION_RESET } from '../../constants/eLearningConstants/enrollConstants';
import {
 USER_DETAILS_RESET,
 USER_LOGIN_FAIL,
 USER_LOGIN_REQUEST,
 USER_LOGIN_SUCCESS,
 USER_LOGOUT,
 USER_REGISTER_FAIL,
 USER_REGISTER_REQUEST,
 USER_REGISTER_SUCCESS,
 USER_LIST_RESET,
 USER_LIST_REQUEST,
 USER_LIST_SUCCESS,
 USER_LIST_FAIL,
} from '../../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
 try {
  dispatch({ type: GET_ENROLL_SECTION_RESET });
  dispatch({ type: USER_LOGIN_REQUEST });

  const config = {
   headers: {
    'Content-Type': 'application/json',
   },
  };

  const { data } = await axios.post(
   '/api/users/login',
   { email, password },
   config
  );

  dispatch({
   type: USER_LOGIN_SUCCESS,
   payload: data,
  });

  localStorage.setItem('userInfo', JSON.stringify(data));
 } catch (error) {
  dispatch({
   type: USER_LOGIN_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const logout = () => (dispatch) => {
 localStorage.removeItem('userInfo');
 dispatch({ type: USER_LOGOUT });
 dispatch({ type: USER_DETAILS_RESET });
 dispatch({ type: USER_LIST_RESET });
};

export const register = (name, email, password) => async (dispatch) => {
 try {
  dispatch({ type: USER_REGISTER_REQUEST });

  const config = {
   header: {
    'Content-Type': 'application/json',
   },
  };

  const { data } = await axios.post(
   '/api/users',
   { name, email, password },
   config
  );

  dispatch({
   type: USER_REGISTER_SUCCESS,
   payload: data,
  });

  dispatch({
   type: USER_LOGIN_SUCCESS,
   payload: data,
  });

  localStorage.setItem('userInfo', JSON.stringify(data));
 } catch (error) {
  dispatch({
   type: USER_REGISTER_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const getUserList = () => async (dispatch, getState) => {
 try {
  dispatch({ type: USER_LIST_REQUEST });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
    'Content-Type': 'application/json',
   },
  };

  const { data } = await axios.get('/api/users', config);

  dispatch({
   type: USER_LIST_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: USER_LIST_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const SearchUser = (keyword) => async (dispatch, getState) => {
 try {
  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
    'Content-Type': 'application/json',
   },
  };
  const { data } = await axios.get(
   `/api/users/search/uid?keyword=${keyword.trim()}`,
   config
  );
  dispatch({
   type: USER_LIST_SUCCESS,
   payload: data,
  });
  console.log(data);
 } catch (error) {
  dispatch({
   type: USER_LIST_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};
