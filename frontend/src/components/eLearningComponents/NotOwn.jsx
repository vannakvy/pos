import React from 'react';

const NotOwn = () => {
 return (
  <div className="text-center">
   <h4 className="fw-bold mt-5 pt-5">អ្នកមិនទាន់អាចរៀនមុខវិទ្យានេះបានទេ</h4>
   <img style={{ width: 400 }} src="/img/learning-graphic.png" alt="" />
   <br />
   <button
    onClick={() => window.history.back()}
    className="btn btn-info shadow-sm"
   >
    <h5>ត្រលប់ក្រោយ</h5>
   </button>
  </div>
 );
};

export default NotOwn;
