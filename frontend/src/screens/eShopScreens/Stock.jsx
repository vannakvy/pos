import React, { useEffect } from "react";
import { Table, Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { listProducts } from "../../actions/eShopActions/productActions";
import Loader from "../../components/Loader";
import Pagination2 from "../../components/eShopComponents/Pagination2";

const Stock = ({ history, match }) => {
  const dispatch = useDispatch();
  const pageNumber = match.params.pageNumber || 1;

  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts("", pageNumber));
  }, [history, pageNumber, dispatch]);
  return (
    <div className="stock">
      <div className="stock  bg-warning p-3">
        <h3>Hello Stock</h3>
      </div>
      <div className="card">
        <Table striped bordered hover responsive className="table-sm mt-2">
          <thead>
            <tr>
              <th>NO #</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>IMAGE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Loader wh={50} hg={50} />
            ) : (
              <>
                {products &&
                  products.map((product) => (
                    <tr key={product._id}>
                      <td>{product._id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>Image</td>
                      <td>{product.description}</td>
                    </tr>
                  ))}
              </>
            )}
          </tbody>
        </Table>
        <Pagination2 pages={pages} page={page} isAdmin={true} />
      </div>
    </div>
  );
};

export default Stock;
