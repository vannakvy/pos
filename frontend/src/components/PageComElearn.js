import React from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { navbarList } from '../actions/navbarActions';
import elearnImg from '../img/online-video-course.png';
import { useHistory } from 'react-router-dom';

const PageComElearn = () => {
 const dispatch = useDispatch();
 const history = useHistory();
 const gotoElearn = () => {
  dispatch(navbarList('Elearning'));
  history.push('/elearning');
 };
 return (
  <>
   <div
    onClick={gotoElearn}
    className={`row align-items-center bg-light shadow-sm my-5 adminHover`}
   >
    <div className="col-lg-6 col-sm-12 text-center">
     <img
      className="my-3"
      style={{
       width: '100%',
      }}
      src={elearnImg}
      alt=""
     />
    </div>
    <div
     className="col-lg-6 col-sm-12 p-sm-5 d-flex align-items-center"
     style={{ minHeight: '30vh' }}
    >
     <div className="row p-3">
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
       <h2 className="kh p-3 p-sm-0">អ្នកអាចរៀនតាមរយៈវីដេអូជាភាសាខ្មែរ</h2>
       <p className="lead kh mt-4" style={{ fontSize: 16 }}>
        <span className="ml-5"></span> ដើម្បីឲ្យកាន់តែងាយស្រួលជាងនេះទៅទៀត
        ក្រុមពួកយើងក៏បានបង្កើតមុខវិទ្យាជាវីដេអូ
        ងាយស្រួលក្នុងការរៀននិងលម្អិតដើម្បីឲ្យសិស្សានុសិស្សកាន់តែងាយយល់ ...
       </p>
       <div className="d-flex justify-content-end">
        <button
         className="btn btn-info kh rounded shadow text-dark mb-5"
         onClick={gotoElearn}
        >
         ចាប់ផ្ដើម{' '}
         <BiRightArrowCircle className="mb-1" style={{ fontSize: 18 }} />
        </button>
       </div>
      </div>
      <div className="col-lg-1"></div>
     </div>
    </div>
   </div>
  </>
 );
};

export default PageComElearn;
