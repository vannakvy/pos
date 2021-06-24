import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './EbookCourseScreen.css';
import ReactHtmlParser from 'react-html-parser';
import { getOneLanguage } from '../../actions/eBookActions/eBookCourseActions';
import Loader from '../../components/Loader';
import { getDetailByContentId } from '../../actions/eBookActions/eBookDetailActions';
import CourseSidebar from '../../components/eBookComponents/CourseSidebar';

const EbookCourseScreen = () => {
 const param = useParams();
 const dispatch = useDispatch();
 // const { details, loading, error } = useSelector((state) => state.details);
 const { course, error } = useSelector((state) => state.course);
 const { detailBycontents, loading } = useSelector(
  (state) => state.detailByContentId
 );

 useEffect(() => {
  window.scroll(0, 0);
  if (course.length === 0) {
   dispatch(getOneLanguage(param.lang));
  }
 }, [dispatch]);

 useEffect(() => {
  dispatch(getDetailByContentId(param.id));
 }, [param.id]);

 return (
  <div className="ebooCourseScreen">
   <div className="d-flex justify-content-between">
    <div className="d-flex w-100">
     {/* sidebar  */}
     <div>
      <CourseSidebar courses={course} lang={param.lang} />
     </div>
     {/* main  */}
     <div className="mx-2 w-100">
      {loading ? (
       <div className="pt-2">
        <Loader hg={20} wd={20} />
       </div>
      ) : (
       detailBycontents &&
       detailBycontents.details &&
       detailBycontents.details.map((detail) => (
        <div
         className="detail_contents card card-body mb-1 ebooCourseScreen_img p-2"
         key={detail._id}
        >
         <h5>{detail.title}</h5>
         <div className="p-2 htmlParser" id="ebookStyle">
          {ReactHtmlParser(detail.contents)}
         </div>
        </div>
       ))
      )}
     </div>
    </div>
    <div className="d-none d-xl-block" style={{ minWidth: 350, maxWidth: 350 }}>
     <img
      className="img-fluid rounded-lg"
      src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg"
      alt=""
     />
     <div className="p-3">
      <h5 className="text-light">Author : Vannak Vy</h5>
      <h6 className="my-2">Web Developer</h6>
      <p className="">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vel beatae ab
       sed quibusdam ea quod aut temporibus dolorum molestiae?
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default EbookCourseScreen;
