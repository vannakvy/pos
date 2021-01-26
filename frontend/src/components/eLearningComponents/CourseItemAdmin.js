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
     style={{ width: 495, opacity: 0.1 }}
     src={course.imgUrl}
     alt=""
    />
    <div className="p-3 d-flex">
     <ProgressCourse />
    </div>
   </CardActionArea>
  </Card>
 );
};

export default CourseItemAdmin;
