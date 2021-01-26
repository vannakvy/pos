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
     className="nav-link navbar_link"
     to="/eshop"
    >
     ទិញទំនិញ់
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink
     onClick={() => dispatch(navbarList('Elearning'))}
     className="nav-link navbar_link"
     to="/elearning"
    >
     រៀនជាវីដីអូ
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink className="nav-link navbar_link" to="/languages">
     មុខវិទ្យា
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink className="nav-link navbar_link" to="/quiz">
     សំនួរ
    </NavLink>
   </li>
  </>
 );
};

export default NavEbook;
