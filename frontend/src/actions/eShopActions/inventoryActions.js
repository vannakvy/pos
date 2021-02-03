import axios from 'axios'
import {
    PUCHASE_CREATE_FAIL,
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
    ADD_SALE_REQUEST,
    ADD_SALE_SUCCESS,
    ADD_SALE_FAIL
} from '../../constants/eShopConstants/inventoryConstants'


export const createPuchase = (product,date,arrived,price,quantity,description, supplier)=>async(dispatch)=>{
    try{
        dispatch({
            type: PUCHASE_CREATE_REQUEST
        })
        const {data} = await axios.post("/api/eshop/inventory/puchases",{product,date,arrived,price,quantity,description,supplier})
        console.log(data);
        dispatch({
            type: PUCHASE_CREATE_SUCCESS,
            payload: data
        })
    }catch(error){
       dispatch({
           type: PUCHASE_CREATE_FAIL,
           payload: error
       })
    }
}

export const listPuchases = ()=>async(dispatch)=>{
    try{
        dispatch({type: PUCHASE_LIST_REQUEST })
        const {data} = await axios.get('/api/eshop/inventory/puchases');
        dispatch({
            type: PUCHASE_LIST_SUCCESS,
            payload: data
        })

    }catch(error){
        dispatch({
            type: PUCHASE_LIST_FAIL,
            payload: error

        })
    }
}

export const deletePuchase = (id)=>async(dispatch)=>{
    try{
        dispatch({
            type: PUCHASE_DELETE_REQUEST
        })
        const {data} = await axios.delete(`/api/eshop/inventory/puchases/${id}`)
    
        dispatch({
            type: PUCHASE_DELETE_SUCCESS,
            payload: data
        })
    }catch(error){
       dispatch({
           type: PUCHASE_DELETE_FAIL,
           payload: error
       })
    }
}

//update the puchase
export const updatePuchase = (product, date, arrived, price, quantity, description,supplier,puchaseId)=>async(dispatch)=>{
    try{
        dispatch({
            type: PUCHASE_UPDATE_REQUEST
        })
        const {data} = await axios.put(`/api/eshop/inventory/puchases/${puchaseId}`,{product, date, arrived, price, quantity,supplier,description})
        console.log(data)
        dispatch({
            type: PUCHASE_UPDATE_SUCCESS,
            payload: data
        })
    }catch(error){
       dispatch({
           type: PUCHASE_UPDATE_FAIL,
           payload: error
       })
    }
}

export const addRemoveStock = (puchaseId,arrived,product,quantity,price)=>async(dispatch)=>{
    try{
    
        dispatch({
            type: ADD_REMOVE_STOCK_REQUEST
        })
        const {data} = await axios.put(`/api/eshop/inventory/puchases/${puchaseId}/arrived`,{arrived, product,quantity,price})
        dispatch({
            type: ADD_REMOVE_STOCK_SUCCESS,
            payload: data
        })
    }catch(error){
       dispatch({
           type: ADD_REMOVE_STOCK_FAIL,
           payload: error
       })
    }
}

//// 
export const addSale = (orderId)=>async(dispatch)=>{
    try{
    
        dispatch({
            type: ADD_SALE_REQUEST
        })
        const {data} = await axios.post(`/api/eshop/inventory/sales/${orderId}`)
        dispatch({
            type: ADD_SALE_SUCCESS,
            payload: data
        })
    }catch(error){
       dispatch({
           type: ADD_SALE_FAIL,
           payload: error
       })
    }
}


