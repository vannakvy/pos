import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseEnroll } from '../../actions/eLearningActions/enrollActions';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { COUSRE_ENROLL_RESET } from '../../constants/eLearningConstants/enrollConstants';

const CourseVideoScreen = () => {
 const { id } = useParams();

 const dispatch = useDispatch();

 const enrollCourse = useSelector((state) => state.enroll);
 const { loading: loadingEnroll, error: errorEnroll, enroll } = enrollCourse;

 console.log(enroll);

 useEffect(() => {
  dispatch({ type: COUSRE_ENROLL_RESET });
  dispatch(getCourseEnroll(id));
 }, [dispatch, id]);

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
          {loadingEnroll ? (
           <Loader wd={40} hg={40} />
          ) : errorEnroll ? (
           <Message variant="danger">{errorEnroll}</Message>
          ) : (
           <CourseContent
            sections={enroll && enroll.section}
            cid={id}
            fromVideo={true}
           />
          )}
         </div>
         <div className="col-lg-9 col-md-12">
          <ReactPlayer
           className="p-1 bg-light rounded"
           width="100%"
           height="800px"
           url="https://player.vimeo.com/video/504697764"
           controls
           playing={true}
          />
         </div>
         <div className="col-md-12  d-lg-none">
          <h5>Course Content</h5>
          {loadingEnroll ? (
           <Loader wd={40} hg={40} />
          ) : errorEnroll ? (
           <Message variant="danger">{errorEnroll}</Message>
          ) : (
           <CourseContent
            sections={enroll && enroll.section}
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
