import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';

const NavEshop = () => {
 return (
  <>
   <li className="nav-item">
    <NavLink className="nav-link navbar_link text-info" to="/eshop/cart">
     <MdShoppingCart className="text-warning" style={{ fontSize: 18 }} />
    </NavLink>
   </li>
  </>
 );
};

export default NavEshop;
