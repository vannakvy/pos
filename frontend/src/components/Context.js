import React from 'react';
import { NavLink } from 'react-router-dom';

const Context = () => {
 return (
  <>
   <nav className="footer mt-4 p-5 rounded container-xl">
    <div className="mb-4">
     <h2 className="h1-responsive font-weight-bold text-center">
      Get In Tauch | Ask Question
     </h2>

     <p className="text-center w-responsive mx-auto mb-5">
      Do you have any questions? Please do not hesitate to contact us directly.
      Our team will come back to you within a matter of hours to help you.
     </p>
     <div className="row">
      <ul className="list-unstyled">
       <li className="col-md-3">
        <NavLink to="/">
         <i
          className="fa fa-facebook-f fa-2x text-primary"
          data-toggle="tooltip"
          data-placement="top"
          title="Facebook"
         ></i>
        </NavLink>
       </li>
      </ul>
      <ul className="list-unstyled">
       <li className="col-md-3">
        <i
         className="fab fa-instagram fa-2x text-primary"
         data-toggle="tooltip"
         data-placement="top"
         title="Instagram"
        ></i>
       </li>
      </ul>
      <ul className="list-unstyled">
       <li className="col-md-3">
        <i
         className="fab fa-instagram fa-2x text-primary"
         data-toggle="tooltip"
         data-placement="top"
         title="Instagram"
        ></i>
       </li>
      </ul>
      <ul className="list-unstyled">
       <li className="col-md-3">
        <i
         className="fab fa-instagram fa-2x text-primary"
         data-toggle="tooltip"
         data-placement="top"
         title="Instagram"
        ></i>
       </li>
      </ul>
     </div>
     <div className="row">
      <div className="col-md-9 mb-md-0 mb-5">
       <form id="contact-form" name="contact-form" action="#" method="POST">
        <div className="row">
         <div className="col-md-6">
          <div className="md-form mb-0">
           <input
            type="text"
            id="name"
            name="name"
            required
            className="form-control"
           />
           <label htmlFor="name" className="">
            Your name
           </label>
          </div>
         </div>

         <div className="col-md-6">
          <div className="md-form mb-0">
           <input
            type="text"
            id="email"
            name="email"
            required
            className="form-control"
           />
           <label htmlFor="email" className="">
            Your email
           </label>
          </div>
         </div>
        </div>

        <div className="row">
         <div className="col-md-12">
          <div className="md-form mb-0">
           <input
            type="text"
            id="subject"
            name="subject"
            required
            className="form-control"
           />
           <label htmlFor="subject" className="">
            Subject
           </label>
          </div>
         </div>
        </div>

        <div className="row">
         <div className="col-md-12">
          <div className="md-form">
           <textarea
            type="text"
            id="message"
            name="message"
            required
            rows="2"
            className="form-control md-textarea"
           ></textarea>
           <label htmlFor="message">Your message</label>
          </div>
         </div>
        </div>

        <div className="text-center text-md-left">
         <button
          type="submit"
          className="btn w-25 mr-auto ml-auto d-block grediant rounded text-dark"
         >
          Send
         </button>
        </div>
       </form>
      </div>

      <div className="col-md-3 text-center">
       <ul className="list-unstyled mb-0">
        <li>
         <i className="fas fa-map-marker-alt fa-2x _text-sea"></i>
         <p>Preah Dak, Banteay Srei, Siem Reap</p>
        </li>

        <li>
         <i className="fas fa-phone mt-4 fa-2x _text-sea"></i>
         <p>081 33 61 31</p>
        </li>

        <li>
         <i className="fas fa-envelope mt-4 fa-2x _text-sea"></i>
         <p>vannakvy2020​@gmail.com</p>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </nav>
  </>
 );
};

export default Context;
