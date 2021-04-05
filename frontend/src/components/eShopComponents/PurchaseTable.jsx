import React from "react";
import Loader from "../eShopComponents/Loader";
import { Table } from "react-bootstrap";
import { useDispatch, useEffect } from "react-redux";
const PurchaseTable = ({
  loading,
  purchases,
  listPurchaseDetails,
  setShow,
  setDetailShow,
  setPurchaseId,
}) => {
  let order = 1;
  const dispatch = useDispatch();
  return (
    <Table striped bordered hover responsive className="table-sm mt-2">
      <thead>
        <tr className="bg-info text-light">
          <th>NO #</th>
          <th>Date</th>
          <th>TOTAL ITEMS</th>
          <th>TOTAL QUANTITY</th>
          <th>TOTAL PRICE</th>
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
                  <td>{purchase.purchaseAt}</td>
                  <td>{purchase.purchaseItems.length}</td>
                  <td>{purchase.totalQty}</td>
                  <td>{purchase.totalAmount}</td>
                  <td>
                    <i
                      className="fas fa-edit ml-2 text-info"
                      // onClick={() => handleEdit(purchase)}
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
  );
};

export default PurchaseTable;
