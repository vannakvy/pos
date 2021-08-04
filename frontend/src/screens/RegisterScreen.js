import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register, registerByGoogle } from '../actions/userActions/userActions';
import googleLogo from '../img/google-logo.png';

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
   <h1 className="kh text-center mb-5">បញ្ចូលព័ត៌មានផ្ទាល់ខ្លួន</h1>
   {message && <Message variant="danger">{message}</Message>}
   {error && (
    <Message variant="danger">
     <p className="kh fw-bold text-center">{error}</p>
    </Message>
   )}
   {loading && <Loader wd={40} hg={40} />}
   <Form onSubmit={submitHandler}>
    <Form.Group controlId="name">
     <Form.Label className="kh fw-bold">
      ឈ្មោះ (<span className="ubuntu">Name</span>)
     </Form.Label>
     <Form.Control
      className="rounded shadow-sm"
      type="name"
      placeholder="Enter name"
      value={name}
      onChange={(e) => setName(e.target.value)}
     ></Form.Control>
    </Form.Group>

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

    <Form.Group controlId="confirmPassword">
     <Form.Label className="kh fw-bold">
      ផ្ទៀងផ្ទាត់លេខសម្ងាត់ (<span className="ubuntu">Confirm Password</span>)
     </Form.Label>
     <Form.Control
      className="rounded shadow-sm"
      type="password"
      placeholder="Confirm password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
     ></Form.Control>
    </Form.Group>

    <div className="text-center py-2">
     <Button type="submit" className="grediant rounded text-dark px-4 kh fs-6">
      បង្កើតគណនី
     </Button>
    </div>
   </Form>

   <p className="kh fw-bold text-center mt-1">ឬក៏</p>
   <hr />
   <div>
    <div
     className="bg-light shadow ml-auto mr-auto rounded adminHover d-flex"
     style={{ maxWidth: '400px', padding: '6px 15px' }}
     onClick={() => dispatch(registerByGoogle())}
    >
     <img style={{ width: '35px' }} src={googleLogo} alt="" />
     <h5 className="text-center kh w-100 mt-2">
      បង្កើតគណនីតាមគណនី <span className="ubuntu">GOOGLE</span>
     </h5>
    </div>
   </div>

   <Row className="py-3">
    <Col className="kh fw-bold">
     ចុះឈ្មោះម្ដងហើយ?{' '}
     <Link
      className="linkLogin"
      to={redirect ? `/login?redirect=${redirect}` : '/login'}
     >
      ចូលគណនី
     </Link>
    </Col>
   </Row>
  </FormContainer>
 );
};

export default RegisterScreen;
