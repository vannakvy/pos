import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarRowComponents = ({ text, icon, goTo, mar, id }) => {
 return (
  <>
   <NavLink
    to={`${goTo}`}
    style={{
     fontSize: '12px',
     padding: '6px 16px 8px 16px',
    }}
    className="nav-link font-weight-bold adminHover"
    activeClassName="grediant"
    id={`${id}`}
   >
    <i
     className={`${icon} position-relative ml-4`}
     style={{ fontSize: '13px', top: '3px' }}
    ></i>
    {mar ? (
     <span style={{ marginLeft: '15px' }}>{text ? text : 'Simple'}</span>
    ) : (
     <span style={{ marginLeft: '15px' }}>{text ? text : 'Simple'}</span>
    )}
   </NavLink>
  </>
 );
};

export default SideBarRowComponents;
