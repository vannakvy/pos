import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import learningImg from '../img/free-ebook.png';

const LandingPage = () => {
 const history = useHistory();
 const { userInfo } = useSelector((state) => state.userLogin);
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
       <h2 className="kh p-3 p-sm-0">
        សូមស្វាគមន៍មកកាន់គេហទំព័ររៀន
        <br />
        ពី​បច្ចេកវិទ្យាឌីជីថល
       </h2>
       <h5 className="kh lead mt-4" style={{ fontSize: 16 }}>
        <span className="ml-5"></span>{' '}
        <span className="fw-bold">www.codingcambodia.net</span>{' '}
        គីជាគេហទំព័រមួយ​ដែលបង្កើតឡើងជាខេមរៈភាសាសម្រាប់កូនខ្មែរឲ្យកាន់តែមានភាពងាយស្រួល
        និងជំនួយក្នុងការសិក្សាទៅលើការរៀនភាសាកុំព្យូទ័រផ្សេងៗ​ ។
       </h5>
       {!userInfo && (
        <button
         className="btn btn-danger kh rounded shadow text-dark"
         onClick={() => history.push('/register')}
        >
         ចុះឈ្មោះឥឡូវនេះ
        </button>
       )}
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
