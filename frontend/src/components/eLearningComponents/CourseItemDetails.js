import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Progress from './Progress';
import { useDispatch, useSelector } from 'react-redux';
import { COUSRE_ENROLL_RESET } from '../../constants/eLearningConstants/enrollConstants';
import {
 getCourseEnroll,
 getEnrollVideo,
} from '../../actions/eLearningActions/enrollActions';
import Loader from '../Loader';
import { BiGitPullRequest } from 'react-icons/bi';

const useStyles = makeStyles({
 media: {
  height: 200,
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
 },
});

const CourseItemDetails = (props) => {
 const { course } = props;
 const { id } = useParams();
 const classes = useStyles();
 const history = useHistory();
 const dispatch = useDispatch();

 const enrollCourse = useSelector((state) => state.enroll);
 const { loading: loadingEnroll, enroll } = enrollCourse;

 const getEnrollVideoPlay = useSelector((state) => state.getEnrollVideoPlay);
 const { loading: loadingPlay, plays } = getEnrollVideoPlay;

 useEffect(() => {
  dispatch({ type: COUSRE_ENROLL_RESET });
  dispatch(getCourseEnroll(id));
  dispatch(getEnrollVideo(id, 1));
 }, [dispatch, id]);

 const courseDetailLink = (id) => {
  history.push(`/elearning/courses/${id}/videos/${plays.videoNotWatch._id}`);
 };
 return (
  <Card
   className="mx-md-1 mx-lg-0 mx-xl-2 pb-2 shadow rounded-lg my-3"
   style={{ padding: '2px' }}
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
     <h5>{course.name}</h5>
     <small className="text-info">{course.courseType}</small>

     {loadingEnroll || loadingPlay ? (
      <button
       className="btn btn-block text-dark rounded bg-info shadow"
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
         <button className="btn btn-block text-dark rounded bg-info shadow kh">
          ស្នើរសុំរៀនមុខវិទ្យានេះ
          <BiGitPullRequest style={{ fontSize: 16, marginTop: -4 }} />
         </button>
         <button
          disabled
          className="btn btn-block text-dark rounded bg-warning shadow kh"
         >
          កំពុងស្នើរសុំរៀន
          <BiGitPullRequest style={{ fontSize: 16, marginTop: -4 }} />
         </button>
        </>
       ) : plays && plays.videoNotWatch === undefined ? (
        <button
         className="btn btn-block text-dark rounded bg-info shadow kh"
         onClick={() => courseDetailLink(course._id)}
         disabled
        >
         មុខវិទ្យានេះមិនទាន់មា​នវិឌីអូដើម្បីរៀននៅឡើយ
        </button>
       ) : (
        <button
         className="btn btn-block text-dark rounded bg-info shadow kh"
         onClick={() => courseDetailLink(course._id)}
        >
         ចូលទៅកាន់មុខវិទ្យានេះ
        </button>
       )}
      </>
     )}

     <h6 className="mt-2">This Course Include:</h6>
     <p className="my-1">
      <i style={{ width: '40px' }} className="fas fa-tv text-center"></i>22
      hours on-demand video
     </p>
     <p className="my-1">
      <i style={{ width: '40px' }} className="far fa-file text-center"></i>7
      articles
     </p>
     <p className="my-1">
      <i style={{ width: '40px' }} className="far fa-folder text-center"></i>
      46 downloadable resources
     </p>
     <p className="my-1">
      <i style={{ width: '40px' }} className="fas fa-code text-center"></i>24
      coding exercises
     </p>
     <p className="my-1">
      <i style={{ width: '40px' }} className="far fa-file text-center"></i>
      Full lifetime access
     </p>
     <p className="my-1">
      <i style={{ width: '40px' }} className="far fa-file text-center"></i>
      Access on mobile and TV
     </p>
     <p className="my-1">
      <i style={{ width: '40px' }} className="far fa-file text-center"></i>
      Certificate of completion
     </p>
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
       className=" mt-2"
       style={{ fontSize: '12px' }}
      >
       {'Copyright © '}
       <Link color="inherit" href="/">
        Coding Cambodia
       </Link>{' '}
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
