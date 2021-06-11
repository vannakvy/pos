import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderHeaderItem from './SliderHeaderItem';

const SliderHeader = () => {
 return (
  <>
   <div>
    <Carousel
     additionalTransfrom={0}
     arrows={false}
     autoPlay
     autoPlaySpeed={1000}
     centerMode={false}
     className="w-100"
     containerClass="container-with-dots"
     dotListClass=""
     draggable
     focusOnSelect={false}
     infinite
     itemClass=""
     keyBoardControl
     minimumTouchDrag={80}
     renderButtonGroupOutside={false}
     renderDotsOutside={false}
     responsive={{
      desktop: {
       breakpoint: {
        max: 3000,
        min: 1024,
       },
       items: 1,
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
       items: 1,
       partialVisibilityGutter: 30,
      },
     }}
     showDots={false}
     sliderClass=""
     slidesToSlide={1}
     swipeable
    >
     <SliderHeaderItem
      description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
      headline="w3js.com - web front-end studio"
      image="uploads\eLearningUploads\image-1611910863163.png"
     />
     <SliderHeaderItem
      description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="React Carousel with Server Side Rendering Support – Part 1"
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="React Carousel with Server Side Rendering Support – Part 1"
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="React Carousel with Server Side Rendering Support – Part 1"
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
     <SliderHeaderItem
      description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
      headline="w3js.com - web front-end studio"
      image="https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
     />
    </Carousel>
   </div>
  </>
 );
};

export default SliderHeader;
