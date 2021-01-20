import {

    GET_DETAIL_REQUEST,
    GET_DETAIL_SUCCESS, 
    GET_DETAIL_FAIL, 
  
    GET_DETAIL_BY_CONTENT_ID_REQUEST,
    GET_DETAIL_BY_CONTENT_ID_SUCCESS,
    GET_DETAIL_BY_CONTENT_ID_FAIL,
    CREATE_DETAIL_REQUEST,
    CREATE_DETAIL_SUCCESS,
    CREATE_DETAIL_FAIL,
    DELETE_DETAIL_REQUEST,
    DELETE_DETAIL_SUCCESS,
    DELETE_DETAIL_FAIL,
    GET_ONE_DETAIL_REQUEST,
    GET_ONE_DETAIL_SUCCESS,
    GET_ONE_DETAIL_FAIL,
    UPDATE_DETAIL_REQUEST,
    UPDATE_DETAIL_SUCCESS,
    UPDATE_DETAIL_FAIL,
  
  
  } from  '../../constants/eBookConstants/eBookDetailContants'
  
  
    export const getDetailReducer = (state = { details: [] }, action) => {
      switch (action.type) {
        case GET_DETAIL_REQUEST:
          return { loading: true, details: [] }
        case GET_DETAIL_SUCCESS:
          return {
            loading: false,
            details: action.payload.details,
          }
        case GET_DETAIL_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }
  
  
  
  
   
  
    export const getDetailByContentReducer = (state = { }, action) => {
      switch (action.type) {
        case GET_DETAIL_BY_CONTENT_ID_REQUEST:
          return { loading: true, detailBycontents: [] }
        case GET_DETAIL_BY_CONTENT_ID_SUCCESS:
          return {
            loading: false,
            detailBycontents: action.payload,
          }
        case GET_DETAIL_BY_CONTENT_ID_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }
  
  
  
    export const detailCreateReducer = (state = {}, action) => {
      switch (action.type) {
        case CREATE_DETAIL_REQUEST:
          return { loading: true }
        case CREATE_DETAIL_SUCCESS:
          return { loading: false, success: true, details: action.payload }
        case CREATE_DETAIL_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }
  
    export const delailDeleteReducer = (state = {}, action) => {
      switch (action.type) {
        case DELETE_DETAIL_REQUEST:
          return { loading: true }
        case DELETE_DETAIL_SUCCESS:
          return { loading: false, success: true, message: action.payload }
        case DELETE_DETAIL_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }
  
    export const oneDetailReducer = (state = {}, action) => {
      switch (action.type) {
        case GET_ONE_DETAIL_REQUEST:
          return { loading: true }
        case GET_ONE_DETAIL_SUCCESS:
          return { loading: false, success: true, detail: action.payload }
        case GET_ONE_DETAIL_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }
  
    export const detailUpdateReducer = (state={},action)=>{
      switch (action.type) {
        case UPDATE_DETAIL_REQUEST:
          return { loading: true }
        case UPDATE_DETAIL_SUCCESS:
          return { loading: false, success: true, detail: action.payload }
        case UPDATE_DETAIL_FAIL:
          return { loading: false, error: action.payload }
        default:
          return state
      }
    }