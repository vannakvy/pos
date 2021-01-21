import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navbarList } from '../../actions/navbarActions';
import './NavEbook.css';

const NavEbook = () => {
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
   <li className="nav-item active">
    <NavLink className="nav-link" to="/languages">
     LANGUAGES
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink className="nav-link" to="/quiz">
     QUiZ
    </NavLink>
   </li>
  </>
 );
};

export default NavEbook;
