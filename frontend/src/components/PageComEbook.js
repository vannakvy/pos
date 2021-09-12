import React from 'react';
import { BiRightArrowCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { navbarList } from '../actions/navbarActions';
import VisibilitySensor from 'react-visibility-sensor';
import { useHistory } from 'react-router-dom';

const PageComEbook = () => {
 const dispatch = useDispatch();
 const history = useHistory();
 const gotoEbook = () => {
  dispatch(navbarList('Ebook'));
  history.push('/ebook');
 };
 return (
  <>
   <div
    onClick={gotoEbook}
    className={`row align-items-center bg-light shadow-sm my-5 adminHover`}
   >
    <div
     className="col-lg-6 col-sm-12 p-sm-5 d-flex align-items-center"
     style={{ minHeight: '30vh' }}
    >
     <div className="row p-3">
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
       <h1 className="kh p-3 p-sm-0">ឬក៏អាចរៀនបានតាមរយៈការអាន</h1>
       <p className="lead kh mt-4" style={{ fontSize: 16 }}>
        <span className="ml-5"></span> ជាងនេះទៅទៀតអ្នកក៏អាចអាន
        និងស្វែងយល់ឲ្យកាន់តែស៊ីជម្រៅបន្ថែមទៀតនៅក្នុងការរៀនជាការអាន​ដែលមានការ
        ចងក្រងនូវមុខវិទ្យាជាច្រើនទៀត ​ និងអាចអនុវត្ដដោយផ្ទាល់និងភ្លាមៗ
        ដោយមិនចាំបាច់ចូលទៅកាន់គេហទំព័រផ្សេងទៀត
       </p>
       <button
        className="btn btn-danger kh rounded shadow text-dark"
        onClick={gotoEbook}
       >
        ចាប់ផ្ដើម{' '}
        <BiRightArrowCircle className="mb-1" style={{ fontSize: 18 }} />
       </button>
      </div>
      <div className="col-lg-1"></div>
     </div>
    </div>
    <div className="col-lg-6 col-sm-12 text-center">
     <img
      className="my-5"
      style={{ width: '100%' }}
      src="/uploads\img\text-online-learning.png"
      alt=""
     />
    </div>
   </div>
  </>
 );
};

export default PageComEbook;
