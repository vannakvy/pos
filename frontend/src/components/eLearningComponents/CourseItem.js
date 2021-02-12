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
 media: {
  height: 200,
 },
});

const CourseItem = (props) => {
 const { course, courseShow = false } = props;
 const classes = useStyles();
 const history = useHistory();
 const courseDetailLink = (id) => {
  setTimeout(function () {
   history.push(`/elearning/courses/${id}`);
  }, 300);
 };
 return (
  <Card className="mx-md-1 mx-lg-0 mx-xl-2 shadow round my-1 courseItem">
   <CardActionArea onClick={() => courseDetailLink(course._id)}>
    <CardMedia
     className={classes.media}
     component="img"
     alt=""
     image={course.imgUrl}
     title=""
    />
    {/* <Progress /> */}
    <CardContent>
     <div style={{ height: `${courseShow ? '60px' : '160px'}` }}>
      <h5>{course.name}</h5>
      <small className="text-info">{course.courseType}</small>
      {courseShow ? null : <p>{course.description.slice(0, 200) + '...'}</p>}
     </div>
    </CardContent>
   </CardActionArea>
   {courseShow ? null : (
    <CardActions className="d-flex justify-content-end">
     <Button
      color="secondary"
      onClick={() => courseDetailLink(course._id)}
      className="invisible"
     >
      <i className="fas fa-play" style={{ fontSize: '130%' }}></i>
     </Button>
    </CardActions>
   )}
  </Card>
 );
};

export default CourseItem;
