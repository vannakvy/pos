import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../../actions/eLearningActions/courseActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Sections from '../../components/eLearningComponents/Sections';
import { Parallax } from 'react-parallax';
import Objective from '../../components/eLearningComponents/Objective';

const insideStyles = {
 background: 'rgba(255, 255, 255, 0.7)',
 padding: 20,
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%,-50%)',
};

const CoursesDetail = ({ match, history }) => {
 const courseId = match.params.id;
 const dispatch = useDispatch();

 const courseDetail = useSelector((state) => state.courseDetail);
 const { loading, error, course } = courseDetail;

 useEffect(() => {
  dispatch(getCourseById(courseId));
 }, [dispatch, courseId]);

 const goBack = () => {
  history.push(`/adminElearn/courses`);
 };
 return (
  <>
   {loading ? (
    <div className="my-3">
     <Loader wd={40} hg={40} />
    </div>
   ) : error ? (
    <Message variant="danger">{error}</Message>
   ) : (
    <>
     <Parallax className="rounded" bgImage={course.imgUrl} strength={300}>
      <div style={{ height: '40vh' }}>
       <div style={insideStyles} className="rounded shadow">
        <h5 className="m-0">{course.name}</h5>
        <p>
         Course Type:{' '}
         <span className="font-weight-bold text-info">{course.courseType}</span>
        </p>
        <p>
         <span className="mr-5"></span>
         {course.description}
        </p>
       </div>
      </div>
     </Parallax>
     <button
      onClick={goBack}
      className="btn btn-dark px-4 rounded my-1 shadow kh"
     >
      ថយក្រោយ
     </button>
     <div className="container-fluid">
      <Objective id={courseId} />
      <Sections />
     </div>
    </>
   )}
  </>
 );
};

export default CoursesDetail;
