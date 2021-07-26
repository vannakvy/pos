import React, { useEffect, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { HiBell } from 'react-icons/hi';
import ConvertNum from './eLearningComponents/ConvertNum';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const DropdownExampleDropdown = () => {
 const history = useHistory();
 const [noti, setNoti] = useState([]);

 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;

 useEffect(async () => {
  if (userInfo) {
   const config = {
    headers: {
     Authorization: `Bearer ${userInfo.token}`,
    },
   };

   const { data } = await axios.get(`/api/notify`, config);
   if (data) {
    setNoti(data);
   }
  }
 }, [userInfo]);

 return (
  <Dropdown
   icon={null}
   text={
    <>
     <HiBell
      className="rounded-circle"
      style={{ fontSize: 37, padding: 10, background: 'rgb(230,230,230)' }}
     />
     <small
      className="bg-danger text-light text-center position-absolute rounded-circle"
      style={{ width: 19, left: 20, top: -2 }}
     >
      <ConvertNum num={noti && noti.length} />
      {noti.length > 9 && <>&#8314;</>}
     </small>
    </>
   }
  >
   <Dropdown.Menu
    className="mt-3 bg-light"
    direction="left"
    style={{
     width: '300px',
     maxHeight: '500px',
     overflowY: 'auto',
    }}
   >
    <p className="px-3 pt-3 kh text-center">ព័ត៌មានផ្សេងៗ</p>
    {noti &&
     noti.map((n) => (
      <Dropdown.Item
       onClick={() => history.push(n.url)}
       className="m-0 p-0"
       key={n._id}
       text={
        <div className="d-flex">
         <div className="me-3" style={{ width: '45px', overflow: 'hidden' }}>
          <img className="w-100" src={n.img} />
         </div>
         <div>
          <h5 className="kh m-0 p-0">{n.name.slice(0, 20)}...</h5>
          <p className="kh m-0 p-0">{n.descrip}</p>
          <small>{n.createdAt}</small>
         </div>
        </div>
       }
      />
     ))}

    <Dropdown.Divider />
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
