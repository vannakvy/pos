import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form, Card } from "react-bootstrap";
import Product from "../../components/eShopComponents/Product";
import Message from "../../components/eShopComponents/Message";
import Loader from "../../components/eShopComponents/Loader";
import Paginate from "../../components/eShopComponents/Paginate";
import ProductCarousel from "../../components/eShopComponents/ProductCarousel";
import Meta from "../../components/eShopComponents/Meta";
import { listProducts } from "../../actions/eShopActions/productActions";

const HomeScreen = ({ match }) => {
  const [keyword, setKeyword] = useState(match.params.keyword);

  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(listProducts(keyword, pageNumber));
  }, [keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/eshop" className="btn btn-light">
          Go Back
        </Link>
      )}

    
        <div
          class="form-group card card-body mt-2 ml-2"
          style={{ maxWidth: "400px" }}
        >
          <label for="exampleInputEmail1">ស្វែងរកផលិតផល</label>
          <input
            type="text"
            class="form-control outlines"
            onChange={(e)=>setKeyword(e.target.value)}
         
            placeholder="ឈ្មោះផលិតផល"
          />
        </div>
    

      {loading ? (
        <Loader w={50} h={50} />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
