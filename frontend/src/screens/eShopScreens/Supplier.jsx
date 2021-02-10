import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/eShopComponents/Message";
import Loader from "../../components/eShopComponents/Loader";

import {
  listSupplier,
  deleteSupplier,
  createSupplier,
  updateSupplier,
} from "../../actions/eShopActions/supplierActions";

const Supplier = ({ history }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [supId, setSupId] = useState("");
  const [update, setUpdate] = useState(false);

  const { suppliers, loading } = useSelector((state) => state.supplierList);
  const supplierCreate = useSelector((state) => state.supplierCreate);
  const supplierDelete = useSelector((state) => state.supplierDelete);
  const supplierUpdate = useSelector((state) => state.supplierUpdate);

  useEffect(() => {
    dispatch(listSupplier());
  }, [supplierCreate, supplierDelete, supplierUpdate]);

  const clearInput = () => {
    setName("");
    setEmail("");
    setTel("");
    setAddress("");
    setSupId("");
    setUpdate(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (update) {
      dispatch(updateSupplier(supId, name, email, tel, address));
    } else {
      dispatch(createSupplier(name, email, tel, address));
    }
    clearInput();
  };
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>

            <Form.Label column sm={1}>
              Email
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Address
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Col>
            <Col sm={1}></Col>
            {update ? (
              <Col sm={3}>
                <Button
                  type="submit"
                  size="sm"
                  variant="info"
                  className="rounded"
                  onClick={handleSubmit}
                >
                  Update
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="danger"
                  className="rounded"
                  onClick={() => clearInput()}
                >
                  Cancel Update
                </Button>
              </Col>
            ) : (
              <Col sm={3}>
                <Button
                  type="submit"
                  size="sm"
                  variant="info"
                  className="rounded"
                  onClick={handleSubmit}
                >
                  Add Supplier
                </Button>
              </Col>
            )}
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
            {loading ? <Loader wd={50} hg={50} /> : null}
            {suppliers &&
              suppliers.map((supplier) => (
                <tr key={supplier._id}>
                  <td>{supplier._id}</td>
                  <td>{supplier.name}</td>
                  <td>{supplier.email}</td>
                  <td>{supplier.tel}</td>
                  <td>{supplier.address}</td>
                  <td>
                    {" "}
                    <i
                      className="fas fa-edit text-info"
                      onClick={() => {
                        setName(supplier.name);
                        setEmail(supplier.email);
                        setTel(supplier.tel);
                        setAddress(supplier.address);
                        setSupId(supplier._id);
                        setUpdate(true);
                      }}
                    ></i>
                    <i
                      className="fas fa-trash ml-2 text-danger"
                      onClick={() => dispatch(deleteSupplier(supplier._id))}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Supplier;
