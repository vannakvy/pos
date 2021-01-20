import React from 'react';

const CourseContent = ({ sections }) => {
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
        <div className="card-body">
         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
         terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
         skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
         Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
         single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
         helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
         proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
         beer farm-to-table, raw denim aesthetic synth nesciunt you probably
         haven't heard of them accusamus labore sustainable VHS.
        </div>
       </div>
      </div>
     ))}
   </div>
  </>
 );
};

export default CourseContent;
