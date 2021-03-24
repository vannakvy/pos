import React from 'react';
import MyDropzone from './DropZone';

const AdminVideos = () => {
 return (
  <>
   <MyDropzone />
   <iframe
    src="https://player.vimeo.com/video/525626229"
    width="1280"
    height="720"
    frameborder="0"
    allow="picture-in-picture"
    allowfullscreen
    title="gg"
   ></iframe>
  </>
 );
};

export default AdminVideos;
