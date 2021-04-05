<<<<<<< HEAD
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
=======
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Col, Row, Button, Table, Modal } from 'react-bootstrap';
import { listProducts } from '../../actions/eShopActions/productActions';
import { listSupplier } from '../../actions/eShopActions/supplierActions';
import ConvertNum from '../../components/eLearningComponents/ConvertNum';
import { listProductDetails } from '../../actions/eShopActions/productActions';
import { createPurchase } from '../../actions/eShopActions/purchaseActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination3 from '../../components/eShopComponents/Pagination3';
import Loader from '../../components/Loader';
import { useHistory } from 'react-router-dom';
// import { DateTime } from "luxon";
>>>>>>> 1e5c6f0e1b85e4dadba25882d161076e172d45d3

import { useHistory } from "react-router-dom";
import {
<<<<<<< HEAD
  listPurchases,
  deletePurchase,
  listPurchaseDetails,
} from "../../actions/eShopActions/purchaseActions";
import PurchaseTable from "../../components/eShopComponents/PurchaseTable";
import addPurchaseTable from "./addPurchaseTable";
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
  const [salePrice, setSalePrice] = useState(0);

  const [show, setShow] = useState(false);
  const [detailShow, setDetailShow] = useState(false);
  const [purchaseId, setPurchaseId] = useState("");
  const [update, setUpdate] = useState("");
  const [unit, setUnit] = useState("");
  const { products } = useSelector((state) => state.productList);
  const { suppliers } = useSelector((state) => state.supplierList);
  const { stock, setStock } = useState(0);
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
  console.log(prod);
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
  const purchaseDelete = useSelector((state) => state.purchaseDelete);
  const { success } = purchaseDelete;
  const purchaseDetail = useSelector((state) => state.purchaseDetail);
  const { purchase: pur, loading: loadingDetail } = purchaseDetail;

  const purchaseCreate = useSelector((state) => state.purchaseCreate);
  useEffect(() => {
    dispatch(listPurchases("", pageNumber));
  }, [history, pageNumber, dispatch, purchaseDelete, purchaseCreate]);
=======
 listPurchases,
 deletePurchase,
 listPurchaseDetails,
} from '../../actions/eShopActions/purchaseActions';

