import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  FormGroup,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/eShopComponents/Message";
import Loader from "../../components/eShopComponents/Loader";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../../actions/eShopActions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../../constants/eShopConstants/orderConstants";
import { addSale } from "../../actions/eShopActions/inventoryActions";

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const [image, setImage] = useState(
    "/uploads\\eShopUploads\\image-1618158938047.jpg"
  );

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { paymentMethod } = useSelector((state) => state.cart);

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/eshop/upload", formData, config);
      if (data) {
        let paymentResult = {
          id: "",
          status: "COMPLETED",
          update_time: new Date(),
          payer: {
            email_address: `${paymentMethod}@gmail.com`,
          },
          image: data,
        };
        dispatch(payOrder(orderId, paymentResult));
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/eshop/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || successDeliver || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, successDeliver, order, userInfo, history]);

  const successPaymentHandler = (paymentResult) => {
    // console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
    // dispatch(addSale(orderId));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h4 className="eshop_font">លេខការកម្មង់  {order._id}</h4>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4 className="eshop_font">អាសយដ្ធាន</h4>
              <p>
                <strong>ឈ្មោះ: </strong> {order.user.name}
              </p>
              <p>
                <strong>អុីម៉ែល​ : </strong>{" "}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>ទីលំនៅ :</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  មកដល់ថ្ងៃទី  {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h4 className="eshop_font">ចាយតារយះ</h4>
              <p>
                <strong>តាម : </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">ចាយថ្ងៃទី {order.paidAt}</Message>
              ) : (
                <Message variant="danger">មិនទាន់ចាយ</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h4 className="eshop_font">ផលិតផលបានកម្មង់</h4>

              {order?.orderItems.length === 0 ? (
                <Message>អត់ទាន់មាន</Message>
              ) : (
                <ListGroup variant="flush">
                  {order?.orderItems?.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/eshop/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.salePrice} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4 className="eshop_font">សង្ខែបការបញ្ចាទិញ់</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>ទំនិញ់</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>ការដឹកជញ្ជួន</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>ពន្ធ</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>សរុប</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              {!order.isPaid && (
                <>
                  {paymentMethod !== "PayPal" ? (
                    <>
                      <ListGroup.Item>
                        <Row>
                          <Col>
                            <h4>
                              សូមបញចូលវិកាយបតិបង់ប្រាក់របស់អ្នកដើម្បីបំពេញការបញ្ចាទិញ់
                            </h4>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>លេខគណនី {paymentMethod}</Col>
                          <Col>ANCET4059355</Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Form>
                          <Form.Group as={Row}>
                            <Form.Label md={3}>វិកាយបត្តិ​</Form.Label>
                            <Col md={9}>
                              <Form.File
                                id="custom-file"
                                size="sm"
                                label="ចុចទីនេះ"
                                custom
                                onChange={uploadFileHandler}
                              />
                            </Col>
                          </Form.Group>
                        </Form>
                      </ListGroup.Item>
                    </>
                  ) : (
                    <ListGroup.Item>
                      {loadingPay && <Loader />}
                      {!sdkReady ? (
                        <Loader />
                      ) : (
                        <PayPalButton
                          amount={order.totalPrice}
                          onSuccess={successPaymentHandler}
                        />
                      )}
                    </ListGroup.Item>
                  )}
                </>
              )}
              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <>
                    <ListGroup.Item>
                      <Col xs={6} md={4}>
                        <Image src={image} fluid rounded />
                      </Col>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        type="button"
                        className="btn btn-block"
                        onClick={deliverHandler}
                      >
                        បញ្ចាក់ថាបានមកដល់
                      </Button>
                    </ListGroup.Item>
                  </>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
