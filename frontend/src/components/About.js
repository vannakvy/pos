import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
 return (
  <>
   <div className="about container">
    <h4 className="text-center my-5">OUR TEAM</h4>
    <div className="about_content row">
     <div className="col-md-3 col-sm-6 mt-1">
      <div className="rounded_img">
       <img
        className="p-1 col-sm-12 offset-sm-0 col-8 offset-2"
        src="https://www.computerhope.com/jargon/g/guest-user.jpg"
        alt=""
        style={{ width: '100%', height: '100%' }}
       />
      </div>
      <h4 className="text-center mt-1">Mr. Vy Vannak</h4>
      <p className="text-center">Software Engineer</p>
      <NavLink className="btn _bg-sea d-block text-light _btn_seeMore" to="/">
       See More
      </NavLink>
     </div>

     <div className="col-md-3 col-sm-6 mt-1">
      <div className="rounded_img">
       <img
        className="p-1 col-sm-12 offset-sm-0 col-8 offset-2"
        src="https://www.computerhope.com/jargon/g/guest-user.jpg"
        alt=""
        style={{ width: '100%', height: '100%' }}
       />
      </div>
      <h4 className="text-center mt-1">Mr. Vy Vannak</h4>
      <p className="text-center">Software Engineer</p>
      <NavLink className="btn _bg-sea d-block text-light _btn_seeMore" to="/">
       See More
      </NavLink>
     </div>

     <div className="col-md-3 col-sm-6 mt-1">
      <div className="rounded_img">
       <img
        className="p-1 col-sm-12 offset-sm-0 col-8 offset-2"
        src="https://www.computerhope.com/jargon/g/guest-user.jpg"
        alt=""
        style={{ width: '100%', height: '100%' }}
       />
      </div>
      <h4 className="text-center mt-1">Mr. Vy Vannak</h4>
      <p className="text-center">Software Engineer</p>
      <NavLink className="btn _bg-sea d-block text-light _btn_seeMore" to="/">
       See More
      </NavLink>
     </div>

     <div className="col-md-3 col-sm-6 mt-1">
      <div className="rounded_img">
       <img
        className="p-1 col-sm-12 offset-sm-0 col-8 offset-2"
        src="https://www.computerhope.com/jargon/g/guest-user.jpg"
        alt=""
        style={{ width: '100%', height: '100%' }}
       />
      </div>
      <h4 className="text-center mt-1">Mr. Vy Vannak</h4>
      <p className="text-center">Software Engineer</p>
      <NavLink className="btn _bg-sea d-block text-light _btn_seeMore" to="/">
       See More
      </NavLink>
     </div>
    </div>
   </div>
  </>
 );
};

export default About;
