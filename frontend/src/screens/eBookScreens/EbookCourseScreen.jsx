import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './EbookCourseScreen.css';
import ReactHtmlParser from 'react-html-parser';
import { getOneLanguage } from '../../actions/eBookActions/eBookCourseActions';
import Loader from '../../components/Loader';
import { getDetailByContentId } from '../../actions/eBookActions/eBookDetailActions';
import CourseSidebar from '../../components/eBookComponents/CourseSidebar';
import Editor from '@monaco-editor/react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

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

 const gg = () => {};

 return (
  <div className="ebooCourseScreen">
   <div className="d-flex justify-content-between">
    <div className="d-flex w-100">
     <div>
      <CourseSidebar courses={course} lang={param.lang} />
     </div>
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
         <div className="p-2">
          {ReactHtmlParser(detail.contents)}
          <Editor
           height="200px"
           theme="vs-dark"
           defaultLanguage="html"
           value={detail.codeShow}
           options={{
            colorDecorators: true,
            readOnly: true,
           }}
          />
          <ControlledEditor
           value={detail.codeShow}
           className="code-mirror-wrapper"
           options={{
            lineWrapping: true,
            lint: true,
            mode: 'xml',
            theme: 'material',
            // lineNumbers: true,
           }}
          />
          <div className="mt-2">
           <button
            className="btn btn-info kh text-dark rounded"
            onClick={() => {
             const win = window.open('/elearning', '_blank');
             win.focus();
            }}
           >
            ចាប់ផ្ដើមអនុវត្ដ
           </button>
          </div>
         </div>
        </div>
       ))
      )}
     </div>
    </div>
    <div className="d-none d-xl-block" style={{ minWidth: 349, maxWidth: 350 }}>
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
