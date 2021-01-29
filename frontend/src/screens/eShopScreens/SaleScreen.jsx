import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/eShopComponents/Message";
import Loader from "../../components/eShopComponents/Loader";
import { listOrders } from "../../actions/eShopActions/orderActions";

const SaleScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch, history]);

  const reducers = (accumulator, item) => {
    return accumulator + item;
  };
  return (
    <div className="bg-warning p-2">
      <h1>Sales</h1>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Col md="2">
            <Form.Label>Find By Day</Form.Label>
          </Col>
          <Col md={4}>
            <Form.Control
              type="date"
              placeholder="Date"
              value="dd"
              // onChange={(e) => setDate(e.target.value)}
            />
          </Col>
          <Col md="2">
            <Form.Label>Find By Month</Form.Label>
          </Col>
          <Col md={4}>
            <Form.Control
              type="date"
              placeholder="Date"
              value="dd"
              // onChange={(e) => setDate(e.target.value)}
            />
          </Col>
        </Form.Group>
      </Form>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="card ">
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>DATE</th>

                <th>ORDER ID</th>
                <th>QTY</th>

                <th>SOLD TO</th>
                <th>SHIPPING Adreess</th>
                <th>AMMOUNT</th>
                <th>aCTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr>
                    <td>{order.paidAt}</td>
                    <td>{order._id}</td>
                    <td>{order.orderItems.length}</td>
                    <td>{order.user._id}</td>
                    <td>{order.shippingAddress.city}</td>
                    <td>{order.totalPrice}</td>
                    <td>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default SaleScreen;
