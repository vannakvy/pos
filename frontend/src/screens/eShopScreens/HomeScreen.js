import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Card } from 'react-bootstrap';
import Product from '../../components/eShopComponents/Product';
import Message from '../../components/eShopComponents/Message';
import Loader from '../../components/eShopComponents/Loader';
import Paginate from '../../components/eShopComponents/Paginate';
import ProductCarousel from '../../components/eShopComponents/ProductCarousel';
import Meta from '../../components/eShopComponents/Meta';
import { listProducts } from '../../actions/eShopActions/productActions';

const HomeScreen = ({ match }) => {
 const [keyword, setKeyword] = useState(match.params.keyword);

 const pageNumber = match.params.pageNumber || 1;
 const dispatch = useDispatch();
 const productList = useSelector((state) => state.productList);
 const { loading, error, products, page, pages } = productList;

 useEffect(() => {
  dispatch(listProducts(keyword, pageNumber));
 }, [dispatch, keyword, pageNumber]);

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

   <Card>
    <div className="row justify-content-between bg-warning">
     <div className="col-md-3">
      <h2>Products</h2>
     </div>
     <div className="col-md-3 align-self-center mt-2 mr-2">
      <div className="form-group">
       <input
        type="text"
        className="form-control"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search ..."
       />
      </div>
     </div>
    </div>
   </Card>
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
     <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
    </>
   )}
  </>
 );
};

export default HomeScreen;
