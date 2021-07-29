import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CourseItem from './CourseItem';
import { useHistory } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';

const CoursesShow = ({ courseType, header, text, url }) => {
 const history = useHistory();
 const [courses, setCourses] = useState();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  async function fetchData() {
   setLoading(true);
   const { data } = await axios(
    `/api/courses/courseType/${courseType}?pageNumber=1&keyword=&pageSize=10`
   );
   const { courses } = data;
   setCourses(courses);
   setLoading(false);
  }
  fetchData();
 }, [courseType]);

 return (
  <>
   <div
    className="w-100"
    style={{
     paddingBottom: '30px',
    }}
   >
    {loading ? (
     <Tab.Pane
      style={{ minHeight: '550px' }}
      loading
      attached={false}
     ></Tab.Pane>
    ) : (
     <>
      <Tab.Pane attached={false}>
       <h3 className="kh mt-3 ms-2 text-info">{header}</h3>
       <p className="kh mt-4 ms-2" style={{ maxWidth: '800px' }}>
        {text}
       </p>
       <button
        onClick={() => history.push(url)}
        className="btn btn-outline-info kh my-3 ms-2 rounded"
       >
        មុខវិទ្យាដ៏ទៃទៀត
       </button>
       <Carousel
        additionalTransfrom={0}
        arrows
        // autoPlay
        // autoPlaySpeed={5000}
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
        {courses &&
         courses.map((course) => (
          <div key={course._id} className="px-1">
           <CourseItem course={course} />
          </div>
         ))}
       </Carousel>
      </Tab.Pane>
     </>
    )}
   </div>
  </>
 );
};

export default CoursesShow;
