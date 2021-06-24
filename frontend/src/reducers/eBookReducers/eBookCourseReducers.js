import {
 GET_LANGUAGE_REQUEST,
 GET_LANGUAGE_SUCCESS,
 GET_LANGUAGE_FAIL,
 GET_ONE_LANGUAGE_REQUEST,
 GET_ONE_LANGUAGE_SUCCESS,
 GET_ONE_LANGUAGE_FAIL,
 ADD_LANGUAGE_FAIL,
 ADD_LANGUAGE_SUCCESS,
 ADD_LANGUAGE_REQUEST,
 DELETE_LANGUAGE_REQUEST,
 DELETE_LANGUAGE_SUCCESS,
 DELETE_LANGUAGE_FAIL,
 UPDATE_LANGUAGE_REQUEST,
 UPDATE_LANGUAGE_SUCCESS,
 UPDATE_LANGUAGE_FAIL,
} from '../../constants/eBookConstants/eBookCourseConstants';

export const getLanguagesReducer = (state = { courses: [] }, action) => {
 switch (action.type) {
  case GET_LANGUAGE_REQUEST:
   return { loading: true, courses: [] };
  case GET_LANGUAGE_SUCCESS:
   return {
    loading: false,
    courses: action.payload,
   };
  case GET_LANGUAGE_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const getOneLanguageReducer = (state = { course: [] }, action) => {
 switch (action.type) {
  case GET_ONE_LANGUAGE_REQUEST:
   return { loading: true, course: [] };
  case GET_ONE_LANGUAGE_SUCCESS:
   return {
    loading: false,
    course: action.payload,
   };
  case GET_ONE_LANGUAGE_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const languageCreateReducer = (state = {}, action) => {
 switch (action.type) {
  case ADD_LANGUAGE_REQUEST:
   return { loading: true };
  case ADD_LANGUAGE_SUCCESS:
   return { loading: false, success: true, language: action.payload };
  case ADD_LANGUAGE_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};
export const languageDeleteReducer = (state = {}, action) => {
 switch (action.type) {
  case DELETE_LANGUAGE_REQUEST:
   return { loading: true };
  case DELETE_LANGUAGE_SUCCESS:
   return { loading: false, success: true, language: action.payload };
  case DELETE_LANGUAGE_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const languageUpdateReducer = (state = {}, action) => {
 switch (action.type) {
  case UPDATE_LANGUAGE_REQUEST:
   return { loading: true };
  case UPDATE_LANGUAGE_SUCCESS:
   return { loading: false, success: true, language: action.payload };
  case UPDATE_LANGUAGE_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};
