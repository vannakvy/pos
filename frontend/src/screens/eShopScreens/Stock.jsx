import React, { useEffect } from "react";
import { Table, Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { listProducts } from "../../actions/eShopActions/productActions";
import Loader from "../../components/Loader";
import Pagination2 from "../../components/eShopComponents/Pagination2";
import { Link } from "react-router-dom";

const Stock = ({ history, match }) => {
  const dispatch = useDispatch();
  const pageNumber = match.params.pageNumber || 1;

  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );
  let order = 1;
  useEffect(() => {
    dispatch(listProducts("", pageNumber));
  }, [history, pageNumber, dispatch]);
  return (
    <div className="stock">
      <div className="card">
        <Table striped bordered hover responsive className="table-sm mt-2">
          <thead>
            <tr>
              <th>NO #</th>
              <th>ITEM NAME</th>
              <th>SALE</th>
              <th>PURCHASE</th>

              <th>QUANTITY</th>
              <th>PRICE</th>
              <th>AMOUNT</th>
              <th>DETAIL</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Loader wd={50} hg={50} />
            ) : (
              <>
                {products &&
                  products.map((product) => (
                    <tr key={product._id}>
                      <td>{order++}</td>
                      <td>{product.name}</td>
                      {/* <td>{product.price}</td> */}
                      <td>0.0 $</td>
                      <td>0.0 $</td>
                      <td>0.0 $</td>
                      <td>0.0 $</td>
                      <td>{product.countInStock}</td>
                      <td className="fas fa-edit text-info">
                        <Link to="/adminEshop/stockDetail/123">Home</Link>
                      </td>
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
