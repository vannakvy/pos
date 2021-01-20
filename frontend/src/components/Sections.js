import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Message from './Message';
import {
 SECTION_CREATE_RESET,
 SECTION_DELETE_RESET,
 SECTION_UPDATE_RESET,
 VIDEO_CREATE_RESET,
 VIDEO_DELETE_RESET,
 VIDEO_UPDATE_RESET,
} from '../constants/courseConstants';
import {
 createSection,
 createVideo,
 deleteSection,
 getSections,
 updateSectionById,
 deleteVideoById,
 updateVideoById,
} from '../actions/eLearningActions/sectionActions';

const Sections = () => {
 const { id } = useParams();
 const dispatch = useDispatch();

 const [item, setItem] = useState('section');
 const [action, setAction] = useState('create');
 const [video, setVideo] = useState({ name: '', url: '', vid: '' });
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
  setVideo({ name: '', url: '', vid: '' });
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
 };

 const updateSectionHandler = () => {
  dispatch(updateSectionById(id, sectionId, section));
 };

 const addSectionHandler = () => {
  dispatch(createSection(id, section));
 };

 const deleteSectionHandler = (sid) => {
  dispatch(deleteSection(id, sid));
 };

 const createVideoHandler = (sid) => {
  reset();
  setAction('create');
  setItem('video');
  setSectionId(sid);
 };

 const addVideoHandler = () => {
  dispatch(createVideo(id, sectionId, video));
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
 };

 const updateVideoHandler = () => {
  dispatch(updateVideoById(id, sectionId, video));
 };

 const deleteVideo = (sid, vid) => {
  dispatch(deleteVideoById(id, sid, vid));
 };

 const onChangeVideoHandler = (e) => {
  const { name, value } = e.target;
  setVideo({ ...video, [name]: value });
 };

 return (
  <>
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

   <div className="collapse" id="mul2">
    {item === 'section' ? (
     <div className="mb-2 p-1 border rounded">
      <h6 className="p-2">Section:</h6>
      <input
       type="text"
       name="section"
       placeholder="Section name"
       className="form-control mb-2"
       value={section}
       onChange={(e) => setSection(e.target.value)}
      />
      {action === 'create' ? (
       <button
        className="btn py-2 px-4 grediant rounded adminHover text-dark mr-3"
        data-toggle="collapse"
        data-target="#mul2"
        aria-expanded={true}
        aria-controls="mul2"
        onClick={addSectionHandler}
       >
        Create
       </button>
      ) : (
       <button
        className="btn py-2 px-4 grediant rounded adminHover text-dark mr-3"
        data-toggle="collapse"
        data-target="#mul2"
        aria-expanded={true}
        aria-controls="mul2"
        onClick={updateSectionHandler}
       >
        Update
       </button>
      )}
      <button
       className="btn py-2 px-4 grediant rounded adminHover text-dark"
       data-toggle="collapse"
       data-target="#mul2"
       aria-expanded={true}
       aria-controls="mul2"
      >
       Cancel
      </button>
     </div>
    ) : (
     <div className="mb-2 p-1 border rounded">
      <h6 className="p-2">Video:</h6>
      <input
       type="text"
       name="name"
       placeholder="Video name"
       className="form-control mb-2"
       value={video.name}
       onChange={onChangeVideoHandler}
      />
      <input
       type="text"
       name="url"
       placeholder="Url"
       className="form-control mb-2"
       onChange={onChangeVideoHandler}
       value={video.url}
      />
      {action === 'create' ? (
       <button
        className="btn py-2 px-4 grediant rounded adminHover text-dark mr-3"
        data-toggle="collapse"
        data-target="#mul2"
        aria-expanded={true}
        aria-controls="mul2"
        onClick={() => addVideoHandler()}
       >
        Create
       </button>
      ) : (
       <button
        className="btn py-2 px-4 grediant rounded adminHover text-dark mr-3"
        data-toggle="collapse"
        data-target="#mul2"
        aria-expanded={true}
        aria-controls="mul2"
        onClick={updateVideoHandler}
       >
        Update
       </button>
      )}
      <button
       className="btn py-2 px-4 grediant rounded adminHover text-dark"
       data-toggle="collapse"
       data-target="#mul2"
       aria-expanded={true}
       aria-controls="mul2"
      >
       Cancel
      </button>
     </div>
    )}
   </div>

   <div className="border w-100 rounded">
    <div className="d-flex justify-content-between">
     <h4 className="mt-3 pl-3">SECTIONS</h4>
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
          className="grediant d-flex justify-content-between rounded"
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
           <div className="invisible" id="gg" style={{ marginBottom: '3px' }}>
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
  </>
 );
};

export default Sections;
