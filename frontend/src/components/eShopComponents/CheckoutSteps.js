import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>ចូលគណី</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>ចូលគណី</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>ការដឹកជញ្ជួន</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>ការដឹកជញ្ជួន</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>ការចាយ</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>ការចាយ</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>ការបញ្ចាទិញ់</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>ការបញ្ចាទិញ់</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
