import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Sidebar.css';
import { IoBackspace } from 'react-icons/io5';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { AiOutlineCaretLeft } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {
 LOADER_TOP_FALSE,
 LOADER_TOP_TRUE,
} from '../../constants/navbarConstants';
import { GET_DETAIL_BY_CONTENT_ID_SUCCESS } from '../../constants/eBookConstants/eBookDetailContants';
import axios from 'axios';
import { AiOutlineRollback } from 'react-icons/ai';

const CourseSidebar = ({ courses, lang }) => {
 const [navSide, setNavSide] = useState(false);
 const history = useHistory();
 const dispatch = useDispatch();

 const gotoEbookContent = async (e, id) => {
  e.preventDefault();
  dispatch({ type: LOADER_TOP_TRUE });
  const { data } = await axios.get(`/api/ebook/details/content/${id}`);
  if (data) {
   dispatch({
    type: GET_DETAIL_BY_CONTENT_ID_SUCCESS,
    payload: data,
   });
   dispatch({ type: LOADER_TOP_FALSE });
   history.push(`/ebook/${lang}/${id}`);
   setNavSide(false);
  }
 };

 return (
  <div className="sticky-top" style={{ zIndex: 100, top: '65px' }}>
   <div className="d-none d-lg-block" style={{ width: 250, zIndex: 1 }}>
    <div className="ml-1">
     <div className="bg-light p-0 m-0 d-flex">
      <div className="py-2 pl-3 w-100 bg-light text-dark fw-bold">
       {lang} Tutorial
      </div>
      <div
       className="py-1 text-center bg-warning"
       style={{ width: 60, cursor: 'pointer' }}
       onClick={() => history.push('/ebook/languages')}
      >
       <AiOutlineRollback
        className="t_grediantHover"
        style={{ fontSize: 28, color: 'red' }}
       />
      </div>
     </div>
    </div>
    <div
     className="sidebar ml-1"
     style={{ maxHeight: '90vh', overflowY: 'auto', paddingBottom: 200 }}
    >
     {courses &&
      courses.map((course) => (
       <NavLink
        to={`/ebook/${lang}/${course._id}`}
        key={course._id}
        className="fw-bold py-2 pl-3 d-block bg-secondary border"
        style={{ margin: '1px' }}
        activeClassName="bg-info text-dark"
        onClick={(e) => gotoEbookContent(e, course._id)}
       >
        {course.title}
       </NavLink>
      ))}
    </div>
   </div>
   <div
    className={`d-block d-lg-none position-fixed ${navSide ? 'navSide' : ''}`}
    style={{
     minWidth: 250,
     zIndex: 100,
     transition: '0.5s',
     left: -250,
     top: '65px',
    }}
   >
    {navSide ? (
     <div
      className="position-absolute bg-light rounded-right adminHover"
      style={{
       zIndex: 10,
       top: '35%',
       right: -32,
       fontSize: 20,
       padding: '6px 8px 8px 8px',
      }}
      onClick={() => setNavSide(false)}
     >
      <AiOutlineCaretLeft />
     </div>
    ) : (
     <div
      className="position-absolute bg-light rounded-right adminHover"
      style={{
       zIndex: 10,
       top: '35%',
       right: -38,
       fontSize: 20,
       padding: '6px 8px 8px 8px',
      }}
      onClick={() => setNavSide(true)}
     >
      <AiOutlineCaretRight />
     </div>
    )}
    <div className="ml-1">
     <div className="bg-light p-0 m-0 d-flex">
      <div className="py-2 pl-3 w-100 bg-light text-dark fw-bold">
       {lang} Tutorial
      </div>
      <div
       className="py-1 text-center bg-warning"
       style={{ width: 60, cursor: 'pointer' }}
       onClick={() => history.push('/ebook/languages')}
      >
       <AiOutlineRollback
        className="t_grediantHover"
        style={{ fontSize: 28, color: 'red' }}
       />
      </div>
     </div>
    </div>
    <div
     className="sidebar ml-1"
     style={{
      top: 76,
      height: '90vh',
      overflowY: 'auto',
      paddingBottom: 200,
      background: 'rgb(240,240,240)',
     }}
    >
     <ul className="list-group list-group-flush" style={{ paddingBottom: 80 }}>
      {courses &&
       courses.map((course) => (
        <NavLink
         to={`/ebook/${lang}/${course._id}`}
         key={course._id}
         className="py-2 pl-3 bg-secondary border fw-bold"
         style={{
          margin: '1px',
          background: '#fff',
         }}
         activeClassName="bg-info text-dark"
         onClick={(e) => gotoEbookContent(e, course._id)}
        >
         {course.title}
        </NavLink>
       ))}
     </ul>
    </div>
   </div>
  </div>
 );
};

export default CourseSidebar;
