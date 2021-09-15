import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {
 getEnrollDetail,
 getEnrollSections,
 getEnrollVideo,
} from '../../actions/eLearningActions/enrollActions';
import Message from '../../components/Message';
import CourseContent from '../../components/eLearningComponents/CourseContent';
import MyCoursesItem from '../../components/eLearningComponents/MyCoursesItem';
import Loader from '../../components/Loader';
import Comment from '../../components/eLearningComponents/comment';
import Footer from '../../components/Footer';
import ReactHtmlParser from 'html-react-parser';
import RatingElearn from '../../components/eLearningComponents/RatingElearn';
import { GET_ENROLL_SECTION_RESET } from '../../constants/eLearningConstants/enrollConstants';

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
  dispatch({ type: GET_ENROLL_SECTION_RESET });
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
 }, [dispatch, enrollDetail, eid]);

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
          paddingTop: '55px',
          zIndex: 10,
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
               <h2
                className="text-info kh mb-4"
                style={{ fontSize: '2.5rem', maxWidth: '600px' }}
               >
                {enrollDetail.courseId.name}
               </h2>
               <p className="kh text-warning">
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
               <h5 className="text-info mt-3">
                ចំណាត់ថ្នាក់{' '}
                <RatingElearn rate={enrollDetail.courseId.rating} /> (
                <span className="text-warning">
                 {enrollDetail.courseId.userRated.length}
                </span>{' '}
                សិស្ស)
               </h5>
              </div>
             </div>
            </div>
            <div className="mt-4 text-light p-1">
             <h4 className="text-center text-info">ព័ត៌មានអំពីមុខវិទ្យា</h4>
             <div className="row row-cols-1 row-cols-md-2 mt-3 px-1 px-md-2">
              <div className="col">
               <div className="bg-light shadow rounded p-4 mb-4">
                <h4 className="text-center text-info">គោលបំណង</h4>
                <div className="text-dark">
                 {ReactHtmlParser(
                  (enrollDetail &&
                   enrollDetail.courseId &&
                   enrollDetail.courseId.objective) ||
                   '<h6 class="text-center">មិនទាន់មាន</h6>'
                 )}
                </div>
               </div>
               <h5 className="kh text-info text-center">
                វីឌីអូសម្រាប់មុខវិទ្យានេះ
               </h5>
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
               <br />
              </div>

              <div className="col">
               <div className="bg-light p-4 rounded mb-4">
                <h4 className="text-center text-info">អំពីមុខវិទ្យា</h4>
                <div className="text-dark mt-3 row row-cols-xl-2 row-cols-lg-1">
                 {ReactHtmlParser(
                  (enrollDetail &&
                   enrollDetail.courseId &&
                   enrollDetail.courseId.include) ||
                   '<h6 class="text-center">មិនទាន់មាន</h6>'
                 )}
                </div>
               </div>

               <h4 className="text-center text-info">មតិយោបល់</h4>
               <div className="text-dark rounded">
                <Comment cid={enrollDetail && enrollDetail.courseId._id} />
               </div>
              </div>
             </div>
            </div>
           </div>
           <Footer />
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
