import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../../actions/userActions/userActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { USER_LIST_RESET } from '../../constants/userConstants';

const AdminStudents = () => {
 let i = 1;
 const dispatch = useDispatch();

 const userList = useSelector((state) => state.userList);
 const { loading: loadingUserList, error: errorUserList, users } = userList;

 console.log(users);

 useEffect(() => {
  dispatch({ type: USER_LIST_RESET });
  dispatch(getUserList());
 }, [dispatch]);

 return (
  <>
   <h4 className="text-center mt-2">Admin Students</h4>

   {loadingUserList ? (
    <div className="py-5">
     <Loader wd={180} hg={180} />
    </div>
   ) : errorUserList ? (
    <Message variant="danger">{errorUserList}</Message>
   ) : (
    <>
     <h5>All Students</h5>
     <div className="row">
      <div className="col-md-8">
       <table className="table table-sm">
        <thead className="thead-dark text-center">
         <tr>
          <th scope="col" style={{ width: '60px' }}>
           No
          </th>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">isAdmin</th>
          <th scope="col" style={{ width: '200px' }}>
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
             <Button type="button" variant="light" size="sm">
              <i className="fas fa-trash text-danger"></i>
             </Button>
             <Button className="mx-1" type="button" variant="dark" size="sm">
              <i className="fas fa-bars"></i>
             </Button>
             <Button type="button" variant="light" size="sm">
              <i className="fas fa-external-link-alt"></i>
             </Button>
            </td>
           </tr>
          ))}
        </tbody>
       </table>
      </div>
     </div>
    </>
   )}
  </>
 );
};

export default AdminStudents;
