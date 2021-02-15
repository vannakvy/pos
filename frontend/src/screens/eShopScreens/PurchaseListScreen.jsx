import React, { useEffect } from "react";
import { Table, Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../../components/Loader";
import Pagination3 from "../../components/eShopComponents/Pagination2";
import { listPurchases } from "../../actions/eShopActions/purchaseActions";

const PurchaseListScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const pageNumber = match.params.pageNumber || 1;
  let order = 1;

  const { loading, error, purchases, page, pages } = useSelector(
    (state) => state.purchaseList
  );

  useEffect(() => {
    dispatch(listPurchases("", pageNumber));
  }, [history, pageNumber, dispatch]);
  return (
    <div className="stock">
      <div className="card">
        <Table striped bordered hover responsive className="table-sm mt-2">
          <thead>
            <tr>
              <th>NO #</th>
              <th>PURCHASE ID</th>
              <th>TOTAL ITEMS</th>
              <th>TOTAL PROICE</th>
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
                      <td>{purchase._id}</td>

                      <td>{purchase.totalQty}</td>
                      <td>{purchase.totalAmount}</td>
                      <td>{purchase.supplier}</td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </Table>
        <Pagination3 pages={pages} page={page} isAdmin={true} />
      </div>
    </div>
  );
};

export default PurchaseListScreen;
