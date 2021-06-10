import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import Message from '../Message';
import {
 SECTION_CREATE_RESET,
 SECTION_DELETE_RESET,
 SECTION_UPDATE_RESET,
 VIDEO_CREATE_RESET,
 VIDEO_DELETE_RESET,
 VIDEO_UPDATE_RESET,
} from '../../constants/eLearningConstants/courseConstants';
import {
 createSection,
 createVideo,
 deleteSection,
 getSections,
 updateSectionById,
 deleteVideoById,
 updateVideoById,
} from '../../actions/eLearningActions/sectionActions';
import MyDropzone from '../../screens/adminElearn/DropZone';
import ProgressUpload from './ProgressUpload';

const Sections = () => {
 const { id } = useParams();
 const dispatch = useDispatch();

 const [item, setItem] = useState('section');
 const [action, setAction] = useState('create');
 const [video, setVideo] = useState({
  name: '',
  url: '',
  vid: '',
 });

 const [upload, setUpload] = useState({
  totalSize: 0,
  currentSize: 0,
  percentUpload: 0,
 });

 const [section, setSection] = useState('');
 const [sectionId, setSectionId] = useState('');

 const sectionList = useSelector((state) => state.sectionList);
 const { loading: loadingList, error: errorList, sections } = sectionList;

 const sectionCreate = useSelector((state) => state.sectionCreate);
 const { error: errorCreate, success: successCreate } = sectionCreate;

 const sectionDelete = useSelector((state) => state.sectionDelete);
 const { success: successDelete } = sectionDelete;

 const sectionUpdate = useSelector((state) => state.sectionUpdate);
 const {
  error: errorSectionUpdate,
  success: successSectionUpdate,
 } = sectionUpdate;

 const videoCreate = useSelector((state) => state.videoCreate);
 const { error: errorVideoCreate, success: successVideoCreate } = videoCreate;

 const videoDelete = useSelector((state) => state.videoDelete);
 const { error: errorVideoDelete, success: successVideoDelete } = videoDelete;

 const videoUpdate = useSelector((state) => state.videoUpdate);
 const { error: errorVideoUpdate, success: successVideoUpdate } = videoUpdate;

 const mouseEnter = (event) => {
  if (event.target.querySelector('#gg') !== null) {
   event.target.querySelector('#gg').classList.remove('invisible');
  }
 };

 const mouseLeave = (event) => {
  if (event.target.querySelector('#gg') !== null) {
   event.target.querySelector('#gg').classList.add('invisible');
  }
 };

 useEffect(() => {
  dispatch({ type: SECTION_UPDATE_RESET });
  dispatch({ type: SECTION_CREATE_RESET });
  dispatch({ type: SECTION_DELETE_RESET });
  dispatch({ type: VIDEO_CREATE_RESET });
  dispatch({ type: VIDEO_DELETE_RESET });
  dispatch({ type: VIDEO_UPDATE_RESET });
  dispatch(getSections(id));
 }, [
  dispatch,
  id,
  successCreate,
  successDelete,
  successSectionUpdate,
  successVideoCreate,
  successVideoDelete,
  successVideoUpdate,
 ]);

 const reset = () => {
  setVideo({
   name: '',
   url: '',
   vid: '',
  });
  setUpload({
   totalSize: 0,
   currentSize: 0,
   percentUpload: 0,
  });
  setSection('');
  setSectionId('');
 };

 const createSectionHandler = () => {
  reset();
  setAction('create');
  setItem('section');
 };

 const editSectionHandler = (section, sid) => {
  setAction('edit');
  setItem('section');
  setSection(section);
  setSectionId(sid);
  setUpload({
   totalSize: 0,
   currentSize: 0,
   percentUpload: 0,
  });
 };

 const updateSectionHandler = () => {
  dispatch(updateSectionById(id, sectionId, section));
 };

 const addSectionHandler = () => {
  dispatch(createSection(id, section));
 };

 const deleteSectionHandler = (sid) => {
  if (window.confirm('Do you want to delete this Section?')) {
   dispatch(deleteSection(id, sid));
  }
 };

 const cancelSection = () => {
  reset();
  setAction('create');
  setItem('section');
 };

 const createVideoHandler = (sid) => {
  reset();
  setAction('create');
  setItem('video');
  setSectionId(sid);
 };

 const addVideoHandler = () => {
  dispatch(createVideo(id, sectionId, video));
  cancelSection();
 };

 const editVideoHandler = (sid, video) => {
  setAction('edit');
  setItem('video');
  setSectionId(sid);
  setVideo({
   name: video.name,
   url: video.url,
   vid: video._id,
  });
  setUpload({
   totalSize: 0,
   currentSize: 0,
   percentUpload: 0,
  });
 };

 const updateVideoHandler = () => {
  dispatch(updateVideoById(id, sectionId, video));
  cancelSection();
 };

 const deleteVideo = (sid, vid) => {
  if (window.confirm('Do you want to delete this video?')) {
   dispatch(deleteVideoById(id, sid, vid));
   cancelSection();
  }
 };

 const onChangeVideoHandler = (e) => {
  const { name, value } = e.target;
  setVideo({ ...video, [name]: value });
 };

 return (
  <>
   <div className="row">
    <div className="col-md-7">
     <div className="bg-light rounded">
      {errorSectionUpdate ? (
       <Message variant="danger">{errorSectionUpdate}</Message>
      ) : null}
      {errorCreate ? <Message variant="danger">{errorCreate}</Message> : null}

      {errorVideoCreate ? (
       <Message variant="danger">{errorVideoCreate}</Message>
      ) : null}
      {errorVideoDelete ? (
       <Message variant="danger">{errorVideoDelete}</Message>
      ) : null}
      {errorVideoUpdate ? (
       <Message variant="danger">{errorVideoUpdate}</Message>
      ) : null}

      <div className="border w-100 rounded">
       <div className="d-flex justify-content-between">
        <h4 className="mt-2 pl-3">SECTIONS</h4>
        <IconButton
         aria-label="create"
         color="primary"
         onClick={() => createSectionHandler()}
         data-toggle="collapse"
         data-target="#mul2"
         aria-expanded={false}
         aria-controls="mul2"
        >
         <i className="fas fa-plus-circle"></i>
        </IconButton>
       </div>

       {loadingList ? (
        <div className="mt-5 mb-5">
         <Loader wd={180} hg={180} />
        </div>
       ) : errorList ? (
        <Message variant="danger">{errorList}</Message>
       ) : (
        <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
         {sections &&
          sections.map((section) => (
           <div key={section._id}>
            <h6
             className="grediant d-flex justify-content-between"
             style={{ padding: '13px 15px', marginBottom: '1px' }}
            >
             <span style={{ paddingTop: '2px' }}>{section.name}</span>
             <span>
              <IconButton
               aria-label="edit"
               className="p-0"
               color="primary"
               onClick={() => editSectionHandler(section.name, section._id)}
               data-toggle="collapse"
               data-target="#mul2"
               aria-expanded={false}
               aria-controls="mul2"
              >
               <i className="fas fa-pen-alt" style={{ fontSize: '14px' }}></i>
              </IconButton>
              <IconButton
               aria-label="delete"
               className="p-0 mx-1"
               color="secondary"
               onClick={() => deleteSectionHandler(section._id)}
              >
               <DeleteIcon fontSize="small" />
              </IconButton>
              <IconButton
               aria-label="create"
               className="p-0"
               color="primary"
               size="small"
               onClick={() => createVideoHandler(section._id)}
               data-toggle="collapse"
               data-target="#mul2"
               aria-expanded={false}
               aria-controls="mul2"
              >
               <i className="fas fa-plus-circle"></i>
              </IconButton>
             </span>
            </h6>
            {section.videos.map((video) => (
             <div
              className="d-flex justify-content-between border-bottom pl-3 adminHover pt-2"
              style={{ padding: '3px 0' }}
              key={video._id}
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
             >
              <div style={{ marginTop: '2px' }}>
               <i className="fas fa-play-circle mr-4 ml-3"></i>
               {video.name}
              </div>
              <div
               className="invisible"
               id="gg"
               style={{ marginBottom: '3px' }}
              >
               <IconButton
                aria-label="edit"
                className="p-1"
                color="primary"
                onClick={() => editVideoHandler(section._id, video)}
                data-toggle="collapse"
                data-target="#mul2"
                aria-expanded={false}
                aria-controls="mul2"
               >
                <i className="fas fa-pen-alt" style={{ fontSize: '16px' }}></i>
               </IconButton>
               <IconButton
                aria-label="delete"
                className="p-1 mr-2"
                color="secondary"
                onClick={() => deleteVideo(section._id, video._id)}
               >
                <DeleteIcon fontSize="small" />
               </IconButton>
              </div>
             </div>
            ))}
           </div>
          ))}
        </div>
       )}
      </div>
     </div>
    </div>
    <div className="col-md-5">
     <h6 className="mt-3">Do something here...</h6>
     {item === 'section' ? (
      <>
       <div className="form-group">
        <input
         className="kh form-control"
         type="text"
         placeholder="ឈ្មោះសិកសិន..."
         value={section}
         onChange={(e) => setSection(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
         We'll never share your email with anyone else.
        </small>
       </div>

       {action === 'create' ? (
        <>
         <button
          className="btn btn-success px-4 rounded shadow kh mr-1"
          onClick={addSectionHandler}
         >
          បញ្ចូលសិកសិន
         </button>
        </>
       ) : (
        <>
         <button
          className="btn btn-warning px-4 rounded shadow kh mr-1"
          onClick={updateSectionHandler}
         >
          រក្សាទុកសិកសិន
         </button>
        </>
       )}
       <button
        className="btn btn-outline-dark px-4 rounded shadow kh mr-1"
        onClick={cancelSection}
       >
        ចាកចេញ
       </button>
      </>
     ) : (
      <>
       <div className="form-group">
        <input
         className="kh form-control bg-dark text-light"
         type="text"
         placeholder="ID សិកសិន..."
         value={sectionId}
         onChange={onChangeVideoHandler}
         readOnly
        />
        <small id="emailHelp" className="form-text text-muted">
         We'll never share your email with anyone else.
        </small>
        <input
         className="kh form-control"
         type="text"
         name="name"
         placeholder="ឈ្មោះវីឌីអូ..."
         value={video.name}
         onChange={onChangeVideoHandler}
        />
        <small id="emailHelp" className="form-text text-muted">
         We'll never share your email with anyone else.
        </small>
        <input
         className="kh form-control"
         type="text"
         placeholder="លិញសិកសិន..."
         name="url"
         value={video.url}
         onChange={onChangeVideoHandler}
        />
        <small id="emailHelp" className="form-text text-muted">
         We'll never share your email with anyone else.
        </small>
       </div>
       <div style={{ marginLeft: '40%' }}>
        <MyDropzone video={video} setVideo={setVideo} setUpload={setUpload} />
       </div>
       <h6 className="kh mt-2 text-center">
        អ្នកអាចបំពេញលិញក្នុងប្រអប់ខាងលើឬក៏ទម្លាក់វិឌីអូនៅទីនេះ
       </h6>

       {upload.percentUpload === 0 ? null : (
        <>
         <ProgressUpload upload={upload} />
         <small className="d-block">
          {upload.currentSize}/{upload.totalSize} MB
         </small>
        </>
       )}

       {video && video.url === '' ? null : (
        <div className="player-wrapper my-1">
         <iframe
          className="react-player rounded"
          src={video.url}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title={video.name}
          allowFullScreen
         ></iframe>
        </div>
       )}
       {action === 'create' ? (
        <>
         <button
          className="btn btn-success rounded shadow kh mr-1"
          onClick={() => addVideoHandler()}
         >
          បញ្ចូលវីឌីអូក្នុងមុខវិទ្យា
         </button>
        </>
       ) : (
        <>
         <button
          className="btn btn-success rounded shadow kh mr-1"
          onClick={updateVideoHandler}
         >
          រក្សាទុកវីឌីអូ
         </button>
         <button
          className="btn btn-outline-danger rounded shadow kh mr-1"
          onClick={() => deleteVideo(sectionId, video.vid)}
         >
          លុបវីឌីអូ
         </button>
        </>
       )}

       <button
        className="btn btn-dark rounded shadow kh"
        onClick={cancelSection}
       >
        ចាកចេញ
       </button>
      </>
     )}
    </div>
   </div>
  </>
 );
};

export default Sections;
