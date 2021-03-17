import React from 'react';
import Triangle from './Triangle';
import Load from './Watch';

const LoaderFullScreen = () => {
 return (
  <>
   <div>
    <div
     className="w-100 h-100"
     style={{
      zIndex: 1,
      position: 'fixed',
      background: '#fff',
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
     }}
    >
     <div style={{ position: 'relative', top: '30%' }}>
      {/* <Triangle color="green" height={200} type="Triangle" width={200} /> */}
      <Load color="#282c34" height={100} type="Watch" width={100} />
     </div>
    </div>
   </div>
  </>
 );
};

export default LoaderFullScreen;
