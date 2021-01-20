import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navbarList } from '../actions/navbarActions';

const NavDash = () => {
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
     onClick={() => dispatch(navbarList('Elearning'))}
     className="nav-link"
     to="/elearning"
    >
     E-LEARNING
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
  </>
 );
};

export default NavDash;
