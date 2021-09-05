import React, { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { HiBell } from 'react-icons/hi';
import ConvertNum from './eLearningComponents/ConvertNum';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Duration from './Duration';
import ReactHtmlParser from 'html-react-parser';
import {
 deleteNotifyByUser,
 getNotifyByUser,
 watchNoti,
} from '../actions/notifyActions';
import { GoPrimitiveDot } from 'react-icons/go';

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
   const no = notifies.filter((n) => {
    return n.noWatch === true;
   });
   setNumNoti(no.length);
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
   <Dropdown.Menu className="mt-3" direction="left">
    <p
     style={{ background: 'rgb(240,240,240)' }}
     className="p-3 kh text-center rounded-top bg-info"
    >
     ព័ត៌មានផ្សេងៗ
    </p>
    <div
     style={{
      width: '350px',
      maxHeight: '500px',
      overflowY: 'auto',
      marginTop: '-14px',
     }}
    >
     {notifies && notifies.length === 0 && (
      <div className="py-4 text-center">មិនមានព័ត៌មាន</div>
     )}
     {notifies &&
      notifies.map((n) => (
       <Dropdown.Item
        className="m-0 p-1 navHover"
        style={{ background: n.noWatch ? '#fff' : 'rgb(240,240,240)' }}
        key={n.id}
        onClick={() => dispatch(watchNoti(n.id))}
        text={
         <div className="d-flex flex-wrap">
          <div
           onClick={() => history.push(n.url)}
           className="ms-1 me-3 rounded"
           style={{ width: '80px', overflow: 'hidden' }}
          >
           <img
            style={{ height: '60px', width: '80px', objectFit: 'cover' }}
            src={n.img}
           />
          </div>
          <div onClick={() => history.push(n.url)} style={{ width: 200 }}>
           <h5 className="m-0 p-0 kh">{n.name.slice(0, 20)}...</h5>
           <p style={{ fontSize: 11 }} className="kh m-0 p-0">
            {ReactHtmlParser(n.descrip)}
           </p>
           <small style={{ color: n.noWatch ? 'blue' : 'gray' }}>
            <Duration itemDate={n.createdAt} />
           </small>
          </div>
          <div className="text-end" style={{ width: 45 }}>
           {n.noWatch && <GoPrimitiveDot className="text-info fs-4" />}
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
     className="rounded-bottom"
     style={{ background: 'rgb(240,240,240)' }}
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
