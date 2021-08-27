import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../components/eShopComponents/FormContainer'
import CheckoutSteps from '../../components/eShopComponents/CheckoutSteps'
import { saveShippingAddress } from '../../actions/eShopActions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/eshop/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <div className="card card-body">
      <h2 className="eshop_font">អាសយដ្ធានការដឹកជញ្ចួន</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>អាសយដ្ធាន</Form.Label>
          <Form.Control className="outlines"
            type='text'
            placeholder='បញ្ចូលអាសយដ្ធាន'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>ខេត្ត​ / ក្រុង</Form.Label>
          <Form.Control className="outlines"
            type='text'
            placeholder='បញ្ចូលខេត្ត / ក្រុង'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>លេខប្រៃសណី</Form.Label>
          <Form.Control className="outlines"
            type='text'
            placeholder='បញ្ចូលលេខប្រៃសណី'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>ប្រទេស</Form.Label>
          <Form.Control className="outlines"
            type='text'
            placeholder='បញ្ចូលប្រទេស'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          បន្ត
        </Button>
      </Form>
      </div>
    </FormContainer>
  )
}

export default ShippingScreen
