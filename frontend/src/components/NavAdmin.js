import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navbarList } from '../actions/navbarActions';

const NavAdmin = () => {
 const dispatch = useDispatch();

 return (
  <>
   <li className="nav-item">
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
     onClick={() => dispatch(navbarList('Elearning'))}
     className="nav-link navbar_link"
     to="/elearning"
    >
     រៀនជាវីដីអូ
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink
     onClick={() => dispatch(navbarList('Ebook'))}
     className="nav-link navbar_link"
     to="/ebook"
    >
     រៀនជាកាអាន
    </NavLink>
   </li>
  </>
 );
};

export default NavAdmin;
