import React from 'react';
import { NavLink } from 'react-router-dom';
import ConvertNum from './eLearningComponents/ConvertNum';

const SideBarRowComponents = ({
 text = 'Simple',
 icon,
 goTo,
 mar = true,
 num = null,
}) => {
 return (
  <>
   <NavLink
    to={`${goTo}`}
    style={{
     fontSize: '12px',
     padding: '6px 16px 8px 16px',
    }}
    className="nav-link font-weight-bold adminHover rounded-sm"
    activeClassName="grediant"
   >
    <i
     className={`${icon} position-relative ml-4`}
     style={{ fontSize: '13px', top: '3px', marginRight: '15px' }}
    ></i>
    {text}{' '}
    {num === null ? (
     ''
    ) : (
     <>
      (
      <span className="text-danger">
       <ConvertNum num={num} />
      </span>
      )
     </>
    )}
   </NavLink>
  </>
 );
};

export default SideBarRowComponents;
