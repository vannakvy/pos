import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navbarList } from '../actions/navbarActions';
import { logout } from '../actions/userActions/userActions';
import Loader from './Loader';
import NavDash from './NavDash';
import Message from './Message';
import NavElearning from './eLearningComponents/NavElearning';
import NavEshop from './NavEshop';
import NavEbook from './eBookComponents/NavEbook';
import NavAdmin from './NavAdmin';
import Header from '../components/eShopComponents/Header';

const Navbar = () => {
 const dispatch = useDispatch();

 const navbarL = useSelector((state) => state.navbarList);
 const { loading, error, navbar } = navbarL;

 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;
 useEffect(() => {}, [userLogin]);

 return (
  <>
   <nav className="navbar navbar-expand-lg shadow-sm bg-light sticky-top">
    <NavLink
     className="navbar-brand"
     to="/"
     onClick={() => dispatch(navbarList('Dashboard'))}
    >
     <img
      className="ml-1 mr-2"
      style={{ width: '30px' }}
      src="https://globaleducationcoalition.unesco.org/uploads/115_Code.org_color_logo_pse1XB.tif?v=8bu8l53Q94dNSzYfuj6LewLvn417MDQFBFyqOhfXZPQ"
      alt=""
     />
     <span className="d-none d-xl-inline-block">CODING CAMBODIA</span>
     <span className="d-inline-block d-xl-none">C-CAMBO</span>
    </NavLink>
    <button
     className="navbar-toggler"
     type="button"
     data-toggle="collapse"
     data-target="#navbarColor02"
     aria-controls="navbarColor02"
     aria-expanded="false"
     aria-label="Toggle navigation"
    >
     <span className="navbar-toggler-icon">
      <i className="fas fa-bars" style={{ fontSize: '25px' }}></i>
     </span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
     <ul className="navbar-nav ml-auto">
      {loading ? (
       <Loader wd={45} hg={45} />
      ) : error ? (
       <Message variant="danger">{error}</Message>
      ) : navbar === 'Dashboard' ? (
       <NavDash />
      ) : navbar === 'Elearning' ? (
       <NavElearning />
      ) : navbar === 'Eshop' ? (
       <NavEshop />
      ) : navbar === 'Ebook' ? (
       <NavEbook />
      ) : navbar === 'Admin' ? (
       <NavAdmin />
      ) : (
       ''
      )}
      {loading ? (
       <Loader wd={45} hg={45} />
      ) : error ? (
       <Message variant="danger">{error}</Message>
      ) : navbar === 'Admin' ? null : (
       <>
        {userInfo && userInfo.isAdmin ? (
         <li className="nav-item">
          <NavLink
           to="/adminUsers"
           className="nav-link px-4 rounded grediant adminHover"
           onClick={() => dispatch(navbarList('Admin'))}
          >
           ADMIN
          </NavLink>
         </li>
        ) : null}
       </>
      )}
<<<<<<< HEAD
        <li className="nav-item">
         <NavLink className="nav-link" to="/covid">
          COVID
         </NavLink>
        </li>

=======
>>>>>>> 0c716713cbe4ba77add1e3dbc126c26968b3fa9b

      {userInfo ? (
       <>
        <div className="dropdown">
         <button
          style={{ padding: '8px', border: 'none', fontSize: '17px' }}
          className="bg-warning px-4 rounded dropdown-toggle"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
         >
          {userInfo.name}
         </button>
         <div
          className="dropdown-menu p-2"
          aria-labelledby="dropdownMenuButton"
         >
          <a className="dropdown-item" href="/eshop/profile">
           My Order
          </a>
          <a className="dropdown-item" href="/logout">
           Profile
          </a>
          <a className="dropdown-item" onClick={() => dispatch(logout())}>
           Log Out
          </a>
         </div>
        </div>
        {/* <li className="nav-item">
        <NavLink
         className="nav-link px-4 rounded logoutHover"
         style={{
          background: 'linear-gradient(to left, #ed213a, #93291e)',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
         }}
         onClick={() => dispatch(logout())}
         to="/"
        >
         LOGOUT
        </NavLink>
       </li> */}
       </>
      ) : (
       <>
        <li className="nav-item">
         <NavLink
          className="nav-link px-4 rounded"
          to="/login"
          style={{
           background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
           boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          }}
         >
          LOGIN
         </NavLink>
        </li>
        <li className="nav-item">
         <NavLink className="nav-link" to="/register">
          SIGN UP
         </NavLink>
        </li>
       </>
      )}
     </ul>
    </div>
   </nav>
  </>
 );
};

export default Navbar;
