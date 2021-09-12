import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import {
 addEnrollVideo,
 getCourseEnroll,
 getEnrollSections,
 getEnrollVideo,
} from '../../actions/eLearningActions/enrollActions';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import NotOwn from '../../components/eLearningComponents/NotOwn';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { COUSRE_ENROLL_RESET } from '../../constants/eLearningConstants/enrollConstants';

const CourseVideoScreen = () => {
 const { id, vid } = useParams();
 const dispatch = useDispatch();
 const history = useHistory();

 const redirect = `/elearning/courses/${id}/videos/${vid}`;
 const userLogin = useSelector((state) => state.userLogin);
 const enrollCourse = useSelector((state) => state.enroll);
 const { loading: loadingEnroll, error: errorEnroll, enroll } = enrollCourse;

 useEffect(() => {
  dispatch({ type: COUSRE_ENROLL_RESET });
  dispatch(getCourseEnroll(id));
 }, [dispatch, id]);

 const {
  loading: loadingSection,
  error: errorSection,
  sections,
 } = useSelector((state) => state.getEnrollSection);

 const addEnrollVideos = useSelector((state) => state.addEnrollVideos);
 const { success: successAddEnrollVideo } = addEnrollVideos;

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(getEnrollSections(id));
 }, [dispatch, id, successAddEnrollVideo]);

 const getEnrollVideoPlay = useSelector((state) => state.getEnrollVideoPlay);
 const { loading: loadingPlay, error: errorPlay, plays } = getEnrollVideoPlay;

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(getEnrollVideo(id, vid));
 }, [dispatch, id, vid]);

 const onVideoEnded = () => {
  dispatch(addEnrollVideo(enroll._id, vid));
  setTimeout(() => {
   history.push(`/elearning/courses/${id}/videos/${plays.nextVideo._id}`);
  }, 2000);
 };

 return (
  <>
   <div className="container-fluid" style={{ minHeight: '90vh' }}>
    {userLogin.userInfo === null || userLogin === {} ? (
     <Redirect to={`/login?redirect=${redirect}`} />
    ) : loadingEnroll ? (
     <div className="py-3">
      <Loader wd={40} hg={40} />
     </div>
    ) : errorEnroll ? (
     <Message variant="danger">{errorEnroll}</Message>
    ) : (
     <>
      {enroll === null || enroll === undefined ? (
       <>
        <NotOwn />
       </>
      ) : (
       <>
        <div className="row">
         <div
          className="col-lg-3  d-lg-block d-none overflow-auto"
          style={{ height: '810px' }}
         >
          {loadingSection ? (
           <Loader wd={40} hg={40} />
          ) : errorSection ? (
           <Message variant="danger">{errorSection}</Message>
          ) : (
           <CourseContent
            sections={sections && sections}
            cid={id}
            fromVideo={true}
           />
          )}
         </div>
         <div className="col-lg-9 col-md-12 w-100 px-0">
          {loadingPlay ? (
           <div style={{ padding: '100px 0' }}>
            <Loader wd={40} hg={40} />
           </div>
          ) : errorPlay ? (
           <Message variant="danger">{errorPlay}</Message>
          ) : (
           <div className="shadow mt-md-1 mt-0">
            <div className="player-wrapper">
             <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              key={plays && plays.video.url}
              url={plays && plays.video.url}
              onEnded={() => onVideoEnded()}
              controls
              // playing={true}
             />
            </div>
           </div>
          )}
         </div>
         <div className="col-md-12 d-lg-none mt-2">
          {loadingEnroll ? (
           <Loader wd={40} hg={40} />
          ) : errorEnroll ? (
           <Message variant="danger">{errorEnroll}</Message>
          ) : (
           <CourseContent
            sections={sections && sections}
            cid={id}
            fromVideo={true}
           />
          )}
         </div>
        </div>
       </>
      )}
     </>
    )}
   </div>
  </>
 );
};

export default CourseVideoScreen;
