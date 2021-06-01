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
          <th>DATE</th>
          <th>PRODUCT</th>
          <th>QTY</th>
          <th>PRICE</th>
          <th>UNIT</th>
          <th>SHIPPING</th>
          <th>SUPPLIER</th>
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
                  <td>{purchase.createdAt}</td>
                  <td>{purchase.product.name}</td>
                  <td>{purchase.qty}</td>
                  <td>{purchase.price}</td>
                  <td>{purchase.unit}</td>
                  <td>{purchase.shippingCost}</td>
                  <td>{purchase.supplier.name}</td>
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
                      className="fas fa-angle-double-right text-info ml-2"
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
