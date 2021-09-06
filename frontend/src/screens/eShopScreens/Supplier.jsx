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
      <div className="card card-body m-2 p-2">
        <h3 className="p-2">បញ្ចូលអ្នកផ្គត់ផ្គង់</h3>
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              ឈ្មោះ
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
              size="sm"
                type="text"
                placeholder="ឈ្មោះ"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>

            <Form.Label column sm={1}>
              អុីម៉ែល
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                size="sm"
                type="email"
                placeholder=" អុីម៉ែល"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Form.Label column sm={1}>
              ទូរស័ព្ធ
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                size="sm"
                type="number"
                placeholder="ទូរស័ព្ធ"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              អាសយដ្ធាន
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                size="sm"
                type="text"
                placeholder="អាសយដ្ធាន"
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
                  className="rounded mr-1"
                  onClick={handleSubmit}
                >
                  កែប្រែទំនិញ់
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="danger"
                  className="rounded"
                  onClick={() => clearInput()}
                >
                  លុបការកែប្រែ
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
                  បញ្ចូល
                </Button>
              </Col>
            )}
          </Form.Group>
        </Form>
      </div>

      <div className="card mt-2">
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr className="bg-info text-light">
              <th>លេខរៀង#</th>
              <th>ឈ្មោះ</th>
              <th>ទំនាក់ទំនង</th>
              <th>អុីម៉ែល</th>
              <th>អាសយដ្ធាន</th>
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
                    <i className="fas fa-edit text-info"
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
