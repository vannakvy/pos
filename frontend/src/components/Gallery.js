import React from 'react';

const Gallery = () => {
 return (
  <>
   <div className="gallery my-5">
    <h4 className="text-center">
     {' '}
     The Courses we made is for beginer learner..
    </h4>
    <div className="row galleryBox">
     <div className="my-2 col-lg-4 col-md-6 col-sm-6 ">
      <img
       className="rounded p-1 shadow"
       src="/uploads/imageDefualt.jpg"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6 ">
      <img
       className="p-1 shadow"
       src="https://es.talentlms.com/wp-content/uploads/2018/10/talentlms-content-library.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6 ">
      <img
       className="p-1 shadow"
       src="https://es.talentlms.com/wp-content/uploads/2018/10/talentlms-content-library.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6">
      <img
       className="p-1 shadow"
       src="https://es.talentlms.com/wp-content/uploads/2018/10/talentlms-content-library.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6 ">
      <img
       className="shadow p-1"
       src="https://es.talentlms.com/wp-content/uploads/2018/10/talentlms-content-library.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
     <div className="my-2 col-lg-4 col-md-6 col-sm-6">
      <img
       className="shadow p-1"
       src="https://es.talentlms.com/wp-content/uploads/2018/10/talentlms-content-library.png"
       alt=""
       style={{ width: '100%' }}
      />
     </div>
    </div>
   </div>
  </>
 );
};

export default Gallery;
