import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { BsFolderPlus } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

const EnrollModal = ({ courses, addUserEnrollCourses }) => {
 const { uid } = useParams();
 const dispatch = useDispatch();
 const [enrolling, setEnrolling] = useState([]);
 const [sizee, setSizee] = useState(enrolling.length);

 useEffect(() => {}, [dispatch, enrolling]);

 const addEnrollCourseHandler = () => {
  dispatch(addUserEnrollCourses(uid, enrolling));
  setSizee(0);
  setEnrolling([]);
 };

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
    <div className="modal-dialog modal-xl">
     <div className="modal-content round">
      <div className="modal-header">
       <h5 className="modal-title" id="exampleModalLabel">
        Enroll Table(
        <span className="text-danger">{enrolling.length}</span>)
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
       <h6 className="mt-3">
        All Courses not Enroll yet(
        <span className="text-danger">{courses && courses.length}</span>)
       </h6>
       <div className="row">
        {courses &&
         courses.map((course) => (
          <div key={course._id} className="col-lg-4 col-md-6">
           <Card
            onClick={() => addEnrollList(course._id)}
            className="mx-md-1 mx-lg-0 mx-xl-2 shadow rounded my-1 courseItem d-flex w-100"
            style={{ maxHeight: 180 }}
           >
            <CardActionArea className="position-relative">
             <div className="w-100 h-100 d-flex justify-content-between position-absolute">
              <div className="p-2">
               <h5>{course.name}</h5>
               <small className="t_grediant">{course.courseType}</small>
              </div>
              {enrolling &&
               enrolling.map((enr) => (
                <React.Fragment key={enr}>
                 {course._id === enr ? (
                  <div
                   className="d-flex align-items-center bg-dark justify-content-center btn"
                   style={{ maxWidth: 150 }}
                  >
                   <BsFolderPlus className="text-light" />
                  </div>
                 ) : null}
                </React.Fragment>
               ))}
             </div>
             <img
              className="w-100"
              style={{ opacity: 1 }}
              src={course.imgUrl}
              alt=""
             />
            </CardActionArea>
           </Card>
          </div>
         ))}
       </div>
      </div>
      <div className="modal-footer">
       <button
        type="button"
        className="btn btn-secondary rounded shadow"
        data-dismiss="modal"
       >
        Close
       </button>
       {enrolling && enrolling.length === 0 ? (
        <button type="button" className="btn grediant rounded shadow" disabled>
         enroll
        </button>
       ) : (
        <button
         type="button"
         className="btn grediant adminHover rounded shadow"
         onClick={addEnrollCourseHandler}
         data-dismiss="modal"
        >
         enroll (<span className="text-danger">{sizee}</span>)
        </button>
       )}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default EnrollModal;
