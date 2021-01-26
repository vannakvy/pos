import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/eShopComponents/Message';
import Loader from '../../components/eShopComponents/Loader';
import { Form, Col, Row } from 'react-bootstrap';

import { listUsers, deleteUser } from '../../actions/eShopActions/userActions';
import DropdownExampleSearchSelection from '../../components/covideComponents/Dropdown';

const PuchaseScreen = ({ history }) => {
 const dispatch = useDispatch();

 const userList = useSelector((state) => state.userList);
 const { loading, error } = userList;
 const users = [];

 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;

 const userDelete = useSelector((state) => state.userDelete);
 const { success: successDelete } = userDelete;

 return (
  <div className="bg-warning p-2">
   <h1>Puchases</h1>

   <Form>
    <Form.Group as={Row} controlId="formHorizontalEmail">
     <Form.Label column sm={2}>
      Product Name
     </Form.Label>
     <Col sm={4}>
      <DropdownExampleSearchSelection />
     </Col>
     <Form.Label column sm={2}>
      Quatity and Amount
     </Form.Label>
     <Col sm={2}>
      <Form.Control type="number" placeholder="Quantity" />
     </Col>
     <Col sm={2}>
      <Form.Control disabled type="number" placeholder="Amount" />
     </Col>
    </Form.Group>
    <Form.Group as={Row} controlId="formHorizontalEmail">
     <Form.Label column sm={2}>
      Puchase Date
     </Form.Label>
     <Col sm={4}>
      <Form.Control type="date" placeholder="Date" />
     </Col>
     <Form.Label column sm={2}>
      Supplier
     </Form.Label>
     <Col sm={4}>
      <Form.Control type="text" placeholder="Supplier" />
     </Col>
    </Form.Group>
    {/* // */}
    <Form.Group as={Row} controlId="formHorizontalEmail">
     <Form.Label column sm={2}>
      Unit Price
     </Form.Label>
     <Col sm={4}>
      <Form.Control type="number" placeholder="Unit Price" />
     </Col>
     <Form.Label column sm={2}>
      Discount
     </Form.Label>
     <Col sm={4}>
      <Form.Control type="text" placeholder="Discount" />
     </Col>
    </Form.Group>
   </Form>

   {loading ? (
    <Loader />
   ) : error ? (
    <Message variant="danger">{error}</Message>
   ) : (
    <Table striped bordered hover responsive className="table-sm card">
     <thead>
      <tr>
       <th>DATE</th>
       <th>ITEM</th>
       <th>PRODUCT CODE</th>
       <th>SUPPLIER</th>
       <th>QTY</th>
       <th>UNIT PRICE</th>
       <th>CATEGORY</th>
       <th>DISCOUNT</th>
       <th>TOTAL AMMOUNT</th>
       <th></th>
      </tr>
     </thead>
     <tbody>
      {users.map((user) => (
       <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <td>
         <a href={`mailto:${user.email}`}>{user.email}</a>
        </td>
        <td>
         {user.isAdmin ? (
          <i className="fas fa-check" style={{ color: 'green' }}></i>
         ) : (
          <i className="fas fa-times" style={{ color: 'red' }}></i>
         )}
        </td>
        <td>
         <LinkContainer to={`/adminEshop/user/${user._id}/edit`}>
          <Button variant="light" className="btn-sm">
           <i className="fas fa-edit"></i>
          </Button>
         </LinkContainer>
         <Button
          variant="danger"
          className="btn-sm"
          // onClick={() => deleteHandler(user._id)}
         >
          <i className="fas fa-trash"></i>
         </Button>
        </td>
       </tr>
      ))}
     </tbody>
    </Table>
   )}
  </div>
 );
};

export default PuchaseScreen;
