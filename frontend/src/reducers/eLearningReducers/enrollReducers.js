import {
 ADD_ENROLL_VIDEO_FAIL,
 ADD_ENROLL_VIDEO_REQUEST,
 ADD_ENROLL_VIDEO_RESET,
 ADD_ENROLL_VIDEO_SUCCESS,
 COUSRE_ENROLL_FAIL,
 COUSRE_ENROLL_REQUEST,
 COUSRE_ENROLL_RESET,
 COUSRE_ENROLL_SUCCESS,
 CREATE_REQ_ENROLL_SUCCESS,
 DELETE_REQ_ENROLL_FAIL,
 DELETE_REQ_ENROLL_REQ,
 DELETE_REQ_ENROLL_RESET,
 DELETE_REQ_ENROLL_SUC,
 GET_ENROLL_DETAIL_FAIL,
 GET_ENROLL_DETAIL_REQUEST,
 GET_ENROLL_DETAIL_RESET,
 GET_ENROLL_DETAIL_SUCCESS,
 GET_ENROLL_SECTION_FAIL,
 GET_ENROLL_SECTION_REQUEST,
 GET_ENROLL_SECTION_RESET,
 GET_ENROLL_SECTION_SUCCESS,
 GET_ENROLL_VIDEO_FAIL,
 GET_ENROLL_VIDEO_REQUEST,
 GET_ENROLL_VIDEO_RESET,
 GET_ENROLL_VIDEO_SUCCESS,
 GET_REQ_ENROLL_FAIL,
 GET_REQ_ENROLL_REQ,
 GET_REQ_ENROLL_RESET,
 GET_REQ_ENROLL_SUC,
 USER_ENROLL_COURSE_FAIL,
 USER_ENROLL_COURSE_REQUEST,
 USER_ENROLL_COURSE_RESET,
 USER_ENROLL_COURSE_SUCCESS,
 USER_ENROLL_CREATE_FAIL,
 USER_ENROLL_CREATE_REQUEST,
 USER_ENROLL_CREATE_RESET,
 USER_ENROLL_CREATE_SUCCESS,
 USER_ENROLL_DELETE_FAIL,
 USER_ENROLL_DELETE_REQUEST,
 USER_ENROLL_DELETE_RESET,
 USER_ENROLL_DELETE_SUCCESS,
} from '../../constants/eLearningConstants/enrollConstants';

export const courseEnrollReducer = (state = { enroll: null }, action) => {
 switch (action.type) {
  case COUSRE_ENROLL_REQUEST:
   return { loading: true, enroll: null };
  case COUSRE_ENROLL_SUCCESS:
   return { loading: false, enroll: action.payload };
  case COUSRE_ENROLL_FAIL:
   return { loading: false, error: action.payload };
  case COUSRE_ENROLL_RESET:
   return {};
  default:
   return state;
 }
};

export const getEnrollDetailReducer = (state = {}, action) => {
 switch (action.type) {
  case GET_ENROLL_DETAIL_REQUEST:
   return { loading: true };
  case GET_ENROLL_DETAIL_SUCCESS:
   return { loading: false, enrollDetail: action.payload };
  case GET_ENROLL_DETAIL_FAIL:
   return { loading: false, error: action.payload };
  case GET_ENROLL_DETAIL_RESET:
   return {};
  default:
   return state;
 }
};

export const userEnrollCoursesReducer = (state = {}, action) => {
 switch (action.type) {
  case USER_ENROLL_COURSE_REQUEST:
   return { loading: true };
  case USER_ENROLL_COURSE_SUCCESS:
   return { loading: false, coursesEnroll: action.payload };
  case USER_ENROLL_COURSE_FAIL:
   return { loading: false, error: action.payload };
  case USER_ENROLL_COURSE_RESET:
   return {};
  default:
   return state;
 }
};

export const createEnrollCoursesReducer = (state = {}, action) => {
 switch (action.type) {
  case USER_ENROLL_CREATE_REQUEST:
   return { loading: true, enrolls: [] };
  case USER_ENROLL_CREATE_SUCCESS:
   return { loading: false, enrolls: action.payload, success: true };
  case USER_ENROLL_CREATE_FAIL:
   return { loading: false, error: action.payload };
  case USER_ENROLL_CREATE_RESET:
   return {};
  default:
   return state;
 }
};

export const deleteEnrollCoursesReducer = (state = {}, action) => {
 switch (action.type) {
  case USER_ENROLL_DELETE_REQUEST:
   return { loading: true, enroll: [] };
  case USER_ENROLL_DELETE_SUCCESS:
   return { loading: false, enroll: action.payload, success: true };
  case USER_ENROLL_DELETE_FAIL:
   return { loading: false, error: action.payload };
  case USER_ENROLL_DELETE_RESET:
   return {};
  default:
   return state;
 }
};

export const getEnrollSectionReducer = (state = {}, action) => {
 switch (action.type) {
  case GET_ENROLL_SECTION_REQUEST:
   return { loading: true, sections: [] };
  case GET_ENROLL_SECTION_SUCCESS:
   return { loading: false, sections: action.payload };
  case GET_ENROLL_SECTION_FAIL:
   return { loading: false, error: action.payload };
  case GET_ENROLL_SECTION_RESET:
   return {};
  default:
   return state;
 }
};

export const getEnrollVideoPlayReducer = (state = {}, action) => {
 switch (action.type) {
  case GET_ENROLL_VIDEO_REQUEST:
   return { loading: true, plays: {} };
  case GET_ENROLL_VIDEO_SUCCESS:
   return { loading: false, plays: action.payload };
  case GET_ENROLL_VIDEO_FAIL:
   return { loading: false, error: action.payload };
  case GET_ENROLL_VIDEO_RESET:
   return {};
  default:
   return state;
 }
};

export const addEnrollVideoReducer = (state = {}, action) => {
 switch (action.type) {
  case ADD_ENROLL_VIDEO_REQUEST:
   return { loading: true, enroll: {} };
  case ADD_ENROLL_VIDEO_SUCCESS:
   return { loading: false, enroll: action.payload, success: true };
  case ADD_ENROLL_VIDEO_FAIL:
   return { loading: false, error: action.payload };
  case ADD_ENROLL_VIDEO_RESET:
   return {};
  default:
   return state;
 }
};

export const reqEnrollReducer = (state = {}, action) => {
 switch (action.type) {
  case GET_REQ_ENROLL_REQ:
   return { loading: true };
  case GET_REQ_ENROLL_SUC:
   return { loading: false, reqEnrolls: action.payload, success: true };
  case GET_REQ_ENROLL_FAIL:
   return { loading: false, error: action.payload };
  case GET_REQ_ENROLL_RESET:
   return {};
  default:
   return state;
 }
};

export const deleteReqEnrollReducer = (state = {}, action) => {
 switch (action.type) {
  case DELETE_REQ_ENROLL_REQ:
   return { loading: true };
  case DELETE_REQ_ENROLL_SUC:
   return { loading: false, delEnroll: action.payload, success: true };
  case DELETE_REQ_ENROLL_FAIL:
   return { loading: false, error: action.payload };
  case DELETE_REQ_ENROLL_RESET:
   return {};
  default:
   return state;
 }
};

export const createReqEnrollReducer = (state = {}, action) => {
 switch (action.type) {
  case CREATE_REQ_ENROLL_SUCCESS:
   return { loading: false, createReqEnroll: action.payload, success: true };
  default:
   return state;
 }
};
