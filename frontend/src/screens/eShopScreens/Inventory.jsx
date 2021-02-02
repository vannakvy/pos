import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/eShopComponents/Message";
import Loader from "../../components/eShopComponents/Loader";
import { listUsers, deleteUser } from "../../actions/eShopActions/userActions";

const Inventory = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  return (
    <div className="card bg-warning p-2">
      <h1 className="p-2">INVENTORY</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="card">
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>PRODUCT ID</th>
                <th>ITEMS</th>
                <th>TOTAL SALES</th>
                <th>TOTAL PUCHASED</th>
                <th>AVAILABLE STOCK</th>
                <th>INCOME </th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Inventory;
