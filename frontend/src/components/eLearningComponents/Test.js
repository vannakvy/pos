import React, { Component } from 'react';
import Slider from 'react-slick';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import EmbededApp from '../../img/Embed.png';
import DesktopApp from '../../img/Desktop-App-Development.png';
import WebDevelopment from '../../img/WDS.png';
import MobileApp from '../../img/MBS.png';

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
      <i className="fas fa-circle text-info" style={{ fontSize: 10 }}></i>
     ) : (
      <i
       className="far fa-circle dotHover rounded-pill"
       style={{ color: 'gray', fontSize: 10 }}
      ></i>
     )}
    </div>
   ),
  };
  return (
   <div
    className="overflow-hidden my-0 pb-0 mt-sm-5"
    style={{ maxWidth: 1300, margin: '0 auto', background: 'rgb(218,218,218)' }}
   >
    <Slider {...settings}>
     <div className="position-relative row">
      <div
       className="p-5 d-flex justify-content-center col-md-6"
       style={{
        transition: '500ms',
        position: 'relative',
        right: `${this.state.activeSlide === 0 ? '10px' : 0}`,
       }}
      >
       <img
        src={MobileApp}
        alt=""
        style={{ width: '500px', height: '350px', objectFit: 'cover' }}
       />
      </div>
      <div
       className="position-absolute text-light h-100 col-md-6"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 0 ? '6%' : '4%'}`,
        maxWidth: 450,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div className="px-5 pt-4 rounded shadow-sm bg-light">
         <h2 className="mb-4 text-dark kh">បង្រៀនសរសេរកម្មវិធីទូរស័ព្ទ</h2>
         <p className="text-dark kh fw-bold">
          លក់គោយន្ត ទុកធ្វើទុនទៅរកសុីជាមួយថ្លៃ ដូចចាក់ពីខ្នង ធ្លុះដល់បេះដូង,
          ដូចចាក់ពីខ្នង ធ្លុះដល់បេះដូង, មកពីអូនមិនល្អ ឬរូបអូនក្រឬបងសាវ៉ា
          អង្វរម៉ែឲ្យគាត់លក់គោយន្ត, លក់គោយន់, លក់គោយន្ត, លក់គោយន្ត, លក់គោយន់,
          លក់គោយន្ត, លក់គោយន្
         </p>
         <button className="btn btn-info rounded mt-2 mb-5 px-4 kh text-dark">
          ចាប់ផ្ដើម
         </button>
        </div>
       </div>
      </div>
     </div>
     <div className="position-relative row">
      <div
       className="p-5 d-flex justify-content-center col-md-6"
       style={{
        transition: '500ms',
        position: 'relative',
        right: `${this.state.activeSlide === 1 ? '10px' : 0}`,
       }}
      >
       <img
        src={WebDevelopment}
        alt=""
        style={{ width: '500px', height: '350px', objectFit: 'cover' }}
       />
      </div>
      <div
       className="position-absolute text-light h-100 col-md-6"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 1 ? '6%' : '4%'}`,
        maxWidth: 450,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div className="px-5 pt-4 rounded shadow-sm bg-light">
         <h2 className="mb-4 text-dark kh">បង្រៀនសរសេររែបសាយ</h2>
         <p className="text-dark kh fw-bold">
          លក់គោយន្ត ទុកធ្វើទុនទៅរកសុីជាមួយថ្លៃ ដូចចាក់ពីខ្នង ធ្លុះដល់បេះដូង,
          ដូចចាក់ពីខ្នង ធ្លុះដល់បេះដូង, មកពីអូនមិនល្អ ឬរូបអូនក្រឬបងសាវ៉ា
          អង្វរម៉ែឲ្យគាត់លក់គោយន្ត, លក់គោយន់, លក់គោយន្ត, លក់គោយន្ត, លក់គោយន់,
          លក់គោយន្ត, លក់គោយន្
         </p>
         <button className="btn btn-info rounded mt-2 mb-5 px-4 kh text-dark">
          ចាប់ផ្ដើម
         </button>
        </div>
       </div>
      </div>
     </div>
     <div className="position-relative row">
      <div
       className="p-5 d-flex justify-content-center col-md-6"
       style={{
        transition: '500ms',
        position: 'relative',
        right: `${this.state.activeSlide === 2 ? '10px' : 0}`,
       }}
      >
       <img
        src={DesktopApp}
        alt=""
        style={{ width: '500px', height: '350px', objectFit: 'cover' }}
       />
      </div>
      <div
       className="position-absolute text-light h-100 col-md-6"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 2 ? '6%' : '4%'}`,
        maxWidth: 450,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div className="px-5 pt-4 rounded shadow-sm bg-light">
         <h2 className="mb-4 text-dark kh">បង្រៀនកម្មវិធីកុំព្យូទ័រ</h2>
         <p className="text-dark kh fw-bold">
          លក់គោយន្ត ទុកធ្វើទុនទៅរកសុីជាមួយថ្លៃ ដូចចាក់ពីខ្នង ធ្លុះដល់បេះដូង,
          ដូចចាក់ពីខ្នង ធ្លុះដល់បេះដូង, មកពីអូនមិនល្អ ឬរូបអូនក្រឬបងសាវ៉ា
          អង្វរម៉ែឲ្យគាត់លក់គោយន្ត, លក់គោយន់, លក់គោយន្ត, លក់គោយន្ត, លក់គោយន់,
          លក់គោយន្ត, លក់គោយន្
         </p>
         <button className="btn btn-info rounded mt-2 mb-5 px-4 kh text-dark">
          ចាប់ផ្ដើម
         </button>
        </div>
       </div>
      </div>
     </div>
     <div className="position-relative row">
      <div
       className="p-5 d-flex justify-content-center col-md-6"
       style={{
        transition: '500ms',
        position: 'relative',
        right: `${this.state.activeSlide === 3 ? '10px' : 0}`,
       }}
      >
       <img
        src={EmbededApp}
        alt=""
        style={{ width: '500px', height: '350px', objectFit: 'cover' }}
       />
      </div>
      <div
       className="position-absolute text-light h-100 col-md-6"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 3 ? '6%' : '4%'}`,
        maxWidth: 450,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div className="px-5 pt-4 rounded shadow-sm bg-light">
         <h2 className="mb-4 text-dark kh">សរសេរគ្រប់គ្រងប្រព័ន្ធបញ្ជា</h2>
         <p className="text-dark kh fw-bold">
          លក់គោយន្ត ទុកធ្វើទុនទៅរកសុីជាមួយថ្លៃ ដូចចាក់ពីខ្នង ធ្លុះដល់បេះដូង,
          ដូចចាក់ពីខ្នង ធ្លុះដល់បេះដូង, មកពីអូនមិនល្អ ឬរូបអូនក្រឬបងសាវ៉ា
          អង្វរម៉ែឲ្យគាត់លក់គោយន្ត, លក់គោយន់, លក់គោយន្ត, លក់គោយន្ត, លក់គោយន់,
          លក់គោយន្ត, លក់គោយន្
         </p>
         <button className="btn btn-info rounded mt-2 mb-5 px-4 kh text-dark">
          ចាប់ផ្ដើម
         </button>
        </div>
       </div>
      </div>
     </div>
    </Slider>
   </div>
  );
 }
}
