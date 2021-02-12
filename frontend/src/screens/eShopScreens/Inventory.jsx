import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/eShopComponents/Message";
import Loader from "../../components/eShopComponents/Loader";
import { listUsers, deleteUser } from "../../actions/eShopActions/userActions";

const Inventory = ({ history }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="card bg-warning p-2">
        <h3 className="p-2">Suppliers</h3>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Name
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Item Name"
                value=""
              />
            </Col>

            <Form.Label column sm={1}>
              Tel
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="number"
                placeholder="Phone Number"
                value=""
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Email
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Email"
                value=""
              />
            </Col>
            <Form.Label column sm={1}>
              Address
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Address"
                value=""
              />
            </Col>
            <Col sm={3}>
              <Button
                type="submit"
                size="sm"
                variant="info"
                className="rounded"
              >
                Add Suppliers
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>

      <div className="card mt-2">
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>NO#</th>
              <th>SUPP NAME</th>
              <th>SUPP CONTACT</th>
              <th>SUPP EMAIL</th>
              <th>ADDRESS</th>
              <th>ACTIONS </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vannak vy</td>
              <td>081336131</td>
              <td>vannakvy2020@gmail.com</td>
              <td>Thnoal Banday, Siem Reap, Cambodia</td>
              <td>
                {" "}
                <i className="fas fa-edit text-info"></i>
                <i className="fas fa-trash ml-2 text-danger "></i>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Inventory;
