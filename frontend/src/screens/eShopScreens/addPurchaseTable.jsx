import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
const addPurchaseTable = ({ arr, setArr }) => {
  let order = 1;
  return (
    <div className="card mt-2 ">
      <h1>Hello checking </h1>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>NO #</th>
            <th>PRODUCT NAME</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>SALE PRICE</th>
            <th>SUPPLIER</th>
            <th>SHIPPING COST</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ar) => (
            <tr>
              <td>{order++}</td>
              <td>{ar.product}</td>
              <td>{ar.quantity}</td>
              <td>{ar.price}</td>
              <td>{ar.salePrice}</td>
              <td>{ar.supplier}</td>
              <td>{ar.shippingCost}</td>
              <td>
                <i
                  className="fas fa-trash ml-2 text-danger"
                  onClick={() => {
                    setArr(ar.filter((a) => a.product !== ar.product));
                  }}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default addPurchaseTable;
