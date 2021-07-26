import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
 addContent,
 getContent,
 deleteContent,
 updateContent,
} from '../../actions/eBookActions/eBookContentActions';
import { getLanguages } from '../../actions/eBookActions/eBookCourseActions';
import { getDetailByContentId } from '../../actions/eBookActions/eBookDetailActions';
import { FaTrash, FaEdit, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';

const AddminContentScreen = () => {
 // const history = useHistory();
 const dispatch = useDispatch();
 const [contentId, setContentId] = useState('');
 const [title, setTitle] = useState('');
 const [section, setSection] = useState('');
 const [langId, setLangId] = useState('languages');
 const { courses, loading, error } = useSelector((state) => state.courses);
 const contentCreate = useSelector((state) => state.contentCreate);
 const { content } = useSelector((state) => state.contentsByLang);
 const contentDelete = useSelector((state) => state.contentDelete);
 const contentUpdate = useSelector((state) => state.contentUpdate);

 const handleSubmit = (e) => {
  e.preventDefault();
  if (title !== '' && section !== '' && langId !== 'languages') {
   if (contentId !== '') {
    dispatch(updateContent(contentId, title, section));
   } else {
    dispatch(addContent(title, section, langId));
   }
  }

  setTitle('');
  setSection('');
 };

 const changeId = (id) => {
  setLangId(id);
 };
 useEffect(() => {
  dispatch(getLanguages());
  dispatch(getContent(langId));
 }, [langId, contentCreate, contentDelete, contentUpdate]);

 return (
  <div className="content mt-2">
   <div className="">
    <div className="row w-100">
     <div className=" col-md-6 ">
      <div className=" mb-3">
       <select
        className="custom-select"
        onChange={(e) => changeId(e.target.value)}
        value={langId}
       >
        <option value={langId}>{langId}</option>
        {courses &&
         courses.map((course) => (
          <option value={course.title} key={course._id}>
           {course.title}
          </option>
         ))}
       </select>
      </div>
     </div>
     <div className=" col-md-6 ">
      <button
       className="btn btn-primary mb-2"
       type="button"
       data-toggle="collapse"
       data-target="#contentControl"
       aria-expanded="false"
       aria-controls="contentControl"
       onClick={() => setContentId('')}
      >
       Create a Content
      </button>
     </div>
    </div>

    <form onSubmit={handleSubmit}>
     <div className="collapse" id="contentControl">
      <div className="languageForm mb-2 w-50 border  pb-3">
       <div className="container ">
        <div className="form-group">
         <label htmlFor="title">Title</label>
         <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control"
          id="title"
          value={title}
         />
        </div>
        <div className="form-group">
         <label htmlFor="section">Section</label>
         <input
          onChange={(e) => setSection(e.target.value)}
          type="section"
          className="form-control"
          id="section"
          value={section}
         />
        </div>
        {contentId === '' ? (
         <button
          className="btn btn-primary mb-2"
          type="submit"
          data-toggle="collapse"
          data-target="#contentControl"
          aria-expanded="true"
          aria-controls="contentControl"
         >
          Add
         </button>
        ) : (
         <button
          className="btn btn-primary mb-2"
          type="submit"
          data-toggle="collapse"
          data-target="#contentControl"
          aria-expanded="true"
          aria-controls="contentControl"
         >
          Update
         </button>
        )}
       </div>
      </div>
     </div>
    </form>

    <table className="table-sm table-striped w-100 rounded">
     <thead className="bg-light text-dark">
      <tr className="bg-dark text-light">
       <th scope="col">No#</th>
       <th scope="col">Content Title</th>
       <th scope="col">Section</th>
       <th style={{ width: '150px', textAlign: 'center' }}>Actions</th>
      </tr>
     </thead>
     <tbody>
      {loading ? (
       <tr>
        <td colspan="4">
         <Loader wd={100} hg={100} />
        </td>
       </tr>
      ) : (
       <>
        {content &&
         content.map((conten) => (
          <tr key={conten._id}>
           <td>{conten._id}</td>
           <td>{conten.title}</td>
           <td>{conten.section}</td>
           <td style={{ width: '150px' }}>
            <FaEdit
             data-toggle="collapse"
             data-target="#contentControl"
             aria-expanded="true"
             aria-controls="contentControl"
             className="text-primary"
             style={{ cursor: 'pointer' }}
             onClick={() => {
              setTitle(conten.title);
              setSection(conten.section);
              setContentId(conten._id);
             }}
            />
            <FaTrash
             onClick={() => dispatch(deleteContent(conten._id))}
             style={{ cursor: 'pointer' }}
             className="text-danger ml-4"
            />
            <Link to={`/adminEbook/details/${conten._id}`}>
             <FaExternalLinkAlt
              className="text-light ml-4"
              style={{ cursor: 'pointer' }}
             />
            </Link>
           </td>
          </tr>
         ))}
       </>
      )}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default AddminContentScreen;
