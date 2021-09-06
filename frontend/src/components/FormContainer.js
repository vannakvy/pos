import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => {
 return (
  <div className="w-100" style={{ top: 0, background: 'rgb(230,230,230)' }}>
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
