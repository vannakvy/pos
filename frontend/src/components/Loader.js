import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ wd, hg, color = false, mg = false }) => {
 return (
  <Spinner
   animation="border"
   role="status"
   aria-hidden="true"
   style={{
    width: `${wd}px`,
    height: `${hg}px`,
    margin: `${mg ? mg : 'auto'}`,
    display: 'block',
    color: color || 'rgb(0,191,255)',
   }}
  >
   <span className="sr-only">Loading...</span>
  </Spinner>
 );
};

export default Loader;
