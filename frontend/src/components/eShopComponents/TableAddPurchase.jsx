import React from "react";
import { Table } from "react-bootstrap";

const TableAddPurchase = ({ arr, setArr }) => {
  let order = 1;
  return (
    <div>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr className="bg-info text-light">
            <th>NO #</th>
            <th>DATE</th>
            <th>PRODUCT NAME</th>
            <th>QUANTITY</th>
            <th>UNIT</th>
            <th>PRICE</th>

            <th>SUPPLIER</th>
            <th>SHIPPING COST</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((ar) => (
            <tr>
              <td>{order++}</td>
              <td>{ar.purchaseAt}</td>
              <td>{ar.product}</td>
              <td>{ar.quantity}</td>
              <td>{ar.unit}</td>
              <td>{ar.price}</td>
              <td>{ar.supplier}</td>
              <td>{ar.shippingCost}</td>
              <td>
                <i
                  className="fas fa-trash ml-2 text-danger"
                  onClick={() => {
                    setArr(arr.filter((a) => a.product !== ar.product));
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

export default TableAddPurchase;
