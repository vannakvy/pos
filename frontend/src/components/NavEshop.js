import React from 'react';

import { NavLink } from 'react-router-dom';
import { navbarList } from '../actions/navbarActions';
import { useDispatch } from 'react-redux';

const NavEshop = () => {
 const dispatch = useDispatch();
 return (
  <>
   <li className="nav-item">
    <NavLink
     onClick={() => dispatch(navbarList('Elearning'))}
     className="nav-link navbar_link text-dark"
     to="/elearning"
    >
     រៀនជាវីឌីអូ
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink
     onClick={() => dispatch(navbarList('Ebook'))}
     className="nav-link navbar_link text-dark"
     to="/ebook"
    >
     រៀនជាកាអាន
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink
     onClick={() => dispatch(navbarList('Eshop'))}
     className="nav-link navbar_link text-info"
     to="/eshop"
    >
     ទិញទំនិញ
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink className="nav-link navbar_link text-info" to="/eshop/cart">
     កន្ដ្រក
    </NavLink>
   </li>
  </>
 );
};

export default NavEshop;
