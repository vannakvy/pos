import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseEnroll } from '../../actions/eLearningActions/enrollActions';
import { getSections } from '../../actions/eLearningActions/sectionActions';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { COUSRE_ENROLL_RESET } from '../../constants/enrollConstants';

const CourseVideoScreen = () => {
 const { id } = useParams();

 const dispatch = useDispatch();

 const enrollCourse = useSelector((state) => state.enroll);
 const { loading: loadingEnroll, error: errorEnroll, enroll } = enrollCourse;

 const sectionList = useSelector((state) => state.sectionList);
 const { loading: loadingSection, error: errorSection, sections } = sectionList;

 useEffect(() => {
  dispatch({ type: COUSRE_ENROLL_RESET });
  dispatch(getCourseEnroll(id));
  dispatch(getSections(id));
 }, [dispatch, id]);

 return (
  <>
   <div className="container-fluid mt-2">
    {loadingEnroll ? (
     <div className="py-5">
      <Loader wd={180} hg={180} />
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
         <div className="col-xl-3 overflow-auto" style={{ height: '810px' }}>
          <h5>Course Content</h5>
          <CourseContent sections={sections} cid={id} fromVideo={true} />
         </div>
         <div className="col-xl-9">
          <ReactPlayer
           width="100%"
           height="800px"
           url="https://www.youtube.com/embed/mn8pbQ-eUBI"
           controls
           playing={true}
          />
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
