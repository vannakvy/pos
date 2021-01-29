import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '../../actions/eLearningActions/courseActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Sections from '../../components/eLearningComponents/Sections';

const CoursesDetail = ({ match, history }) => {
 const courseId = match.params.id;
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(getCourseById(courseId));
 }, [dispatch, courseId]);

 const courseDetail = useSelector((state) => state.courseDetail);
 const { loading, error, course } = courseDetail;

 const goBack = () => {
  history.push(`/adminElearn/courses`);
 };
 return (
  <>
   <button
    onClick={goBack}
    className="btn mt-2 mb-3 py-2 px-4 text-dark grediant rounded adminHover"
   >
    Back
   </button>

   {loading ? (
    <Loader wd={180} hg={180} />
   ) : error ? (
    <Message variant="danger">{error}</Message>
   ) : (
    <>
     <div className="container-fluid row">
      <div className="col-md-4">
       <img className="w-100 rounded" src={course.imgUrl} alt="" />
      </div>
      <div className="col-md-4">
       <h1 className="mb-4">{course.name}</h1>
       <p>
        <span className="mr-5"></span>
        {course.description}
       </p>
       <p>
        Course Type:{' '}
        <span className="font-weight-bold text-info">{course.courseType}</span>
       </p>
      </div>
      <div className="col-md-4 w-100 p-0">
       <Sections />
      </div>
     </div>
    </>
   )}
  </>
 );
};

export default CoursesDetail;
