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
       <h1 className="kh p-3 p-sm-0">
        និងអាចទិញសម្ភារៈដើម្បីរៀនយ៉ាងងាយស្រួល និងសុវត្ដិភាព
       </h1>
       <p className="lead kh" style={{ fontSize: 16 }}>
        <span className="ml-5"></span>{' '}
        ការជ្រើសរើសបេក្ខជនចូលសិក្សាថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់អប់រំឯកទេសប្រឹក្សាគរុកោសល្យ
        ជំនាន់ទី៣ ឆ្នាំសិក្សា ២០២១-២០២២
        របស់មជ្ឈមណ្ឌលស្រាវជ្រាវគរុកោសល្យជំនាន់ថ្មី
        ដែលមានបំណងចង់បន្តការសិក្សាថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់អប់រំ
        ឯកទេសប្រឹក្សាគរុកោសល្យ
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
