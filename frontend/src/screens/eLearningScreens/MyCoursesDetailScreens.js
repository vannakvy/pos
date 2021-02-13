import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEnrollDetail } from '../../actions/eLearningActions/enrollActions';
import Loader from '../../components/Loader';
import { GET_ENROLL_DETAIL_RESET } from '../../constants/eLearningConstants/enrollConstants';
import Message from '../../components/Message';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MyCoursesDetailScreen = () => {
 const { eid, id } = useParams();
 const dispatch = useDispatch();

 const enrollDetailStore = useSelector((state) => state.getEnrollDetail);
 const {
  loading: loadingEnrollDetail,
  error: errorEnrollDetail,
  enrollDetail,
 } = enrollDetailStore;

 useEffect(() => {
  dispatch({ type: GET_ENROLL_DETAIL_RESET });
  dispatch(getEnrollDetail(eid));
 }, [dispatch, eid]);
 return (
  <>
   <div className="container">
    {loadingEnrollDetail ? (
     <div className="py-2">
      <Loader wd={40} hg={40} />
     </div>
    ) : errorEnrollDetail ? (
     <Message variant="danger">{errorEnrollDetail}</Message>
    ) : (
     <>
      {enrollDetail && enrollDetail ? (
       <>
        <div className="row mt-1">
         <div className="col-md-6 col-lg-6">
          <img
           className="rounded py-2 bg-light shadow w-100"
           src={enrollDetail.courseId.imgUrl}
           alt=""
          />
         </div>
         <div className="col-md-3 col-lg-3">
          <div className="bg-light shadow w-100 rounded h-100 p-1">
           <h5>{enrollDetail.courseId.name}</h5>
          </div>
         </div>
         <div className="col-md-3 col-lg-3">
          <div className="bg-light shadow rounded d-flex w-100 h-100 p-1">
           <CircularProgressbar
            value={enrollDetail.progressBar}
            text={`${enrollDetail.progressBar}%`}
            circleRatio={0.75}
            strokeWidth={4}
            styles={buildStyles({
             rotation: 1 / 2 + 1 / 8,
             strokeLinecap: 'butt',
             trailColor: '#eee',
             textColor: '#fa6c7e',
             pathColor: '#fa6c7e',
            })}
           />
          </div>
         </div>
        </div>
       </>
      ) : null}
     </>
    )}
   </div>
  </>
 );
};

export default MyCoursesDetailScreen;
