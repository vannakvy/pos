import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './DetailScreen.css';
import CodeEditor from '../../components/eBookComponents/CodeEditor';
import {
 getDetailByContentId,
 deleteDetail,
 addDetail,
 updateDetail,
} from '../../actions/eBookActions/eBookDetailActions';
import Editor from '@monaco-editor/react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

const AddminDetailScreen = () => {
 const dispatch = useDispatch();
 const { id } = useParams();
 const [contents, setContents] = useState('');
 const [squery, setSquery] = useState('');
 const [detailId, setDetailId] = useState('');
 const [openEditor, setOpenEditor] = useState(false);
 const [code, setCode] = useState({ codeShow: '', codeLive: '' });
 const [h, setH] = useState('100px');
 const [codeLiveText, setCodeLiveText] = useState('');

 const { detailBycontents } = useSelector((state) => state.detailByContentId);
 const detailDelete = useSelector((state) => state.detailDelete);
 const detailCreate = useSelector((state) => state.detailCreate);
 const detailUpdate = useSelector((state) => state.detailUpdate);
 const handleSubmit = () => {
  if (squery === 'add' || '') {
   dispatch(addDetail(contents, id, codeLiveText, code.codeShow, h));
  } else {
   dispatch(updateDetail(contents, detailId, codeLiveText, code.codeShow, h));
  }

  setContents('');
 };

 useEffect(() => {
  dispatch(getDetailByContentId(id));
 }, [dispatch, detailDelete, detailCreate, detailUpdate, id]);

 const openEditorHandler = () => {
  setOpenEditor(!openEditor);
 };
 return (
  <div className="details mt-2" style={{ maxWidth: '1110px' }}>
   <button
    className="btn btn-success text-dark sticky-top"
    style={{ top: 80 }}
    onClick={() => {
     setSquery('add');
     setOpenEditor(true);
    }}
   >
    Create
   </button>
   <div
    className={`w-100 shadow-lg p-1 mt-2 bg-light rounded ${
     squery === 'update' || squery === 'add' ? 'd-block' : 'd-none'
    }`}
    style={{ marginBottom: '48vh' }}
   >
    <div className="w-100 p-2">
     {ReactHtmlParser(contents)}
     {code.codeShow ? (
      <div
       className="px-4 pt-2 rounded"
       style={{
        background: 'rgb(38,50,56)',
        zIndex: 1,
       }}
      >
       <ControlledEditor
        value={code.codeShow}
        className="code-mirror-wrapper"
        options={{
         lineWrapping: true,
         lint: true,
         mode: 'xml',
         theme: 'material',
         //  lineNumbers: true,
        }}
       />
      </div>
     ) : null}
     {code.codeLive && code.codeLive !== 'a' ? (
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
   <div
    className={`w-100 ${
     squery === 'update' || squery === 'add' ? 'd-none' : 'd-block'
    }`}
    style={{ marginBottom: '48vh' }}
   >
    <div className="w-100 m-0 p-0">
     {detailBycontents &&
      detailBycontents.details &&
      detailBycontents.details.map((detail) => (
       <div
        className="shadow-lg p-1 mt-2 bg-light rounded w-100"
        key={detail._id}
       >
        <div className="w-100 p-2">
         {ReactHtmlParser(detail.contents)}
         {detail.codeShow ? (
          <div
           className="px-4 pt-2 rounded"
           style={{
            background: 'rgb(38,50,56)',
            zIndex: 1,
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
             //  lineNumbers: true,
            }}
           />
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
        <div className="event text-center">
         <FiEdit3
          className="m-2"
          style={{ fontSize: '20px', cursor: 'pointer' }}
          onClick={() => {
           setContents(detail.contents);
           setDetailId(detail._id);
           setCode({
            ...code,
            codeShow: detail.codeShow,
            codeLive: detail.codeLive,
           });
           setH(detail.h);
           setSquery('update');
           setOpenEditor(true);
           window.scroll(0, 0);
          }}
         />
         <AiOutlineDelete
          className="m-2"
          style={{ fontSize: '20px', cursor: 'pointer' }}
          onClick={() => {
           if (window.confirm('Delete?')) {
            dispatch(deleteDetail(detail._id));
           }
           setSquery('');
           setContents('');
          }}
         />
        </div>
       </div>
      ))}
    </div>
   </div>

   <div
    className="position-fixed"
    style={{
     margin: '0 auto',
     transition: '0.2s',
     width: 1110,
     bottom: `${openEditor ? '0px' : '-315px'}`,
    }}
   >
    <div className="btn-group" role="group" aria-label="Third group">
     <button
      type="button"
      className="btn btn-dark rounded-top"
      onClick={openEditorHandler}
     >
      Show
     </button>
    </div>
    <div style={{ zIndex: 100 }}>
     <CodeEditor
      contents={contents}
      setContents={setContents}
      code={code}
      setCode={setCode}
      squery={squery}
      setSquery={setSquery}
      setOpenEditor={setOpenEditor}
      h={h}
      setH={setH}
      handleSubmit={handleSubmit}
      codeLiveText={codeLiveText}
      setCodeLiveText={setCodeLiveText}
     />
    </div>
   </div>
  </div>
 );
};

export default AddminDetailScreen;
