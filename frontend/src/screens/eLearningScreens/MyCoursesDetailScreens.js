import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEnrollDetail } from '../../actions/eLearningActions/enrollActions';
import Loader from '../../components/Loader';
import { GET_ENROLL_DETAIL_RESET } from '../../constants/eLearningConstants/enrollConstants';
import Message from '../../components/Message';
import { Parallax } from 'react-parallax';
import { Chart } from 'react-google-charts';

const insideStyles = {
 background: 'white',
 padding: 20,
 position: 'absolute',
 top: '50%',
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
        <div className="shadow py-1 rounded">
         <Parallax bgImage={enrollDetail.courseId.imgUrl} strength={500}>
          <div style={{ height: '60vh' }}>
           <h3>gg</h3>
           <div style={insideStyles} className="rounded shadow">
            <h3 className="m-0">{enrollDetail.courseId.name}</h3>
           </div>
          </div>
         </Parallax>
        </div>

        <div className="container">
         <div className="row mt-2">
          <div className="col-md-8">
           <div className="_bg-light shadow rounded p-2">
            <h4>Descriptions:</h4>
            <p>
             <span className="mr-5"></span>
             {enrollDetail.courseId.description}
            </p>
           </div>
          </div>
          <div className="col-md-4">
           <div className="shadow rounded p-2 _bg-light kh w-100">
            <Chart
             width={'100%'}
             height={'300px'}
             chartType="PieChart"
             loader={
              <div style={{ padding: '130px 0' }}>
               <Loader wd={40} hg={40} />
              </div>
             }
             data={[
              ['Task', 'Hours per Day'],
              ['Work', 11],
              ['Eat', 2],
              ['Commute', 2],
              ['Watch TV', 2],
              ['Sleep', 7],
             ]}
             options={{
              title: 'My Daily Activities',
              // Just add this option
              is3D: true,
             }}
             rootProps={{ 'data-testid': '2' }}
            />
            <Chart
             width={'100%'}
             height={'400px'}
             chartType="PieChart"
             loader={
              <div style={{ padding: '130px 0' }}>
               <Loader wd={40} hg={40} />
              </div>
             }
             data={[
              ['Language', 'Speakers (in millions)'],
              ['Assamese', 13],
              ['Bengali', 83],
              ['Bodo', 1.4],
              ['Dogri', 2.3],
              ['Gujarati', 46],
              ['Hindi', 300],
              ['Kannada', 38],
              ['Kashmiri', 5.5],
              ['Konkani', 5],
              ['Maithili', 20],
              ['Malayalam', 33],
              ['Manipuri', 1.5],
              ['Marathi', 72],
              ['Nepali', 2.9],
              ['Oriya', 33],
              ['Punjabi', 29],
              ['Sanskrit', 0.01],
              ['Santhali', 6.5],
              ['Sindhi', 2.5],
              ['Tamil', 61],
              ['Telugu', 74],
              ['Urdu', 52],
             ]}
             options={{
              title: 'Indian Language Use',
              legend: 'none',
              pieSliceText: 'label',
              slices: {
               4: { offset: 0.2 },
              },
             }}
             rootProps={{ 'data-testid': '5' }}
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
