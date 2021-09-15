import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { useHistory } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { navbarList } from '../actions/navbarActions';
import { logout } from '../actions/userActions/userActions';
import { useDispatch } from 'react-redux';

export default function FadeMenu(props) {
 const { userInfo } = props;
 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);
 const history = useHistory();
 const dispatch = useDispatch();

 const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const userLogout = () => {
  handleClose();
  dispatch(logout());
  dispatch(navbarList('Dashboard'));
  history.push('/');
 };

 const userOrder = () => {
  handleClose();
  history.push('/eshop/myorder');
 };

 const userProfile = () => {
  handleClose();
  history.push('/profile');
 };

 return (
  <div>
   <div
    className="rounded-circle"
    aria-controls="fade-menu"
    aria-haspopup="true"
    onClick={handleClick}
    style={{ overflow: 'hidden', width: 35, height: 35, cursor: 'pointer' }}
   >
    <img
     style={{ width: 35, height: 35, cursor: 'pointer', objectFit: 'cover' }}
     src={userInfo.profile}
    />
   </div>

   <Menu
    style={{ marginTop: 50, width: 300 }}
    id="fade-menu"
    anchorEl={anchorEl}
    keepMounted
    open={open}
    onClose={handleClose}
    TransitionComponent={Fade}
   >
    <div className="d-flex justify-content-center mt-2">
     <img
      src={userInfo.profile}
      className="rounded-circle"
      style={{ width: 60, height: 60, objectFit: 'cover' }}
      alt=""
     />
    </div>
    <h5 className="kh text-center my-2">{userInfo.name}</h5>
    <hr className="mx-3 my-1" />
    <MenuItem onClick={userOrder}>
     <MdShoppingCart className="mr-2 text-warning" />
     <p className="navbar_link m-0">ទំនិញដែលបានបញ្ជាទិញ</p>
    </MenuItem>
    <MenuItem onClick={userProfile}>
     <FaUserEdit className="mr-2 text-info" />
     <p className="navbar_link m-0">ព័ត៌មានផ្ទាល់ខ្លួន</p>
    </MenuItem>
    <MenuItem onClick={userLogout}>
     <GoSignOut className="mr-2 text-danger" />
     <p className="navbar_link m-0">ចាកចេញពីគណនី</p>
    </MenuItem>
   </Menu>
  </div>
 );
}
