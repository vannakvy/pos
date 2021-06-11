import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions/userActions';

const RegisterScreen = ({ location, history }) => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [message, setMessage] = useState(null);

 const dispatch = useDispatch();

 const userRegister = useSelector((state) => state.userRegister);
 const { loading, error, userInfo } = userRegister;
 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo: user } = userLogin;

 const redirect = location.search ? location.search.split('=')[1] : '/';

 useEffect(() => {
  if (userInfo || user) {
   history.push(redirect);
  }
 }, [history, userInfo, redirect, user]);

 const submitHandler = (e) => {
  e.preventDefault();
  if (password !== confirmPassword) {
   setMessage('Passwords do not match');
  } else {
   dispatch(register(name, email, password));
  }
 };

 return (
  <FormContainer>
   <h1 className="kh">បញ្ចូលព័ត៌មានផ្ទាល់ខ្លួន</h1>
   {message && <Message variant="danger">{message}</Message>}
   {error && <Message variant="danger">{error}</Message>}
   {loading && <Loader wd={40} hg={40} />}
   <Form onSubmit={submitHandler}>
    <Form.Group controlId="name">
     <Form.Label>Name</Form.Label>
     <Form.Control
      className="bg-light rounded shadow"
      type="name"
      placeholder="Enter name"
      value={name}
      onChange={(e) => setName(e.target.value)}
     ></Form.Control>
    </Form.Group>

    <Form.Group controlId="email">
     <Form.Label>Email Address</Form.Label>
     <Form.Control
      className="bg-light rounded shadow"
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     ></Form.Control>
    </Form.Group>

    <Form.Group controlId="password">
     <Form.Label>Password</Form.Label>
     <Form.Control
      className="bg-light rounded shadow"
      type="password"
      placeholder="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     ></Form.Control>
    </Form.Group>

    <Form.Group controlId="confirmPassword">
     <Form.Label>Confirm Password</Form.Label>
     <Form.Control
      className="bg-light rounded shadow"
      type="password"
      placeholder="Confirm password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
     ></Form.Control>
    </Form.Group>

    <Button type="submit" className="grediant rounded text-dark px-5">
     Register
    </Button>
   </Form>

   <Row className="py-3">
    <Col>
     Have an Account?{' '}
     <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
    </Col>
   </Row>
  </FormContainer>
 );
};

export default RegisterScreen;
