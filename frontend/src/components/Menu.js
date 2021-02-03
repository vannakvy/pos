import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link, useHistory } from 'react-router-dom';
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
  history.push('/eshop/profile');
 };

 return (
  <div>
   <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
    <Link className="nav-link navbar_link text-dark m-0 p-0">
     {userInfo.name}
    </Link>
   </Button>
   <Menu
    style={{ marginTop: 60 }}
    id="fade-menu"
    anchorEl={anchorEl}
    keepMounted
    open={open}
    onClose={handleClose}
    TransitionComponent={Fade}
   >
    <h4 className="kh">{userInfo.name}</h4>
    <hr className="mx-3 my-1" />
    <MenuItem className={'adminHover'} onClick={userOrder}>
     <MdShoppingCart className="mr-2 text-warning" />
     <Link className="navbar_link">ទំនិញដែលបានបញ្ជាទិញ</Link>
    </MenuItem>
    <MenuItem className={'adminHover'} onClick={userProfile}>
     <FaUserEdit className="mr-2 text-info" />
     <Link className="navbar_link">ព័ត៌មានផ្ទាល់ខ្លួន</Link>
    </MenuItem>
    <MenuItem className={'adminHover'} onClick={userLogout}>
     <GoSignOut className="mr-2 text-danger" />
     <Link className="navbar_link">ចាកចេញពីគណនី</Link>
    </MenuItem>
   </Menu>
  </div>
 );
}
