import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navbarList } from '../actions/navbarActions';

const NavElearning = () => {
 const dispatch = useDispatch();
 return (
  <>
   <li className="nav-item active">
    <NavLink
     onClick={() => dispatch(navbarList('Eshop'))}
     className="nav-link"
     to="/eshop"
    >
     E-SHOP
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink
     onClick={() => dispatch(navbarList('Ebook'))}
     className="nav-link"
     to="/ebook"
    >
     E-BOOK
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink className="nav-link" to="/courses">
     COURSES
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink className="nav-link" to="/projects">
     PROJECTS
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink className="nav-link" to="/mycourses">
     MY-COURSES
    </NavLink>
   </li>
  </>
 );
};

export default NavElearning;
