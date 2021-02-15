import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Row, Button, Table } from "react-bootstrap";
import { listProducts } from "../../actions/eShopActions/productActions";
import { listSupplier } from "../../actions/eShopActions/supplierActions";
import ConvertNum from "../../components/eLearningComponents/ConvertNum";
import { listProductDetails } from "../../actions/eShopActions/productActions";
import { createPurchase } from "../../actions/eShopActions/purchaseActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PurchaseProductScreen = () => {
  const dispatch = useDispatch();
  const [supplier, setSupplier] = useState("choose Supplier");
  const [recieveAt, setRecieveAt] = useState(Date.now());
  const [createAt, setCreateAt] = useState(Date.now());
  const [shippingCost, setShippingCost] = useState("");
  const [product, setProduct] = useState("Choose a product");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [Arr, setArr] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  //for making order number
  let order = 1;

  const { products } = useSelector((state) => state.productList);
  const { suppliers } = useSelector((state) => state.supplierList);
  const { loading, product: prod } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(listSupplier());
    dispatch(listProducts());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Arr.length === 0) {
      toast.error("There is no Items for purchasing!");
    } else {
      dispatch(
        createPurchase(
          supplier,
          recieveAt,
          createAt,
          Arr,
          shippingCost,
          totalAmount,
          totalQty
        )
      );

      setCreateAt("");
      setShippingCost("");
      setRecieveAt("");
      setArr([]);
      setTotalAmount("");
      setSupplier("");
      setTotalQty("");
    }
  };

  const handleProductChange = (e) => {
    //get all product detail for showing in the disable fild
    dispatch(listProductDetails(e.target.value));
    setProduct(e.target.value);
  };

  const addPurchase = () => {
    window.scrollTo(0, 0);
    let pro = prod.name;
    if (!pro || price === 0 || quantity === 0) {
      toast.error("please fill all input !");
    } else {
      setArr([
        ...Arr,
        {
          product: pro,
          price: price,
          quantity: quantity,
        },
      ]);
      toast.success("Adding to the list successfully...");
      setTotalAmount(totalAmount + parseInt(price));
      setTotalQty(totalQty + parseInt(quantity));
      setProduct("");
      setQuantity("");
      setPrice("");
    }
  };

  return (
    <div className="">
      <div className="purchaseProductScreen p-2 bg-warning">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Suppliers
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                as="select"
                size="sm"
                onChange={(e) => setSupplier(e.target.value)}
                custom
                defaultValue={supplier}
              >
                {suppliers &&
                  suppliers.map((supplier) => (
                    <option value={supplier._id}>{supplier.name}</option>
                  ))}
              </Form.Control>
            </Col>
            <Form.Label column sm={1}>
              Date
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                onChange={(e) => setCreateAt(e.target.value)}
                size="sm"
                type="date"
                placeholder="Date Create"
                value={createAt}
              />
            </Col>
            <Form.Label column sm={1}>
              Stock
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Stock"
                value={prod.countInStock}
                disabled
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Carrying
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="number"
                placeholder="Shipping Cost"
                value={shippingCost}
                onChange={(e) => {
                  setShippingCost(e.target.value);
                }}
              />
            </Col>
            <Form.Label column sm={1}>
              Recieve
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="date"
                placeholder="Recieve Date"
                value={recieveAt}
                onChange={(e) => setRecieveAt(e.target.value)}
              />
            </Col>
            <Form.Label column sm={1}>
              StockPrice
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                disabled
                size="sm"
                type="number"
                placeholder="Current Price"
                value={prod.price}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Product
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                onChange={handleProductChange}
                as="select"
                size="sm"
                custom
              >
                {products &&
                  products.map((product) => (
                    <option value={product._id}>{product.name}</option>
                  ))}
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
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
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
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={3}>
              <Button
                type="button"
                size="sm"
                variant="info"
                className="rounded"
                onClick={addPurchase}
              >
                Add to List
              </Button>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </Col>
          </Form.Group>
        </Form>
      </div>
      <div className="card mt-2 ">
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>NO #</th>
              <th>Product Name</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {Arr.map((arr) => (
              <tr>
                <td>{order++}</td>
                <td>{arr.product}</td>
                <td>{arr.quantity}</td>
                <td>{arr.price}</td>
                <td>
                  <i
                    className="fas fa-trash ml-2 text-danger"
                    onClick={() => {
                      setArr(Arr.filter((a) => a.product !== arr.product));
                      setTotalAmount(totalAmount - parseInt(arr.price));
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="save_stock m-1">
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Total Amount
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  disabled
                  size="sm"
                  type="number"
                  placeholder="Total Amount"
                  value={totalAmount}
                />
              </Col>
              <Form.Label column sm={2}>
                Total Qty
              </Form.Label>
              <Col sm={3}>
                <Form.Control
                  disabled
                  size="sm"
                  type="number"
                  placeholder="Total Amount"
                  value={totalQty}
                />
              </Col>

              <Col sm={2}>
                <Button
                  type="submit"
                  size="sm"
                  variant="primary"
                  className="rounded"
                  onClick={handleSubmit}
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

export default PurchaseProductScreen;
