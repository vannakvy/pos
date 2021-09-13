import React from 'react';
import './newFooter.css';
import learningImg from '../img/free-ebook.png';
import Message from './Message';
import axios from 'axios';
const NewFooter = () => {
 const [email, setEmail] = React.useState('');
 const [message, setMessage] = React.useState('');
 const addEmail = async () => {
  try {
   if (email !== '') {
    const { data } = await axios.post(`/api/subscrip`, { email }, {});
    if (data) {
     setEmail('');
     setMessage('Subscribe បានជោគជ័យ');
    }
   }
  } catch (error) {
   alert(error.message);
   setMessage('Subscribe មិនបានជោគជ័យ');
  }
 };

 return (
  <>
   {message && <Message>{message}</Message>}
   <footer class="footer-section">
    <div class="container">
     <div class="footer-cta py-5">
      <div class="row">
       <div class="col-sm-6 col-xl-4 mb-30">
        <div class="single-cta">
         <i class="fas fa-map-marker-alt"></i>
         <div class="cta-text">
          <p className="eshop-font text-light" style={{ fontSize: 18 }}>
           ស្វែងរក​ ពួកយើង
          </p>
          <span>ភូមិថ្នល់បណ្តោយ ឃុំព្រះដាក់ ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប</span>
         </div>
        </div>
       </div>
       <div class="col-sm-6 col-xl-4 mb-30">
        <div class="single-cta">
         <i class="fas fa-phone"></i>
         <div class="cta-text">
          <p className="eshop-font text-light" style={{ fontSize: 18 }}>
           ទាក់ទងតាមទូរស័ព្ទ
          </p>
          <span>(+855)081 33 61 31</span>
         </div>
        </div>
       </div>
       <div class="col-sm-6 col-xl-4 mb-30">
        <div class="single-cta">
         <i class="fas fa-envelope-open"></i>
         <div class="cta-text">
          <p className="eshop-font text-light" style={{ fontSize: 18 }}>
           ទាក់ទងតាមម៉ែល
          </p>
          <span>vannakvy2020@gmail.com</span>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div class="footer-content py-5">
      <div class="row">
       <div class="col-lg-4">
        <div class="footer-widget">
         <div class="footer-logo">
          <a href="#">
           <img src={learningImg} class="img-fluid" width="300" height="200" />
          </a>
         </div>
         <div class="footer-text">
          <p>
           យើងនឹងប្តេជ្ញាបង្កើតមេរៀន ដែលមានគុណភាពឲ្យកាន់តែច្រើន
           ដើម្បីផ្តល់ជួនចំណេះដឹងដល់ប្រជាពលរដ្ឌខ្មែរ
          </p>
         </div>
         <div class="footer-social-icon">
          <span>Follow us</span>
          <a href="#">
           <i class="fab fa-facebook-f facebook-bg"></i>
          </a>
          <a href="#">
           <i class="fab fa-twitter twitter-bg"></i>
          </a>
          <a href="#">
           <i class="fab fa-instagram instagram-bg"></i>
          </a>
         </div>
        </div>
       </div>
       <div class="col-lg-4">
        <div class="footer-widget">
         <div class="footer-widget-heading">
          <h3>Useful Links</h3>
         </div>
         <ul>
          <li>
           <a href="#">ទំព័រដើម</a>
          </li>
          <li>
           <a href="#">ការរៀនជាការអាន</a>
          </li>
          <li>
           <a href="#">ការរៀនជាវីដេអូ</a>
          </li>
          <li>
           <a href="#">ទិញឥវ៉ាន</a>
          </li>
         </ul>
        </div>
       </div>
       <div class="col-lg-4">
        <div class="footer-widget">
         <div class="footer-widget-heading">
          <h3>Subscribe</h3>
         </div>
         <div class="footer-text">
          <p>
           ដាក់អុីម៉ែលរបស់អ្នកខាងក្រោម ដើម្បីទទួលបានព័ត៍មានថ្មីពីខាងគេហទំព័រយើង
          </p>
         </div>
         <div class="subscribe-form">
          <form>
           <input
            type="email"
            value={email}
            placeholder="អុីម៉ែល"
            onChange={(e) => setEmail(e.target.value)}
           />
           <button type="button" onClick={() => addEmail()}>
            <i class="fab fa-telegram-plane"></i>
           </button>
          </form>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="copyright-area">
     <div class="container">
      <div class="row">
       <div class="col-xl-6 col-lg-6 text-center text-lg-left">
        <div class="copyright-text">
         <p>
          Copyright © 2021, All Right Reserved <a href="#">codingcambodia</a>
         </p>
        </div>
       </div>
       <div class="col-xl-6 col-lg-6 text-right d-none d-lg-block">
        <div class="footer-menu">
         <ul>
          <li>
           <a href="#">ទំព័រដើម</a>
          </li>
          <li>
           <a href="#">ការរៀនជាការអាន</a>
          </li>
          <li>
           <a href="#">ការរៀនជាវីដេអូ</a>
          </li>
          <li>
           <a href="#">ទិញឥវ៉ាន</a>
          </li>
         </ul>
        </div>
       </div>
      </div>
     </div>
    </div>
   </footer>
  </>
 );
};

export default NewFooter;
