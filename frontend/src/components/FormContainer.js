import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
 return (
  <div
   className="position-absolute w-100"
   style={{ top: 0, background: 'rgb(240,240,240)' }}
  >
   <Container>
    <Row
     className="justify-content-md-center"
     style={{ minHeight: '100vh', paddingTop: 120 }}
    >
     <Col sm={12} md={6} lg={4}>
      {children}
     </Col>
    </Row>
   </Container>
  </div>
 );
};

export default FormContainer;
