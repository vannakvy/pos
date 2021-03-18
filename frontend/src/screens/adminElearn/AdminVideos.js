import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Loader from '../../components/Loader';
import axios from 'axios';
import FileInput from './Gg';
let Vimeo = require('vimeo').Vimeo;

const AdminVideos = () => {
 const [image, setImage] = useState(
  '/uploads/elearningUploads/imageDefualt.jpg'
 );
 const [uploading, setUploading] = useState(false);

 const uploadFileHandler = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('video', file);
  setUploading(true);

  try {
   const config = {
    headers: {
     'Content-Type': 'multipart/form-data',
    },
   };

   console.log(file);

   //  const { data } = await axios.post(
   //   '/api/eLearning/uploads',
   //   formData,
   //   config
   //  );

   let client = new Vimeo(
    '6508bf4f0d4dd8966d4455c225562b441a95018c',
    '4U6LnB/rJtugok2dQv8EePmMHOZG9NmG3SLCeovAalJx8MxR9/KbTvz7vpSSoLxIuumHc6VO7B1vZqqZOs5DiPZC79S6aLMxL4I4xZ7jUdOl6lCkBaYhQggcuJgMCC4C',
    'f3c5eec0638c21f119eec22924dd76af'
   );

   //  let file_name = 'Screen Shot 2021-02-24 at 10.12.08 AM.png';
   client.upload(
    file,
    {
     name: 'Untitled',
     description: 'The description goes here.',
    },
    function (uri) {
     console.log('Your video URI is: ' + uri);
    },
    function (bytes_uploaded, bytes_total) {
     var percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2);
     console.log(bytes_uploaded, bytes_total, percentage + '%');
    },
    function (error) {
     console.log('Failed because: ' + error);
    }
   );

   //  setImage(data);
   setUploading(false);
  } catch (error) {
   console.error(error);
   setUploading(false);
  }
 };
 return (
  <>
   <h4 className="text-center">Admin Videos</h4>
   <div class="form-group">
    <div class="input-group mb-3">
     <div class="custom-file">
      <input type="file" class="custom-file-input" id="inputGroupFile02" />
      <label class="custom-file-label" for="inputGroupFile02">
       Choose file
      </label>
     </div>
     <div class="input-group-append">
      <span class="input-group-text">Upload</span>
     </div>
    </div>
   </div>
   <Form.Group controlId="image">
    <Form.Control
     className="bg-light rounded"
     type="text"
     placeholder="Enter image url"
     value={image}
     name="image"
     onChange={(e) => setImage(e.target.value)}
    ></Form.Control>
    <Form.File
     className="bg-light"
     id="image-file"
     label="Choose File"
     custom
     onChange={uploadFileHandler}
    ></Form.File>
    {uploading && <Loader />}
   </Form.Group>
   <FileInput />
  </>
 );
};

export default AdminVideos;
