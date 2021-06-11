import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { navbarList } from '../../actions/navbarActions';

const NavElearning = () => {
 const dispatch = useDispatch();
 const userLogin = useSelector((state) => state.userLogin);
 return (
  <>
   <li className="nav-item active">
    <NavLink className="nav-link navbar_link text-info" to="/elearning/courses">
     មុខវិទ្យា
    </NavLink>
   </li>
   {userLogin.userInfo === null ? null : (
    <li className="nav-item active">
     <NavLink
      className="nav-link navbar_link text-info"
      to="/elearning/mycourses"
     >
      មុខវិទ្យារបស់ខ្ញុំ
     </NavLink>
    </li>
   )}
  </>
 );
};

export default NavElearning;
