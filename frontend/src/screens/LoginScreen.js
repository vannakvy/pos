import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login, loginByGoogle } from '../actions/userActions/userActions';
import googleLogo from '../img/google-logo.png';
import LoaderBackdrop from '../components/LoaderBackdrop';

const LoginScreen = ({ location, history }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const dispatch = useDispatch();

 const userLogin = useSelector((state) => state.userLogin);
 const { loading, error, userInfo } = userLogin;

 const redirect = location.search ? location.search.split('=')[1] : '/';

 useEffect(() => {
  if (userInfo) {
   if (redirect === 'shipping') {
    history.push('eshop/', redirect);
   }
   history.push(redirect);
  }
 }, [history, userInfo, redirect]);

 const submitHandler = (e) => {
  e.preventDefault();
  dispatch(login(email, password));
 };

 return (
  <FormContainer>
   <h1 className="kh text-center mb-5">បញ្ចូលគណនី</h1>
   {error && (
    <Message variant="danger">
     {' '}
     <p className="kh fw-bold text-center">{error}</p>
    </Message>
   )}
   <LoaderBackdrop loader={loading && loading} />
   <Form onSubmit={submitHandler}>
    <Form.Group controlId="email">
     <Form.Label className="kh fw-bold">
      អុីម៉ែល (<span className="ubuntu">Email</span>)
     </Form.Label>
     <Form.Control
      className="rounded shadow-sm"
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     ></Form.Control>
    </Form.Group>

    <Form.Group controlId="password">
     <Form.Label className="kh fw-bold">
      លេខសម្ងាត់ (<span className="ubuntu">Password</span>)
     </Form.Label>
     <Form.Control
      className="rounded shadow-sm"
      type="password"
      placeholder="Enter password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     ></Form.Control>
    </Form.Group>

    <div className="text-center py-2">
     <Button type="submit" className="grediant rounded text-dark px-4 kh fs-6">
      ចូលគណនី
     </Button>
    </div>
   </Form>
   <p className="kh fw-bold text-center mt-1">ឬក៏</p>
   <hr />
   <div>
    <div
     className="bg-light shadow ml-auto mr-auto rounded adminHover d-flex"
     style={{ maxWidth: '400px', padding: '6px 15px' }}
     onClick={() => dispatch(loginByGoogle())}
    >
     <img style={{ width: '35px' }} src={googleLogo} alt="" />
     <h5 className="text-center kh w-100 mt-2">
      ចូលគណនីតាមគណនី <span className="ubuntu">GOOGLE</span>
     </h5>
    </div>
   </div>
   <Row className="py-3">
    <Col className="kh fw-bold">
     សម្រាប់អ្នកថ្មី?{' '}
     <Link
      className="linkLogin"
      to={redirect ? `/register?redirect=${redirect}` : '/register'}
     >
      ចុះឈ្មោះឥឡូវនេះ
     </Link>
    </Col>
   </Row>
  </FormContainer>
 );
};

export default LoginScreen;
