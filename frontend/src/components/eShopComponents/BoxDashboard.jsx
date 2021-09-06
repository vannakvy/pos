import React from "react";
import "./BoxDashboard.css";

const BoxDashboard = ({ icon, title, data }) => {
  return (
    <div className="col-md-6 col-xs-12 col-lg-3 boxDashboard">
      <div className="card card-body rounded">
        <div className="row align-items-center">
          <div className="col-5">
            <i className={`icon-dashboard ${icon}`}></i>
          </div>
          <div className="col-7">
            <p className="text-info eshop-font" style={{fontSize:18}}>{title}</p>
            <h3 className=" text-success">{data} $</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxDashboard;
