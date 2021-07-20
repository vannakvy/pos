import React from 'react';
import { useHistory } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CircularStatic from './CircleProgress';
import { useDispatch, useSelector } from 'react-redux';
import {
 LOADER_TOP_FALSE,
 LOADER_TOP_TRUE,
} from '../../constants/navbarConstants';
import axios from 'axios';
import { GET_ENROLL_DETAIL_SUCCESS } from '../../constants/eLearningConstants/enrollConstants';

const CourseItemOwn = (props) => {
 const { enroll } = props;
 const course = enroll.courseId;
 const history = useHistory();
 const dispatch = useDispatch();

 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;

 const gotoMyCourse = async (eid) => {
  dispatch({ type: LOADER_TOP_TRUE });

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };
  const { data } = await axios.get(`/api/eLearning/enrolls/${eid}`, config);
  if (data) {
   dispatch({
    type: GET_ENROLL_DETAIL_SUCCESS,
    payload: data,
   });
   dispatch({ type: LOADER_TOP_FALSE });
   setTimeout(() => {
    history.push(`/elearning/mycourses/${eid}`);
   }, 500);
  }
 };

 return (
  <div
   className="shadow mb-3 courseItem bg-light rounded"
   style={{ padding: '1px', minWidth: '180px', maxWidth: '240px' }}
  >
   <CardActionArea onClick={() => gotoMyCourse(enroll._id)}>
    <CardMedia
     className="rounded-top"
     style={{ height: 130 }}
     component="img"
     alt=""
     image={course.imgUrl}
     title=""
    />

    <CardContent>
     <div className="ubuntu" style={{ height: '100px' }}>
      <h5 className="ubuntu">{course.name}</h5>
      <small className="text-info ubuntu">{course.courseType}</small>
     </div>
    </CardContent>
   </CardActionArea>

   <CardActions className="d-flex justify-content-between">
    <CircularStatic progressBar={enroll.progressBar} />
    <button
     type="button"
     className="btn btn-sm btn-light kh"
     onClick={() => gotoMyCourse(enroll._id)}
    >
     ចាប់ផ្ដើម
    </button>
   </CardActions>
  </div>
 );
};

export default CourseItemOwn;
