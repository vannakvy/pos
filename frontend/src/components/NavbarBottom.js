import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { navbarList } from '../actions/navbarActions';
import { MdOndemandVideo } from 'react-icons/md';
import { IoMdPlay } from 'react-icons/io';
import { BiBookAlt } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillHtml5 } from 'react-icons/ai';
import { MdVideoLibrary } from 'react-icons/md';
import { MdQuestionAnswer } from 'react-icons/md';
import { FaCartArrowDown } from 'react-icons/fa';

const NavbarBottom = () => {
 const dispatch = useDispatch();
 const { loading, error, navbar } = useSelector((state) => state.navbarList);
 const { userInfo } = useSelector((state) => state.userLogin);

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
    <FaHome style={{ color: '#fff' }} />
   </NavLink>

   {navbar === 'Dashboard' && (
    <>
     <NavLink
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/elearning"
      className="fs-4"
      activeClassName="activeNav"
      onClick={() => dispatch(navbarList('Elearning'))}
     >
      <MdOndemandVideo style={{ color: '#fff' }} />
     </NavLink>
     <NavLink
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/ebook"
      className="fs-4"
      activeClassName="activeNav"
      onClick={() => dispatch(navbarList('Ebook'))}
     >
      <BiBookAlt style={{ color: '#fff' }} />
     </NavLink>
     <NavLink
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/eshop"
      className="fs-4"
      activeClassName="activeNav"
      onClick={() => dispatch(navbarList('Eshop'))}
     >
      <FiShoppingCart style={{ color: '#fff' }} />
     </NavLink>
    </>
   )}
   {navbar === 'Elearning' && (
    <>
     <NavLink
      exact
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/elearning"
      className="fs-4"
      activeClassName="activeNav"
      onClick={() => dispatch(navbarList('Elearning'))}
     >
      <MdOndemandVideo style={{ color: '#fff' }} />
     </NavLink>
     <NavLink
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/elearning/courses"
      className="fs-4"
      activeClassName="activeNav"
     >
      <IoMdPlay style={{ color: '#fff' }} />
     </NavLink>
     <NavLink
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/elearning/mycourses"
      className="fs-4"
      activeClassName="activeNav"
     >
      <MdVideoLibrary style={{ color: '#fff' }} />
     </NavLink>
    </>
   )}

   {navbar === 'Ebook' && (
    <>
     <NavLink
      exact
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/ebook"
      className="fs-4"
      activeClassName="activeNav"
      onClick={() => dispatch(navbarList('Ebook'))}
     >
      <BiBookAlt style={{ color: '#fff' }} />
     </NavLink>
     <NavLink
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/ebook/courses"
      className="fs-4"
      activeClassName="activeNav"
     >
      <AiFillHtml5 style={{ color: '#fff' }} />
     </NavLink>
     <NavLink
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/ebook/quiz"
      className="fs-4"
      activeClassName="activeNav"
     >
      <MdQuestionAnswer style={{ color: '#fff' }} />
     </NavLink>
    </>
   )}
   {navbar === 'Eshop' && (
    <>
     <NavLink
      exact
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/eshop"
      className="fs-4"
      activeClassName="activeNav"
      onClick={() => dispatch(navbarList('Eshop'))}
     >
      <FiShoppingCart style={{ color: '#fff' }} />
     </NavLink>
     <NavLink
      style={{ padding: '8px 15px', color: '#fff' }}
      to="/eshop/cart"
      className="fs-4"
      activeClassName="activeNav"
     >
      <FaCartArrowDown style={{ color: '#fff' }} />
     </NavLink>
    </>
   )}
  </div>
 );
};

export default NavbarBottom;
