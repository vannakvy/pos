import React, { Component } from 'react';
import Slider from 'react-slick';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import EmbededApp from '../../img/Embed.png';
import DesktopApp from '../../img/Desktop-App-Development.png';
import WebDevelopment from '../../img/WDS.png';
import MobileApp from '../../img/MBS.png';
import { NavLink } from 'react-router-dom';

export default class SlideChangeHooks extends Component {
 state = {
  activeSlide: 0,
  activeSlide2: 0,
 };
 render() {
  const settings = {
   dots: true,
   fade: true,
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   speed: 100,
   autoplaySpeed: 10000,
   nextArrow: <GrFormNext />,
   prevArrow: <GrFormPrevious />,
   beforeChange: (current, next) => this.setState({ activeSlide: next }),
   afterChange: (current) => this.setState({ activeSlide2: current }),
   appendDots: (dots) => (
    <div
     style={{
      // backgroundColor: '#ddd',
      borderRadius: '10px',
      padding: '0 40px 40px 0',
      color: 'white',
     }}
    >
     <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
   ),
   customPaging: (i) => (
    <div
     style={{
      // width: '100px',
      color: 'white',
      fontSize: '5px !important',
     }}
    >
     {this.state.activeSlide2 === i ? (
      <i className="fas fa-circle text-info" style={{ fontSize: 13 }}></i>
     ) : (
      <i
       className="far fa-circle dotHover rounded-pill"
       style={{ color: 'gray', fontSize: 8 }}
      ></i>
     )}
    </div>
   ),
  };
  return (
   <div
    className="overflow-hidden my-0 p-2 mt-lg-5"
    style={{ maxWidth: 1300, margin: '0 auto', background: 'rgb(218,218,218)' }}
   >
    <Slider {...settings}>
     <div className="container-fluid">
      <div className="row">
       <div className="p-5 d-flex justify-content-center col-md-6">
        <img
         src={DesktopApp}
         alt=""
         style={{ width: '500px', height: '350px', objectFit: 'cover' }}
        />
       </div>
       <div
        className="text-light col-md-6 d-flex justify-content-center"
        style={{
         zIndex: 10,
        }}
       >
        <div
         className="d-flex align-items-center h-100"
         style={{ maxWidth: 450 }}
        >
         <div className="px-5 pt-4 rounded shadow-sm bg-light">
          <h2 className="mb-4 text-dark kh">បង្រៀនសរសេរកម្មវិធីកុំព្យូទ័រ</h2>
          <p className="text-dark kh fw-bold" style={{ lineHeight: 1.8 }}>
           <span className="me-5"></span>
           នៅក្នុងផ្នែកនេះដែរយើងបង្រៀនសរសេរកូដក្នុងការបង្កើតកម្មវិធីកុំព្យូទ័រតាំងពីថ្នាក់ដំបូង
           រហូតដល់ស្ទាត់ជំនាញ។​
           ហើយការរៀនមានផ្នែកមួយៗដ់ើម្បីឲ្យសិស្សានុសិស្សងាយយល់
           និងអាចឆាប់ចេះបង្កើតកម្មវិធីដោយខ្លួនឯងបាន។
          </p>
          <NavLink
           to="/elearning/courses?courseType=Programming"
           className="btn bg-info rounded mt-2 mb-4 px-4 kh text-dark"
          >
           ចាប់ផ្ដើម
          </NavLink>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="container-fluid">
      <div className="row">
       <div className="p-5 d-flex justify-content-center col-md-6">
        <img
         src={MobileApp}
         alt=""
         style={{ width: '500px', height: '350px', objectFit: 'cover' }}
        />
       </div>
       <div
        className="text-light col-md-6 d-flex justify-content-center"
        style={{
         zIndex: 10,
        }}
       >
        <div
         className="d-flex align-items-center h-100"
         style={{ maxWidth: 450 }}
        >
         <div className="px-5 pt-4 rounded shadow-sm bg-light">
          <h2 className="mb-4 text-dark kh">បង្រៀនកម្មវិធីទូរស័ព្ទ</h2>
          <p className="text-dark kh fw-bold" style={{ lineHeight: 1.8 }}>
           <span className="me-5"></span>
           នៅក្នុងផ្នែកនេះដែរយើងបង្រៀនសរសេរកូដក្នុងការបង្កើតកម្មវិធីនៅលើទូរស័ព្ទតាំងពីថ្នាក់ដំបូង
           រហូតដល់ស្ទាត់ជំនាញ។​
           ហើយការរៀនមានផ្នែកមួយៗដ់ើម្បីឲ្យសិស្សានុសិស្សងាយយល់
           និងអាចឆាប់ចេះបង្កើតកម្មវិធីដោយខ្លួនឯងបាន។
          </p>
          <NavLink
           to="/elearning/courses?courseType=MobileDevelopment"
           className="btn bg-info rounded mt-2 mb-4 px-4 kh text-dark"
          >
           ចាប់ផ្ដើម
          </NavLink>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="container-fluid">
      <div className="row">
       <div className="p-5 d-flex justify-content-center col-md-6">
        <img
         src={WebDevelopment}
         alt=""
         style={{ width: '500px', height: '350px', objectFit: 'cover' }}
        />
       </div>
       <div
        className="text-light col-md-6 d-flex justify-content-center"
        style={{
         zIndex: 10,
        }}
       >
        <div
         className="d-flex align-items-center h-100"
         style={{ maxWidth: 450 }}
        >
         <div className="px-5 pt-4 rounded shadow-sm bg-light">
          <h2 className="mb-4 text-dark kh">បង្រៀនពីការសរសេរវែបសាយ</h2>
          <p className="text-dark kh fw-bold" style={{ lineHeight: 1.8 }}>
           <span className="me-5"></span>
           នៅក្នុងផ្នែកនេះដែរយើងបង្រៀនសរសេរកូដក្នុងការបង្កើតគេហៈទំព័រតាំងពីថ្នាក់ដំបូង
           រហូតដល់ស្ទាត់ជំនាញ។​
           ហើយការរៀនមានផ្នែកមួយៗដ់ើម្បីឲ្យសិស្សានុសិស្សងាយយល់
           និងអាចឆាប់ចេះបង្កើតកម្មវិធីដោយខ្លួនឯងបាន។
          </p>
          <NavLink
           to="/elearning/courses?courseType=WebDevelopment"
           className="btn bg-info rounded mt-2 mb-4 px-4 kh text-dark"
          >
           ចាប់ផ្ដើម
          </NavLink>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="container-fluid">
      <div className="row">
       <div className="p-5 d-flex justify-content-center col-md-6">
        <img
         src={EmbededApp}
         alt=""
         style={{ width: '500px', height: '350px', objectFit: 'cover' }}
        />
       </div>
       <div
        className="text-light col-md-6 d-flex justify-content-center"
        style={{
         zIndex: 10,
        }}
       >
        <div
         className="d-flex align-items-center h-100"
         style={{ maxWidth: 450 }}
        >
         <div className="px-5 pt-4 rounded shadow-sm bg-light">
          <h2 className="mb-4 text-dark kh">បង្រៀនពីរការបង្កើតប្រព័ន្ធបញ្ជា</h2>
          <p className="text-dark kh fw-bold" style={{ lineHeight: 1.8 }}>
           <span className="me-5"></span>
           នៅក្នុងផ្នែកនេះដែរយើងបង្រៀនសរសេរកូដក្នុងការបង្កើតប្រព័ន្ធបញ្ជា​(Board)
           តាំងពីថ្នាក់ដំបូង រហូតដល់ស្ទាត់ជំនាញ។​
           ហើយការរៀនមានផ្នែកមួយៗដ់ើម្បីឲ្យសិស្សានុសិស្សងាយយល់
           និងអាចឆាប់ចេះបង្កើតកម្មវិធីដោយខ្លួនឯងបាន។
          </p>
          <NavLink
           to="/elearning/courses?courseType=EmbededSystem"
           className="btn bg-info rounded mt-2 mb-4 px-4 kh text-dark"
          >
           ចាប់ផ្ដើម
          </NavLink>
         </div>
        </div>
       </div>
      </div>
     </div>
    </Slider>
   </div>
  );
 }
}
