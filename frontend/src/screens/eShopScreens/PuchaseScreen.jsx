import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/eShopComponents/Message";
import Loader from "../../components/eShopComponents/Loader";
import { Form, Col, Row, Table, Button } from "react-bootstrap";

// import { listUsers, deleteUser,  } from "../../actions/eShopActions/userActions";

import {
  createPuchase,
  listPuchases,
  deletePuchase,
  updatePuchase,
  addRemoveStock,
} from "../../actions/eShopActions/inventoryActions";
import { listProducts } from "../../actions/eShopActions/productActions";

const PuchaseScreen = ({ history }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");
  const [date, setDate] = useState(Date.now());
  const [arrived, setArrived] = useState(false);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState("Choose a product");
  const [action, setAction] = useState("add");
  const [supplier, setSupplier] = useState("");
  const [puchaseId, setPuchaseId] = useState("");

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const puchaseLists = useSelector((state) => state.puchaseLists);
  const { puchases } = puchaseLists;

  const puchaseCreate = useSelector((state) => state.puchaseCreate);
  const puchaseDelete = useSelector((state) => state.puchaseDelete);
  const puchaseUpdate = useSelector((state) => state.puchaseUpdate);
  const addToStockUpdate = useSelector((state) => state.addToStockUpdate);

  useEffect(() => {
    dispatch(listPuchases());
    dispatch(listProducts());
  }, [puchaseCreate, puchaseDelete, puchaseUpdate, addToStockUpdate]);

  const clearInput = () => {
    setAction("add");
    setProduct("Choose a product");
    setDate(Date.now());
    setQuantity(0);
    setPrice("0");
    setArrived(false);
    setDescription("");
    setPuchaseId("");
    setSupplier("");
  };
  const handleCreatePuchase = (e) => {
    e.preventDefault();
    if (action === "add") {
      dispatch(
        createPuchase(
          product,
          date,
          arrived,
          price,
          quantity,
          description,
          supplier
        )
      );
    } else {
      dispatch(
        updatePuchase(
          product,
          date,
          arrived,
          price,
          quantity,
          description,
          supplier,
          puchaseId
        )
      );
    }
    clearInput();
  };
  return (
    <div className="bg-warning p-2">
      <h1>Puchases</h1>
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Product Name
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              as="select"
              size="md"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              custom
            >
              <option value={product}>{product}</option>
              {products &&
                products.map((product) => (
                  <option key={product.name} value={product.name}>
                    {product.name}
                  </option>
                ))}
            </Form.Control>
          </Col>
          <Form.Label column sm={2}>
            Quatity and Amount
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Col>
          <Col sm={2}>
            <Form.Control
              disabled
              type="number"
              placeholder="Amount"
              value={price * quantity}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Puchase Date
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Col>
          <Form.Label column sm={2}>
            Supplier
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="text"
              value={supplier}
              placeholder="Supplier"
              onChange={(e) => setSupplier(e.target.value)}
            />
          </Col>
        </Form.Group>
        {/* // */}
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Unit Price
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="number"
              value={price}
              placeholder="Unit Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Arrived
          </Form.Label>
          <Col sm={4}>
            <Form.Check
              type="checkbox"
              label="Arrived"
              checked={arrived}
              onChange={() => setArrived(!arrived)}
            />
          </Col>
        </Form.Group>
        <Button
          variant="primary"
          size="md"
          type="submit"
          className="mb-2 rounded"
          onClick={handleCreatePuchase}
        >
          {action === "add" ? " Add Puchase" : "Update"}
        </Button>
        {action === "update" ? (
          <Button
            variant="danger"
            size="md"
            type="submit"
            className="mb-2 ml-3 rounded"
            onClick={clearInput}
          >
            Cancel
          </Button>
        ) : null}
      </Form>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="card">
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>DATE</th>
                <th>PRODUCT NAME</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>SUPPLIER</th>
                <th>DESCRIPTION</th>
                <th>AMMOUNT</th>
                <th>ARRIVED</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {puchases &&
                puchases.map((puchase) => (
                  <tr key={puchase._id}>
                    <td>{puchase.date}</td>
                    <td>{puchase.product.name}</td>
                    <td>{puchase.quantity}</td>
                    <td>{puchase.price}</td>
                    <td>{puchase.supplier}</td>
                    <td>{puchase.description}</td>
                    <td>{puchase.quantity * puchase.price}</td>
                    <td>
                      {" "}
                      <Form.Check
                        type="checkbox"
                        checked={puchase.arrived}
                        onChange={() =>
                          dispatch(
                            addRemoveStock(
                              puchase._id,
                              puchase.arrived,
                              puchase.product._id,
                              puchase.quantity,
                              puchase.price
                            )
                          )
                        }
                      />{" "}
                    </td>
                    <td>
                      <Button
                        variant="light"
                        className="btn-sm"
                        onClick={() => {
                          setProduct(puchase.product.name);
                          setDate(puchase.date);
                          setQuantity(puchase.quantity);
                          setPrice(puchase.price);
                          setArrived(puchase.arrived);
                          setDescription(puchase.description);
                          setAction("update");
                          setSupplier(puchase.supplier);
                          setPuchaseId(puchase._id);
                        }}
                      >
                        <i className="fas fa-edit"></i>
                      </Button>

                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => dispatch(deletePuchase(puchase._id))}
                      >
                        <i className="fas fa-trash"></i>
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

export default PuchaseScreen;
