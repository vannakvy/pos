import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Progress from './Progress';
import CircularStatic from './CircleProgress';
import { useDispatch } from 'react-redux';
import {
 LOADER_TOP_FALSE,
 LOADER_TOP_TRUE,
} from '../../constants/navbarConstants';

const useStyles = makeStyles({
 root: {
  maxWidth: 345,
 },
 media: {
  height: 120,
 },
});

const CourseItemOwn = (props) => {
 const { enroll } = props;
 const course = enroll.courseId;
 const classes = useStyles();
 const history = useHistory();
 const dispatch = useDispatch();

 const gotoMyCourse = () => {
  dispatch({ type: LOADER_TOP_TRUE });

  setTimeout(() => {
   history.push(
    `/elearning/enroll/${enroll._id}/courses/${enroll.courseId._id}`
   );
   dispatch({ type: LOADER_TOP_FALSE });
  }, 3000);
 };

 return (
  <div
   className="shadow mb-3 courseItem bg-light"
   style={{ padding: '1px', minWidth: '230px', maxWidth: '240px' }}
  >
   <CardActionArea onClick={() => gotoMyCourse()}>
    <CardMedia
     className={classes.media}
     component="img"
     alt=""
     image={course.imgUrl}
     title=""
    />

    <CardContent>
     <div style={{ height: '100px' }}>
      <h5>{course.name}</h5>
      <small className="text-info">{course.courseType}</small>
     </div>
    </CardContent>
   </CardActionArea>

   <CardActions className="d-flex justify-content-between">
    <CircularStatic progressBar={enroll.progressBar} />
    <button
     type="button"
     className="btn btn-sm btn-light kh"
     onClick={() => gotoMyCourse()}
    >
     ចាប់ផ្ដើម
    </button>
   </CardActions>
  </div>
 );
};

export default CourseItemOwn;
