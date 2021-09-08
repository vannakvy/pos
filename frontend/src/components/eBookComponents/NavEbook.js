import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavEbook.css';

const NavEbook = () => {
 return (
  <>
   <li className="nav-item active">
    <NavLink className="nav-link navbar_link text-info" to="/ebook/languages">
     មុខវិទ្យា
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink className="nav-link navbar_link text-info" to="/ebook/quiz">
     សំនួរ
    </NavLink>
   </li>
  </>
 );
};

export default NavEbook;
