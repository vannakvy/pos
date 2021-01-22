import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarRow = ({ text, icon, goTo, mar, id, activeNav }) => {
 return (
  <>
   <NavLink
    to={`${goTo}`}
    style={{
     fontSize: '17px',
     padding: '6px 16px 8px 16px',
     marginBottom: '2px',
    }}
    className="nav-link font-weight-bold rounded adminHover"
    activeClassName="grediant"
    id={`${id}`}
   >
    <i
     className={
      activeNav === id
       ? `${icon} position-relative fa-spin`
       : `${icon} position-relative`
     }
     style={{ fontSize: '20px', top: '1px' }}
    ></i>
    {mar ? (
     <span style={{ marginLeft: '23px' }}>{text ? text : 'Simple'}</span>
    ) : (
     <span style={{ marginLeft: '20px' }}>{text ? text : 'Simple'}</span>
    )}
   </NavLink>
  </>
 );
};

export default SideBarRow;
