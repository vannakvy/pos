import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Col, Row, Button, Table, Modal } from "react-bootstrap";
import { listProducts } from "../../actions/eShopActions/productActions";
import { listSupplier } from "../../actions/eShopActions/supplierActions";
import Loader from "../../components/eShopComponents/Loader";
import { listProductDetails } from "../../actions/eShopActions/productActions";
import { createPurchase } from "../../actions/eShopActions/purchaseActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination3 from "../../components/eShopComponents/Pagination3";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useHistory } from "react-router-dom";
import {
  listPurchases,
  deletePurchase,
  listPurchaseDetails,
} from "../../actions/eShopActions/purchaseActions";
import PurchaseTable from "../../components/eShopComponents/PurchaseTable";
import TableAddPurchase from "../../components/eShopComponents/TableAddPurchase";

const unitOptions = [
  { value: "can", label: "can" },
  { value: "cotton", label: "cotton" },
  { value: "letter", label: "letter" },
];

const PurchaseProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const pageNumber = match.params.pageNumber || 1;
  let orderItems = 1;
  let order = 1;

  const [supplier, setSupplier] = useState({});
  const [purchaseAt, setpurchaseAt] = useState(new Date());
  const [shippingCost, setShippingCost] = useState("");
  const [product, setProduct] = useState("Choose a product");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [Arr, setArr] = useState([]);

  const [show, setShow] = useState(false);
  const [detailShow, setDetailShow] = useState(false);
  const [purchaseId, setPurchaseId] = useState("");
  const [update, setUpdate] = useState("");
  const [unit, setUnit] = useState("");
  const { products } = useSelector((state) => state.productList);
  const { suppliers } = useSelector((state) => state.supplierList);

  let supplierOptions = [];
  if (suppliers) {
    for (let i = 0; i < suppliers.length; i++) {
      supplierOptions.push({
        value: suppliers[i]._id,
        label: suppliers[i].name,
      });
    }
  }

  // const supplierOptions = suppliers.map(sup=>{value:sup.name,lebel:sup.name})

  const { product: prod } = useSelector((state) => state.productDetails);
  let productOptions = [];
  if (products) {
    for (let i = 0; i < products.length; i++) {
      productOptions.push({
        value: products[i]._id,
        label: products[i].name,
      });
    }
  }
  const { loading, error, purchases, page, pages } = useSelector(
    (state) => state.purchaseList
  );
  console.log(purchases);
  const purchaseDelete = useSelector((state) => state.purchaseDelete);
  // const purchaseLists = useSelector((state) => state.purchaseList);
  // console.log(purchaseLists);

  useEffect(() => {
    dispatch(listSupplier());
    dispatch(listProducts());
  }, []);

  const purchaseCreate = useSelector((state) => state.purchaseCreate);
  useEffect(() => {
    dispatch(listPurchases("", pageNumber));
  }, [history, pageNumber, dispatch, purchaseDelete, purchaseCreate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newPrice =
      parseFloat(shippingCost) / parseInt(quantity) + parseFloat(price);
    dispatch(
      createPurchase(
        unit,
        product,
        newPrice,
        supplier,
        shippingCost,
        purchaseAt,
        quantity
      )
    );
  };

  const handleProductChange = (product) => {
    //get all product detail for showing in the disable fild
    dispatch(listProductDetails(product.value));
    setProduct(product.value);
  };

  return (
    <div className="">
      <div className="purchaseProductScreen p-2 bg-warning">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={1}>
              Date
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="date"
                value={purchaseAt}
                placeholder="Date"
                onChange={(e) => setpurchaseAt(e.target.value)}
              />
            </Col>
            <Form.Label column sm={1}>
              Product
            </Form.Label>
            <Col sm={3}>
              <Select
                options={productOptions}
                onChange={handleProductChange}
                defaultValue={""}
                value={product.value}
                placeholder="Product"
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
                value={prod.countInStock ? prod.countInStock.balanceQty : 0}
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
              Suppliers
            </Form.Label>
            <Col sm={3}>
              <Select
                options={supplierOptions}
                onChange={(supplier) => setSupplier(supplier.value)}
                defaultValue={supplierOptions[2]}
                value={supplier.value}
                placeholder="Supplier"
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
                value={prod.price ? prod.price[prod.price - 1].price : 0}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
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
            <Form.Label column sm={1}>
              Unit
            </Form.Label>
            <Col sm={3}>
              <Select
                value={unit.value}
                onChange={(unit) => setUnit(unit.value)}
                options={unitOptions}
                defaultValue={unitOptions[2]}
                placeholder="Unit"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={4}></Col>
            <Col sm={4}>
              <Button
                type="submit"
                size="sm"
                variant="info"
                className="rounded"
              >
                Save to Stock
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
      {/* {Arr.length < 1 ? null : <TableAddPurchase setArr={setArr} arr={Arr} />} */}

      {/* Table for showing all of the purchases */}
      <div className="card mt-3">
        <PurchaseTable
          loading={loading}
          purchases={purchases}
          listPurchaseDetails={listPurchaseDetails}
          setShow={setShow}
          setDetailShow={setDetailShow}
          setPurchaseId={setPurchaseId}
        />

        <Pagination3 pages={pages} page={page} isAdmin={true} />
        {/* this modal is to ask to confirm to delete the purchase */}
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton className="bg-warning">
            <Modal.Title>Attention !</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-warning">
            Are You Sure you want to delete the purchase?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="warning"
              size="sm"
              onClick={() => {
                setShow(false);
                setPurchaseId("");
              }}
            >
              No
            </Button>
            <Button
              variant="info"
              size="sm"
              onClick={() => {
                setShow(false);
                dispatch(deletePurchase(purchaseId));
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal for showing  purchase detail */}

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default PurchaseProductScreen;
