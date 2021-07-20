import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import {
 LOADER_TOP_FALSE,
 LOADER_TOP_TRUE,
} from '../../constants/navbarConstants';
import axios from 'axios';
import { COURSE_DETAILS_SUCCESS } from '../../constants/eLearningConstants/courseConstants';

const CourseItem = (props) => {
 const { course } = props;
 const history = useHistory();
 const dispatch = useDispatch();

 const gotoCourse = async (id) => {
  dispatch({ type: LOADER_TOP_TRUE });
  const { data } = await axios.get(`/api/courses/${id}`);
  if (data) {
   dispatch({
    type: COURSE_DETAILS_SUCCESS,
    payload: data,
   });
   dispatch({ type: LOADER_TOP_FALSE });
   history.push(`/elearning/courses/${id}`);
  }
 };
 return (
  <div
   className="shadow mb-3 courseItem bg-light rounded"
   style={{ padding: '1px', minWidth: '180px', maxWidth: '240px' }}
  >
   <CardActionArea onClick={() => gotoCourse(course._id)}>
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
      <h5 className="ubuntu">{course.name}</h5>
      <small className="text-info ubuntu">{course.courseType}</small>
      <p className="ubuntu">{course.description.slice(0, 50) + '...'}</p>
     </div>
    </CardContent>
   </CardActionArea>

   <CardActions className="d-flex justify-content-end">
    <Button
     color="secondary"
     onClick={() => gotoCourse(course._id)}
     className="invisible"
    >
     <i className="fas fa-play" style={{ fontSize: '130%' }}></i>
    </Button>
   </CardActions>
  </div>
 );
};

export default CourseItem;
