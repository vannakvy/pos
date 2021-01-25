import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLanguages } from '../../actions/eBookActions/eBookCourseActions';
import Sidebar from '../../components/eBookComponents/Sidebar';
import { FaBook } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
const EbookHomeScreen = () => {
 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(getLanguages());
 }, []);
 return (
  <div className="ebookHomeScreen">
   <div className="row">
    <div className="col-md-3">
     <Sidebar />
    </div>
    <div className="col-md-9 border-left">
     <div className="section1 text-center mt-4 mb-3"></div>
     <br />
     <div className="section2">
      <div className="row align-items-center">
       <div className="col-md-5 mt-4 text-center ">
        <img
         className="card p-1 img-fluid"
         // style={{ width: "360px" }}
         src="https://www.codebelgium.com/assets/site/postsmedia/best-programming-languages.jpg"
         alt=""
        />
       </div>
       <div className="col-md-6 mt-3 ">
        <div className="content px-3">
         <h4 className="mb-3">
          <MdSchool className="mr-2 text-info" /> WELCOME TO FREE CODING
          CAMBODIA{' '}
         </h4>
         <p className="">
          🐇 This website is operated by Refsnes Data as. Throughout the site,
          the terms "we", "us" and "our" refer to Refsnes Data as. Refsnes Data
          as offers this website, including all information, tools and services
          available from this site to you, the user, conditioned terms,
          conditions, policies and notices stated here. 🚀 🚀 🚀
         </p>
        </div>
       </div>
      </div>
     </div>
     {/* section 3  */}
     <br />
     <br />
     <div className="section3 mt-4 p-2">
      <div className="row align-items-center">
       <div className="col-md-6 mt-3 ">
        <div className="content px-3">
         <h4 className="mb-3">
          <FaBook className="mr-2 text-info" /> SCRATCH PROGRMMING FOR STARTER
         </h4>
         <p className=" mt-2">
          🐇 This website is operated by Refsnes Data as. Throughout the site,
          the terms "we", "us" and "our" refer to Refsnes Data as. Refsnes Data
          as offers this website, including all information, tools and services
          available from this site to 🚀 🚀 🚀
         </p>
        </div>
       </div>
       <div className="col-md-5 mt-4 text-center ">
        <img
         className="card p-1 img-fluid"
         // style={{ width: "360px" }}
         src="https://u.cubeupload.com/christan/ProjectEditor.png"
         alt=""
        />
       </div>
      </div>
     </div>
     <br />
     <br />
     <div className="section4 mt-4 p-2">
      <div className="row align-items-center">
       <div className="col-md-6 mt-3 ">
        <div className="content px-3">
         <h4 className="mb-3">
          <FaBook className="mr-2 text-info" /> EMBEDDED SYSTEM
         </h4>
         <p className="mt-2">
          🐇 This website is operated by Refsnes Data as. Throughout the site,
          the terms "we", "us" and "our" refer to Refsnes Data as. Refsnes Data
          as offers this website, including all information, tools and services
          available from this site to 🚀 🚀 🚀
         </p>
        </div>
       </div>
       <div className="col-md-5 mt-4 text-center ">
        <img
         className="card p-1 img-fluid"
         // style={{ width: "360px" }}
         src="https://whataftercollege.com/wp-content/uploads/2020/05/Purpose-Of-Embedded-System.jpg"
         alt=""
        />
       </div>
      </div>
     </div>
     <br />
     <br />
     <div className="section5 mt-4 p-2">
      <div className="row align-items-center">
       <div className="col-md-5 mt-4 text-center ">
        <img
         className="card p-1 img-fluid"
         // style={{ width: "360px" }}
         src="https://www.unixmen.com/wp-content/uploads/2015/10/Programming-and-its-ways.png"
         alt=""
        />
       </div>
       <div className="col-md-6 mt-3 ">
        <div className="content px-3">
         <h4 className="mb-3">
          <FaBook className="mr-2 text-info" /> COMPUTER PROGRAMMING LANGUAGES
         </h4>
         <p className="mt-2">
          🐇 This website is operated by Refsnes Data as. Throughout the site,
          the terms "we", "us" and "our" refer to Refsnes Data as. Refsnes Data
          as offers this website, including all information, tools and services
          available from this site to 🚀 🚀 🚀
         </p>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default EbookHomeScreen;
