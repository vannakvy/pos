import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
 getCourseEnroll,
 getEnrollSections,
 getEnrollVideo,
} from '../../actions/eLearningActions/enrollActions';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { COUSRE_ENROLL_RESET } from '../../constants/eLearningConstants/enrollConstants';

const CourseVideoScreen = () => {
 const { id, vid } = useParams();
 const dispatch = useDispatch();
 const history = useHistory();

 const enrollCourse = useSelector((state) => state.enroll);
 const { loading: loadingEnroll, error: errorEnroll, enroll } = enrollCourse;

 useEffect(() => {
  dispatch({ type: COUSRE_ENROLL_RESET });
  dispatch(getCourseEnroll(id));
 }, [dispatch, id]);

 const getEnrollSection = useSelector((state) => state.getEnrollSection);
 const {
  loading: loadingSection,
  error: errorSection,
  sections,
 } = getEnrollSection;

 useEffect(() => {
  dispatch(getEnrollSections(id));
 }, [dispatch, id]);

 const getEnrollVideoPlay = useSelector((state) => state.getEnrollVideoPlay);
 const { loading: loadingPlay, error: errorPlay, plays } = getEnrollVideoPlay;

 useEffect(() => {
  dispatch(getEnrollVideo(id, vid));
 }, [dispatch, id, vid]);

 const onVideoEnded = () => {
  history.push(`/courses/${id}/videos/${plays.nextVideo._id}`);
 };

 return (
  <>
   <div className="container-fluid mt-2">
    {loadingEnroll ? (
     <div className="py-3">
      <Loader wd={40} hg={40} />
     </div>
    ) : errorEnroll ? (
     <Message variant="danger">{errorEnroll}</Message>
    ) : (
     <>
      {enroll === null || enroll === undefined ? (
       <>
        <h3 className="text-center">You're not own this course</h3>
       </>
      ) : (
       <>
        <div className="row">
         <div
          className="col-lg-3  d-lg-block d-none overflow-auto"
          style={{ height: '810px' }}
         >
          <h5>Course Content</h5>
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
         <div className="col-lg-9 col-md-12">
          {loadingPlay ? (
           <div>
            <Loader wd={40} hg={40} />
           </div>
          ) : errorPlay ? (
           <Message variant="danger">{errorPlay}</Message>
          ) : (
           <ReactPlayer
            className="p-1 bg-light rounded"
            width="100%"
            height="800px"
            url={plays && plays.video.url}
            onEnded={() => onVideoEnded()}
            controls
            allowFullScreen={true}
            playing={true}
           />
          )}
         </div>
         <div className="col-md-12  d-lg-none">
          <h5>Course Content</h5>
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
