import React from 'react';
import './Team.css';
import thanet from '../img/thanet.jpg';
import Jrnn21 from '../img/jrnn21.jpg';
import dysovanrotha from '../img/dysovanrotha.jpg';
const Team = () => {
 return (
  <>
   <div className="container py-5">
    <div className="row text-center text-white">
     <div className="col-lg-8 mx-auto">
      <h2 className="kh eshop-font text-secondary" style={{ fontSize: 25 }}>
       ក្រុមការងារ
      </h2>
      <p className="text-success mb-0 eshop-font">
       ខាងក្រោមជាក្រុមការងារដែលបានធ្វើការចាប់ផ្ដើមបង្កើតគេហទំព័រនេះ៕
      </p>
     </div>
    </div>
   </div>

   <div class="container">
    <div class="row text-center">
     <div class="col-xl-3 col-sm-6 mb-5">
      <div class="bg-white round shadow-sm py-5 px-4 teamHover">
       <img
        src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg"
        alt=""
        width="130"
        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
       />
       <p class="mb-0 eshop-font fw-bold" style={{ fontSize: 15 }}>
        វី​ វណ្ណះ
       </p>
       <span class="small text-uppercase text-muted">ក្រុមកាមាភិបាល</span>
       <p class="small text-uppercase text-muted">Software Developer</p>
       <ul class="social mb-0 list-inline mt-3">
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-facebook-f"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-twitter"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-instagram"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-linkedin"></i>
         </a>
        </li>
       </ul>
      </div>
     </div>

     <div class="col-xl-3 col-sm-6 mb-5">
      <div class="bg-white round shadow-sm py-5 px-4 teamHover">
       <img
        src={Jrnn21}
        alt=""
        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        style={{ width: '130px', height: '130px', objectFit: 'cover' }}
       />
       <p class="mb-0 eshop-font fw-bold" style={{ fontSize: 15 }}>
        ជ្រឹង ចំរើន
       </p>
       <span class="small text-uppercase text-muted">ក្រុមកាមាភិបាល</span>
       <p class="small text-uppercase text-muted">Software Developer</p>
       <ul class="social mb-0 list-inline mt-3">
        <li class="list-inline-item">
         <a
          href="https://www.facebook.com/chamroeun.smartboy.5"
          target="blank"
          class="social-link"
         >
          <i class="fa fa-facebook-f"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-twitter"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a
          href="https://www.instagram.com/_jroeun_/"
          target="blank"
          class="social-link"
         >
          <i class="fa fa-instagram"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <p href="#" class="social-link">
          {/* <i class="fa fa-linkedin"></i> */}
          <i class="fab fa-telegram-plane"></i>
         </p>
        </li>
       </ul>
      </div>
     </div>

     <div class="col-xl-3 col-sm-6 mb-5">
      <div class="bg-white round shadow-sm py-5 px-4 teamHover">
       <img
        src="https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg"
        alt=""
        width="130"
        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
       />
       <p class="mb-0 eshop-font fw-bold" style={{ fontSize: 15 }}>
        ឌុន រស្មី
       </p>
       <span class="small text-uppercase text-muted">ក្រុមកាមាភិបាល</span>
       <p class="small text-uppercase text-muted">Marketing Manager</p>
       <ul class="social mb-0 list-inline mt-3">
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-facebook-f"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-twitter"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-instagram"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-linkedin"></i>
         </a>
        </li>
       </ul>
      </div>
     </div>

     <div class="col-xl-3 col-sm-6 mb-5">
      <div class="bg-white round shadow-sm py-5 px-4 teamHover">
       <img
        src={dysovanrotha}
        alt=""
        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        style={{ width: '130px', height: '130px', objectFit: 'cover' }}
       />
       <p class="mb-0 eshop-font fw-bold" style={{ fontSize: 15 }}>
        ឌី សុវណ្ណរដ្ធា
       </p>
       <span class="small text-uppercase text-muted">ក្រុមកាមាភិបាល</span>
       <p class="small text-uppercase text-muted">Software Developer</p>
       <ul class="social mb-0 list-inline mt-3">
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-facebook-f"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-twitter"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-instagram"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-linkedin"></i>
         </a>
        </li>
       </ul>
      </div>
     </div>

     <div class="col-xl-3 col-sm-6 mb-5">
      <div class="bg-white round shadow-sm py-5 px-4 teamHover">
       <img
        src={thanet}
        alt=""
        class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        style={{ width: '130px', height: '130px', objectFit: 'cover' }}
       />
       <p class="mb-0 eshop-font fw-bold" style={{ fontSize: 15 }}>
        លន ថាណេត
       </p>
       <span class="small text-uppercase text-muted">ក្រុមកាមាភិបាល</span>
       <p class="small text-uppercase text-muted">Design Lead</p>
       <ul class="social mb-0 list-inline mt-3">
        <li class="list-inline-item">
         <a
          href="https://web.facebook.com/pha.net.777"
          target="blank"
          class="social-link"
         >
          <i class="fa fa-facebook-f"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-twitter"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-instagram"></i>
         </a>
        </li>
        <li class="list-inline-item">
         <a href="#" class="social-link">
          <i class="fa fa-linkedin"></i>
         </a>
        </li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </>
 );
};

export default Team;
