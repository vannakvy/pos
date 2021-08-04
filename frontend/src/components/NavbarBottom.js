import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { navbarList } from '../actions/navbarActions';
import { MdOndemandVideo } from 'react-icons/md';
import { BiBookAlt } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';

const NavbarBottom = () => {
 const dispatch = useDispatch();

 useEffect(() => {}, []);

 return (
  <div
   className="fixed-bottom bg-dark text-center text-light d-md-none"
   style={{ padding: '7px 3px 10px 3px' }}
  >
   <NavLink
    exact
    style={{ padding: '8px 15px', color: '#fff' }}
    to="/"
    className="fs-4"
    activeClassName="activeNav"
    onClick={() => dispatch(navbarList('Dashboard'))}
   >
    <IoHomeOutline style={{ color: '#fff' }} />
   </NavLink>
   <NavLink
    style={{ padding: '8px 15px', color: '#fff' }}
    to="/elearning"
    className="fs-4"
    activeClassName="activeNav"
   >
    <MdOndemandVideo style={{ color: '#fff' }} />
   </NavLink>
   <NavLink
    style={{ padding: '8px 15px', color: '#fff' }}
    to="/ebook"
    className="fs-4"
    activeClassName="activeNav"
   >
    <BiBookAlt style={{ color: '#fff' }} />
   </NavLink>
   <NavLink
    style={{ padding: '8px 15px', color: '#fff' }}
    to="/eshop"
    className="fs-4"
    activeClassName="activeNav"
   >
    <FiShoppingCart style={{ color: '#fff' }} />
   </NavLink>
  </div>
 );
};

export default NavbarBottom;
