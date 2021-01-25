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

const AdminUsers = () => {
 let i = 1;
 const [keyword, setKeyword] = useState('');

 const dispatch = useDispatch();
 const history = useHistory();

 const userList = useSelector((state) => state.userList);
 const { loading: loadingUserList, error: errorUserList, users } = userList;

 useEffect(() => {
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
   <div className="shadow rounded mt-1">
    <App users={10000} students={4000} customers={6000} />
   </div>
   <div className="row mt-2">
    <div className="col-lg-3">
     <div
      className="bg-light rounded adminHover shadow"
      style={{ padding: '20px' }}
     >
      <h6 className="m-0 d-flex justify-content-between">
       <span>
        <i className="fas fa-users mr-2"></i>Users
       </span>

       <CountUp end={10000} duration={3} redraw={false}>
        {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
         </VisibilitySensor>
        )}
       </CountUp>
      </h6>
     </div>
    </div>

    <div className="col-lg-3">
     <div
      className="bg-light rounded adminHover shadow"
      style={{ padding: '20px' }}
     >
      <h6 className="m-0 d-flex justify-content-between">
       <span>
        <i className="fas fa-user-graduate mr-2"></i>Students
       </span>

       <CountUp end={4000} duration={3} redraw={false}>
        {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
         </VisibilitySensor>
        )}
       </CountUp>
      </h6>
     </div>
    </div>
    <div className="col-lg-3">
     <div
      className="bg-light rounded adminHover shadow"
      style={{ padding: '20px' }}
     >
      <h6 className="m-0 d-flex justify-content-between">
       <span>
        <i className="far fa-user mr-2"></i>Customers
       </span>

       <CountUp end={6000} duration={3} redraw={false}>
        {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
         </VisibilitySensor>
        )}
       </CountUp>
      </h6>
     </div>
    </div>
    <div className="col-lg-3">
     <div
      className="bg-light rounded adminHover shadow"
      style={{ padding: '20px' }}
     >
      <h6 className="m-0 d-flex justify-content-between">
       <span>
        <i className="far fa-user mr-2"></i>Cus & Stu
       </span>

       <CountUp end={6000} duration={3} redraw={false}>
        {({ countUpRef, start }) => (
         <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
         </VisibilitySensor>
        )}
       </CountUp>
      </h6>
     </div>
    </div>
   </div>

   <h4 className="mt-3 text-center">Users</h4>
   <div className="d-flex mt-2 justify-content-between">
    <div className="form-group shadow bg-light rounded">
     <select className="custom-select rounded" style={{ width: '350px' }}>
      <option value="allUsers">All Users</option>
      <option value="student">Students</option>
      <option value="customers">Customers</option>
      <option value="cus_stu">CUS & STU</option>
     </select>
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
       <thead className="thead-dark text-center">
        <tr>
         <th scope="col" style={{ width: '60px' }}>
          No
         </th>
         <th scope="col" style={{ width: '300px' }}>
          Id
         </th>
         <th scope="col">Name</th>
         <th scope="col">isAdmin</th>
         <th scope="col" style={{ width: '160px' }}>
          Actions
         </th>
        </tr>
       </thead>
       <tbody>
        {users &&
         users.map((user) => (
          <tr key={user._id}>
           <th className="text-center" scope="row">
            {i++}
           </th>
           <td>{user._id}</td>
           <td>{user.name}</td>
           <td className="text-center">
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
