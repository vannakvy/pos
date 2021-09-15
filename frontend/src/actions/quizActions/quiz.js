import axios from "axios";
import {
  GET_QUIZ_REQUEST,
  GET_QUIZ_FAIL,
  GET_QUIZ_SUCCESS,
  DELETE_QUIZ_FAIL,
  DELETE_QUIZ_REQUEST,
  DELETE_QUIZ_SUCCESS,
  UPDATE_QUIZ_FAIL,
  UPDATE_QUIZ_REQUEST,
  UPDATE_QUIZ_SUCCESS,

  ADD_QUIZ_REQUEST,
  ADD_QUIZ_SUCCESS,
  ADD_QUIZ_FAIL
} from "../../constants/quizConstants/quiz";
import {logout} from '../userActions/userActions.js'

export const listAllQuizes =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type:  GET_QUIZ_REQUEST });

      const { data } = await axios.get(
        `/api/quiz`
      );
      console.log(data,"data")
      dispatch({
        type: GET_QUIZ_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_QUIZ_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// export const listProductDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: PRODUCT_DETAILS_REQUEST });
//     const { data } = await axios.get(`/api/eshop/products/${id}`);

//     dispatch({
//       type: PRODUCT_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PRODUCT_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };

export const deleteQuiz = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_QUIZ_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/quiz/${id}`, config);

    dispatch({
      type: DELETE_QUIZ_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: DELETE_QUIZ_FAIL,
      payload: message,
    });
  }
};

//creating the product

export const createQuiz =
  (name,category, duration) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: ADD_QUIZ_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/quiz`,
        {name ,duration,category },
        config
      );
      dispatch({
        type: ADD_QUIZ_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: ADD_QUIZ_FAIL,
        payload: message,
      });
    }
  };

// updating the product
export const updateQuiz =
  (proId, name, category, duration) =>
  async (dispatch, getState) => {
    try {
  
      dispatch({
        type: UPDATE_QUIZ_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/quiz/${proId}`,
        { name,duration,category },
        config
      );

      dispatch({
        type: UPDATE_QUIZ_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: UPDATE_QUIZ_FAIL,
        payload: message,
      });
    }
  };
