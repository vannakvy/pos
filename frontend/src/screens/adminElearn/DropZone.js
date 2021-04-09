import React, { useCallback } from 'react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsFolderPlus } from 'react-icons/bs';
import { Vimeo } from 'vimeo';
import Loader from '../../components/Loader';

const MyDropzone = ({ video, setVideo, setUpload }) => {
 const [load, setLoad] = useState(false);

 const onDrop = useCallback(
  (acceptedFiles) => {
   console.log(acceptedFiles[0].name);
   setLoad(true);
   let client = new Vimeo(
    '6508bf4f0d4dd8966d4455c225562b441a95018c',
    '4U6LnB/rJtugok2dQv8EePmMHOZG9NmG3SLCeovAalJx8MxR9/KbTvz7vpSSoLxIuumHc6VO7B1vZqqZOs5DiPZC79S6aLMxL4I4xZ7jUdOl6lCkBaYhQggcuJgMCC4C',
    'f3c5eec0638c21f119eec22924dd76af'
   );

   client.upload(
    acceptedFiles[0],
    {
     name: `${video.name === '' ? acceptedFiles[0].name : video.name}`,
     description: 'The description goes here.',
    },
    function (uri) {
     let url = 'https://player.vimeo.com/video' + uri.slice(7);
     console.log('Your video URI is: ' + url);
     setVideo({ ...video, url: url });
    },
    function (bytes_uploaded, bytes_total) {
     var percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2);
     console.log(bytes_uploaded, bytes_total, percentage + '%');
     if (bytes_uploaded === bytes_total) {
      setTimeout(() => {
       setLoad(false);
      }, 2000);
     }
     setUpload({
      totalSize: (bytes_total / 1048576).toFixed(2),
      currentSize: (bytes_uploaded / 1048576).toFixed(2),
      percentUpload: percentage,
     });
    },
    function (error) {
     console.log('Failed because: ' + error);
    }
   );
  },
  [video, setVideo, setUpload, setLoad]
 );
 const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

 return (
  <div {...getRootProps()} className="d-inline-block">
   <input {...getInputProps()} />
   {isDragActive ? (
    <div
     className="bg-dark round d-flex justify-content-center align-items-center text-light"
     style={{ width: '100px', height: '100px' }}
    >
     {load ? <Loader wd={40} hg={40} /> : <BsFolderPlus />}
    </div>
   ) : (
    <div
     className="bg-light round shadow d-flex justify-content-center align-items-center adminHover"
     style={{ width: '100px', height: '100px' }}
    >
     {load ? <Loader wd={40} hg={40} /> : <BsFolderPlus />}
    </div>
   )}
  </div>
 );
};

export default MyDropzone;
