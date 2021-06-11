import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loader from '../Loader';
import ConvertNum from './ConvertNum';
import CourseItem from './CourseItem';
import { useHistory } from 'react-router-dom';

const CoursesShow = ({ courseType, type, speed = 5000 }) => {
 const history = useHistory();
 const [courses, setCourses] = useState();
 const [loading, setLoading] = useState(true);
 const [count, setCount] = useState(0);

 useEffect(() => {
  async function fetchData() {
   setLoading(true);
   const { data } = await axios(
    `/api/courses/courseType/${courseType}?pageNumber=1&keyword=&pageSize=10`
   );
   const { courses, count } = data;
   setCourses(courses);
   setCount(count);
   setLoading(false);
  }
  fetchData();
 }, [courseType]);

 return (
  <>
   <div
    className="container"
    style={{
     paddingBottom: '30px',
    }}
   >
    <div className="d-flex justify-content-between">
     <h5 className="kh">
      {type}(
      <span className="text-danger">
       <ConvertNum num={count} />
      </span>
      )
     </h5>
     <button
      className="btn btn-info kh rounded shadow"
      onClick={() =>
       history.push(`/elearning/courses?courseType=${courseType}`)
      }
     >
      មានទៀត
     </button>
    </div>

    {loading ? (
     <Loader wd={40} hg={40} />
    ) : (
     <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={speed}
      centerMode={false}
      className="pb-2"
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
         min: 992,
        },
        items: 4,
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
         max: 991,
         min: 768,
        },
        items: 3,
        partialVisibilityGutter: 30,
       },
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={4}
      swipeable
     >
      {courses &&
       courses.map((course) => (
        <div key={course._id} className="px-1">
         <CourseItem course={course} />
        </div>
       ))}
     </Carousel>
    )}
   </div>
  </>
 );
};

export default CoursesShow;
