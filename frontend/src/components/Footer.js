import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

const Footer = () => {
 const { userInfo } = useSelector((state) => state.userLogin);

 return (
  <>
   <div
    className="container-fluid fw-bold"
    style={{
     minHeight: '10rem',
     padding: '4rem 0 1rem 0',
     color: '#000',
     background: 'rgb(218,218,218)',
    }}
   >
    <div className="mx-auto p-1" style={{ maxWidth: '1600px' }}>
     <div className="row text-center text-md-center w-100 p-0 m-0">
      <div className="col-lg-3">
       <h3 className="text-info kh">CODING CAMBODIA</h3>
      </div>
      <div className="col-lg-3">
       <h4 className="text-info kh">Support</h4>
       <p>Contact Us</p>
       <p>FAQ</p>
       <p>Downloads</p>
       <p>Locate A Dealer</p>
       <p>Product Registration</p>
       <p>Spare Parts</p>
      </div>
      <div className="col-lg-3">
       <h4 className="text-info kh">Coding Cambodia</h4>
       <p>About Coding</p>
       <p>Locate A Dealer</p>
       <p>Product Registration</p>
       <p>Spare Parts</p>
      </div>
      <div className="col-lg-3">
       <h4 className="text-info kh">Stay up to date of Coding Cambodia</h4>
       {userInfo && !userInfo._id ? (
        <Link
         className="btn mt-3 w-100  text-md-center grediant rounded text-dark"
         // style={{ outline: 'none' }}
         href="/register"
        >
         SIGN UP NOW
        </Link>
       ) : (
        <h3 className="text-info kh mt-5">{userInfo && userInfo.name}</h3>
       )}
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
      <p className="mt-2 ubuntu" style={{ fontSize: '12px' }}>
       {'Copyright © '}
       <Link className="text-info" href="/">
        Coding Cambodia
       </Link>{' '}
       {new Date().getFullYear()}
       {'.'}
      </p>
     </div>
    </div>
   </div>
  </>
 );
};

export default Footer;
