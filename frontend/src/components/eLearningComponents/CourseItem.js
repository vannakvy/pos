import React from 'react';
import { useHistory } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
   className="mb-3 courseItem round shadow-sm"
   style={{
    minWidth: '150px',
    maxWidth: '225px',
    background: '#fff',
    overflow: 'hidden',
    // border: '2px solid rgb(33,161,243)',
    // borderRadius: 15,
   }}
  >
   <CardActionArea onClick={() => gotoCourse(course._id)}>
    <CardMedia
     className="rounded-top  d-none d-sm-block"
     style={{ height: 130 }}
     component="img"
     alt=""
     image={course.imgUrl}
     title=""
    />

    <CardMedia
     className="rounded-top d-block d-sm-none"
     style={{ height: 115 }}
     component="img"
     alt=""
     image={course.imgUrl}
     title=""
    />
    <CardContent>
     <div className="d-none d-sm-block kh" style={{ height: '140px' }}>
      <h5 className="kh">{course.name}</h5>
      <small className="text-info kh">{course.courseType}</small>
      <p className="kh">{course.description.slice(0, 50) + '...'}</p>
     </div>
     <div className="d-block d-sm-none kh" style={{ height: '115px' }}>
      <h5 className="kh">{course.name}</h5>
      <small className="text-info kh">{course.courseType}</small>
     </div>
    </CardContent>
   </CardActionArea>
  </div>
 );
};

export default CourseItem;
