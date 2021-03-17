import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Table,
  Button,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ScatterChart from "../../components/eShopComponents/ScatterChart";
import PieChart from "../../components/eShopComponents/ScatterChart";
import LineChart from "./LineChart";
import BarChart from "../../components/eShopComponents/BarChart";
const StockDetail = () => {
  const [date, setDate] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  return (
    <Container className="mt-1">
      <Row className="p-2">
        <Col>
          <h5 className="font-weight-bold text-info">Search By Date</h5>
        </Col>
        <Col>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
        </Col>
        <Col>
          <h5 className="font-weight-bold text-info">Search By Month</h5>
        </Col>
        <Col>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
          />
        </Col>
        <Col xs={2}>
          <button className="sm-btn btn-info rounded">All</button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="p-1">
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Product Name</Col>
                  <Col className="font-weight-bold">Arduino Uno</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>ToTal Sale</Col>
                  <Col className="font-weight-bold">100 $</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total Purchases</Col>
                  <Col className="font-weight-bold">3000 $</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Profit</Col>
                  <Col className="font-weight-bold">3000 $</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Current Sale Price</Col>
                  <Col className="font-weight-bold">3000 $</Col>
                </Row>
              </ListGroup.Item>

              <h5 className="text-center mt-1 text-info">Stock Balance</h5>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col className="font-weight-bold">3000 $</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Qunatity</Col>
                  <Col className="font-weight-bold">3000 $</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Amount</Col>
                  <Col className="font-weight-bold">3000 $</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col xs={7}>
          <Card>
            <LineChart />
          </Card>
        </Col>
      </Row>
      {/* Purchase Table  */}
      <Row className="mt-2">
        <Col>
          <Card>
            <h4 className="text-center">Purchases</h4>

            <Table striped bordered hover responsive className="table-sm mt-2">
              <thead>
                <tr className="bg-success text-light">
                  <th>NO#</th>
                  <th>DATE</th>
                  <th>SUPPLIER</th>
                  <th>QTY</th>
                  <th>PURCHASE</th>
                  <th>SALE</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
      {/* Sale Table  */}
      <br />
      <Row>
        <Col>
          <Card>
            <h4 className="text-center">SALE</h4>
            <Table striped bordered hover responsive className="table-sm mt-2">
              <thead>
                <tr className="bg-warning text-light">
                  <th>NO #</th>
                  <th>DATE</th>
                  <th>CUSTOMER</th>
                  <th>QTY</th>
                  <th>PRICE</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col xs={3}>
          <Card>
            <h4 className="text-center">SALE PRICE LOG</h4>
            <Table striped bordered hover responsive className="table-sm mt-2">
              <thead>
                <tr className="bg-info text-light">
                  <th>NO #</th>
                  <th>DATE</th>
                  <th>SALE PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OK</td>
                  <td>OK</td>
                  <td>OK</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StockDetail;
