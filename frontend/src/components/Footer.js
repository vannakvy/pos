import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';

const Footer = () => {
 return (
  <>
   <div
    className="container-fluid"
    style={{
     minHeight: '10rem',
     padding: '4rem 0 1rem 0',
     // background: "black",
    }}
   >
    <div className="mx-auto p-1" style={{ maxWidth: '1600px' }}>
     <div className="row text-center text-md-center w-100 p-0 m-0">
      <div className="col-lg-3">
       <h3>CODING CAMBODIA</h3>
      </div>
      <div className="col-lg-3">
       <h5 className="text-dark">Support</h5>
       <p>Contact Us</p>
       <p>FAQ</p>
       <p>Downloads</p>
       <p>Locate A Dealer</p>
       <p>Product Registration</p>
       <p>Spare Parts</p>
      </div>
      <div className="col-lg-3">
       <h5 className="text-dark">Coding Cambodia</h5>
       <p>About Coding</p>
       <p>Locate A Dealer</p>
       <p>Product Registration</p>
       <p>Spare Parts</p>
      </div>
      <div className="col-lg-3">
       <h5 className="text-dark">Stay up to date of Coding Cambodia</h5>
       {/* <input
        type="text"
        className="w-100 form-control"
        placeholder="Enter your Email"
       /> */}
       <Link
        className="btn mt-3 w-100  text-md-center grediant rounded text-dark"
        // style={{ outline: 'none' }}
        href="/register"
       >
        SIGN UP NOW
       </Link>
      </div>
     </div>
     <hr />
     <div className="text-center mt-4">
      <i
       style={{ fontSize: '20px', color: '#4064ac' }}
       className=" mx-4 fab fa-facebook-f"
      ></i>
      <i
       style={{
        fontSize: '20px',
        color: '#e94057',
       }}
       className=" mx-4 fab fa-instagram"
      ></i>
      <i
       style={{ fontSize: '20px', color: '#1d9ceb' }}
       className=" mx-4 fab fa-twitter"
      ></i>
      <i
       style={{ fontSize: '20px', color: '#f70000' }}
       className=" mx-4 fab fa-youtube"
      ></i>
      <Typography
       variant="body2"
       align="center"
       className=" mt-2"
       style={{ fontSize: '12px' }}
      >
       {'Copyright © '}
       <Link color="inherit" href="/">
        Coding Cambodia
       </Link>{' '}
       {new Date().getFullYear()}
       {'.'}
      </Typography>
     </div>
    </div>
   </div>
  </>
 );
};

export default Footer;
