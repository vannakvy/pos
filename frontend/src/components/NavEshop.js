import React from 'react';

import { NavLink } from 'react-router-dom';
import { navbarList } from '../actions/navbarActions';
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const NavEshop = () => {
 const dispatch = useDispatch();
 const userLogin = useSelector((state) => state.userLogin)
 const { userInfo } = userLogin
 return (
  <>
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
   <li className="nav-item active">
    <NavLink className="nav-link" to="/eshop">
     PRODUCTS
    </NavLink>
   </li>
 
   <li className="nav-item">
    <NavLink className="nav-link" to="/eshop/cart">
     CART
    </NavLink>
   </li>
  
  </>
 );
};

export default NavEshop;
