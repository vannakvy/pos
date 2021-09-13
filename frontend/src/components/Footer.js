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
    className="container-fluid"
    style={{
     minHeight: '10rem',
     padding: '4rem 0 1rem 0',
     color: '#000',
    }}
   >
    <div className="mx-auto p-1" style={{ maxWidth: '1600px' }}>
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
