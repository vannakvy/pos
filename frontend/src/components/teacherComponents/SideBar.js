import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
 return (
  <>
   <NavLink
    to="/teacherCourses"
    className="kh bg-dark text-light d-block px-3 py-2 rounded mb-1"
    activeClassName="grediant"
    style={{ fontSize: 16, fontWeight: 700 }}
   >
    មុខវិទ្យា
   </NavLink>
   <NavLink
    to="/teacherStudents"
    className="kh bg-dark text-light d-block px-3 py-2 rounded"
    activeClassName="grediant"
    style={{ fontSize: 16, fontWeight: 700 }}
   >
    សិស្ស
   </NavLink>
  </>
 );
};

export default SideBar;
