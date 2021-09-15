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
  } from "../../constants/quizConstants/quiz.js";
  
  export const quizListReducers = (state = { quizes: [] }, action) => {
    switch (action.type) {
      case GET_QUIZ_REQUEST:
        return { loading: true, quizes: [] }
      case GET_QUIZ_SUCCESS:
        return {
          loading: false,
          quizes: action.payload,
 
        }
      case GET_QUIZ_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
//   export const productDetailsReducer = ( state = { product: { reviews: [] } },action
//   ) => {
//     switch (action.type) {
//       case PRODUCT_DETAILS_REQUEST:
//         return { ...state, loading: true, }
//       case PRODUCT_DETAILS_SUCCESS:
//         return { loading: false, product: action.payload }
//       case PRODUCT_DETAILS_FAIL:
//         return { loading: false, error: action.payload }
//       default:
//         return state
//     }
//   }
  
  export const quizDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_QUIZ_REQUEST:
        return { loading: true }
      case DELETE_QUIZ_SUCCESS:
        return { loading: false, success: true }
      case DELETE_QUIZ_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const quizCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_QUIZ_REQUEST:
        return { loading: true }
      case ADD_QUIZ_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case ADD_QUIZ_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const quizUpdateReducer = (state = { product: {} }, action) => {
    switch (action.type) {
      case UPDATE_QUIZ_REQUEST:
        return { loading: true }
      case UPDATE_QUIZ_SUCCESS:
        return { loading: false, success: true, product: action.payload }
      case UPDATE_QUIZ_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  

  

  