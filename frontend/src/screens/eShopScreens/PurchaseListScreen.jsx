import React, { useEffect, useState } from "react";
import { Table, Button, Row, Col, Card, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader";
import Pagination3 from "../../components/eShopComponents/Pagination3";
import {
  listPurchases,
  deletePurchase,
  listPurchaseDetails,
} from "../../actions/eShopActions/purchaseActions";

const PurchaseListScreen = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const pageNumber = match.params.pageNumber || 1;
  let order = 1;
  let orderItems = 1;

  const [show, setShow] = useState(false);
  const [detailShow, setDetailShow] = useState(false);
  const [purchaseId, setPurchaseId] = useState("");
  const [update, setUpdate] = useState("");

  const { loading, error, purchases, page, pages } = useSelector(
    (state) => state.purchaseList
  );
  const purchaseDelete = useSelector((state) => state.purchaseDelete);
  const { success } = purchaseDelete;
  const purchaseDetail = useSelector((state) => state.purchaseDetail);
  const { purchase: pur } = purchaseDetail;

  // const { purchaseItems } = purchase;
  useEffect(() => {
    dispatch(listPurchases("", pageNumber));
  }, [history, pageNumber, dispatch, purchaseDelete, purchaseDetail]);

  return (
    <div className="stock">
      <div className="card">
        <Table striped bordered hover responsive className="table-sm mt-2">
          <thead>
            <tr>
              <th>NO #</th>
              <th>PURCHASE ID</th>
              <th>TOTAL ITEMS</th>
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
                  purchases?.map((purchase) => (
                    <tr key={purchase._id}>
                      <td>{order++}</td>
                      <td>{purchase._id}</td>
                      <td>{purchase.puchaseItems.length}</td>
                      <td>{purchase.totalQty}</td>
                      <td>{purchase.totalAmount}</td>
                      {/* <td>{purchase?.supplier?.name}</td> */}
                      <td>{purchase.createdAt}</td>
                      <td>{purchase.purchaseAt}</td>
                      <td>
                        <i className="fas fa-edit ml-2 text-info"></i>
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
      </div>
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
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loader wd={50} hg={50} />
              ) : (
                <>
                  {/* {pur &&
                    pur.map((a) => (
                      <tr></tr>
                      // <tr key={item._id}>
                      //   <td>{orderItems++}</td>
                      //   <td>{item.product}</td>
                      //   <td>{item.price}</td>
                      //   <td>{item.qty}</td>
                      //   <td>
                      //     <i className="fas fa-edit ml-2 text-info"></i>
                      //   </td>
                      // </tr>
                    ))} */}
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
            No
          </Button>
          <Button
            variant="info"
            size="sm"
            onClick={() => {
              setDetailShow(false);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* For showing the alert box in the right conner */}
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
    </div>
  );
};

export default PurchaseListScreen;
