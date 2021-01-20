import axios from 'axios';
import {
 COUSRE_ENROLL_FAIL,
 COUSRE_ENROLL_REQUEST,
 COUSRE_ENROLL_SUCCESS,
} from '../../constants/enrollConstants';

export const getCourseEnroll = (id) => async (dispatch, getState) => {
 try {
  dispatch({ type: COUSRE_ENROLL_REQUEST });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };
  const { data } = await axios.get(`/api/courses/${id}/enroll`, config);
  dispatch({
   type: COUSRE_ENROLL_SUCCESS,
   payload: data,
  });
 } catch (error) {
  dispatch({
   type: COUSRE_ENROLL_FAIL,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};
