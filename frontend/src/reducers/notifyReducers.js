import {
 USER_NOTI_LIST_FAI,
 USER_NOTI_LIST_REQ,
 USER_NOTI_LIST_SUC,
} from '../constants/notifyConstants';

export const NotifyByUserReducer = (state = [], action) => {
 switch (action.type) {
  case USER_NOTI_LIST_REQ:
   return { loading: true };
  case USER_NOTI_LIST_SUC:
   return { loading: false, notifies: action.payload };
  case USER_NOTI_LIST_FAI:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};
