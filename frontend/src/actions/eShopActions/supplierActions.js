import axios from "axios";
import {
    SUPPLY_CREATE_FAIL,
    SUPPLY_CREATE_REQUEST,
    SUPPLY_CREATE_SUCCESS,

    SUPPLY_DELETE_FAIL,
    SUPPLY_DELETE_REQUEST,
    SUPPLY_DELETE_SUCCESS,

    SUPPLY_LIST_FAIL,
    SUPPLY_LIST_REQUEST,
    SUPPLY_LIST_SUCCESS,

    SUPPLY_UPDATE_FAIL,
    SUPPLY_UPDATE_REQUEST,
    SUPPLY_UPDATE_SUCCESS,

} from "../../constants/eShopConstants/supplierConstants";
import { logout } from "./userActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const listSupplier = () => async (dispatch) => {
    try {
        dispatch({ type: SUPPLY_LIST_REQUEST });

        const { data } = await axios.get(
            `/api/eshop/suppliers`
        );

        dispatch({
            type: SUPPLY_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: SUPPLY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};


const deleteSupplier = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUPPLY_DELETE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        await axios.delete(`/api/eshop/suppliers/${id}`, config);

        dispatch({
            type: SUPPLY_DELETE_SUCCESS,
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
            type: SUPPLY_DELETE_FAIL,
            payload: message,
        });
    }
};

const createSupplier = (
    name,
    email,
    tel,
    address

) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUPPLY_CREATE_REQUEST,
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
            `/api/eshop/suppliers`,
            { name, email, tel, address },
            config
        );

        dispatch({
            type: SUPPLY_CREATE_SUCCESS,
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
            type: SUPPLY_CREATE_FAIL,
            payload: message,
        });
    }
};

const updateSupplier = (supId, name, email, tel, address) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUPPLY_UPDATE_REQUEST,
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
            `/api/eshop/suppliers/${supId}`,
            { name, email, tel, address },
            config
        );

        dispatch({
            type: SUPPLY_UPDATE_SUCCESS,
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
            type: SUPPLY_UPDATE_FAIL,
            payload: message,
        });
    }
};


export { listSupplier, updateSupplier, deleteSupplier, createSupplier };