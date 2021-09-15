import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ConvertNum from '../../components/eLearningComponents/ConvertNum';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import profile from '../../img/profile.png';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { getUserList } from '../../actions/userActions/userActions';
import queryString from 'query-string';
import Paginate from '../../components/eLearningComponents/Paginate';

const UserTypeNormal = ({ match }) => {
 const pageNumber = match.params.pageNumber || 1;
 const location = useLocation();
 const query = queryString.parse(location.search);
 const keyword = query.keyword || '';
 const history = useHistory();
 const dispatch = useDispatch();
 let i = 1 + 15 * (pageNumber - 1);
 const userList = useSelector((state) => state.userList);
 const {
  loading: loadingUserList,
  error: errorUserList,
  users,
  count,
  page,
  pages,
 } = userList;

 useEffect(() => {
  window.scroll(0, 0);
  dispatch(getUserList(keyword, 'users', pageNumber, 15));
 }, [keyword, pageNumber]);

 const userDetails = (uid) => {
  history.push(`/adminUsers/${uid}/details`);
 };

 return (
  <div>
   <h4 className="text-center mt-3 mb-4 text-info">
    អ្នកប្រើប្រាស់ទូទៅទាំងអស់
   </h4>
   <div>
    {loadingUserList ? (
     <div className={'mt-3'}>
      <Loader wd={40} hg={40} />
     </div>
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
             <i className="fas fa-external-link-alt text-dark fw-bold"></i>
            </Button>
           </td>
          </tr>
         ))}
       </tbody>
      </table>
      <Paginate
       locate="usersGeneral"
       pages={pages}
       page={page}
       keyword={keyword ? keyword : ''}
      />
     </>
    )}
   </div>
  </div>
 );
};

export default UserTypeNormal;
