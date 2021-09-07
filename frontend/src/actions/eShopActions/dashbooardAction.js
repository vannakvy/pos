import axios from "axios";

import {
  GET_DATA_FOR_DASHBOARD_REQUEST,
  GET_DATA_FOR_DASHBOARD_ERROR,
  GET_DATA_FOR_DASHBOARD_SUCCESS,
} from "../../constants/eShopConstants/dashbord";

export const eshopForDashboard = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: GET_DATA_FOR_DASHBOARD_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get("/api/eshop/purchases/total");
    console.log(data, "data");
    dispatch({
      type: GET_DATA_FOR_DASHBOARD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_DATA_FOR_DASHBOARD_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
