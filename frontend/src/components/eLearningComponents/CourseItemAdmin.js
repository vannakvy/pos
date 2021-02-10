import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ProgressCourse from './ProgressCourse';
import { MdDeleteSweep } from 'react-icons/md';

const CourseItemAdmin = ({ enroll, deleteEnrollHandler = false }) => {
 const history = useHistory();
 const courseDetailLink = (id) => {
  setTimeout(function () {}, 300);
 };
 return (
  <Card className="mx-md-1 mx-lg-0 mx-xl-2 shadow round my-3 courseItem">
   <CardActionArea
    className="position-relative"
    onClick={() => courseDetailLink(enroll.courseId._id)}
   >
    <img
     className="position-absolute"
     style={{
      width: '100%',
      opacity: `${enroll.progressBar === 100 ? '0.1' : '1'}`,
     }}
     src={enroll.courseId.imgUrl}
     alt=""
    />

    <div className="d-flex justify-content-between">
     <div className="d-flex">
      <div className="p-2 kh" style={{ fontWeight: 'bolder' }}>
       <ProgressCourse progress={enroll.progressBar} />
      </div>

      <div className="p-2" style={{ zIndex: 1 }}>
       <h5>{enroll.courseId.name}</h5>
       <small className="text-info">{enroll.courseId.courseType}</small>
      </div>
     </div>
     {deleteEnrollHandler && deleteEnrollHandler ? (
      <div style={{ zIndex: 1 }}>
       <MdDeleteSweep
        onClick={() => deleteEnrollHandler(enroll._id)}
        className="m-2 text-light t_grediantHover"
        style={{ fontSize: '30px' }}
       />
      </div>
     ) : null}
    </div>
   </CardActionArea>
  </Card>
 );
};

export default CourseItemAdmin;
