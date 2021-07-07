import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Sidebar.css';
import { IoBackspace } from 'react-icons/io5';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { AiOutlineCaretLeft } from 'react-icons/ai';

const CourseSidebar = ({ courses, lang }) => {
 const [navSide, setNavSide] = useState(false);
 const history = useHistory();
 return (
  <div className="sticky-top" style={{ top: '72px', zIndex: 1 }}>
   <div className="d-none d-lg-block" style={{ minWidth: 250, zIndex: 1 }}>
    <div className="ml-1">
     <div className="bg-light p-0 m-0 d-flex">
      <div className="py-2 pl-3 w-100 bg-dark text-light">{lang} Tutorial</div>
      <div
       className="py-1 text-center bg-light"
       style={{ width: 60, cursor: 'pointer' }}
       onClick={() => history.push('/ebook')}
      >
       <IoBackspace
        className="t_grediantHover"
        style={{ fontSize: 28, color: 'red' }}
       />
      </div>
     </div>
    </div>
    <div
     className="sidebar ml-1"
     style={{ top: 76, height: '90vh', overflowY: 'auto' }}
    >
     {courses &&
      courses.map((course) => (
       <NavLink
        to={`/ebook/${lang}/${course._id}`}
        key={course._id}
        className="py-2 pl-3 nav-link bg-light"
        style={{ margin: '1px' }}
        activeClassName="bg-dark text-light"
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
     zIndex: 1,
     transition: '0.5s',
     left: -250,
     top: '72px',
    }}
   >
    {navSide ? (
     <div
      className="position-absolute bg-light rounded-right adminHover"
      style={{
       zIndex: 10,
       top: '35%',
       right: -38,
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
      <div className="py-2 pl-3 w-100 bg-dark text-light">{lang} Tutorial</div>
      <div
       className="py-1 text-center bg-light"
       style={{ width: 60, cursor: 'pointer' }}
       onClick={() => history.push('/ebook')}
      >
       <IoBackspace
        className="t_grediantHover"
        style={{ fontSize: 28, color: 'red' }}
       />
      </div>
     </div>
    </div>
    <div
     className="sidebar ml-1 bg-light"
     style={{ top: 76, height: '90vh', overflowY: 'auto' }}
    >
     <ul className="list-group list-group-flush" style={{ paddingBottom: 80 }}>
      {courses &&
       courses.map((course) => (
        <NavLink
         to={`/ebook/${lang}/${course.title}`}
         key={course._id}
         className="py-2 pl-3 nav-link bg-light"
         style={{ margin: '1px' }}
         activeClassName="bg-dark text-light"
         onClick={() => setNavSide(false)}
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
