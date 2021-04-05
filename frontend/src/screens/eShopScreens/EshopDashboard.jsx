import React from "react";
import BoxDashboard from "../../components/eShopComponents/BoxDashboard";
import BarChart from "../../components/eShopComponents/BarChart";
import { Table } from "react-bootstrap";
const EshopDashboard = () => {
  return (
    <div className="eshopDashboard">
      <div className="container">
        <div className="row p-2 justify-content-around">
          <BoxDashboard
            icon="fas fa-briefcase one"
            title="PURHCASE"
            data="4000"
          />
          <BoxDashboard
            icon="fas fa-shopping-cart two"
            title="SALE"
            data="4000"
          />
          <BoxDashboard
            icon="fas fa-chart-bar three"
            title="PROFIT"
            data="4000"
          />
          <BoxDashboard
            icon="fas fa-briefcase four"
            title="STOCK"
            data="4000"
          />
        </div>
        {/* Graph  */}
        <div className="row mt-4">
          <div className="col-md-12 col-lg-7 col-sm-12">
            <BarChart />
          </div>

          {/* Best selling products  */}
          <div className="col-md-12 col-lg-5 col-sm-12">
            <h5 className="text-center text-success">Best Selling Product</h5>
            <Table striped bordered hover responsive className="table-sm mt-2">
              <thead>
                <tr className="bg-info text-light">
                  <th>NO #</th>
                  <th>ITEM NAME</th>
                  <th>QUANTITY</th>
                  <th>AMOUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Arduino Uno</td>
                  <td>20</td>
                  <td>50 $</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EshopDashboard;
