import React from 'react';

const Gallery = () => {
 return (
  <div className="row">
   <div className="gallery my-5 bg-light">
    <h4 className="text-center">
     The Courses we made is for beginer learner..
    </h4>
    <div className="row galleryBox">
     <div className="my-2 col-lg-4 col-md-6 col-sm-6 ">
      <img
       className="rounded p-1 shadow"
       src="/uploads\img\online-video-course.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6 ">
      <img
       className="p-1 shadow"
       src="/uploads\img\online-video-course.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6 ">
      <img
       className="p-1 shadow"
       src="/uploads\img\online-video-course.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6">
      <img
       className="p-1 shadow"
       src="/uploads\img\online-video-course.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6 ">
      <img
       className="shadow p-1"
       src="/uploads\img\online-video-course.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6">
      <img
       className="shadow p-1"
       src="/uploads\img\online-video-course.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
    </div>
   </div>
  </div>
 );
};

export default Gallery;
