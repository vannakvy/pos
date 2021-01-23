import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import VisibilitySensor from 'react-visibility-sensor';
import { getUserList } from '../../actions/userActions/userActions';
import App from '../../components/eLearningComponents/ChartStudent';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { USER_LIST_RESET } from '../../constants/userConstants';

const AdminUsers = () => {
 let i = 1;
 const dispatch = useDispatch();

 const userList = useSelector((state) => state.userList);
 const { loading: loadingUserList, error: errorUserList, users } = userList;

 useEffect(() => {
  dispatch({ type: USER_LIST_RESET });
  dispatch(getUserList());
 }, [dispatch]);
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

   <h5 className="mt-2">All Students</h5>

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
            <Button type="button" variant="info" size="sm">
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
