import React from "react";
import { Form, Col, Row, Button, Table } from "react-bootstrap";

const SaleByPassScreen = () => {
  return (
    <div className="">
      <div className="saleByPassScreen p-2 bg-warning">
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Inv ID
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Invice ID"
                value=""
              />
            </Col>
            <Form.Label column sm={1}>
              Date
            </Form.Label>
            <Col sm={3}>
              <Form.Control size="sm" type="date" placeholder="Date" value="" />
            </Col>
            <Form.Label column sm={1}>
              Stock
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Stock"
                value=""
                disabled
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Product
            </Form.Label>
            <Col sm={3}>
              <Form.Control as="select" size="sm" custom>
                <option>1 cake</option>
                <option>2 coca</option>
                <option>3 banana</option>
                <option>4 soda</option>
                <option>5 pepsi</option>
              </Form.Control>
            </Col>
            <Form.Label column sm={1}>
              Quantity
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="number"
                placeholder="Quantity"
                value=""
              />
            </Col>
            <Form.Label column sm={1}>
              Price
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                disabled
                size="sm"
                type="number"
                placeholder="Price"
                value=""
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Phone#
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                disabled
                size="sm"
                type="number"
                placeholder="Phone Number "
                value=""
              />
            </Col>
            <Form.Label column sm={1}>
              Shipping
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                disabled
                size="sm"
                type="text"
                placeholder="Carrying Address "
                value=""
              />
            </Col>
            <Col sm={1}></Col>
            <Col sm={3}>
              <Button
                type="button"
                size="sm"
                variant="info"
                className="rounded"
              >
                Purchase
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      <div className="card mt-2 ">
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>NO #</th>
              <th>PRODUCT NAME</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>AMOUNT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Raspberry Pi</td>
              <td>20</td>
              <td>200</td>
              <td>34</td>
              <td>
                <i className="fas fa-trash ml-2 text-danger"></i>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="save_stock m-1">
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={1}>
                Amount
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  disabled
                  size="sm"
                  type="number"
                  placeholder="Total Amount"
                  value=""
                />
              </Col>
              <Col sm={3}>
                <Button
                  type="submit"
                  size="sm"
                  variant="primary"
                  className="rounded"
                >
                  Save Stock
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SaleByPassScreen;
