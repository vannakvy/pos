import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navbarList } from '../../actions/navbarActions';

const NavElearning = () => {
 const dispatch = useDispatch();
 return (
  <>
   <li className="nav-item active">
    <NavLink
     onClick={() => dispatch(navbarList('Eshop'))}
     className="nav-link navbar_link"
     to="/eshop"
    >
     ទិញទំនិញ
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink
     onClick={() => dispatch(navbarList('Ebook'))}
     className="nav-link navbar_link"
     to="/ebook"
    >
     រៀនជាការអាន
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink className="nav-link navbar_link" to="/courses">
     មុខវិទ្យា
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink className="nav-link navbar_link" to="/mycourses">
     មុខវិទ្យារបស់ខ្ញុំ
    </NavLink>
   </li>
  </>
 );
};

export default NavElearning;
