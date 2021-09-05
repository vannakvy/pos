import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLanguages } from '../../actions/eBookActions/eBookCourseActions';
import { FaBook } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import './HomeScreen.css';
import axios from 'axios';
import { GET_ONE_LANGUAGE_SUCCESS } from '../../constants/eBookConstants/eBookCourseConstants';
import { useHistory } from 'react-router-dom';
import {
 LOADER_TOP_FALSE,
 LOADER_TOP_TRUE,
} from '../../constants/navbarConstants';
import { GET_DETAIL_BY_CONTENT_ID_SUCCESS } from '../../constants/eBookConstants/eBookDetailContants';

const EbookHomeScreen = () => {
 const dispatch = useDispatch();
 const history = useHistory();
 useEffect(() => {
  window.scroll(0, 0);
  dispatch(getLanguages());
 }, []);

 const gotoDetails = async (lang) => {
  dispatch({ type: LOADER_TOP_TRUE });
  const { data } = await axios.get(`/api/ebook/courses/${lang}`);
  dispatch({
   type: GET_ONE_LANGUAGE_SUCCESS,
   payload: data,
  });
  if (data && data[0]) {
   const content = await axios.get(`/api/ebook/details/content/${data[0]._id}`);
   if (content.data) {
    dispatch({
     type: GET_DETAIL_BY_CONTENT_ID_SUCCESS,
     payload: content.data,
    });
    dispatch({ type: LOADER_TOP_FALSE });
    history.push(`/ebook/${lang}/${data[0]._id || 1}`);
   }
  }
 };

 return (
  <>
   <div className="py-0 py-md-5" style={{ background: 'rgb(25,39,68)' }}>
    <div className="container-lg ebookHomeScreen">
     <div className="py-4">
      <div className="row align-items-center">
       <div className="col-md-5 text-center ">
        <img className="w-100" src="/uploads\eBookUploads\pngw.png" alt="" />
       </div>
       <div className="col-md-7">
        <div className="content px-3">
         <h2 className="mb-3 kh text-light text-center mt-3 mt-md-0">
          សូមស្វាគមន៍មកកាន់ <span className="ubuntu">FREE CODING CAMBODIA</span>
         </h2>
         <p className="text text-light">
          🐇 មើល​ឃើញ​អ្វីដែល​​ថ្មីដោយ​គ្រាន់​តែ​ក្រឡេក​បន្តិច
          និង​ជ្រើសរើស​អ្វី​ដែល​អ្នក​ចង់​អាន និង​ឆ្លើយតប។ មើល​ឯកសារ​ភ្ជាប់
          ស្នើ​សុំ​ការឆ្លើយតប​ទៅ​នឹង​ព្រឹត្តិការណ៍ ផ្អាក​សារ
          និង​ធ្វើ​បាន​ច្រើន​ទៀត​ដោយ​មិន​ចាំបាច់​បើក​អ៊ីមែល​ណា​នោះ​ទេ។
          ទប់ស្កាត់​អ៊ីមែល​គ្រោះថ្នាក់​បាន 99.9%
          មុន​ពេល​ដែល​អ៊ីមែល​ទាំង​នោះ​ទៅ​ដល់​អ្នក។
          ប្រសិន​បើ​យើង​គិត​ថា​មាន​អ្វី​មួយ​ដែល​គួរ​ឱ្យ​សង្ស័យ
          អ្នក​នឹង​ទទួល​បាន​ការព្រមាន។ 🚀 🚀 🚀
         </p>
         <button
          className="btn btn-light kh shadow-sm rounded-lg mb-4"
          style={{ width: 150 }}
         >
          ចាប់ផ្តើមរៀន <FaArrowAltCircleRight />
         </button>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="bg-light py-0 py-md-5">
    <div className="container-lg ebookHomeScreen">
     <div className="py-4">
      <div className="row align-items-center">
       <div className="col-md-7">
        <div className="content px-3">
         <h2 className="mb-3 text-center">
          <FaBook className="mr-2 text-info" /> SCRATCH PROGRMMING
         </h2>
         <p className="mt-2 text">
          🐇 មើល​ឃើញ​អ្វីដែល​​ថ្មីដោយ​គ្រាន់​តែ​ក្រឡេក​បន្តិច
          និង​ជ្រើសរើស​អ្វី​ដែល​អ្នក​ចង់​អាន និង​ឆ្លើយតប។ មើល​ឯកសារ​ភ្ជាប់
          ស្នើ​សុំ​ការឆ្លើយតប​ទៅ​នឹង​ព្រឹត្តិការណ៍ ផ្អាក​សារ
          និង​ធ្វើ​បាន​ច្រើន​ទៀត​ដោយ​មិន​ចាំបាច់​បើក​អ៊ីមែល​ណា​នោះ​ទេ។
          ទប់ស្កាត់​អ៊ីមែល​គ្រោះថ្នាក់​បាន 99.9%
          មុន​ពេល​ដែល​អ៊ីមែល​ទាំង​នោះ​ទៅ​ដល់​អ្នក។ 🚀 🚀 🚀
         </p>
         <button
          className="btn btn-dark kh shadow-sm rounded-lg mb-4"
          style={{ width: 150 }}
         >
          ចាប់ផ្តើមរៀន <FaArrowAltCircleRight />
         </button>
        </div>
       </div>
       <div className="col-md-5 text-center">
        <img
         className="w-100"
         src="https://pbs.twimg.com/media/DgeknaCXkAcMemP.png"
         alt=""
        />
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="py-0 py-md-5" style={{ background: 'rgb(25,39,68)' }}>
    <div className="container-lg ebookHomeScreen">
     <div className="py-4">
      <div className="row align-items-center">
       <div className="col-md-7">
        <div className="content px-3">
         <h2 className="mb-3 text-center text-light">
          <FaBook className="mr-2 text-info" /> EMBEDDED SYSTEM
         </h2>
         <p className="mt-2 text text-light">
          🐇 មើល​ឃើញ​អ្វីដែល​​ថ្មីដោយ​គ្រាន់​តែ​ក្រឡេក​បន្តិច
          និង​ជ្រើសរើស​អ្វី​ដែល​អ្នក​ចង់​អាន និង​ឆ្លើយតប។
          និង​ធ្វើ​បាន​ច្រើន​ទៀត​ដោយ​មិន​ចាំបាច់​បើក​អ៊ីមែល​ណា​នោះ​ទេ។
          ទប់ស្កាត់​អ៊ីមែល​គ្រោះថ្នាក់​បាន 99.9%
          មុន​ពេល​ដែល​អ៊ីមែល​ទាំង​នោះ​ទៅ​ដល់​អ្នក។
          ប្រសិន​បើ​យើង​គិត​ថា​មាន​អ្វី​មួយ​ដែល​គួរ​ឱ្យ​សង្ស័យ
          អ្នក​នឹង​ទទួល​បាន​ការព្រមាន។ 🚀 🚀 🚀
         </p>
         <button
          className="btn btn-light kh shadow-sm rounded-lg mb-4"
          style={{ width: 150 }}
         >
          ចាប់ផ្តើមរៀន <FaArrowAltCircleRight />
         </button>
        </div>
       </div>
       <div className="col-md-5 text-center ">
        <img
         className="w-100"
         // style={{ width: "360px" }}
         src="/uploads\eBookUploads\pngwing.com.png"
         alt=""
        />
       </div>
      </div>
     </div>
    </div>
   </div>
   <div className="container-lg ebookHomeScreen">
    <h3 className="text-center kh my-3">ភាសាកុំព្យូទ័រ</h3>
    <div className="row">
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm text-center mb-4">
       <p className="kh text-center fw-bold text-info" style={{ fontSize: 50 }}>
        HTML
       </p>
       <p className="text-center fw-bold">
        The language for building web pages
       </p>
       <button
        className="btn btn-info kh shadow-sm rounded mb-4"
        style={{ width: 150 }}
        onClick={() => gotoDetails('HTML')}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm text-center mb-4">
       <p className="kh text-center fw-bold text-info" style={{ fontSize: 50 }}>
        CSS
       </p>
       <p className="text-center fw-bold">The language for styling web pages</p>
       <button
        className="btn btn-info kh shadow-sm rounded mb-4"
        style={{ width: 150 }}
        onClick={() => gotoDetails('CSS')}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm text-center mb-4">
       <p className="kh text-center fw-bold text-info" style={{ fontSize: 50 }}>
        JavaScript
       </p>
       <p className="text-center fw-bold">
        The language for programming web pages
       </p>
       <button
        className="btn btn-info kh shadow-sm rounded mb-4"
        style={{ width: 150 }}
        onClick={() => gotoDetails('JavaScript')}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm text-center mb-4">
       <p className="kh text-center fw-bold text-info" style={{ fontSize: 50 }}>
        PYTHON
       </p>
       <p className="text-center fw-bold">A popular programming language</p>
       <button
        className="btn btn-info kh shadow-sm rounded mb-4"
        style={{ width: 150 }}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm text-center mb-4">
       <p className="kh text-center fw-bold text-info" style={{ fontSize: 50 }}>
        SQL
       </p>
       <p className="text-center fw-bold">A language for accessing databases</p>
       <button
        className="btn btn-info kh shadow-sm rounded mb-4"
        style={{ width: 200 }}
        onClick={() => gotoDetails('HTML')}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm text-center mb-4">
       <p className="kh text-center fw-bold text-info" style={{ fontSize: 50 }}>
        PHP
       </p>
       <p className="text-center fw-bold">A web server programming language</p>
       <button
        className="btn btn-info kh shadow-sm rounded mb-4"
        style={{ width: 200 }}
        onClick={() => gotoDetails('HTML')}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
    </div>
    <div className="text-center">
     <button
      className="btn btn-light kh shadow-sm rounded-lg mb-4"
      style={{ width: 200 }}
     >
      មានបន្ថែមទៀត
     </button>
    </div>
   </div>
  </>
 );
};

export default EbookHomeScreen;
