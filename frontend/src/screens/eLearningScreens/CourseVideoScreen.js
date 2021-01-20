import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourseEnroll } from '../../actions/eLearningActions/enrollActions';
import { COUSRE_ENROLL_RESET } from '../../constants/enrollConstants';

const CourseVideoScreen = () => {
 const { id } = useParams();

 const dispatch = useDispatch();

 const enrollCourse = useSelector((state) => state.enroll);
 const { enroll } = enrollCourse;

 console.log(enroll);

 useEffect(() => {
  dispatch({ type: COUSRE_ENROLL_RESET });
  dispatch(getCourseEnroll(id));
 }, [dispatch, id]);

 return (
  <>
   <div className="container-fluid mt-2">
    {enroll === null || enroll === undefined ? (
     <>
      <h3 className="text-center">You're not own this course</h3>
     </>
    ) : (
     <>
      <div className="row">
       <div className="col-lg-9">
        <ReactPlayer
         width="100%"
         height="800px"
         url="https://www.youtube.com/embed/TVkgz1A07n0"
         controls
         playing={true}
        />
       </div>
       <div className="col-lg-3"></div>
      </div>
     </>
    )}
   </div>
  </>
 );
};

export default CourseVideoScreen;
