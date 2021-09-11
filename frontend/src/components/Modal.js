import React from 'react';

const ModalSize = ({
 size = '',
 text = 'ប្រធានបទ',
 btn = 'success',
 funs,
 id = '5d2332',
}) => {
 return (
  <div>
   {/* <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target={`#id${id}`}
   >
    Launch static backdrop modal
   </button> */}

   <div
    className="modal fade"
    style={{ paddingTop: '150px' }}
    id={'id' + id}
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabIndex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
   >
    <div className={`modal-dialog ${size && 'modal-' + size}`}>
     <div className="modal-content" style={{ background: 'rgb(225,225,225)' }}>
      <div className="modal-body text-center">
       <h5 className="text-info">{text}</h5>
      </div>
      <div className="modal-footer p-1">
       <div className="w-100 text-center">
        <button
         onClick={funs}
         type="button"
         data-bs-dismiss="modal"
         className={`btn btn-${btn} mx-1 rounded shadow-sm`}
        >
         យល់ព្រម
        </button>
        <button
         type="button"
         className="btn btn-secondary mx-1 rounded shadow-sm"
         data-bs-dismiss="modal"
        >
         បោះបង់
        </button>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ModalSize;
