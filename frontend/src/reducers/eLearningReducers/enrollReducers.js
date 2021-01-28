import {
 COUSRE_ENROLL_FAIL,
 COUSRE_ENROLL_REQUEST,
 COUSRE_ENROLL_RESET,
 COUSRE_ENROLL_SUCCESS,
 USER_ENROLL_COURSE_FAIL,
 USER_ENROLL_COURSE_REQUEST,
 USER_ENROLL_COURSE_RESET,
 USER_ENROLL_COURSE_SUCCESS,
 USER_ENROLL_CREATE_REQUEST,
 USER_ENROLL_CREATE_SUCCESS,
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

export const userEnrollCoursesReducer = (state = {}, action) => {
 switch (action.type) {
  case USER_ENROLL_COURSE_REQUEST:
   return { loading: true, courses: [] };
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
  case USER_ENROLL_COURSE_FAIL:
   return { loading: false, error: action.payload };
  case USER_ENROLL_COURSE_RESET:
   return {};
  default:
   return state;
 }
};
