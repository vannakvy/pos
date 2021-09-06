import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { navbarList } from '../actions/navbarActions';
import { useDispatch, useSelector } from 'react-redux';
import { RiVirusFill } from 'react-icons/ri';
import { IoHome } from 'react-icons/io5';
import { MdOndemandVideo, MdVideoLibrary } from 'react-icons/md';
import { GiVideoConference } from 'react-icons/gi';
import { ImBook } from 'react-icons/im';
import { SiHtml5 } from 'react-icons/si';
import { IoMdGitNetwork } from 'react-icons/io';
import { FaShopify } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';

export default function NavPhone() {
 const dispatch = useDispatch();
 const [open, setOpen] = React.useState(false);

 const { userInfo } = useSelector((state) => state.userLogin);

 const handleOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 return (
  <div className="d-block d-md-none">
   <button className="btn rounded" onClick={handleOpen}>
    <i className="fas fa-bars" style={{ fontSize: '25px' }}></i>
   </button>
   <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className="d-block d-md-none"
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
     timeout: 500,
    }}
   >
    <Fade in={open}>
     <div
      className="p-2"
      style={{
       height: '100%',
       overflowY: 'auto',
       background: '#000',
      }}
      onClick={handleClose}
     >
      <div
       className="nav-link rounded-top bg-info text-light p-3 fw-bold"
       onClick={handleClose}
      >
       <IoIosArrowBack size={20} className="ms-2 me-3" /> ត្រលប់ក្រោយ
      </div>
      <NavLink
       exact
       to="/"
       onClick={() => dispatch(navbarList('Dashboard'))}
       className="nav_link"
       activeClassName="activeNav_link"
      >
       <IoHome className="mx-3" style={{ marginTop: '-7px' }} size={20} />{' '}
       ទំព័រដើម
      </NavLink>

      <NavLink
       exact
       to="/elearning"
       className="nav_link"
       activeClassName="activeNav_link"
       onClick={() => dispatch(navbarList('Elearning'))}
       style={{ background: 'rgb(52,58,64)' }}
      >
       <MdOndemandVideo
        className="mx-3"
        style={{ marginTop: '-7px' }}
        size={20}
       />{' '}
       រៀនជាវីដីអូ
      </NavLink>
      <NavLink
       to="/elearning/courses"
       className="nav_link"
       activeClassName="activeNav_link"
       onClick={() => dispatch(navbarList('Elearning'))}
      >
       <MdVideoLibrary
        className="mx-3"
        style={{ marginTop: '-7px' }}
        size={20}
       />{' '}
       មុខវិទ្យា
      </NavLink>
      <NavLink
       to="/elearning/mycourses"
       className="nav_link"
       activeClassName="activeNav_link"
       onClick={() => dispatch(navbarList('Elearning'))}
      >
       <GiVideoConference
        className="mx-3"
        style={{ marginTop: '-7px' }}
        size={20}
       />{' '}
       មុខវិទ្យារបស់ខ្ញុំ
      </NavLink>
      <NavLink
       exact
       to="/ebook"
       className="nav_link"
       activeClassName="activeNav_link"
       style={{ background: 'rgb(52,58,64)' }}
       onClick={() => dispatch(navbarList('Ebook'))}
      >
       <ImBook className="mx-3" style={{ marginTop: '-7px' }} size={20} />{' '}
       រៀនជាការអាន
      </NavLink>
      <NavLink
       to="/ebook/courses"
       className="nav_link"
       activeClassName="activeNav_link"
       onClick={() => dispatch(navbarList('Ebook'))}
      >
       <SiHtml5 className="mx-3" style={{ marginTop: '-7px' }} size={20} />{' '}
       មុខវិទ្យា
      </NavLink>
      <NavLink
       to="/ebook/quiz"
       className="nav_link"
       activeClassName="activeNav_link"
       onClick={() => dispatch(navbarList('Ebook'))}
      >
       <IoMdGitNetwork
        className="mx-3"
        style={{ marginTop: '-7px' }}
        size={20}
       />{' '}
       លំហាត់
      </NavLink>
      <NavLink
       exact
       to="/eshop"
       className="nav_link"
       activeClassName="activeNav_link"
       style={{ background: 'rgb(52,58,64)' }}
       onClick={() => dispatch(navbarList('Eshop'))}
      >
       <FaShopify className="mx-3" style={{ marginTop: '-7px' }} size={20} />{' '}
       ទិញទំនិញ
      </NavLink>
      <NavLink
       to="/eshop/cart"
       className="nav_link"
       activeClassName="activeNav_link"
       onClick={() => dispatch(navbarList('Eshop'))}
      >
       <TiShoppingCart
        className="mx-3"
        style={{ marginTop: '-7px' }}
        size={20}
       />{' '}
       កន្ត្រក
      </NavLink>
      <NavLink
       to="/covid"
       onClick={() => dispatch(navbarList('Dashboard'))}
       className="nav_link"
       activeClassName="activeNav_link"
       style={{ background: 'rgb(52,58,64)' }}
      >
       <RiVirusFill className="mx-3" style={{ marginTop: '-7px' }} size={20} />{' '}
       កូវីត-១៩
      </NavLink>
     </div>
    </Fade>
   </Modal>
  </div>
 );
}
