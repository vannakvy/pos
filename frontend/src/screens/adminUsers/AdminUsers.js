import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import { getUserList, SearchUser } from '../../actions/userActions/userActions';
import App from '../../components/eLearningComponents/ChartStudent';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { USER_LIST_RESET } from '../../constants/userConstants';
import { BsSearch } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import ConvertNum from '../../components/eLearningComponents/ConvertNum';
import profile from '../../img/profile.png';

const AdminUsers = () => {
 let i = 1;
 const [keyword, setKeyword] = useState('');

 const dispatch = useDispatch();
 const history = useHistory();

 const userList = useSelector((state) => state.userList);
 const { loading: loadingUserList, error: errorUserList, users } = userList;

 useEffect(() => {
  window.scroll(0, 0);
  dispatch({ type: USER_LIST_RESET });
  dispatch(getUserList());
 }, [dispatch]);

 const onChangeSearchUser = (e) => {
  const { value } = e.target;
  setKeyword(value);
  dispatch(SearchUser(value));
 };

 const onSubmitSearch = (e) => {
  e.preventDefault();
  dispatch(SearchUser(keyword));
 };

 const userDetails = (uid) => {
  history.push(`/adminUsers/${uid}/details`);
 };
 return (
  <>
   {/* <div className="shadow rounded mt-1">
    <App users={10000} students={4000} customers={6000} />
   </div> */}
   <div className="row mt-2">
    <div className="col-lg-4 py-1">
     <div
      className="adminHover shadow"
      style={{
       padding: '20px 30px',
       height: '180px',
       borderRadius: '20px',
       background: 'pink',
      }}
     >
      <h3 className="m-0 kh">
       <i className="fas fa-users mr-2"></i>អ្នកប្រើប្រាស់ទាំងអស់
      </h3>
      <h4 className="text-right kh mb-0 pb-0 mt-1">នាក់</h4>
      <h1
       className="text-right fw-bold"
       style={{ fontSize: '70px', color: 'rgb(235,235,235)' }}
      >
       <CountUp end={4000} duration={3} redraw={false}>
        {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
         </VisibilitySensor>
        )}
       </CountUp>
      </h1>
     </div>
    </div>
    <div className="col-lg-4 py-1">
     <div
      className="bg-info adminHover shadow"
      style={{ padding: '20px 30px', height: '180px', borderRadius: '20px' }}
     >
      <h3 className="m-0 kh">
       <i className="fas fa-user-graduate mr-2"></i>អែតមីន
      </h3>
      <h4 className="text-right kh mb-0 pb-0 mt-1">នាក់</h4>
      <h1
       className="text-right fw-bold text-light"
       style={{ fontSize: '70px', color: 'rgb(235,235,235)' }}
      >
       <CountUp end={4000} duration={3} redraw={false}>
        {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
         </VisibilitySensor>
        )}
       </CountUp>
      </h1>
     </div>
    </div>
    <div className="col-lg-4 py-1">
     <div
      className="bg-info adminHover shadow"
      style={{ padding: '20px 30px', height: '180px', borderRadius: '20px' }}
     >
      <h3 className="m-0 kh">
       <i className="fas fa-user-graduate mr-2"></i>អ្នកប្រើប្រាស់ធម្មតា
      </h3>
      <h4 className="text-right kh mb-0 pb-0 mt-1">នាក់</h4>
      <h1
       className="text-right fw-bold text-light"
       style={{ fontSize: '70px' }}
      >
       <CountUp end={4000} duration={3} redraw={false}>
        {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
         </VisibilitySensor>
        )}
       </CountUp>
      </h1>
     </div>
    </div>
   </div>

   <div className="d-flex mt-2 justify-content-between">
    <div className="">
     <h4 className="mt-3 kh">អ្នកប្រើប្រាស់ទាំងអស់</h4>
    </div>
    <form onSubmit={onSubmitSearch}>
     <div
      className="input-group mb-3 shadow rounded bg-light"
      style={{ width: '350px' }}
     >
      <input
       type="text"
       className="form-control rounded"
       placeholder="User Name"
       aria-label="Username"
       aria-describedby="basic-addon1"
       onChange={onChangeSearchUser}
      />
      <div className="input-group-prepend">
       <button type="submit" className="input-group-text btn rounded bg-dark">
        <BsSearch className="text-light" />
       </button>
      </div>
     </div>
    </form>
   </div>

   <div className="">
    {loadingUserList ? (
     <Loader wd={40} hg={40} />
    ) : errorUserList ? (
     <Message variant="danger">{errorUserList}</Message>
    ) : (
     <>
      <table className="table table-sm bg-light">
       <thead className="thead-dark">
        <tr>
         <th scope="col" style={{ width: '60px' }}>
          ល.រ
         </th>
         <th scope="col" style={{ width: '60px' }}>
          រូបភាព
         </th>
         <th scope="col" style={{ width: '300px' }}>
          អាយឌី
         </th>
         <th scope="col">ឈ្មោះអ្នកប្រើប្រាស់</th>
         <th scope="col">អ៊ីម៉ែល</th>
         <th scope="col">ជាអែតមីន?</th>
         <th scope="col" className="text-center" style={{ width: '160px' }}>
          ការកំណត់
         </th>
        </tr>
       </thead>
       <tbody>
        {users &&
         users.map((user) => (
          <tr key={user._id}>
           <th className="fw-bold" scope="row">
            <ConvertNum num={i++} />
           </th>
           <td className="p-1">
            <img
             className="rounded-pill"
             style={{ width: 40, height: 40, objectFit: 'cover' }}
             src={user.profile || profile}
             alt={user.name}
            />
           </td>
           <td>{user._id}</td>
           <td className="fw-bold text-dark">{user.name}</td>
           <td className="text-dark">{user.email}</td>
           <td className="">
            {user.isAdmin ? (
             <i className="fas fa-check text-success"></i>
            ) : (
             <i className="fas fa-times text-danger"></i>
            )}
           </td>
           <td className="text-center">
            <Button type="button" variant="danger" size="sm">
             <i className="fas fa-trash text-light"></i>
            </Button>
            <Button className="mx-1" type="button" variant="dark" size="sm">
             <i className="fas fa-bars"></i>
            </Button>
            <Button
             onClick={() => userDetails(user._id)}
             type="button"
             variant="info"
             size="sm"
            >
             <i className="fas fa-external-link-alt"></i>
            </Button>
           </td>
          </tr>
         ))}
       </tbody>
      </table>
     </>
    )}
   </div>
  </>
 );
};

export default AdminUsers;