const PurchaseProductScreen = ({ match }) => {
 const dispatch = useDispatch();
 const history = useHistory();
 const pageNumber = match.params.pageNumber || 1;
 let orderItems = 1;

 const [supplier, setSupplier] = useState('choose Supplier');
 const [recieveAt, setRecieveAt] = useState(Date.now());
 const [createAt, setCreateAt] = useState(Date.now());
 const [shippingCost, setShippingCost] = useState('');
 const [product, setProduct] = useState('Choose a product');
 const [quantity, setQuantity] = useState(0);
 const [price, setPrice] = useState(0);
 const [Arr, setArr] = useState([]);
 const [totalAmount, setTotalAmount] = useState(0);
 const [totalQty, setTotalQty] = useState(0);

 const [show, setShow] = useState(false);
 const [detailShow, setDetailShow] = useState(false);
 const [purchaseId, setPurchaseId] = useState('');
 const [update, setUpdate] = useState('');

 //for making order number
 let order = 1;

 const { products } = useSelector((state) => state.productList);
 const { suppliers } = useSelector((state) => state.supplierList);
 const { product: prod } = useSelector((state) => state.productDetails);
 const { loading, error, purchases, page, pages } = useSelector(
  (state) => state.purchaseList
 );
 const purchaseDelete = useSelector((state) => state.purchaseDelete);
 const { success } = purchaseDelete;
 const purchaseDetail = useSelector((state) => state.purchaseDetail);
 const { purchase: pur, loading: loadingDetail } = purchaseDetail;

 const purchaseCreate = useSelector((state) => state.purchaseCreate);

 useEffect(() => {
  dispatch(listPurchases('', pageNumber));
 }, [history, pageNumber, dispatch, purchaseDelete, purchaseCreate]);
>>>>>>> 1e5c6f0e1b85e4dadba25882d161076e172d45d3

 useEffect(() => {
  dispatch(listSupplier());
  dispatch(listProducts());
 }, [Arr]);

<<<<<<< HEAD
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Arr.length === 0) {
      toast.error("There is no Items for purchasing!");
    } else {
      dispatch(createPurchase(Arr, purchaseAt));
      setArr([]);
    }
  };

  const handleProductChange = (product) => {
    //get all product detail for showing in the disable fild
    dispatch(listProductDetails(product.value));
    setProduct(product.value);
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
          unit: unit,
          product: product,
          price: price,
          supplier: supplier,
          shippingCost: shippingCost,
          salePrice: salePrice,
          quantity: quantity,
        },
      ]);
      toast.success("Adding to the list successfully...");
      // clear input after add to database
      setProduct("");
      setQuantity(0);
      setPrice(0);
      setSalePrice(0);
      setSupplier("");
      setShippingCost(0);
      setUnit("");
    }
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
              {/* <DatePicker
                className="p-1 rounded"
                selected={purchaseAt}
                onChange={(date) => setpurchaseAt(date)}
              /> */}
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
                value={
                  prod.priceSale ? prod.salePrice[prod.salePrice - 1].price : 0
                }
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
            <Form.Label column sm={1}>
              Sale Price
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                size="sm"
                type="number"
                placeholder="Sale Price"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
              />
            </Col>

            <Col sm={4}>
              <Button
                type="button"
                size="sm"
                variant="info"
                className="rounded"
                onClick={addPurchase}
              >
                Add to List
              </Button>
            </Col>
            {Arr.length > 0 ? (
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
            ) : null}
          </Form.Group>
        </Form>
      </div>
      {Arr.length < 1 ? null : <TableAddPurchase setArr={setArr} arr={Arr} />}

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
        <Modal show={detailShow} onHide={() => setDetailShow(false)}>
          <Modal.Header closeButton className="bg-warning">
            <Modal.Title>Attention !</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered hover responsive className="table-sm mt-2">
              <thead>
                <tr className="bg-info text-light">
                  <th>NO #</th>
                  <th>ITEMS</th>
                  <th>PRICE</th>
                  <th>SALE PRICE</th>
                  <th>QUANTITY</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                {loadingDetail ? (
                  <Loader wd={50} hg={50} />
                ) : (
                  <>
                    {pur &&
                      pur.puchaseItems.map((item) => (
                        <tr key={item._id}>
                          <td>{orderItems++}</td>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td>{item.salePrice ? item.salePrice : 0.0}</td>
                          <td>{item.qty}</td>
                          <td>{item.price * item.qty}</td>
                        </tr>
                      ))}
                  </>
                )}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="warning"
              size="sm"
              onClick={() => {
                setDetailShow(false);
              }}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
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
=======
 const handleSubmit = (e) => {
  e.preventDefault();
  if (Arr.length === 0) {
   toast.error('There is no Items for purchasing!');
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

   setCreateAt('');
   setShippingCost('');
   setRecieveAt('');
   setArr([]);
   setTotalAmount(0);
   setSupplier('');
   setTotalQty(0);
  }
 };

 const handleProductChange = (e) => {
  //get all product detail for showing in the disable fild
  dispatch(listProductDetails(e.target.value));
  setProduct(e.target.value);
 };
 const handleEdit = (p) => {
  // setCreateAt(p.createdAt);
  // setRecieveAt(p.purchaseAt);
  // setShippingCost(p.shippingCost)
  console.log(p);
  console.log(p.totalQty);
  setArr(p.puchaseItems);
  setCreateAt(p.createAt);
  setRecieveAt(p.recieveAt);
  console.log(p.recieveAt);
  // console.groupEnd(p.)
 };
 const addPurchase = () => {
  window.scrollTo(0, 0);
  let pro = prod.name;
  if (!pro || price === 0 || quantity === 0) {
   toast.error('please fill all input !');
  } else {
   setArr([
    ...Arr,
    {
     product: pro,
     price: price,
     quantity: quantity,
    },
   ]);
   toast.success('Adding to the list successfully...');
   setTotalAmount(parseInt(totalAmount) + parseInt(price) * parseInt(quantity));
   setTotalQty(parseInt(totalQty) + parseInt(quantity));
   setProduct('');
   setQuantity('');
   setPrice('');
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
        autoClose={2000}
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

   {/* Table for showing all of the purchases */}
   <div className="card mt-3">
    <Table striped bordered hover responsive className="table-sm mt-2">
     <thead>
      <tr>
       <th>NO #</th>
       <th>TOTAL ITEMS</th>
       <th>TOTAL QUANTITY</th>
       <th>TOTAL PRICE</th>

       <th>SUPPLIERS</th>
       <th>Purchase At</th>
       <th>RECIEVE DATE</th>
       <th>ACTIONS</th>
      </tr>
     </thead>
     <tbody>
      {loading ? (
       <Loader wd={50} hg={50} />
      ) : (
       <>
        {purchases &&
         purchases.map((purchase) => (
          <tr key={purchase._id}>
           <td>{order++}</td>
           <td>{purchase.puchaseItems.length}</td>
           <td>{purchase.totalQty}</td>
           <td>{purchase.totalAmount}</td>
           <td>{purchase.supplier.name}</td>
           <td>{purchase.createdAt}</td>
           <td>{purchase.purchaseAt}</td>
           <td>
            <i
             className="fas fa-edit ml-2 text-info"
             onClick={() => handleEdit(purchase)}
            ></i>
            <i
             className="fas fa-trash ml-2 text-danger"
             onClick={() => {
              setPurchaseId(purchase._id);
              setShow(true);
             }}
            ></i>
            <i
             class="fas fa-angle-double-right text-info ml-2"
             onClick={() => {
              setDetailShow(true);
              dispatch(listPurchaseDetails(purchase._id));
             }}
            ></i>
           </td>
          </tr>
         ))}
       </>
      )}
     </tbody>
    </Table>
    <Pagination3 pages={pages} page={page} isAdmin={true} />
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
        setPurchaseId('');
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

    {/* Modal for showing detail */}
    <Modal show={detailShow} onHide={() => setDetailShow(false)}>
     <Modal.Header closeButton className="bg-warning">
      <Modal.Title>Attention !</Modal.Title>
     </Modal.Header>
     <Modal.Body>
      <Table striped bordered hover responsive className="table-sm mt-2">
       <thead>
        <tr>
         <th>NO #</th>
         <th>ITEMS</th>
         <th>PRICE</th>
         <th>QUANTITY</th>
         <th>Amount</th>
        </tr>
       </thead>
       <tbody>
        {loadingDetail ? (
         <Loader wd={50} hg={50} />
        ) : (
         <>
          {pur &&
           pur.puchaseItems.map((item) => (
            <tr key={item._id}>
             <td>{orderItems++}</td>
             <td>{item.name}</td>
             <td>{item.price}</td>
             <td>{item.qty}</td>
             <td>{item.price * item.qty}</td>
            </tr>
           ))}
         </>
        )}
       </tbody>
      </Table>
     </Modal.Body>
     <Modal.Footer>
      <Button
       variant="warning"
       size="sm"
       onClick={() => {
        setDetailShow(false);
       }}
      >
       Cancel
      </Button>
     </Modal.Footer>
    </Modal>
   </div>
  </div>
 );
>>>>>>> 1e5c6f0e1b85e4dadba25882d161076e172d45d3
};

export default PurchaseProductScreen;
