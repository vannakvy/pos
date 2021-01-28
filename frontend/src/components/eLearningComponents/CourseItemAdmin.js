import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ProgressCourse from './ProgressCourse';

const CourseItemAdmin = (props) => {
 const { course } = props;
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
    onClick={() => courseDetailLink(course._id)}
   >
    <img
     className="position-absolute"
     style={{ width: 495, opacity: 0.2 }}
     src={course.imgUrl}
     alt=""
    />
    <div className="d-flex">
     <div className="p-2">
      <ProgressCourse />
     </div>

     <div className="p-2" style={{ zIndex: 1 }}>
      <h5>{course.name}</h5>
      <small className="text-info">{course.courseType}</small>
     </div>
    </div>
   </CardActionArea>
  </Card>
 );
};

export default CourseItemAdmin;
