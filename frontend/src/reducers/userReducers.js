import {
 USER_LIST_FAIL,
 USER_LIST_REQUEST,
 USER_LIST_RESET,
 USER_LIST_SUCCESS,
 USER_LOGIN_FAIL,
 USER_LOGIN_REQUEST,
 USER_LOGIN_SUCCESS,
 USER_LOGOUT,
 USER_REGISTER_FAIL,
 USER_REGISTER_REQUEST,
 USER_REGISTER_SUCCESS,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
 switch (action.type) {
  case USER_LOGIN_REQUEST:
   return { loading: true };
  case USER_LOGIN_SUCCESS:
   return { loading: false, userInfo: action.payload };
  case USER_LOGIN_FAIL:
   return { loading: false, error: action.payload };
  case USER_LOGOUT:
   return {};
  default:
   return state;
 }
};

export const userRegisterReducer = (state = {}, action) => {
 switch (action.type) {
  case USER_REGISTER_REQUEST:
   return { loading: true };
  case USER_REGISTER_SUCCESS:
   return { loading: false, userInfo: action.payload };
  case USER_REGISTER_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const userListReducer = (state = {}, action) => {
 switch (action.type) {
  case USER_LIST_REQUEST:
   return { loading: true };
  case USER_LIST_SUCCESS:
   return {
    loading: false,
    users: [],
    // users: action.payload.users,
    // page: action.payload.page,
    // pages: action.payload.pages,
    // count: action.payload.count,
   };
  case USER_LIST_FAIL:
   return { loading: false, error: action.payload };
  case USER_LIST_RESET:
   return {};
  default:
   return state;
 }
};
