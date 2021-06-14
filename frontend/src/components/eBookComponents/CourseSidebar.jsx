import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Loader from '../Loader';

function CourseSidebar({ loading, courses, action }) {
 return (
  <div
   className="sidebar ml-1 mt-1 sticky-top"
   style={{ top: 76, height: '92vh', overflowY: 'auto' }}
  >
   {/* {loading ? (
        <Loader wd={80} hg={80} />
      ) : ( */}
   <>
    <ul className="list-group list-group-flush pb-5 bg-light">
     {courses &&
      courses.map((course) => (
       <>
        <Link
         onClick={() => action(course._id)}
         key={course._id}
         className="link"
        >
         <li className="list-group-item py-2 pl-3 adminHover">
          {course.title}
         </li>
        </Link>
       </>
      ))}
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
     <li className="list-group-item py-2 pl-3 adminHover">gg</li>
    </ul>
   </>
   {/* )} */}
  </div>
 );
}

export default CourseSidebar;
