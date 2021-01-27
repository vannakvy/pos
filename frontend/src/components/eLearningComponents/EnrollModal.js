import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { BsFolderPlus } from 'react-icons/bs';

const EnrollModal = ({ courses }) => {
 const dispatch = useDispatch();
 const [enrolling, setEnrolling] = useState([]);
 const [sizee, setSizee] = useState(enrolling.length);

 useEffect(() => {}, [dispatch, enrolling]);

 const addEnrollList = (id) => {
  const courses = enrolling;
  let haveCourse = false;
  let gg = [];
  enrolling.forEach(function (cid) {
   if (cid === id) {
    haveCourse = true;
   }
  });

  if (haveCourse === false) {
   courses.push(id);
   setSizee(courses.length);
   setEnrolling(courses);
  } else {
   gg = courses.filter(function (e) {
    return e !== id;
   });
   setSizee(gg.length);
   setEnrolling(gg);
  }
 };

 console.log(enrolling);

 return (
  <div>
   <button
    type="button"
    className="btn btn-primary rounded shadow"
    data-toggle="modal"
    data-target="#exampleModal"
   >
    Enroll More
   </button>

   <div
    className="modal fade round"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
   >
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl round">
     <div className="modal-content round">
      <div className="modal-header">
       <h5 className="modal-title" id="exampleModalLabel">
        Enroll Table(
        <span className="text-danger">{sizee}</span>)
       </h5>
       <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
       >
        <span aria-hidden="true">&times;</span>
       </button>
      </div>
      <div className="container-fluid">
       <div className="row">
        {courses &&
         courses.map((course) => (
          <div key={course._id} className="col-lg-4 col-md-6">
           <Card
            onClick={() => addEnrollList(course._id)}
            className="mx-md-1 mx-lg-0 mx-xl-2 shadow rounded my-1 courseItem d-flex w-100"
            style={{ minHeight: 120 }}
           >
            <CardActionArea className="position-relative">
             <img
              className="position-absolute"
              style={{ width: 350, opacity: 0.3, top: 0 }}
              src={course.imgUrl}
              alt=""
             />
             <div className="d-flex">
              <div className="p-2">
               <h5>{course.name}</h5>
               <small className="t_grediant">{course.courseType}</small>
              </div>
             </div>
            </CardActionArea>
            {enrolling &&
             enrolling.map((enr) => (
              <>
               {course._id === enr ? (
                <div
                 className="d-flex align-items-center bg-dark justify-content-center btn"
                 style={{ width: 70 }}
                >
                 <BsFolderPlus className="text-light" />
                </div>
               ) : null}
              </>
             ))}
           </Card>
          </div>
         ))}
       </div>
      </div>
      <div className="modal-footer">
       <button type="button" className="btn btn-secondary" data-dismiss="modal">
        Close
       </button>
       <button type="button" className="btn btn-primary">
        Save changes
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default EnrollModal;
