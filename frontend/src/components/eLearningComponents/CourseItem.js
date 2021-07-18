import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
 root: {
  maxWidth: 345,
 },
});

const CourseItem = (props) => {
 const { course } = props;
 const classes = useStyles();
 const history = useHistory();
 const courseDetailLink = (id) => {
  setTimeout(function () {
   history.push(`/elearning/courses/${id}`);
  }, 300);
 };
 return (
  <div
   className="shadow mb-3 courseItem bg-light rounded"
   style={{ padding: '1px', minWidth: '180px', maxWidth: '240px' }}
  >
   <CardActionArea onClick={() => courseDetailLink(course._id)}>
    <CardMedia
     className="rounded-top"
     style={{ height: 130 }}
     component="img"
     alt=""
     image={course.imgUrl}
     title=""
    />
    {/* <Progress /> */}
    <CardContent>
     <div style={{ height: '100px' }}>
      <h5>{course.name}</h5>
      <small className="text-info">{course.courseType}</small>
      <p>{course.description.slice(0, 50) + '...'}</p>
     </div>
    </CardContent>
   </CardActionArea>

   <CardActions className="d-flex justify-content-end">
    <Button
     color="secondary"
     onClick={() => courseDetailLink(course._id)}
     className="invisible"
    >
     <i className="fas fa-play" style={{ fontSize: '130%' }}></i>
    </Button>
   </CardActions>
  </div>
 );
};

export default CourseItem;
