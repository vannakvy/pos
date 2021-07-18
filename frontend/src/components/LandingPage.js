import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import VisibilitySensor from 'react-visibility-sensor';
import learningImg from '../img/free-ebook.png';

const LandingPage = () => {
 const history = useHistory();
 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;
 return (
  <>
   <VisibilitySensor partialVisibility={true}>
    {({ isVisible }) => (
     <div
      onClick={() => history.push('/register')}
      className={`row align-items-center bg-light shadow-sm mb-5 adminHover ${
       isVisible ? 'landingPage' : ''
      }`}
      style={{
       transition: '1s',
       position: 'relative',
       right: 200,
      }}
     >
      <div
       className="col-lg-6 col-sm-12 p-sm-5 d-flex align-items-center"
       style={{ minHeight: '30vh' }}
      >
       <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
         <h3 className="kh p-3 p-sm-0">
          សូមស្វាគមន៍មកាន់គេហទំព័ររៀនពី​បច្ចេកវិទ្យាឌីជីថល
         </h3>
         <p className="lead kh" style={{ fontSize: 16 }}>
          <span className="ml-5"></span>{' '}
          ការជ្រើសរើសបេក្ខជនចូលសិក្សាថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់អប់រំឯកទេសប្រឹក្សាគរុកោសល្យ
          ជំនាន់ទី៣ ឆ្នាំសិក្សា ២០២១-២០២២
          របស់មជ្ឈមណ្ឌលស្រាវជ្រាវគរុកោសល្យជំនាន់ថ្មី
          ដែលមានបំណងចង់បន្តការសិក្សាថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់អប់រំ
          ឯកទេសប្រឹក្សាគរុកោសល្យ
         </p>
         <button
          className="btn btn-danger kh rounded shadow text-dark"
          onClick={() => history.push('/register')}
         >
          ចុះឈ្មោះឥឡូវនេះ
         </button>
        </div>
        <div className="col-lg-1"></div>
       </div>
      </div>
      <div className="col-lg-6 col-sm-12 text-center">
       <img
        className="my-5"
        style={{
         width: '80%',
         //   height: "50%",
        }}
        src={learningImg}
        alt=""
       />
      </div>
     </div>
    )}
   </VisibilitySensor>
  </>
 );
};

export default LandingPage;
