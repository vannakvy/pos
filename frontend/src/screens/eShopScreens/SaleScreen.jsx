import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/eShopComponents/Message";
import Loader from "../../components/eShopComponents/Loader";
import { listOrders, listSales } from "../../actions/eShopActions/orderActions";

const SaleScreen = ({ history }) => {
  const dispatch = useDispatch();

  const saleList = useSelector((state) => state.saleList);
  const { loading, error, sales } = saleList;
  console.log(saleList);

  useEffect(() => {
    dispatch(listSales());
  }, [dispatch, history]);

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
              {sales &&
                sales.map((sale) => (
                  <tr key={sale._id}>
                    <td>{sale.paidAt}</td>
                    <td>{sale._id}</td>
                    <td>{sale.orderItems.length}</td>
                    <td>{sale.user._id}</td>
                    <td>{sale.shippingAddress.city}</td>
                    <td>{sale.totalPrice}</td>
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
