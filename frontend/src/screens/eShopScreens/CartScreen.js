import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../../components/eShopComponents/Message";
import {
  addToCart,
  removeFromCart,
} from "../../actions/eShopActions/cartActions";
import { FaCartPlus } from "react-icons/fa";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h3 className="eshop_font m-2"> <FaCartPlus color="blue" /><span className="p-2"></span>កន្ទ្រក</h3>
        {cartItems.length === 0 ? (
          <Message>
            កន្ទ្រកអ្នកទទេ <Link to="/eshop" className="btn btn-light">ចូលទៅទំព័រទំនិញ់</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/eshop/product/${item.product}`}>
                      {item.name}
                    </Link>
                  </Col>
                  <Col md={2}>${item.salePrice}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.endStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4} className="mt-2">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4 className="eshop_font">
                សរុប ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                
              </h4>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.salePrice, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                គិតលុយ
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
