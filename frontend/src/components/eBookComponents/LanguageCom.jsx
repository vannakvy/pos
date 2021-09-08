import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { GET_ONE_LANGUAGE_SUCCESS } from '../../constants/eBookConstants/eBookCourseConstants';
import { GET_DETAIL_BY_CONTENT_ID_SUCCESS } from '../../constants/eBookConstants/eBookDetailContants';
import {
 LOADER_TOP_FALSE,
 LOADER_TOP_TRUE,
} from '../../constants/navbarConstants';

const LanguageCom = ({ lang, icon, color, bg = '#fff', img }) => {
 const dispatch = useDispatch();
 const history = useHistory();

 const gotoDetails = async (lang) => {
  try {
   dispatch({ type: LOADER_TOP_TRUE });
   const { data } = await axios.get(`/api/ebook/courses/${lang}`);
   dispatch({
    type: GET_ONE_LANGUAGE_SUCCESS,
    payload: data,
   });

   if (data && data[0]) {
    const content = await axios.get(
     `/api/ebook/details/content/${data[0]._id}`
    );
    if (content.data) {
     dispatch({
      type: GET_DETAIL_BY_CONTENT_ID_SUCCESS,
      payload: content.data,
     });
     history.push(`/ebook/${lang}/${data[0]._id || 1}`);
     dispatch({ type: LOADER_TOP_FALSE });
    }
   } else {
    dispatch({ type: LOADER_TOP_FALSE });
   }
  } catch (error) {
   dispatch({ type: LOADER_TOP_FALSE });
  }
 };

 return (
  <div
   className="rounded p-2 px-3 my-1 navHover shadow-sm"
   style={{ background: bg }}
   onClick={() => gotoDetails(lang)}
  >
   <h3 style={{ color: color }}>
    {icon && <i className={`${icon} me-2`}></i>}
    {img && (
     <img className="me-2" src={img} style={{ width: 22 }} alt="" />
    )}{' '}
    {lang}
   </h3>
  </div>
 );
};

export default LanguageCom;
