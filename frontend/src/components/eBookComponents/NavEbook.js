import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { navbarList } from '../../actions/navbarActions';
import './NavEbook.css';

const NavEbook = () => {
 const dispatch = useDispatch();
 return (
  <>
   <li className="nav-item ">
    <div className="dropdown">
     <button
      className="btn-sm btn-outline-info dropdown-toggle"
      style={{ fontSize: '18px' }}
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
     >
      មុខវិទ្យារៀន
     </button>
     <div
      className="dropdown-menu py-2 px-3"
      aria-labelledby="dropdownMenuButton"
     >
      <NavLink className="dropdown-item" to="#">
       Programming
      </NavLink>
      <NavLink className="dropdown-item" to="#">
       Embedded System
      </NavLink>
      <NavLink className="dropdown-item" to="#">
       Scratch Programming
      </NavLink>

      <NavLink className="dropdown-item" to="#">
       AI
      </NavLink>
      <hr />
      <NavLink className="dropdown-item" to="#">
       Electectronics
      </NavLink>
      <NavLink className="dropdown-item" to="#">
       Projects
      </NavLink>
     </div>
    </div>
   </li>
   <li className="nav-item active">
    <NavLink
     onClick={() => dispatch(navbarList('Eshop'))}
     className="nav-link"
     to="/eshop"
    >
     E-SHOP
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink
     onClick={() => dispatch(navbarList('Elearning'))}
     className="nav-link"
     to="/elearning"
    >
     E-LEARNING
    </NavLink>
   </li>
   <li className="nav-item active">
    <NavLink className="nav-link" to="/languages">
     LANGUAGES
    </NavLink>
   </li>
   <li className="nav-item">
    <NavLink className="nav-link" to="/quiz">
     QUiZ
    </NavLink>
   </li>
  </>
 );
};

export default NavEbook;
