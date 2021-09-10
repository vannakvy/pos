import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import Loader from '../Loader';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';
import { useSelector } from 'react-redux';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

const CourseInclude = ({ id }) => {
 const [codeLiveText, setCodeLiveText] = useState('');
 const [success, setSuccess] = useState(false);
 const [loading, setLoading] = useState(false);

 const { userInfo } = useSelector((state) => state.userLogin);

 useEffect(() => {
  setSuccess(false);
  async function fetchData() {
   const { data } = await axios.get(`/api/courses/${id}/include`);
   setCodeLiveText(data || '');
  }
  fetchData();
 }, [id, success]);

 const addInclude = async (id, include) => {
  setLoading(true);
  try {
   const config = {
    headers: {
     'Content-Type': 'application/json',
     Authorization: `Bearer ${userInfo.token}`,
    },
   };
   const { data } = await axios.put(
    `/api/courses/${id}/include`,
    { include: include },
    config
   );
   if (data) {
    setSuccess(true);
    setLoading(false);
   } else {
    setLoading(false);
   }
  } catch (error) {}
 };

 return (
  <>
   <h4 className="text-info text-center">អំពីមុខវិទ្យា</h4>
   <div className="row my-2">
    <div className="col-md-6">
     <div className="py-2 px-1 rounded" style={{ background: 'rgb(30,30,30)' }}>
      <Editor
       className="round"
       theme="vs-dark"
       height="300px"
       defaultLanguage="html"
       options={{ formatOnPaste: true }}
       value={codeLiveText}
       onChange={(e) => {
        setCodeLiveText(e);
       }}
      />
     </div>
    </div>
    <div className="col-md-6">
     <div className="w-100 h-100 bg-light rounded p-4">
      {ReactHtmlParser(codeLiveText)}
     </div>
    </div>
   </div>
   <div className="text-center mb-2">
    <button
     onClick={() =>
      setCodeLiveText(
       codeLiveText +
        `<p class="mb-2 fw-bold">
        <span class="obj">
            <img width="20px" src="https://i.pinimg.com/originals/5e/00/ff/5e00ffa3d59703b5dffc407b90dfde35.png" alt="" >
        </span>
        ២២ ម៉ោងនៃវីដីអូទាំងអស់
    </p>`
      )
     }
     className="btn btn-info rounded mx-1"
    >
     <AiOutlineAppstoreAdd size="20" />
    </button>
    <button
     className="btn btn-success mx-1 rounded position-relative"
     style={{ width: 120 }}
     onClick={() => addInclude(id, codeLiveText)}
    >
     {loading && (
      <span
       className="d-inline-block p-0 m-0 position-absolute"
       style={{ left: 11 }}
      >
       <Loader wd={19} hg={19} />
      </span>
     )}
     រក្សាទុក
    </button>
    <button
     className="btn btn-secondary mx-1 rounded position-relative"
     style={{ width: 120 }}
     onClick={() => setSuccess(true)}
    >
     បោះបង់
    </button>
   </div>
  </>
 );
};

export default CourseInclude;
