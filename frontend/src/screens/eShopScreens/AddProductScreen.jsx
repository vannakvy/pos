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
  const [salePrice, setSalePrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [proId, setProId] = useState("");

  const clearInput = () => {
    setName("");
    setSalePrice(0);
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
      dispatch(
        updateProduct(proId, name, salePrice, image, category, description)
      );
    } else {
      dispatch(createProduct(salePrice, name, image, category, description));
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
  console.log(products)

  return (
    <div className="addProductScreen">
      <div className=" card card-body m-2 p-3">
        <Form onSubmit={handleSubmitHandler}>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              ឈ្មោះ
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                size="sm"
                type="text"
                placeholder="ឈ្មោះទំនិញ់"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Form.Label column sm={1}>
              តម្លៃ
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                size="sm"
                type="number"
                placeholder="តម្លែ"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
              />
            </Col>

            <Col sm={3}>
              <Form.File
                id="custom-file"
                size="sm"
                label={image !== "" ? "បានបញ្ចូលរូបរួច" : "បញ្ចូលរូប"}
                onChange={uploadFileHandler}
                custom
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              អំពីទំនិញ់
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                size="sm"
                type="text"
                placeholder="អំពីទំទំនិញ់"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
            <Form.Label column sm={1}>
              ប្រភេទ
            </Form.Label>
            <Col sm={3}>
              <Form.Control className="outlines"
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="ប្រភេទ"
                size="sm"
                custom
              >
                <option>Microcontrollers</option>
                <option>Motors</option>
                <option>Sensor</option>
                <option>Computers</option>
                <option>RC Cars</option>
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
                    កែប្រែទំនិញ់
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    variant="danger"
                    className="rounded ml-1"
                    onClick={() => setUpdate(false)}
                  >
                    លុបការកែប្រែ
                  </Button>
                </>
              ) : (
                <Button
                  type="submit"
                  size="sm"
                  variant="info"
                  className="rounded"
                >
                  បញ្ចូលទំនិញ់
                </Button>
              )}
            </Col>
          </Form.Group>
        </Form>
      </div>
      <div className="card mt-2 ">
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr className="bg-info text-light">
             
              <th>រូបភាព</th>
              <th>ឈ្មោះទំនិញ់</th>
              <th>តម្លៃ</th>
              <th>សរុបក្នុងស្ទុក</th>
              <th>END STOCK AMOUNT</th>
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
                     
                      <td><img width="50" height="40" src={product.image} /></td>
                      <td>{product.name}</td>
                      <td>{product.salePrice}</td>
                      <td>{product.endStock}</td>
                      <td>{product.endStockAmount}</td>
                      <td>
                        <i
                          className="fas fa-edit text-info"
                          onClick={() => {
                            setProId(product._id);
                            setName(product.name);
                            setSalePrice(product.price);
                            setImage(product.image);
                            setCategory(product.category);
                            setDescription(product.description);
                            setUploading(true);
                            setUpdate(true);
                          }}
                        ></i>
                        <i
                          className="fas fa-trash ml-3 text-danger"
                          onClick={() => {
                           let yes = window.confirm("are you sure")
                           if(yes){
                           dispatch(deleteProduct(product._id))
                           }
                          }  }
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
