import React from 'react';

import { NavLink } from 'react-router-dom';

const NavEshop = () => {
 return (
  <>
   <li className="nav-item">
    <NavLink className="nav-link navbar_link text-info" to="/eshop/cart">
     កន្ដ្រក
    </NavLink>
   </li>
  </>
 );
};

export default NavEshop;
