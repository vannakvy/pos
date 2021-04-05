import {

    PURCHASE_LIST_REQUEST,
    PURCHASE_LIST_SUCCESS,
    PURCHASE_LIST_FAIL,

    PURCHASE_CREATE_REQUEST,
    PURCHASE_CREATE_SUCCESS,
    PURCHASE_CREATE_FAIL,

    PURCHASE_UPDATE_REQUEST,
    PURCHASE_UPDATE_SUCCESS,
    PURCHASE_UPDATE_FAIL,

    PURCHASE_DELETE_REQUEST,
    PURCHASE_DELETE_SUCCESS,
    PURCHASE_DELETE_FAIL,

    PURCHASE_DETAILS_REQUEST,
    PURCHASE_DETAILS_SUCCESS,
    PURCHASE_DETAILS_FAIL
} from '../../constants/eShopConstants/puchaseConstants'


import axios from "axios";

import { logout } from "./userActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const listPurchases = (keyword = "", pageNumber = "") => async (
    dispatch
) => {
    try {
        dispatch({ type: PURCHASE_LIST_REQUEST });

        const { data } = await axios.get(
            `/api/eshop/purchases?keyword=${keyword}&pageNumber=${pageNumber}`
        );

        dispatch({
            type: PURCHASE_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PURCHASE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const listPurchaseDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PURCHASE_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/eshop/purchases/${id}`);

        dispatch({
            type: PURCHASE_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PURCHASE_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


const deletePurchase = (purchaseId, update) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PURCHASE_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/eshop/purchases/${purchaseId}`, config);

        toast.success("Purchases deleted successfully !");

        dispatch({
            type: PURCHASE_DELETE_SUCCESS,
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
            type: PURCHASE_DELETE_FAIL,
            payload: message,
        });
    }
};

const createPurchase = (Arr,purchaseAt) => async (dispatch, getState) => {
    
    try {
        dispatch({
            type: PURCHASE_CREATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.post(`/api/eshop/purchases`,{Arr,purchaseAt},config);

        dispatch({
            type: PURCHASE_CREATE_SUCCESS,
            payload: data,
        });
        toast.success("Purchases created successfully !");
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        if (message === "Not authorized, token failed") {
            dispatch(logout());
        }
        dispatch({
            type: PURCHASE_CREATE_FAIL,
            payload: message,
        });
    }
};

const updatePurchase = (supId, name, email, tel, address) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PURCHASE_UPDATE_REQUEST,
        });
        console.log("ddd")
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
            `/api/eshop/purchases/${supId}`,
            { name, email, tel, address },
            config
        );

        dispatch({
            type: PURCHASE_UPDATE_SUCCESS,
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
            type: PURCHASE_UPDATE_FAIL,
            payload: message,
        });
    }
};


export { listPurchases, updatePurchase, deletePurchase, createPurchase };