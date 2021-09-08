import React, { useEffect, useState } from 'react';
import Logo from '../../img/free-ebook.png';
import { FaHome } from 'react-icons/fa';
import { VscRunAll } from 'react-icons/vsc';
import { MdScreenRotation } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { navbarList } from '../../actions/navbarActions';
import Editor from '@monaco-editor/react';
import Split from 'react-split-it';
import axios from 'axios';

const EbookLiveCode = ({ match, history }) => {
 const dispatch = useDispatch();
 const [htmlDoc, setHtmlDoc] = useState('');
 const [codeLiveText, setCodeLiveText] = useState('');
 const [vertical, setVertical] = useState(false);

 useEffect(() => {
  dispatch(navbarList('Ebook'));
  async function fetchData() {
   const { data } = await axios.get(
    `/api/ebook/details/codeLive/${match.params.code}/get`
   );
   console.log(data);
   if (data) {
    setCodeLiveText(data.content);
    setHtmlDoc(data.content);
   }
  }
  fetchData();
 }, [dispatch]);

 return (
  <div className="">
   {/* <div className="text-center bg-light">
    <img style={{ width: '200px' }} src={Logo} alt="" />{' '}
    <span className="kh fs-2 fw-bold">CODING CAMBODIA</span>
   </div> */}
   <div className="p-1 text-center">
    <button
     className="btn me-2 rounded"
     onClick={() =>
      history.push(`/ebook/${match.params.lang}/${match.params.id}`)
     }
    >
     <FaHome size="20" style={{ marginTop: -3 }} />
    </button>
    <button className="btn rounded me-2" onClick={() => setVertical(!vertical)}>
     <MdScreenRotation size="20" style={{ marginTop: -3 }} />
    </button>
    <button
     className="btn btn-success rounded shadow-sm"
     onClick={() => {
      setHtmlDoc('');
      setTimeout(() => {
       setHtmlDoc(codeLiveText);
      }, 10);
     }}
    >
     ដំណើរការ <VscRunAll size="20" />
    </button>
   </div>

   <div className="simple pb-5 px-2">
    {vertical ? (
     <Split direction="vertical">
      <div className="content r">
       <div style={{ background: 'rgb(30,30,30)' }}>
        <Editor
         className="round py-3"
         theme="vs-dark"
         height="500px"
         defaultLanguage="html"
         options={{ formatOnPaste: true }}
         value={codeLiveText}
         onChange={(e) => setCodeLiveText(e)}
        />
       </div>
      </div>
      <div className="content y h-100">
       <div
        className="bg-light w-100"
        style={{ minHeight: 400, maxHeight: 800 }}
       >
        <iframe
         width="100%"
         height="100%"
         srcDoc={htmlDoc}
         frameborder="0"
        ></iframe>
       </div>
      </div>
     </Split>
    ) : (
     <Split>
      <div className="content r">
       <div style={{ background: 'rgb(30,30,30)' }}>
        <Editor
         className="round py-3"
         theme="vs-dark"
         height="800px"
         defaultLanguage="html"
         options={{ formatOnPaste: true }}
         value={codeLiveText}
         onChange={(e) => setCodeLiveText(e)}
        />
       </div>
      </div>
      <div className="content y h-100">
       <div className="bg-light w-100 h-100">
        <iframe
         width="100%"
         height="100%"
         srcDoc={htmlDoc}
         frameborder="0"
        ></iframe>
       </div>
      </div>
     </Split>
    )}
   </div>
  </div>
 );
};

export default EbookLiveCode;
