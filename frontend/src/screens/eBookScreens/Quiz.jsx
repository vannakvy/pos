import React from "react";
import "./Quiz.css";
export const Quiz = () => {
  return (
    <div class="container-fluid mt-2" style={{ height: "80vh" }}>
      <div class="row">

        
       
        <div class="col-md-4 mb-1">
          <div class="card p-3">
            <div class="d-flex flex-row mb-3">
              <img src="https://i.imgur.com/IpKQiNu.png" width="70" />
              <div class="d-flex flex-column ml-2">
                <span>Course Name</span>
                <span class="text-black-50">ថ្ងៃទីបានធ្វើ : 10/2/2021</span>
                <span class="ratings">រយះពេល : 1 hour</span>
              </div>
            </div>
            <h6>
              Capture and sync subscribers from your 
              with ease.(description)
            </h6>
            <div class="d-flex justify-content-between install mt-3">
            <h5>
                  ពិន្ទុ <span className="text-success"> : 120/200</span>
                </h5>{" "}
              <span class="text-primary btn btn-info rounded">
                  ចាប់ផ្ដើម&nbsp;<i class="fa fa-angle-right"></i>
                </span>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-1">
          <div class="card p-3 mb-1">
            <div class="d-flex flex-row mb-3">
              <img src="https://i.imgur.com/42SqVZd.png" width="70" />
              <div class="d-flex flex-column ml-2">
                <span>Dropbox</span>
                <span class="text-black-50">File Management</span>
                <span class="ratings">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </span>
              </div>
            </div>
            <h6>
              Use dropbox to sync your photos to our platform and share it with
              others.
            </h6>
            <div class="d-flex justify-content-between install mt-3">
              <span>Installed 1234 times</span>
              <span class="text-primary btn btn-info">
                Start Quiz&nbsp;<i class="fa fa-angle-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
