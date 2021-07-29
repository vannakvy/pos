import React, { Component } from 'react';
import Slider from 'react-slick';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import s1 from '../../img/machinelearning.jpg';
import s2 from '../../img/php-page.jpg';
import s3 from '../../img/web-design-page.jpg';
import s4 from '../../img/2-1.jpg';

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
      fontSize: '8px',
     }}
    >
     {this.state.activeSlide2 === i ? (
      <i className="fas fa-circle"></i>
     ) : (
      <i className="far fa-circle dotHover rounded-pill"></i>
     )}
    </div>
   ),
  };
  return (
   <div
    className="overflow-hidden my-0 bg-light pb-0 shadow"
    style={{ maxWidth: 1300, margin: '0 auto' }}
   >
    <Slider {...settings}>
     <div className="position-relative">
      <img
       style={{
        width: '105%',
        transition: '500ms',
        position: 'relative',
        right: `${this.state.activeSlide === 0 ? '10px' : 0}`,
       }}
       alt=""
       src={s4}
      />
      <div
       className="position-absolute text-light d-none d-lg-block h-100"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 0 ? '6%' : '4%'}`,
        maxWidth: 400,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div
         className="px-5 pt-4 round shadow"
         style={{ background: 'rgba(255,255,255,0.5)' }}
        >
         <h3 className="mb-4 text-dark kh">ផ្នែកបង្រៀនកម្មវិធីទូរស័ព្ទ</h3>
         <p className="text-dark kh">
          Using props and state, we can put together a small Todo application.
          This example uses state to track the current list of items as well as
          the text that the user has entered.
         </p>
         <button className="btn btn-light rounded mt-2 mb-5 px-4 kh">
          ចាប់ផ្ដើម
         </button>
        </div>
       </div>
      </div>
     </div>
     <div className="position-relative">
      <img
       style={{
        width: '105%',
        transition: '500ms',
        position: 'relative',
        right: `${this.state.activeSlide === 1 ? '10px' : 0}`,
       }}
       alt=""
       src={s3}
      />
      <div
       className="position-absolute text-light d-none d-lg-block h-100"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 1 ? '6%' : '4%'}`,
        maxWidth: 400,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div
         className="px-5 pt-4 rounded"
         style={{ background: 'rgba(52,58,64,0.8)' }}
        >
         <h3 className="mb-4 text-light kh">ផ្នែកសរសេរវែបផ្សាយ</h3>
         <p className="text-light kh">
          Using props and state, we can put together a small Todo application.
          This example uses state to track the current list of items as well as
          the text that the user has entered.
         </p>
         <button className="btn btn-dark mt-2 mb-5 px-4 kh">ចាប់ផ្ដើម</button>
        </div>
       </div>
      </div>
     </div>
     <div className="position-relative">
      <img
       style={{
        width: '105%',
        transition: '500ms',
        position: 'relative',
        right: `${this.state.activeSlide === 2 ? '10px' : 0}`,
       }}
       alt=""
       src={s2}
      />
      <div
       className="position-absolute text-light d-none d-lg-block h-100"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 2 ? '6%' : '4%'}`,
        maxWidth: 400,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div
         className="px-5 pt-4 rounded"
         style={{ background: 'rgba(52,58,64,0.8)' }}
        >
         <h3 className="mb-4 text-light kh">ផ្នែកគ្រប់គ្រងទិន្នន័យ</h3>
         <p className="text-light kh">
          Using props and state, we can put together a small Todo application.
          This example uses state to track the current list of items as well as
          the text that the user has entered.
         </p>
         <button className="btn btn-dark mt-2 mb-5 px-4 kh">ចាប់ផ្ដើម</button>
        </div>
       </div>
      </div>
     </div>
     <div className="position-relative">
      <img
       style={{
        width: '105%',
        transition: '500ms',
        position: 'relative',
        right: `${this.state.activeSlide === 3 ? '10px' : 0}`,
       }}
       alt=""
       src={s1}
      />
      <div
       className="position-absolute text-light d-none d-lg-block h-100"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 3 ? '6%' : '4%'}`,
        maxWidth: 400,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div
         className="px-5 pt-4 rounded"
         style={{ background: 'rgba(52,58,64,0.8)' }}
        >
         <h3 className="mb-4 text-light kh">ផ្នែកប្រព័ន្ធបញ្ចា</h3>
         <p className="text-light kh" style={{ color: '#000' }}>
          Using props and state, we can put together a small Todo application.
          This example uses state to track the current list of items as well as
          the text that the user has entered.
         </p>
         <button className="btn btn-light mt-2 mb-5 px-4​ kh">ចាប់ផ្ដើម</button>
        </div>
       </div>
      </div>
     </div>
    </Slider>
   </div>
  );
 }
}
