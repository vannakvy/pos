import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ProgressCourse from './ProgressCourse';

const CourseItemAdmin = (props) => {
 const { enroll } = props;
 const history = useHistory();
 const courseDetailLink = (id) => {
  setTimeout(function () {
   //  history.push(`/courses/${id}`);
  }, 300);
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
      width: 495,
      opacity: `${enroll.progressBar === 100 ? '0.3' : '0.9'}`,
     }}
     src={enroll.courseId.imgUrl}
     alt=""
    />
    <div className="d-flex">
     <div className="p-2">
      <ProgressCourse progress={enroll.progressBar} />
     </div>

     <div className="p-2" style={{ zIndex: 1 }}>
      <h5>{enroll.courseId.name}</h5>
      <small className="text-info">{enroll.courseId.courseType}</small>
     </div>
    </div>
   </CardActionArea>
  </Card>
 );
};

export default CourseItemAdmin;
