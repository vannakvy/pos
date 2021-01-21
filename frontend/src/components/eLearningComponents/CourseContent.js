import React from 'react';
import { Link } from 'react-router-dom';

const CourseContent = ({ sections, cid }) => {
 let i = 0;
 return (
  <>
   <div className="rounded overflow-hidden shadow" id="Example">
    {sections &&
     sections.map((section) => (
      <div key={section._id}>
       <span className="d-none">{i++}</span>
       <div id={`heading${section._id}`}>
        <button
         className="btn btn-block text-left bg-info text-dark shadow"
         style={{ marginBottom: 1 }}
         type="button"
         data-toggle="collapse"
         data-target={`#collapse${section._id}`}
         aria-expanded="true"
         aria-controls={`collapse${section._id}`}
        >
         {section.name}
        </button>
       </div>

       <div
        id={`collapse${section._id}`}
        className={`collapse ${i === 1 ? 'show' : null} `}
        aria-labelledby={`heading${section._id}`}
        data-parent="#Example"
       >
        <div className="card-body p-0">
         {section.videos &&
          section.videos.map((video) => (
           <Link key={video._id} to={`/courses/${cid}/videos/${video._id}`}>
            <div
             style={{ padding: '10px 0 5px 0' }}
             className="px-4 adminHover"
            >
             <h6>
              <i
               className="fas fa-play-circle mr-4"
               style={{ fontSize: '12px' }}
              ></i>
              {video.name}
             </h6>
            </div>
           </Link>
          ))}
        </div>
       </div>
      </div>
     ))}
   </div>
  </>
 );
};

export default CourseContent;
