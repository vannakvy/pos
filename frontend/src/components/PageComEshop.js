import React from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { navbarList } from '../actions/navbarActions';
import VisibilitySensor from 'react-visibility-sensor';
import { useHistory } from 'react-router-dom';

const PageComEshop = () => {
 const dispatch = useDispatch();
 const history = useHistory();
 const gotoEshop = () => {
  dispatch(navbarList('Eshop'));
  history.push('/eshop');
 };
 return (
  <>
   <div
    onClick={gotoEshop}
    className={`row align-items-center bg-light shadow-sm my-5 adminHover`}
   >
    <div className="col-lg-6 col-sm-12 text-center">
     <img
      className="my-5"
      style={{
       width: '100%',
      }}
      src="/uploads\img\arduino-uno.png"
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
       <h2 className="kh p-3 p-sm-0">
        និងអាចទិញគ្រឿងសម្ភារៈដើម្បីអនុវត្ដយ៉ាងងាយស្រួល និងសុវត្ដិភាព
       </h2>
       <p className="lead kh mt-4" style={{ fontSize: 16 }}>
        <span className="ml-5"></span>{' '}
        យើងក៏មានលក់នូវគ្រឿងឧបករណ៍អេឡិចត្រូនិចដើម្បីជាជំនួយដល់ការរៀននិងអនុវត្ដបន្ថែម
       </p>
       <div className="d-flex justify-content-end">
        <button
         className="btn btn-info kh rounded shadow text-dark mb-5"
         onClick={gotoEshop}
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

export default PageComEshop;
