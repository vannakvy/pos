import React from 'react';
import { useHistory } from 'react-router';
import learningImg from '../img/free-ebook.png';

const LandingPage = () => {
 const history = useHistory();

 return (
  <>
   <div
    onClick={() => history.push('/register')}
    className={`row align-items-center bg-light shadow-sm mb-5 adminHover`}
   >
    <div
     className="col-lg-6 col-sm-12 p-sm-5 d-flex align-items-center"
     style={{ minHeight: '30vh' }}
    >
     <div className="row p-3">
      <div className="col-lg-1"></div>
      <div className="col-lg-10">
       <h1 className="kh p-3 p-sm-0">
        សូមស្វាគមន៍មកាន់គេហទំព័ររៀនពី​បច្ចេកវិទ្យាឌីជីថល
       </h1>
       <h5 className="kh lead" style={{ fontSize: 16 }}>
        <span className="ml-5"></span>{' '}
        ការជ្រើសរើសបេក្ខជនចូលសិក្សាថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់អប់រំឯកទេសប្រឹក្សាគរុកោសល្យ
        ជំនាន់ទី៣ ឆ្នាំសិក្សា ២០២១-២០២២
        របស់មជ្ឈមណ្ឌលស្រាវជ្រាវគរុកោសល្យជំនាន់ថ្មី
        ដែលមានបំណងចង់បន្តការសិក្សាថ្នាក់បរិញ្ញាបត្រជាន់ខ្ពស់អប់រំ
        ឯកទេសប្រឹក្សាគរុកោសល្យ
       </h5>
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
     <img className="my-5" style={{ width: '100%' }} src={learningImg} alt="" />
    </div>
   </div>
  </>
 );
};

export default LandingPage;
