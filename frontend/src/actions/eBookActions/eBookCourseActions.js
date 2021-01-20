import axios from 'axios'
import {GET_LANGUAGE_REQUEST,
GET_LANGUAGE_SUCCESS,
GET_LANGUAGE_FAIL,
GET_ONE_LANGUAGE_REQUEST,
GET_ONE_LANGUAGE_SUCCESS,
GET_ONE_LANGUAGE_FAIL,  
ADD_LANGUAGE_REQUEST,
ADD_LANGUAGE_SUCCESS,
ADD_LANGUAGE_FAIL,
DELETE_LANGUAGE_REQUEST,
DELETE_LANGUAGE_SUCCESS,
DELETE_LANGUAGE_FAIL,
UPDATE_LANGUAGE_REQUEST,
UPDATE_LANGUAGE_SUCCESS,
UPDATE_LANGUAGE_FAIL,} from '../../constants/eBookConstants/eBookCourseConstants';
import {getDetailByContentId} from './eBookDetailActions'

const getLanguages = () =>async (dispatch)=>{
    try{
       
        dispatch({type: GET_LANGUAGE_REQUEST})
        const {data} = await axios.get(`/api/ebook/courses`)
        dispatch({
            type: GET_LANGUAGE_SUCCESS,
            payload: data
        })
        
    }catch(error){
        dispatch({
            type:GET_LANGUAGE_FAIL,
            payload: error.message
        })
    }
}

const getOneLanguage = (id) =>async (dispatch)=>{
    try{
        dispatch({type: GET_ONE_LANGUAGE_REQUEST})
        const {data} = await axios.get(`/api/ebook/courses/${id}`)
        dispatch({
            type: GET_ONE_LANGUAGE_SUCCESS,
            payload: data
        })
        if(data && data[0]){
            dispatch(getDetailByContentId(data[0]._id))
        }
        
    }catch(error){
        dispatch({
            type:GET_ONE_LANGUAGE_FAIL,
            payload: error.message
        })
    }
}
const addLanguage = (title,category)=>async(dispatch)=>{
    try{
        dispatch({
            type: ADD_LANGUAGE_REQUEST
        })
   const {data} =await axios.post(`/api/ebook/courses`,{title, category});
    
   dispatch({
           type:ADD_LANGUAGE_SUCCESS,
           payload: data
          })
    }catch(error){
        dispatch({
            type:ADD_LANGUAGE_FAIL,
            payload: error.message
        })

    }
}

const deleteLanguage = (id)=>async(dispatch)=>{
    try{
        dispatch({
            type: DELETE_LANGUAGE_REQUEST
        })
   const {data} =await axios.delete(`/api/ebook/courses/${id}`);
    
   dispatch({
           type:DELETE_LANGUAGE_SUCCESS,
           payload: data
          })
    }catch(error){
        dispatch({
            type:DELETE_LANGUAGE_FAIL,
            payload: error.message
        })

    }
}

const updateLanguage = (id,title,category)=>async(dispatch)=>{
    try{
        dispatch({
            type: UPDATE_LANGUAGE_REQUEST
        })
   const {data} =await axios.put(`/api/ebook/courses/${id}`,{title,category});
    
   dispatch({
           type:UPDATE_LANGUAGE_SUCCESS,
           payload: data
          })
    }catch(error){
        dispatch({
            type:UPDATE_LANGUAGE_FAIL,
            payload: error.message
        })

    }
}
export {    
    getLanguages,
    getOneLanguage,
    addLanguage,
    deleteLanguage,
    updateLanguage,};