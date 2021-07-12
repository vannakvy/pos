import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './EbookCourseScreen.css';
import ReactHtmlParser from 'html-react-parser';
import { getOneLanguage } from '../../actions/eBookActions/eBookCourseActions';
import Loader from '../../components/Loader';
import { getDetailByContentId } from '../../actions/eBookActions/eBookDetailActions';
import CourseSidebar from '../../components/eBookComponents/CourseSidebar';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { IoCopyOutline } from 'react-icons/io5';
import { GoCheck } from 'react-icons/go';
import copy from 'copy-to-clipboard';
import Tooltip from '@material-ui/core/Tooltip';
import TootipProfile from '../../components/eBookComponents/TootipProfile';
import thanet from '../../img/img.jpg';

const EbookCourseScreen = () => {
 const param = useParams();
 const dispatch = useDispatch();
 const [copied, setCopied] = useState('Copy to Clipboard');
 const { course } = useSelector((state) => state.course);
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

 const copyHandle = () => {
  setCopied('Copied');
  setTimeout(() => {
   setCopied('Copy to Clipboard');
  }, 10000);
 };

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
          {detail.codeShow ? (
           <div
            className="pl-4 pt-2 rounded position-relative"
            style={{
             background: 'rgb(38,50,56)',
             zIndex: 1,
             paddingRight: '40px',
            }}
           >
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
            <Tooltip title={copied}>
             <div
              className="rounded d-inline-block copyBtn position-absolute"
              onClick={() => copy(detail.codeShow, { onCopy: copyHandle() })}
              style={{
               background: 'rgb(45,60,65)',
               cursor: 'pointer',
               border: '1px solid grey',
               padding: '3px 4px',
               top: 10,
               right: 10,
              }}
             >
              {copied === 'Copied' ? (
               <GoCheck className="text-success" style={{ fontSize: 18 }} />
              ) : (
               <IoCopyOutline className="text-light" style={{ fontSize: 18 }} />
              )}
             </div>
            </Tooltip>
           </div>
          ) : null}

          {detail.codeLive && detail.codeLive !== 'a' ? (
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
          ) : null}
         </div>
        </div>
       ))
      )}
     </div>
    </div>
    <div
     className="d-none d-xl-block mr-2"
     style={{ minWidth: 150, maxWidth: 150 }}
    >
     <img
      className="img-fluid rounded-lg"
      src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg"
      alt=""
     />
     <div className="p-3">
      <h5 className="text-primary">គ្រូ : វី​ វណ្ណៈ</h5>
      <h6 className="my-2">Web Developer</h6>
      <p className="">ហ្វាក់យូរប៉ិច</p>
     </div>
     <img
      className="img-fluid rounded-lg"
      src="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg"
      alt=""
     />
     <div className="p-3">
      <h5 className="text-primary">គ្រូ : ជ្រឹង​ ចំរើន</h5>
      <h6 className="my-2">Web Developer</h6>
      <p className="">ហ្វាក់យូរប៉ិច</p>
     </div>
    </div>
    <div className="d-xl-none mr-2">
     <div
      className="rounded-circle my-2"
      style={{ width: 40, height: 40, overflow: 'hidden' }}
     >
      <TootipProfile
       img={thanet}
       name={'វី​ វណ្ណៈ'}
       position={'Web Developer'}
      />
     </div>

     <div
      className="rounded-circle my-2"
      style={{ width: 40, height: 40, overflow: 'hidden' }}
     >
      <TootipProfile
       img={thanet}
       name={'លន ថាណេត'}
       position={'Web Developer'}
      />
     </div>
     <div
      className="rounded-circle my-2"
      style={{ width: 40, height: 40, overflow: 'hidden' }}
     >
      <TootipProfile
       img={thanet}
       name={'ជ្រឹង ចំរើន'}
       position={'Web Developer'}
      />
     </div>
     <div
      className="rounded-circle my-2"
      style={{ width: 40, height: 40, overflow: 'hidden' }}
     >
      <TootipProfile
       img={thanet}
       name={'ឌុន រស្មី'}
       position={'Web Developer'}
      />
     </div>
    </div>
   </div>
  </div>
 );
};

export default EbookCourseScreen;
