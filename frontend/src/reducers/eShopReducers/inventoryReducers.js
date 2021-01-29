import {PUCHASE_CREATE_FAIL,
  PUCHASE_CREATE_REQUEST,
  PUCHASE_CREATE_SUCCESS,
  PUCHASE_LIST_REQUEST,
  PUCHASE_LIST_SUCCESS,
  PUCHASE_LIST_FAIL,
  PUCHASE_DELETE_REQUEST,
  PUCHASE_DELETE_SUCCESS,
  PUCHASE_DELETE_FAIL,
  PUCHASE_UPDATE_REQUEST,
  PUCHASE_UPDATE_SUCCESS,
  PUCHASE_UPDATE_FAIL,
  ADD_REMOVE_STOCK_REQUEST,
  ADD_REMOVE_STOCK_SUCCESS,
  ADD_REMOVE_STOCK_FAIL,
} from '../../constants/eShopConstants/inventoryConstants';

export const PuchaseCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case PUCHASE_CREATE_REQUEST:
        return { loading: true }
      case PUCHASE_CREATE_SUCCESS:
        return { loading: false, success: true, puchase: action.payload }
      case PUCHASE_CREATE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const puchaseListReducer = (state = {}, action) => {
    switch (action.type) {
      case PUCHASE_LIST_REQUEST:
        return { loading: true }
      case PUCHASE_LIST_SUCCESS:
        return { loading: false, success: true, puchases: action.payload }
      case PUCHASE_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const puchaseDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PUCHASE_DELETE_REQUEST:
        return { loading: true }
      case PUCHASE_DELETE_SUCCESS:
        return { loading: false, success: true, puchase: action.payload }
      case PUCHASE_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


  export const puchaseUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case PUCHASE_UPDATE_REQUEST:
        return { loading: true }
      case PUCHASE_UPDATE_SUCCESS:
        return { loading: false, success: true, puchase: action.payload }
      case PUCHASE_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const addRemoveStockReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_REMOVE_STOCK_REQUEST:
        return { loading: true }
      case ADD_REMOVE_STOCK_SUCCESS:
        return { loading: false, success: true, arrived: action.payload }
      case ADD_REMOVE_STOCK_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }