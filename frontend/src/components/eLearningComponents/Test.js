import React, { Component } from 'react';
import Slider from 'react-slick';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';

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
   autoplaySpeed: 5000,
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
    className="px-0 overflow-hidden"
    style={{ maxWidth: 1400, margin: '0 auto' }}
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
       src="https://wallpaperaccess.com/full/2461288.jpg"
      />
      <div
       className="position-absolute text-light d-none d-lg-block h-100"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 0 ? '10%' : '8%'}`,
        maxWidth: 400,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div>
         <h3 className="mb-4 text-light">Information Technology</h3>
         <p>
          Using props and state, we can put together a small Todo application.
          This example uses state to track the current list of items as well as
          the text that the user has entered.
         </p>
         <button className="btn btn-light mt-2 mb-5 px-4">GET START</button>
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
       src="https://a-static.besthdwallpaper.com/weathering-with-you-wallpaper-1920x600-28386_57.jpg"
      />
      <div
       className="position-absolute text-light d-none d-lg-block h-100"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 1 ? '10%' : '8%'}`,
        maxWidth: 400,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div>
         <h3 className="mb-4 text-light">Information Technology</h3>
         <p>
          Using props and state, we can put together a small Todo application.
          This example uses state to track the current list of items as well as
          the text that the user has entered.
         </p>
         <button className="btn btn-light mt-2 mb-5 px-4">GET START</button>
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
       src="https://wallpapercave.com/wp/wp6415208.jpg"
      />
      <div
       className="position-absolute text-light d-none d-lg-block h-100"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 2 ? '10%' : '8%'}`,
        maxWidth: 400,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div>
         <h3 className="mb-4 text-light">Information Technology</h3>
         <p>
          Using props and state, we can put together a small Todo application.
          This example uses state to track the current list of items as well as
          the text that the user has entered.
         </p>
         <button className="btn btn-light mt-2 mb-5 px-4">GET START</button>
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
       src="https://a-static.besthdwallpaper.com/tree-sunset-hill-wallpaper-1920x600-53173_57.jpg"
      />
      <div
       className="position-absolute text-light d-none d-lg-block h-100"
       style={{
        zIndex: 10,
        top: '0',
        right: `${this.state.activeSlide === 3 ? '10%' : '8%'}`,
        maxWidth: 400,
        transition: '500ms',
        animationTimingFunction: 'ease',
       }}
      >
       <div className="d-flex align-items-center h-100">
        <div>
         <h3 className="mb-4 text-light">Information Technology</h3>
         <p>
          Using props and state, we can put together a small Todo application.
          This example uses state to track the current list of items as well as
          the text that the user has entered.
         </p>
         <button className="btn btn-light mt-2 mb-5 px-4">GET START</button>
        </div>
       </div>
      </div>
     </div>
    </Slider>
   </div>
  );
 }
}
