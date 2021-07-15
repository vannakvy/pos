import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEnrollDetail } from '../../actions/eLearningActions/enrollActions';
import Loader from '../../components/Loader';
import Load from '../../components/eLearningComponents/Watch';
import { GET_ENROLL_DETAIL_RESET } from '../../constants/eLearningConstants/enrollConstants';
import Message from '../../components/Message';
import { Parallax } from 'react-parallax';
import { Chart } from 'react-google-charts';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import LoaderFullScreen from '../../components/eLearningComponents/LoaderFullScreen';

const insideStyles = {
 background: 'white',
 padding: 20,
 position: 'absolute',
 top: '30%',
 left: '50%',
 transform: 'translate(-50%,-50%)',
};

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
  window.scrollTo(0, 0);
  dispatch(getEnrollDetail(eid));
 }, [dispatch, eid]);
 return (
  <>
   <div className="">
    {loadingEnrollDetail ? (
     <LoaderFullScreen />
    ) : errorEnrollDetail ? (
     <Message variant="danger">{errorEnrollDetail}</Message>
    ) : (
     <>
      {enrollDetail && enrollDetail ? (
       <>
        <div className="shadow">
         <Parallax bgImage={enrollDetail.courseId.imgUrl} strength={500}>
          <div style={{ height: '40vh' }}>
           <div style={insideStyles} className="rounded shadow">
            <h5 className="m-0">{enrollDetail.courseId.name}</h5>
           </div>
          </div>
         </Parallax>
        </div>

        <div className="container w-100">
         <div className="row mt-2">
          <div className="col-md-8 p-1">
           <div className="_bg-light shadow rounded p-3">
            <h5 className="kh">ព័ត៌មានផ្សេងៗ:</h5>
            <p>
             <span className="mr-5"></span>
             {enrollDetail.courseId.description}
            </p>
           </div>
           <div className="my-3">
            <h5 className="kh">វីឌីអូសម្រាប់មុខវិទ្យានេះ</h5>
            <CourseContent
             sections={enrollDetail.courseId.section}
             cid={id}
             fromVideo={true}
            />
           </div>
          </div>
          <div className="col-md-4 p-1">
           <div className="shadow rounded p-2 _bg-light kh">
            <h5 className="kh text-center mt-1 mb-0">លទ្ធផលការសិក្សា</h5>
            <Chart
             width={'100%'}
             height={'300px'}
             chartType="PieChart"
             loader={
              <div className="text-center" style={{ padding: '130px 0' }}>
               <Load color="#282c34" type="Watch" width={40} height={40} />
              </div>
             }
             data={[
              ['Task', 'Hours per Day'],
              ['Finished', enrollDetail.progressBar],
              ['Not yet', 100 - enrollDetail.progressBar],
             ]}
             options={{
              // Just add this option
              is3D: true,
             }}
             rootProps={{ 'data-testid': '2' }}
            />
           </div>
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
