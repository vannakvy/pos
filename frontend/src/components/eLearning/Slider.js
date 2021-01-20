import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CourseItem from './CourseItem';

const Slider = ({ courseList }) => {
 return (
  <>
   <div
    className="container"
    style={{
     paddingBottom: '30px',
     position: 'relative',
    }}
   >
    <h4 className="text-center mt-4">Elearning Dashboard</h4>
    <Carousel
     additionalTransfrom={0}
     arrows
     autoPlay
     autoPlaySpeed={2000}
     centerMode={false}
     className="py-2"
     containerClass="container-with-dots"
     dotListClass=""
     draggable
     focusOnSelect={false}
     infinite
     itemClass=""
     keyBoardControl
     minimumTouchDrag={80}
     renderButtonGroupOutside={false}
     renderDotsOutside={true}
     responsive={{
      desktop: {
       breakpoint: {
        max: 3000,
        min: 1024,
       },
       items: 3,
       partialVisibilityGutter: 40,
      },
      mobile: {
       breakpoint: {
        max: 464,
        min: 0,
       },
       items: 1,
       partialVisibilityGutter: 30,
      },
      tablet: {
       breakpoint: {
        max: 1024,
        min: 464,
       },
       items: 2,
       partialVisibilityGutter: 30,
      },
     }}
     showDots={true}
     sliderClass=""
     slidesToSlide={1}
     swipeable
    >
     {courseList &&
      courseList.map((course) => (
       <div key={course._id} className="p-1 px-md-1 px-lg-3">
        <CourseItem course={course} />
       </div>
      ))}
    </Carousel>
   </div>
  </>
 );
};

export default Slider;
