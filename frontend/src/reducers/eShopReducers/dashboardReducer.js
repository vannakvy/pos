import {
  GET_DATA_FOR_DASHBOARD_ERROR,
  GET_DATA_FOR_DASHBOARD_SUCCESS,
  GET_DATA_FOR_DASHBOARD_REQUEST,
} from "../../constants/eShopConstants/dashbord";

export const dataEshopDashboard = (state = {}, action) => {
  switch (action.type) {
    case GET_DATA_FOR_DASHBOARD_REQUEST:
      return {
        loading: true,
      };
    case GET_DATA_FOR_DASHBOARD_SUCCESS:
      return {
        loading: false,
        success: true,
        totalData: action.payload,
      };
    case GET_DATA_FOR_DASHBOARD_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
