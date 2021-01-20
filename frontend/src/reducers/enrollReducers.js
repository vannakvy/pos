import {
 COUSRE_ENROLL_FAIL,
 COUSRE_ENROLL_REQUEST,
 COUSRE_ENROLL_RESET,
 COUSRE_ENROLL_SUCCESS,
} from '../constants/enrollConstants';

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
