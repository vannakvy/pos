import {
 NAVBAR_TYPE_FAIL,
 NAVBAR_TYPE_REQUEST,
 NAVBAR_TYPE_SUCCESS,
} from '../constants/navbarConstants';

export const navbarList = (navbar = '') => async (dispatch) => {
 try {
  dispatch({ type: NAVBAR_TYPE_REQUEST });
  dispatch({
   type: NAVBAR_TYPE_SUCCESS,
   payload: navbar,
  });
  localStorage.setItem('navbar', JSON.stringify(navbar));
 } catch (error) {
  dispatch({
   type: NAVBAR_TYPE_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};
