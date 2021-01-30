import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const CourseContent = ({ sections, cid, fromVideo = false }) => {
 let i = 0;

 useEffect(() => {}, []);

 return (
  <>
   <div className="rounded bg-light overflow-hidden shadow" id="Example">
    {sections &&
     sections.map((section) => (
      <div key={section._id}>
       <span className="d-none">{i++}</span>
       <div id={`heading${section._id}`}>
        <button
         className="btn btn-block text-left bg-info text-dark shadow"
         style={{ marginBottom: 1 }}
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
        className={`collapse ${i === 1 ? 'show' : null} ${
         fromVideo ? 'show' : null
        }`}
        aria-labelledby={`heading${section._id}`}
        data-parent="#Example"
       >
        <div className="card-body p-0">
         {section.videos &&
          section.videos.map((video) => (
           <NavLink
            className="px-4 adminHover d-block m-0"
            activeClassName="activeVideo"
            key={video._id}
            to={`/courses/${cid}/videos/${video._id}`}
           >
            <h6 className="py-3 m-0">
             {fromVideo ? (
              <>
               {video.watched ? (
                <i className="fas fa-check-square text-info mr-3"></i>
               ) : (
                <i className="far fa-square mr-3"></i>
               )}
              </>
             ) : null}
             <i
              className="fas fa-play-circle mr-3"
              style={{ fontSize: '12px' }}
             ></i>
             <input type="checkbox" />
             {video.name}
            </h6>
           </NavLink>
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
