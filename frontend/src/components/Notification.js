import React, { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { HiBell } from 'react-icons/hi';
import ConvertNum from './eLearningComponents/ConvertNum';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Duration from './Duration';
import ReactHtmlParser from 'html-react-parser';
import { deleteNotifyByUser, getNotifyByUser } from '../actions/notifyActions';

const DropdownExampleDropdown = () => {
 const history = useHistory();
 const dispatch = useDispatch();
 const [numNoti, setNumNoti] = useState(0);

 const { userInfo } = useSelector((state) => state.userLogin);
 const { notifies } = useSelector((state) => state.NotifyByUser);

 useEffect(async () => {
  if (userInfo) {
   dispatch(getNotifyByUser(userInfo._id));
  }
 }, [userInfo]);

 useEffect(() => {
  if (notifies) {
   setNumNoti(notifies.length);
  }
 }, [notifies]);

 return (
  <Dropdown
   onClick={() => setNumNoti(0)}
   icon={null}
   text={
    <>
     <HiBell
      className="rounded-circle"
      style={{ fontSize: 37, padding: 10, background: 'rgb(230,230,230)' }}
     />
     {numNoti > 0 && (
      <small
       className="bg-danger text-light text-center position-absolute rounded-circle"
       style={{ width: 19, left: 20, top: -2 }}
      >
       <ConvertNum num={numNoti} />
       {numNoti > 9 && <>&#8314;</>}
      </small>
     )}
    </>
   }
  >
   <Dropdown.Menu className="mt-3 bg-light" direction="left">
    <p className="px-3 pt-3 kh text-center">ព័ត៌មានផ្សេងៗ</p>
    <div
     style={{
      width: '320px',
      maxHeight: '500px',
      overflowY: 'auto',
     }}
    >
     {notifies &&
      notifies.map((n) => (
       <Dropdown.Item
        className="m-0 p-1 adminHover"
        key={n.id}
        text={
         <div className="d-flex flex-wrap">
          <div
           onClick={() => history.push(n.url)}
           className="ms-1 me-3 rounded-circle "
           style={{ width: '60px', overflow: 'hidden' }}
          >
           <img
            style={{ height: '60px', width: '60px', objectFit: 'cover' }}
            src={n.img}
           />
          </div>
          <div onClick={() => history.push(n.url)} style={{ width: 200 }}>
           <h5 className="m-0 p-0 ubuntu">{n.name.slice(0, 20)}...</h5>
           <p style={{ fontSize: 11 }} className="kh m-0 p-0">
            {ReactHtmlParser(n.descrip)}
           </p>
           <small style={{ color: 'blue' }}>
            <Duration itemDate={n.createdAt} />
           </small>
          </div>
          <div>
           <i
            onClick={() => dispatch(deleteNotifyByUser(n.id))}
            className="fas fa-trash text-dark p-2 rounded-circle mt-3"
            style={{ fontSize: 10, background: 'rgb(230,230,230)' }}
           ></i>
          </div>
         </div>
        }
       />
      ))}
    </div>

    {/* <Dropdown.Divider /> */}
    <Dropdown.Item
     text={
      <p className="kh text-center" style={{ color: 'blue' }}>
       បន្ថែមទៀត
      </p>
     }
    />
   </Dropdown.Menu>
  </Dropdown>
 );
};

export default DropdownExampleDropdown;
