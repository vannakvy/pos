import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Progress from './Progress';
import { useDispatch, useSelector } from 'react-redux';
import {
 COUSRE_ENROLL_RESET,
 CREATE_REQ_ENROLL_SUCCESS,
} from '../../constants/eLearningConstants/enrollConstants';
import {
 getCourseEnroll,
 getEnrollVideo,
} from '../../actions/eLearningActions/enrollActions';
import Loader from '../Loader';
import { BiGitPullRequest } from 'react-icons/bi';
import DescripModal from './DescripModal';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';

const useStyles = makeStyles({
 media: {
  height: 200,
  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,
 },
});

const CourseItemDetails = (props) => {
 const { course } = props;
 const { id } = useParams();

 const [haveReq, setHaveReq] = useState(false);
 const [descrip, setDescrip] = useState('');

 const classes = useStyles();
 const history = useHistory();
 const dispatch = useDispatch();

 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;
 const enrollCourse = useSelector((state) => state.enroll);
 const { loading: loadingEnroll, enroll } = enrollCourse;
 const getEnrollVideoPlay = useSelector((state) => state.getEnrollVideoPlay);
 const { loading: loadingPlay, plays } = getEnrollVideoPlay;
 const createReqEnroll = useSelector((state) => state.createReqEnroll);
 const { success: createReqEnrollSuccess } = createReqEnroll;

 useEffect(() => {
  dispatch({ type: COUSRE_ENROLL_RESET });
  dispatch(getCourseEnroll(id));
 }, [dispatch, id]);

 useEffect(async () => {
  dispatch(getEnrollVideo(id, 1));
  if (userInfo) {
   const config = {
    headers: {
     Authorization: `Bearer ${userInfo.token}`,
    },
   };
   const { data } = await axios.get(
    `/api/eLearning/enrolls/user/req/${id}`,
    config
   );
   if (data) {
    setHaveReq(true);
   }
  }
 }, [userInfo, id]);

 const reqEnrollCreate = async () => {
  if (userInfo) {
   const config = {
    headers: {
     Authorization: `Bearer ${userInfo.token}`,
    },
   };
   const { data } = await axios.post(
    `/api/eLearning/enrolls/user/request`,
    { cid: id, descrip },
    config
   );
   if (data) {
    setHaveReq(true);
    dispatch({ type: CREATE_REQ_ENROLL_SUCCESS, payload: data });
   }
  }
 };

 const courseDetailLink = (id) => {
  history.push(`/elearning/courses/${id}/videos/${plays.videoNotWatch._id}`);
 };
 return (
  <Card
   className="mx-md-1 mx-lg-0 mx-xl-2 pb-2 shadow-sm my-3"
   style={{ padding: '2px', borderRadius: 25 }}
  >
   <CardMedia
    className={classes.media}
    component="img"
    alt=""
    image={course.imgUrl}
    title=""
   />
   <Progress />
   <CardContent>
    <div style={{ minHeight: '160px' }}>
     <h5 className="kh mb-2 text-center" style={{ fontSize: 16 }}>
      {course.name}
     </h5>
     <p className="text-info fw-bold text-center" style={{ fontSize: 12 }}>
      {course.courseType}
     </p>

     {loadingEnroll || loadingPlay ? (
      <button
       className="btn btn-block text-dark rounded-pill bg-info shadow"
       disabled
      >
       <span className="d-flex">
        <Loader wd={20} hg={20} color={'text-dark'} mg={`0`} />
        <span className="ml-3 kh">កំពុងដំណើរការ...</span>
       </span>
      </button>
     ) : (
      <>
       {enroll === null || enroll === undefined ? (
        <>
         {!userInfo ? (
          <button
           onClick={() =>
            history.push(`/login?redirect=/elearning/courses/${id}`)
           }
           className="btn btn-block text-dark rounded-pill bg-info shadow kh"
          >
           ចុះឈ្មោះដើម្បីស្នើរសុំរៀន
          </button>
         ) : (
          <>
           {!haveReq ? (
            <DescripModal
             setDescrip={setDescrip}
             reqEnrollCreate={reqEnrollCreate}
            />
           ) : (
            <button
             disabled
             className="btn btn-block text-dark rounded-pill bg-warning shadow kh"
            >
             កំពុងស្នើរសុំរៀន
             <BiGitPullRequest style={{ fontSize: 16, marginTop: -4 }} />
            </button>
           )}
          </>
         )}
        </>
       ) : plays && plays.videoNotWatch === undefined ? (
        <button
         className="btn btn-block text-dark rounded-pill bg-danger shadow kh"
         disabled
        >
         មុខវិទ្យានេះមិនទាន់មា​នវិឌីអូដើម្បីរៀននៅឡើយ
        </button>
       ) : (
        <button
         className="btn btn-block text-dark rounded-pill bg-info shadow kh"
         onClick={() => courseDetailLink(course._id)}
        >
         ចូលទៅកាន់មុខវិទ្យានេះ
        </button>
       )}
      </>
     )}

     <h5 className="mt-2 mb-3 text-center text-info mt-4">អំពីមុខវិទ្យា</h5>
     {ReactHtmlParser(
      course.include || '<h6 class="text-center">មិនទាន់មាន</h6>'
     )}
     <hr />
     <div className="text-center mt-4">
      <i
       style={{ fontSize: '15px', color: '#4064ac' }}
       className=" mx-3 fab fa-facebook-f"
      ></i>
      <i
       style={{
        fontSize: '15px',
        color: '#e94057',
       }}
       className=" mx-3 fab fa-instagram"
      ></i>
      <i
       style={{ fontSize: '15px', color: '#1d9ceb' }}
       className=" mx-3 fab fa-twitter"
      ></i>
      <i
       style={{ fontSize: '15px', color: '#f70000' }}
       className=" mx-3 fab fa-youtube"
      ></i>
      <Typography
       variant="body2"
       align="center"
       className="mt-2 mb-5 kh"
       style={{ fontSize: '12px' }}
      >
       {'Copyright © '}
       <NavLink color="inherit" to="/">
        Coding Cambodia
       </NavLink>{' '}
       {new Date().getFullYear()}
       {'.'}
      </Typography>
     </div>
    </div>
   </CardContent>
  </Card>
 );
};

export default CourseItemDetails;
