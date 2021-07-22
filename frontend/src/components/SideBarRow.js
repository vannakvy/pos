import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarRow = ({ text, icon, mar, id, activeNav }) => {
 return (
  <>
   <div
    style={{
     fontSize: '17px',
     padding: '6px 16px 8px 16px',
     marginBottom: '2px',
    }}
    className="nav-link font-weight-bold rounded-top bg-dark text-light"
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
   </div>
  </>
 );
};

export default SideBarRow;
