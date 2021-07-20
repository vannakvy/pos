import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
 LOADER_TOP_FALSE,
 LOADER_TOP_TRUE,
} from '../../constants/navbarConstants';
import axios from 'axios';
import { COURSE_LIST_SUCCESS } from '../../constants/eLearningConstants/courseConstants';
import { USER_ENROLL_COURSE_SUCCESS } from '../../constants/eLearningConstants/enrollConstants';
import { getUserEnrollCourses } from '../../actions/eLearningActions/enrollActions';
import ConvertNum from './ConvertNum';

const NavElearning = () => {
 const dispatch = useDispatch();
 const history = useHistory();
 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;
 const userEnrollCourses = useSelector((state) => state.userEnrollCourses);
 const { coursesEnroll } = userEnrollCourses;

 useEffect(() => {
  if (userInfo && userInfo._id) {
   dispatch(getUserEnrollCourses(userInfo._id));
  }
 }, [userInfo]);

 const gotoCourses = async (e) => {
  e.preventDefault();
  dispatch({ type: LOADER_TOP_TRUE });
  const { data } = await axios.get(
   `/api/courses/courseType/AllCourses?pageNumber=1&keyword=&pageSize=`
  );
  if (data) {
   dispatch({ type: COURSE_LIST_SUCCESS, payload: data });
   dispatch({ type: LOADER_TOP_FALSE });
   setTimeout(() => {
    history.push('/elearning/courses');
   }, 500);
  }
 };

 const gotoMyCourses = async (e) => {
  e.preventDefault();
  dispatch({ type: LOADER_TOP_TRUE });
  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };
  const { data } = await axios.get(`/api/users/${userInfo._id}/enroll`, config);

  if (data) {
   dispatch({
    type: USER_ENROLL_COURSE_SUCCESS,
    payload: data,
   });
   dispatch({ type: LOADER_TOP_FALSE });
   history.push('/elearning/mycourses');
  }
 };

 return (
  <>
   <li className="nav-item active">
    <NavLink
     className="nav-link navbar_link"
     activeClassName="text-info"
     style={{ cursor: 'pointer' }}
     onClick={gotoCourses}
     to="/elearning/courses"
    >
     មុខវិទ្យា
    </NavLink>
   </li>
   {userLogin.userInfo === null ? null : (
    <li className="nav-item active">
     <NavLink
      className="nav-link navbar_link mx-2"
      activeClassName="text-info"
      onClick={gotoMyCourses}
      to="/elearning/mycourses"
     >
      មុខវិទ្យារបស់ខ្ញុំ​(
      <span className="text-danger rounded">
       <ConvertNum num={coursesEnroll && coursesEnroll.enrollCourses.length} />
      </span>
      )
     </NavLink>
    </li>
   )}
  </>
 );
};

export default NavElearning;
