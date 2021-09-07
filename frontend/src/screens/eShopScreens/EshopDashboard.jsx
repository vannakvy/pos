import React from "react";
import BoxDashboard from "../../components/eShopComponents/BoxDashboard";
import BarChart from "../../components/eShopComponents/BarChart";
import { Table } from "react-bootstrap";
import {eshopForDashboard} from '../../actions/eShopActions/dashbooardAction'
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/eShopComponents/Loader";

const EshopDashboard = () => {
const dispatch = useDispatch();
React.useEffect(
  ()=>{
    dispatch(eshopForDashboard())
  },[])
  const dashboardData = useSelector((state) => state.eshopDashboard);
  const { loading, error, totalData } = dashboardData;
  loading && <Loader/>
  return (
    <div className="eshopDashboard">
      <h3 className="ml-2"> DASHBOARD </h3>
      <div className="container-fluid">
        <div className="row p-1 justify-content-around">
          <BoxDashboard
            icon="fas fa-briefcase one"
            title="ការទិញ់ចូលសរុប"
            data={totalData?.total}
          />
          <BoxDashboard
            icon="fas fa-shopping-cart two"
            title="ការលក់ចេញ់សរុប"
            data={totalData?.totalSale}
          />
          <BoxDashboard
            icon="fas fa-chart-bar three"
            title="ចំណូល"
            data={totalData?.rev}
          />
          <BoxDashboard
            icon="fas fa-briefcase four"
            title="ស្ទុកសរុប"
            data={totalData?.stock}
          />
        </div>
        {/* Graph  */}
        <div  style={{height:50}}></div>
        <div className="row mt-4 ">
          <div className="col-md-12 col-lg-8 col-sm-12">
            <div className="row">
              <div className="col-md-6">  <BarChart data={totalData?.graph_purchase} title="ការចំណាយ" bgColor="#55acee" /></div>
              <div className="col-md-6"> <BarChart data={totalData?.graph_sale} title="ចំណូល" bgColor="#ff5e14" /></div>
            </div>
          
          </div>

          {/* Best selling products  */}
          <div className="col-md-12 col-lg-4 col-sm-12">
            <p className="h4 eshop-font"><i className="fas fa-briefcase pr-1"></i> ផលិតផលលក់ដាច់ជាងគេ</p>
            <Table striped bordered hover responsive className="table-sm mt-2">
              <thead>
                <tr className="bg-info text-light">
                  <th>លេខរៀង #</th>
                  <th>ឈ្មោះផលិតផល</th>
                  <th>សរុប</th>
                </tr>
              </thead>
              <tbody>
            {totalData?.popular?.map((item,index)=>
                              <tr key={item._id}>
                              <td>{index + 1}</td>
                              <td>{item._id}</td>
                              <td><strong className="text-info">{item.total}</strong></td>
                              
                            </tr>
              )}

              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EshopDashboard;
