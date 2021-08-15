import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
 getEnrollDetail,
 getEnrollSections,
 getEnrollVideo,
} from '../../actions/eLearningActions/enrollActions';
import Load from '../../components/eLearningComponents/Watch';
import Message from '../../components/Message';
import { Parallax } from 'react-parallax';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import LoaderFullScreen from '../../components/eLearningComponents/LoaderFullScreen';
import MyCoursesItem from '../../components/eLearningComponents/MyCoursesItem';
import ResponsiveDrawer from '../../components/eLearningComponents/MyCourseCom';
import Loader from '../../components/Loader';
import Comment from '../../components/eLearningComponents/comment';

const insideStyles = {
 background: 'white',
 padding: 20,
 position: 'absolute',
 top: '50%',
 left: '50%',
 transform: 'translate(-50%,-50%)',
};

const MyCoursesDetailScreen = () => {
 const { eid } = useParams();
 const dispatch = useDispatch();
 const history = useHistory();

 const {
  loading: loadingEnrollDetail,
  error: errorEnrollDetail,
  enrollDetail,
 } = useSelector((state) => state.getEnrollDetail);
 const { loading: loadingPlay, plays } = useSelector(
  (state) => state.getEnrollVideoPlay
 );
 const {
  loading: loadingSection,
  error: errorSection,
  sections,
 } = useSelector((state) => state.getEnrollSection);

 useEffect(() => {
  window.scrollTo(0, 0);
  if (!enrollDetail || (enrollDetail && enrollDetail._id !== eid)) {
   dispatch(getEnrollDetail(eid));
  }
 }, [dispatch, eid]);

 useEffect(() => {
  if (enrollDetail) {
   dispatch(
    getEnrollSections(
     enrollDetail && enrollDetail.courseId && enrollDetail.courseId._id
    )
   );
   dispatch(
    getEnrollVideo(
     enrollDetail && enrollDetail.courseId && enrollDetail.courseId._id,
     1
    )
   );
  }
 }, [dispatch, enrollDetail]);

 const courseDetailLink = (id) => {
  history.push(
   `/elearning/courses/${id}/videos/${plays && plays.videoNotWatch._id}`
  );
 };

 console.log(plays);

 return (
  <>
   <div>
    {errorEnrollDetail ? (
     <Message variant="danger">{errorEnrollDetail}</Message>
    ) : (
     <>
      {enrollDetail && enrollDetail ? (
       <>
        <div
         className="position-absolute w-100"
         style={{
          top: 0,
          height: '100vh',
          paddingTop: '68px',
         }}
        >
         <div className="d-flex h-100" style={{ background: 'rgb(27,25,33)' }}>
          <div
           className="h-100 shadow d-none d-lg-block mx-3 pt-3 "
           style={{
            minWidth: '270px',
            maxWidth: '270px',
           }}
          >
           <MyCoursesItem enroll={enrollDetail} />
          </div>

          <div
           className="w-100 mt-0 mt-lg-3"
           style={{ overflowY: 'auto', overflowX: 'hidden' }}
          >
           <div className="position-relative">
            <div
             className="position-relative"
             style={{
              height: '400px !important',
             }}
            >
             <img
              className="w-100"
              style={{ height: 350, objectFit: 'cover' }}
              src={enrollDetail.courseId.imgUrl}
              alt=""
             />
             <div
              style={{
               top: 0,
               background: 'rgba(0,0,0, 0.8)',
              }}
              className="w-100 h-100 position-absolute px-3 pb-5 d-flex align-items-center"
             >
              <div>
               <h1
                className="text-light ubuntu mb-4"
                style={{ fontSize: '2.9rem', maxWidth: '450px' }}
               >
                {enrollDetail.courseId.name}
               </h1>
               <p className="ubuntu text-info">
                {enrollDetail.courseId.courseType}
               </p>
               {plays && plays.videoNotWatch && plays.videoNotWatch._id ? (
                <button
                 onClick={() => courseDetailLink(enrollDetail.courseId._id)}
                 className={`btn rounded text-dark kh btn-info`}
                >
                 ចូលទៅកាន់កន្លែងរៀនជាវីដីអូ
                </button>
               ) : (
                <button
                 onClick={() => courseDetailLink(enrollDetail.courseId._id)}
                 className={`btn rounded text-dark kh btn-danger`}
                 disabled
                >
                 មុខវិទ្យានេះមិនទាន់មា​នវិឌីអូដើម្បីរៀននៅឡើយ
                </button>
               )}
              </div>
             </div>
            </div>
            <div className="mt-4 text-light p-1">
             <div className="row row-cols-2 row-cols-md-4">
              <div className="col">
               <h5 className="ubuntu text-center text-md-left">
                <span className="text-info fs-5 fw-bold">100K+</span>{' '}
                <span className="text-light fs-6">likes </span>
               </h5>
              </div>
              <div className="col">
               <h5 className="ubuntu text-center text-md-center">
                <span className="text-info fs-5 fw-bold">40+</span>{' '}
                <span className="text-light fs-6">videos </span>
               </h5>
              </div>
              <div className="col">
               <h5 className="ubuntu text-center text-md-center">
                <span className="text-info fs-5 fw-bold">100K+</span>{' '}
                <span className="text-light fs-6">likes </span>
               </h5>
              </div>
              <div className="col">
               <h5 className="ubuntu text-center text-md-end">
                <span className="text-info fs-5 fw-bold">100K+</span>{' '}
                <span className="text-light fs-6">likes </span>
               </h5>
              </div>
             </div>
             <div className="row row-cols-1 row-cols-md-2 mt-3 px-1 px-md-2">
              <div className="col">
               <h5 className="kh text-light">​​ព័ត៌មានផ្សេងៗ</h5>
               <div className="bg-light p-3 round text-dark kh">
                <p>
                 <span className="ms-5"></span>
                 {enrollDetail.courseId.description}
                </p>
               </div>
               <h5 className="kh text-light mt-3">ផ្ដល់មតិផ្សេងៗ</h5>
               <div className="text-dark rounded">
                <Comment cid={enrollDetail && enrollDetail.courseId._id} />
               </div>
              </div>
              <div className="col">
               <h5 className="kh text-light">វីឌីអូសម្រាប់មុខវិទ្យានេះ</h5>
               {loadingSection ? (
                <Loader wd={40} hg={40} />
               ) : errorSection ? (
                <Message variant="danger">{errorSection}</Message>
               ) : (
                <CourseContent
                 sections={sections && sections}
                 cid={enrollDetail && enrollDetail.courseId._id}
                 fromVideo={true}
                />
               )}
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>

        {/* <div className="pb-2 px-0 bg-light container-xl">
         <Parallax bgImage={enrollDetail.courseId.imgUrl} strength={500}>
          <div style={{ height: '40vh' }}></div>
         </Parallax>
        </div>

        <div className="container-xl w-100">
         <div className="row mt-2">
          <div className="col-md-8 p-1">
           <div className="_bg-light shadow rounded p-3">
            <h4 className="ubuntu">
             <span className="kh">ឈ្មោះមុខវិទ្យា:</span>{' '}
             {enrollDetail.courseId.name}
            </h4>
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
             cid={enrollDetail.courseId._id}
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
        </div> */}
       </>
      ) : null}
     </>
    )}
   </div>
  </>
 );
};

export default MyCoursesDetailScreen;
