import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLanguages } from '../../actions/eBookActions/eBookCourseActions';
import Sidebar from '../../components/eBookComponents/Sidebar';
import { FaBook } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './HomeScreen.css';

const EbookHomeScreen = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  // window.scroll(0, 0);
  dispatch(getLanguages());
 }, []);
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
      <div className="round bg-light p-4 shadow-sm adminHover text-center mb-4">
       <p
        className="ubuntu text-center font-weight-bold"
        style={{ fontSize: 50 }}
       >
        HTML
       </p>
       <p className="text-center font-weight-bold">
        The language for building web pages
       </p>
       <NavLink to="/ebook/HTML">
        <button
         className="btn btn-dark kh shadow-sm rounded-pill mb-4"
         style={{ width: 250 }}
        >
         ចាប់ផ្តើមរៀន
        </button>
       </NavLink>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm adminHover text-center mb-4">
       <p
        className="ubuntu text-center font-weight-bold"
        style={{ fontSize: 50 }}
       >
        CSS
       </p>
       <p className="text-center font-weight-bold">
        The language for styling web pages
       </p>
       <button
        className="btn btn-dark kh shadow-sm rounded-pill mb-4"
        style={{ width: 250 }}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm adminHover text-center mb-4">
       <p
        className="ubuntu text-center font-weight-bold"
        style={{ fontSize: 50 }}
       >
        JavaScript
       </p>
       <p className="text-center font-weight-bold">
        The language for programming web pages
       </p>
       <button
        className="btn btn-dark kh shadow-sm rounded-pill mb-4"
        style={{ width: 250 }}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm adminHover text-center mb-4">
       <p
        className="ubuntu text-center font-weight-bold"
        style={{ fontSize: 50 }}
       >
        PYTHON
       </p>
       <p className="text-center font-weight-bold">
        A popular programming language
       </p>
       <button
        className="btn btn-dark kh shadow-sm rounded-pill mb-4"
        style={{ width: 250 }}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm adminHover text-center mb-4">
       <p
        className="ubuntu text-center font-weight-bold"
        style={{ fontSize: 50 }}
       >
        SQL
       </p>
       <p className="text-center font-weight-bold">
        A language for accessing databases
       </p>
       <button
        className="btn btn-dark kh shadow-sm rounded-pill mb-4"
        style={{ width: 250 }}
       >
        ចាប់ផ្តើមរៀន
       </button>
      </div>
     </div>
     <div className="col-md-6">
      <div className="round bg-light p-4 shadow-sm adminHover text-center mb-4">
       <p
        className="ubuntu text-center font-weight-bold"
        style={{ fontSize: 50 }}
       >
        PHP
       </p>
       <p className="text-center font-weight-bold">
        A web server programming language
       </p>
       <button
        className="btn btn-dark kh shadow-sm rounded-pill mb-4"
        style={{ width: 250 }}
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
