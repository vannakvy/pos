import {
 GET_CONTENT_REQUEST,
 GET_CONTENT_SUCCESS,
 GET_CONTENT_FAIL,
 GET_CONTENT_BY_LANG_REQUEST,
 GET_CONTENT_BY_LANG_SUCCESS,
 GET_CONTENT_BY_LANG_FAIL,
 ADD_CONTENT_REQUEST,
 ADD_CONTENT_SUCCESS,
 ADD_CONTENT_FAIL,
 DELETE_CONTENT_REQUEST,
 DELETE_CONTENT_SUCCESS,
 DELETE_CONTENT_FAIL,
 UPDATE_CONTENT_SUCCESS,
 UPDATE_CONTENT_FAIL,
 UPDATE_CONTENT_REQUEST,
} from '../../constants/eBookConstants/eBookContentConstants';

export const getContentsReducer = (state = {}, action) => {
 switch (action.type) {
  case GET_CONTENT_REQUEST:
   return { loading: true, contents: [] };
  case GET_CONTENT_SUCCESS:
   return {
    loading: false,
    contents: action.payload,
   };
  case GET_CONTENT_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const contentDeleteReducer = (state = {}, action) => {
 switch (action.type) {
  case DELETE_CONTENT_REQUEST:
   return { loading: true };
  case DELETE_CONTENT_SUCCESS:
   return { loading: false, success: true, contents: action.payload };
  case DELETE_CONTENT_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const contentUpdateReducer = (state = {}, action) => {
 switch (action.type) {
  case UPDATE_CONTENT_REQUEST:
   return { loading: true };
  case UPDATE_CONTENT_SUCCESS:
   return { loading: false, success: true, content: action.payload };
  case UPDATE_CONTENT_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const getContentReducer = (state = {}, action) => {
 switch (action.type) {
  case GET_CONTENT_BY_LANG_REQUEST:
   return { loading: true, content: [] };
  case GET_CONTENT_BY_LANG_SUCCESS:
   return {
    loading: false,
    content: action.payload,
   };
  case GET_CONTENT_BY_LANG_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const contentCreateReducer = (state = {}, action) => {
 switch (action.type) {
  case ADD_CONTENT_REQUEST:
   return { loading: true };
  case ADD_CONTENT_SUCCESS:
   return { loading: false, success: true, content: action.payload };
  case ADD_CONTENT_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};
