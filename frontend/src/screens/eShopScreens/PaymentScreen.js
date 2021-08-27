import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../../components/eShopComponents/FormContainer";
import CheckoutSteps from "../../components/eShopComponents/CheckoutSteps";
import { savePaymentMethod } from "../../actions/eShopActions/cartActions";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/eshop/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/eshop/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <div className="card card-body">
      <h3 className="eshop_font">ជ្រើសរើសវិធីក្នុងការចាយ</h3>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">ជ្រើសរើស</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              name="formHorizontalRadios"
              id="formHorizontalRadios0"
              value="PayPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            <Form.Check
              type="radio"
              label="Wing (វិង់)"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value="Wing"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="ABA Account (គណនី​ អេបីអេ)"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              value="ABA"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="ACLEDA Account​(គណនី អេសុីលីដា)"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
              value="ACLEDA"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          បន្ត
        </Button>
      </Form>
      </div>
    </FormContainer>
  );
};

export default PaymentScreen;
