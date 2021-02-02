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
     className="nav-link navbar_link text-dark"
     to="/eshop"
    >
     ទិញទំនិញ
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink
     onClick={() => dispatch(navbarList('Elearning'))}
     className="nav-link navbar_link text-dark"
     to="/elearning"
    >
     រៀនជាវីឌីអូ
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink className="nav-link navbar_link text-info" to="/languages">
     មុខវិទ្យា
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink className="nav-link navbar_link text-info" to="/quiz">
     សំនួរ
    </NavLink>
   </li>
  </>
 );
};

export default NavEbook;
