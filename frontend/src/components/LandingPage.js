import React from 'react';
import { Button } from '@material-ui/core';

const LandingPage = () => {
 return (
  <>
   <div className="row mt-3 align-items-center">
    <div className="col-lg-6 col-sm-12">
     <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
       <h3>Welcome to technology learning site</h3>
       <p className="lead">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum ipsam
        quas pariatur nihil repellat officiis libero nisi deleniti
       </p>
       <Button
        variant="contained"
        color="secondary"
        style={{
         background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        }}
       >
        Click me
       </Button>
      </div>
      <div className="col-md-2"></div>
     </div>
    </div>
    <div className="col-lg-6 col-sm-12 text-center">
     <img
      className="my-5"
      style={{
       width: '90%',
       //   height: "50%",
      }}
      src="/uploads\image-1608992755531.jpg"
      alt=""
     />
    </div>
   </div>
  </>
 );
};

export default LandingPage;
