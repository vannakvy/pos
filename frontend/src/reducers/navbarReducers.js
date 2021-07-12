import {
 NAVBAR_TYPE_REQUEST,
 NAVBAR_TYPE_SUCCESS,
 NAVBAR_TYPE_FAIL,
 LOADER_TOP_TRUE,
 LOADER_TOP_FALSE,
} from '../constants/navbarConstants.js';

export const navbarListReducers = (state = { navbar: 'Dashboard' }, action) => {
 switch (action.type) {
  case NAVBAR_TYPE_REQUEST:
   return { loading: true, navbar: '' };
  case NAVBAR_TYPE_SUCCESS:
   return { loading: false, navbar: action.payload };
  case NAVBAR_TYPE_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const loaderTopReducers = (state = {}, action) => {
 switch (action.type) {
  case LOADER_TOP_TRUE:
   return { loaderTop: true };
  case LOADER_TOP_FALSE:
   return { loaderTop: false };
  default:
   return { loaderTop: false };
 }
};
