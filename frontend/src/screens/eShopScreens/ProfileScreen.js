import React, { useState, useEffect } from 'react';
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/eShopComponents/Message';
import Loader from '../../components/eShopComponents/Loader';
import {
 getUserDetails,
 updateUserProfile,
} from '../../actions/eShopActions/userActions';
import { listMyOrders } from '../../actions/eShopActions/orderActions';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const ProfileScreen = ({ location, history }) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [message, setMessage] = useState(null);
 const [profile, setProfile] = useState({});

 const dispatch = useDispatch();

 const userDetails = useSelector((state) => state.userDetails);
 const { loading, error, user } = userDetails;

 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;

 const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
 const { success } = userUpdateProfile;

 useEffect(() => {
  if (!userInfo) {
   history.push('/login');
  } else {
   if (!user || !user.name) {
    dispatch(getUserDetails('profile'));
    dispatch(listMyOrders());
   } else {
    setName(user.name);
    setEmail(user.email);
   }
  }
 }, [dispatch, history, userInfo, user]);

 useEffect(() => {
  if (userInfo) {
   setProfile(userInfo);
  }
 }, [userInfo]);

 const submitHandler = (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
   setMessage('Passwords do not match');
  } else {
   dispatch(updateUserProfile({ id: user._id, name, email, password }));
  }
 };
 console.log(profile);
 return (
  <div className="container" style={{ minHeight: '100vh' }}>
   <div className="bg-light mt-5 round" style={{ paddingBottom: '10rem' }}>
    <div className="text-center p-5 mt-3 rounded bg">
     <div className="position-relative mx-auto" style={{ width: 100 }}>
      <img
       className="rounded-pill"
       style={{
        background: 'rgb(240,240,240)',
        width: 100,
        height: 100,
        objectFit: 'cover',
       }}
       src={profile.profile}
       alt=""
      />
      <div className="position-absolute" style={{ top: 30, left: 30 }}>
       <input
        accept="image/*"
        className="d-none"
        id="icon-button-file"
        type="file"
        //  onChange={uploadFileHandler}
       />
       <label htmlFor="icon-button-file">
        <IconButton
         color="secondary"
         aria-label="upload picture"
         component="span"
        >
         <PhotoCamera />
        </IconButton>
       </label>
      </div>
     </div>
    </div>
    <Row className="p-3">
     <Col lg={5} className="mx-auto mb-5">
      {message && <Message variant="danger">{message}</Message>}
      {}
      {success && <Message variant="success">Profile Updated</Message>}
      {loading ? (
       <Loader />
      ) : error ? (
       <Message variant="danger">{error}</Message>
      ) : (
       <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
         <Form.Label>
          <h5>ឈ្មោះ</h5>
         </Form.Label>
         <Form.Control
          className="fw-bold"
          type="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
         ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
         <Form.Label>
          <h5>អ៊ីម៉ែល</h5>
         </Form.Label>
         <Form.Control
          className="bg-info fw-bold"
          readOnly
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
         <Form.Label>
          <h5>លេខសម្ងាត់ចាស់</h5>
         </Form.Label>
         <Form.Control
          type="password"
          className="fw-bold"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
         ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
         <Form.Label>
          <h5>លេខសម្ងាត់ថ្មី</h5>
         </Form.Label>
         <Form.Control
          type="password"
          className="fw-bold"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
         ></Form.Control>
        </Form.Group>

        <Button
         className="w-100 text-dark shadow-sm mt-5"
         type="submit"
         variant="success"
        >
         <h5>រក្សាទុក</h5>
        </Button>
       </Form>
      )}
     </Col>
    </Row>
   </div>
  </div>
 );
};

export default ProfileScreen;
