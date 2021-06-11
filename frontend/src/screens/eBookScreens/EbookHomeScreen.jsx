import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLanguages } from '../../actions/eBookActions/eBookCourseActions';
import Sidebar from '../../components/eBookComponents/Sidebar';
import { FaBook } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import './HomeScreen.css';
const EbookHomeScreen = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  // window.scroll(0, 0);
  dispatch(getLanguages());
 }, []);
 return (
  <div className="container-lg ebookHomeScreen">
   {/* <div className="bg-light p-4 my-5 shadow-sm rounded-lg">
    <div className="row align-items-center">
     <div className="col-md-5 text-center ">
      <img
       className="w-100"
       src="https://www.codebelgium.com/assets/site/postsmedia/best-programming-languages.jpg"
       alt=""
      />
     </div>
     <div className="col-md-7">
      <div className="content px-3">
       <h4 className="mb-3 kh">
        សូមស្វាគមន៍មកកាន់ <span className="ubuntu">FREE CODING CAMBODIA</span>
       </h4>
       <p className="text">
        🐇 មើល​ឃើញ​អ្វីដែល​​ថ្មីដោយ​គ្រាន់​តែ​ក្រឡេក​បន្តិច
        និង​ជ្រើសរើស​អ្វី​ដែល​អ្នក​ចង់​អាន និង​ឆ្លើយតប។ មើល​ឯកសារ​ភ្ជាប់
        ស្នើ​សុំ​ការឆ្លើយតប​ទៅ​នឹង​ព្រឹត្តិការណ៍ ផ្អាក​សារ
        និង​ធ្វើ​បាន​ច្រើន​ទៀត​ដោយ​មិន​ចាំបាច់​បើក​អ៊ីមែល​ណា​នោះ​ទេ។
        ទប់ស្កាត់​អ៊ីមែល​គ្រោះថ្នាក់​បាន 99.9%
        មុន​ពេល​ដែល​អ៊ីមែល​ទាំង​នោះ​ទៅ​ដល់​អ្នក។
        ប្រសិន​បើ​យើង​គិត​ថា​មាន​អ្វី​មួយ​ដែល​គួរ​ឱ្យ​សង្ស័យ
        អ្នក​នឹង​ទទួល​បាន​ការព្រមាន។ 🚀 🚀 🚀
       </p>
       <button className="btn-sm btn-warning rounded text">
        ចាប់ផ្តើម <FaArrowAltCircleRight />
       </button>
      </div>
     </div>
    </div>
   </div>
   <div className="bg-light p-4 my-5 shadow-sm rounded-lg">
    <div className="row align-items-center">
     <div className="col-md-7">
      <div className="content px-3">
       <h4 className="mb-3">
        <FaBook className="mr-2 text-info" /> SCRATCH PROGRMMING FOR STARTER
       </h4>
       <p className="mt-2 text">
        🐇 មើល​ឃើញ​អ្វីដែល​​ថ្មីដោយ​គ្រាន់​តែ​ក្រឡេក​បន្តិច
        និង​ជ្រើសរើស​អ្វី​ដែល​អ្នក​ចង់​អាន និង​ឆ្លើយតប។ មើល​ឯកសារ​ភ្ជាប់
        ស្នើ​សុំ​ការឆ្លើយតប​ទៅ​នឹង​ព្រឹត្តិការណ៍ ផ្អាក​សារ
        និង​ធ្វើ​បាន​ច្រើន​ទៀត​ដោយ​មិន​ចាំបាច់​បើក​អ៊ីមែល​ណា​នោះ​ទេ។
        ទប់ស្កាត់​អ៊ីមែល​គ្រោះថ្នាក់​បាន 99.9%
        មុន​ពេល​ដែល​អ៊ីមែល​ទាំង​នោះ​ទៅ​ដល់​អ្នក។ 🚀 🚀 🚀
       </p>
       <button className="btn-sm btn-primary rounded text">
        ចាប់ផ្តើម <FaArrowAltCircleRight />
       </button>
      </div>
     </div>
     <div className="col-md-5 text-center">
      <img
       className="w-100"
       src="https://u.cubeupload.com/christan/ProjectEditor.png"
       alt=""
      />
     </div>
    </div>
   </div>
   <div className="bg-light p-4 my-5 shadow-sm rounded-lg">
    <div className="row align-items-center">
     <div className="col-md-7">
      <div className="content px-3">
       <h4 className="mb-3">
        <FaBook className="mr-2 text-info" /> EMBEDDED SYSTEM
       </h4>
       <p className="mt-2 text">
        🐇 មើល​ឃើញ​អ្វីដែល​​ថ្មីដោយ​គ្រាន់​តែ​ក្រឡេក​បន្តិច
        និង​ជ្រើសរើស​អ្វី​ដែល​អ្នក​ចង់​អាន និង​ឆ្លើយតប។
        និង​ធ្វើ​បាន​ច្រើន​ទៀត​ដោយ​មិន​ចាំបាច់​បើក​អ៊ីមែល​ណា​នោះ​ទេ។
        ទប់ស្កាត់​អ៊ីមែល​គ្រោះថ្នាក់​បាន 99.9%
        មុន​ពេល​ដែល​អ៊ីមែល​ទាំង​នោះ​ទៅ​ដល់​អ្នក។
        ប្រសិន​បើ​យើង​គិត​ថា​មាន​អ្វី​មួយ​ដែល​គួរ​ឱ្យ​សង្ស័យ
        អ្នក​នឹង​ទទួល​បាន​ការព្រមាន។ 🚀 🚀 🚀
       </p>
       <button className="btn-sm btn-secondary rounded text">
        ចាប់ផ្តើម <FaArrowAltCircleRight />
       </button>
      </div>
     </div>
     <div className="col-md-5 text-center ">
      <img
       className="w-100"
       // style={{ width: "360px" }}
       src="https://whataftercollege.com/wp-content/uploads/2020/05/Purpose-Of-Embedded-System.jpg"
       alt=""
      />
     </div>
    </div>
   </div>

   <div className="bg-light p-4 mt-5 mb-3 shadow-sm rounded-lg">
    <div className="row align-items-center">
     <div className="col-md-5 text-center ">
      <img
       className="w-100"
       // style={{ width: "360px" }}
       src="https://www.unixmen.com/wp-content/uploads/2015/10/Programming-and-its-ways.png"
       alt=""
      />
     </div>
     <div className="col-md-7">
      <div className="content px-3">
       <h4 className="mb-3">
        <FaBook className="mr-2 text-info" /> COMPUTER PROGRAMMING LANGUAGES
       </h4>
       <p className="mt-2 text">
        🐇 មើល​ឃើញ​អ្វីដែល​​ថ្មីដោយ​គ្រាន់​តែ​ក្រឡេក​បន្តិច
        និង​ជ្រើសរើស​អ្វី​ដែល​អ្នក​ចង់​អាន និង​ឆ្លើយតប។ មើល​ឯកសារ​ភ្ជាប់
        ស្នើ​សុំ​ការឆ្លើយតប​ទៅ​នឹង​ព្រឹត្តិការណ៍ ផ្អាក​សារ
        និង​ធ្វើ​បាន​ច្រើន​ទៀត​ដោយ​មិន​ចាំបាច់​បើក​អ៊ីមែល​ណា​នោះ​ទេ។
        ទប់ស្កាត់​អ៊ីមែល​គ្រោះថ្នាក់​បាន 99.9%
        មុន​ពេល​ដែល​អ៊ីមែល​ទាំង​នោះ​ទៅ​ដល់​អ្នក។ 🚀 🚀 🚀
       </p>
       <button className="btn-sm btn-outline-danger rounded text">
        ចាប់ផ្តើម <FaArrowAltCircleRight />
       </button>
      </div>
     </div>
    </div>
   </div> */}
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
   </div>
  </div>
 );
};

export default EbookHomeScreen;
