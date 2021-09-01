import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { listCourses } from '../../actions/eLearningActions/courseActions';
import { Loader } from 'semantic-ui-react';
import CourseItem from './CourseItem';

const Slider = () => {
 const dispatch = useDispatch();

 const {
  loading: loadingList,
  error: errorList,
  courses: courseList,
 } = useSelector((state) => state.courseList);

 useEffect(() => {
  dispatch(listCourses('AllCourses'));
 }, [dispatch]);
 return (
  <>
   <div
    style={{
     maxWidth: 1300,
     paddingBottom: '0px',
     position: 'relative',
     margin: '0 auto',
    }}
   >
    {/* <h4 className="text-center mt-4 kh">គេហទំព័ររៀនជាវីឌីអូ</h4> */}
    {loadingList ? (
     <div className="p-5 text-center">
      <Loader active inline="centered" className="fw-bold">
       កំពុងដំណើរការ...
      </Loader>
     </div>
    ) : (
     <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={5000}
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
         min: 1200,
        },
        items: 5,
        partialVisibilityGutter: 40,
       },
       mobile: {
        breakpoint: {
         max: 767,
         min: 0,
        },
        items: 2,
        partialVisibilityGutter: 30,
       },
       tablet: {
        breakpoint: {
         max: 1200,
         min: 992,
        },
        items: 4,
        partialVisibilityGutter: 30,
       },
       gg: {
        breakpoint: {
         max: 992,
         min: 768,
        },
        items: 3,
        partialVisibilityGutter: 30,
       },
      }}
      //  showDots={true}
      sliderClass=""
      slidesToSlide={3}
      swipeable
     >
      {courseList &&
       courseList.map((course) => (
        <div key={course._id} className="px-1 d-flex justify-content-center">
         <CourseItem course={course} />
        </div>
       ))}
     </Carousel>
    )}
   </div>
  </>
 );
};

export default Slider;
