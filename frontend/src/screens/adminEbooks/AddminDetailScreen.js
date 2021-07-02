import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './DetailScreen.css';
import CodeEditor from '../../components/eLearningComponents/CodeEditor';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
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
 const [squery, setSquery] = useState('');
 const [detailId, setDetailId] = useState('');
 const [openEditor, setOpenEditor] = useState(false);
 const [code, setCode] = useState({ detail: '', codeShow: '', liveCode: '' });

 const { detailBycontents } = useSelector((state) => state.detailByContentId);
 const detailDelete = useSelector((state) => state.detailDelete);
 const detailCreate = useSelector((state) => state.detailCreate);
 const detailUpdate = useSelector((state) => state.detailUpdate);
 const handleSubmit = () => {
  if (squery === 'add') {
   dispatch(addDetail(title, contents, id));
  } else {
   dispatch(updateDetail(title, contents, detailId));
  }

  setContents('');
 };

 const handleCkEditorState = (event, editor) => {
  const data = editor.getData();
  setContents(data);
 };

 useEffect(() => {
  dispatch(getDetailByContentId(id));
 }, [dispatch, detailDelete, detailCreate, detailUpdate, id]);

 console.log(detailBycontents);

 const openEditorHandler = () => {
  setOpenEditor(!openEditor);
 };
 return (
  <div className="details mt-2" style={{ maxWidth: '1110px' }}>
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
   <div
    className={`w-100 shadow-lg p-1 mt-2 bg-light rounded ${
     squery === 'update' || squery === 'add' ? 'd-block' : 'd-none'
    }`}
    style={{ marginBottom: '48vh' }}
   >
    <div className="imgAdmin w-100">{ReactHtmlParser(contents)}</div>
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
        <div className="imgAdmin w-100">{ReactHtmlParser(detail.contents)}</div>
        <div className="event">
         <button
          className="btn btn-sm btn-info m-2 shadow"
          onClick={() => {
           setContents(detail.contents);
           setDetailId(detail._id);
           setSquery('update');
           setOpenEditor(true);
           window.scroll(0, 0);
          }}
         >
          Edit
         </button>
         <button
          className="btn btn-sm btn-danger shadow"
          onClick={() => {
           if (window.confirm('Delete?')) {
            dispatch(deleteDetail(detail._id));
           }
           setSquery('');
           setContents('');
          }}
         >
          Delete
         </button>
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
     bottom: `${openEditor ? '-1px' : '-45vh'}`,
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
    <CodeEditor contents={contents} setContents={setContents} />
   </div>
  </div>
 );
};

export default AddminDetailScreen;
