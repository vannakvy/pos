import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './DetailScreen.css';
import Editor from '@monaco-editor/react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Loader from '../../components/Loader';
import {
 getDetailByContentId,
 deleteDetail,
 addDetail,
 updateDetail,
} from '../../actions/eBookActions/eBookDetailActions';

const AddminDetailScreen = () => {
 const dispatch = useDispatch();
 const { id } = useParams();
 const [title, setTitle] = useState('');
 const [contents, setContents] = useState('');
 const [squery, setSquery] = useState('add');
 const [detailId, setDetailId] = useState('');
 const [openEditor, setOpenEditor] = useState(false);
 const [code, setCode] = useState('');

 const { detailBycontents, loading } = useSelector(
  (state) => state.detailByContentId
 );
 const detailDelete = useSelector((state) => state.detailDelete);
 const detailCreate = useSelector((state) => state.detailCreate);
 const detailUpdate = useSelector((state) => state.detailUpdate);
 const handleSubmit = () => {
  if (squery === 'add') {
   dispatch(addDetail(title, contents, id));
  } else {
   dispatch(updateDetail(title, contents, detailId));
  }

  setTitle('');
  setContents('');
 };

 const handleCkEditorState = (event, editor) => {
  const data = editor.getData();
  setContents(data);
 };

 useEffect(() => {
  dispatch(getDetailByContentId(id));
 }, [dispatch, detailDelete, detailCreate, detailUpdate, id]);

 const openEditorHandler = () => {
  setOpenEditor(!openEditor);
 };
 return (
  <div className="details mt-2 container">
   {/* <div className="col-md-6"> */}
   {/* <div className="container">
      <div className="form-group">
       <label htmlFor="title">Title</label>
       <input
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control border border-info"
        type="text"
       />
      </div>
      <div className="mb-3">
       <label className="form-label">Content</label>
       <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => {}}
        //ddd
        data={contents}
        config={{
         ckfinder: {
          uploadUrl: '/api/ebook/uploads',
         },
        }}
        onChange={handleCkEditorState}
       />
       {squery === 'add' ? (
        <button onClick={handleSubmit} className="btn btn-info mt-3 w-25">
         Add
        </button>
       ) : (
        <>
         <button onClick={handleSubmit} className="btn btn-warning mt-3 w-25">
          Update
         </button>{' '}
         <button
          onClick={() => {
           setTitle('');
           setContents('');
           setSquery('add');
          }}
          className="btn btn-danger mt-3 w-25"
         >
          Cancel
         </button>{' '}
        </>
       )}
      </div>
     </div>*/}
   {/* </div> */}
   <div className="w-100">
    <div className>
     <h2>{detailBycontents && detailBycontents.title}</h2>
    </div>

    <div className="w-100 m-0 p-0">
     {loading ? (
      <Loader hg={60} wd={60} />
     ) : (
      detailBycontents &&
      detailBycontents.details &&
      detailBycontents.details.map((detail) => (
       <div
        className="shadow-lg p-1 mt-2 bg-light rounded w-100"
        key={detail._id}
       >
        <h3>{detail.title}</h3>
        <div className="imgAdmin w-100">{ReactHtmlParser(detail.contents)}</div>
        <div className="event">
         <button
          className="btn-sm btn-info m-2"
          onClick={() => {
           setTitle(detail.title);
           setContents(detail.contents);
           setDetailId(detail._id);
           setSquery('update');
          }}
         >
          Edit
         </button>
         <button
          className="btn-sm btn-danger"
          onClick={() => {
           dispatch(deleteDetail(detail._id));
           setSquery('add');
           setTitle('');
           setContents('');
          }}
         >
          Delete
         </button>
        </div>
       </div>
      ))
     )}
    </div>
   </div>

   <div className="w-100">
    <div
     className="position-fixed shadow"
     style={{
      width: '1110px',
      margin: '0 auto',
      transition: '0.2s',
      bottom: `${openEditor ? '-1px' : '-40vh'}`,
     }}
    >
     <div
      className="btn-toolbar border border-secondary bg-light w-100"
      role="toolbar"
      aria-label="Toolbar with button groups"
     >
      <div className="btn-group" role="group" aria-label="First group">
       <button type="button" className="btn btn-secondary ">
        Button
       </button>
      </div>
      <div className="btn-group" role="group" aria-label="Second group">
       <button type="button" className="btn btn-secondary">
        code
       </button>
      </div>
      <div className="btn-group" role="group" aria-label="Third group">
       <button
        type="button"
        className="btn btn-secondary"
        onClick={openEditorHandler}
       >
        Show
       </button>
      </div>
     </div>
     <Editor
      height="40vh"
      theme="vs-dark"
      defaultLanguage="html"
      value={code}
      onChange={(e) => setCode(e)}
     />
    </div>
   </div>
  </div>
 );
};

export default AddminDetailScreen;
