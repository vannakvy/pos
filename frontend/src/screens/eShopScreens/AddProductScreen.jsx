import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button, Table } from "react-bootstrap";
import axios from "axios";
import Loader from "../../components/eShopComponents/Loader";
import Paginate from "../../components/eShopComponents/Paginate";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  listProducts,
  deleteProduct,
  updateProduct,
} from "../../actions/eShopActions/productActions";

const AddProductScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [proId, setProId] = useState("");

  const clearInput = () => {
    setName("");
    setPrice("");
    setImage("");
    setCategory("");
    setDescription("");
    setUploading(false);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/eshop/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      setUploading(false);
    }
  };

  const handleSubmitHandler = (e) => {
    e.preventDefault();
    if (update) {
      dispatch(updateProduct(proId, name, price, image, category, description));
    } else {
      dispatch(createProduct(name, price, image, category, description));
    }
    clearInput();
  };

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );
  console.log(products);
  const productDelete = useSelector((state) => state.productDelete);
  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  useEffect(() => {
    dispatch(listProducts("", pageNumber));
  }, [createdProduct, pageNumber, history, successDelete, productUpdate]);

  return (
    <div className="addProductScreen">
      <div className="bg-warning p-3">
        <Form onSubmit={handleSubmitHandler}>
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
              Price
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
            <Form.Label column sm={1}>
              Image
            </Form.Label>
            <Col sm={3}>
              <Form.File
                id="custom-file"
                size="sm"
                label={image !== "" ? "Uploaded" : "File"}
                onChange={uploadFileHandler}
                custom
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Des.
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
            <Form.Label column sm={1}>
              Cate.
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                size="sm"
                custom
              >
                <option>Microcontrollers</option>
                <option>Motors</option>
                <option>Sensor</option>
                <option>Computers</option>
                <option>Others</option>
              </Form.Control>
            </Col>
            <Col sm={1}></Col>
            <Col sm={3}>
              {update ? (
                <>
                  <Button
                    type="submit"
                    size="sm"
                    variant="info"
                    className="rounded"
                  >
                    Update Product
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="danger"
                    className="rounded ml-1"
                    onClick={() => setUpdate(false)}
                  >
                    Cancel Update
                  </Button>
                </>
              ) : (
                <Button
                  type="submit"
                  size="sm"
                  variant="info"
                  className="rounded"
                >
                  Add product
                </Button>
              )}
            </Col>
          </Form.Group>
        </Form>
      </div>
      <div className="card mt-2 ">
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>NO #</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>DESCRIPTION</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Loader wh={50} hg={50} />
            ) : (
              <>
                {products &&
                  products.map((product) => (
                    <tr key={product._id}>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.countInStock}</td>
                      <td>{product.description}</td>
                      <td>
                        <i
                          className="fas fa-edit text-info"
                          onClick={() => {
                            setProId(product._id);
                            setName(product.name);
                            setPrice(product.price);
                            setImage(product.image);
                            setCategory(product.category);
                            setDescription(product.description);
                            setUploading(true);
                            setUpdate(true);
                          }}
                        ></i>
                        <i
                          className="fas fa-trash ml-3 text-danger"
                          onClick={() => dispatch(deleteProduct(product._id))}
                        ></i>
                      </td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </Table>
        <Paginate pages={pages} page={page} isAdmin={true} />
      </div>
    </div>
  );
};

export default AddProductScreen;
