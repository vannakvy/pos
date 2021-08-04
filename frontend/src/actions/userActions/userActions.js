import axios from 'axios';
import { Redirect } from 'react-router-dom';
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
import firebase, { auth, db } from '../../firebase';
import { navbarList } from '../navbarActions';

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
 dispatch(navbarList('Dashboard'));
 return <Redirect to="/" />;
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
   { name, email, password, profile: '' },
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

export const loginByGoogle = () => async (dispatch) => {
 try {
  dispatch({ type: GET_ENROLL_SECTION_RESET });
  dispatch({ type: USER_LOGIN_REQUEST });
  const config = {
   header: {
    'Content-Type': 'application/json',
   },
  };
  await firebase
   .auth()
   .signInWithPopup(new firebase.auth.GoogleAuthProvider())
   .then(async (res) => {
    const { data } = await axios.post(
     '/api/users/login',
     {
      email: res.additionalUserInfo.profile.email,
      password: res.additionalUserInfo.profile.id,
     },
     config
    );

    dispatch({
     type: USER_LOGIN_SUCCESS,
     payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
   });
 } catch (error) {
  dispatch({
   type: USER_LOGIN_FAIL,
   payload:
    error.response &&
    error.response.data.message === 'អ៊ីម៉ែលឬលេខសម្ងាត់របស់អ្នក​មិនត្រឹមត្រូវ'
     ? 'អ៊ីម៉ែលអ្នកមិនទាន់បានចុះឈ្មោះ​ ឫក៏ អ៊ីម៉ែលរបស់អ្នកបានប្រើប្រាស់សម្រាប់ការចុះឈ្មោះជា អ៊ីម៉ែលនិងលេខសម្ងាត់រួចមកហើយ'
     : error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const registerByGoogle = () => async (dispatch) => {
 try {
  dispatch({ type: USER_REGISTER_REQUEST });
  const config = {
   header: {
    'Content-Type': 'application/json',
   },
  };

  await firebase
   .auth()
   .signInWithPopup(new firebase.auth.GoogleAuthProvider())
   .then(async (res) => {
    const { data } = await axios.post(
     '/api/users',
     {
      name: res.additionalUserInfo.profile.name,
      email: res.additionalUserInfo.profile.email,
      password: res.additionalUserInfo.profile.id,
      profile: res.additionalUserInfo.profile.picture,
     },
     config
    );
    if (data) {
     dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
     });

     dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
     });
     localStorage.setItem('userInfo', JSON.stringify(data));
    }
   });
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
