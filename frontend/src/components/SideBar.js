import React, { useEffect, useState } from 'react';
import SideBarRow from './SideBarRow';
import $ from 'jquery';
import SideBarRowComponents from './SideBarRowComponents';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { GET_REQ_ENROLL_SUC } from '../constants/eLearningConstants/enrollConstants';
import { listCourses } from '../actions/eLearningActions/courseActions';

const SideBar = () => {
 const [activeNav, setActiveNav] = useState('');
 const dispatch = useDispatch();

 const courseList = useSelector((state) => state.courseList);
 const { count } = courseList;
 const reqEnroll = useSelector((state) => state.reqEnroll);
 const { reqEnrolls } = reqEnroll;
 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;

 useEffect(async () => {
  if (userInfo !== null) {
   const config = {
    headers: {
     Authorization: `Bearer ${userInfo.token}`,
    },
   };
   const { data } = await axios.get(
    `/api/eLearning/enrolls/user/request`,
    config
   );
   if (data) {
    dispatch({ type: GET_REQ_ENROLL_SUC, payload: data });
   }
   if ($('#dash').hasClass('grediant') && !$('#mulDash').hasClass('show')) {
    setActiveNav('dash');
   } else if (
    $('#elearn').hasClass('grediant') &&
    !$('#mulElearn').hasClass('show')
   ) {
    setActiveNav('elearn');
   } else if (
    $('#ebook').hasClass('grediant') &&
    !$('#mulEbook').hasClass('show')
   ) {
    setActiveNav('ebook');
   } else if (
    $('#eshop').hasClass('grediant') &&
    !$('#mulEshop').hasClass('show')
   ) {
    setActiveNav('eshop');
   }
  }
  dispatch(listCourses('AllCourses', 1));
 }, []);

 return (
  <div style={{ maxHeight: '100vh', paddingBottom: '150px' }}>
   <div
    aria-expanded={false}
    aria-controls="mulDash"
    onClick={() => setActiveNav('dash')}
   >
    <SideBarRow
     activeNav={activeNav}
     text={'Users'}
     icon={`fas fa-user`}
     id={'dash'}
    />
   </div>

   <div
    id="mulDash"
    onClick={() => setActiveNav('dash')}
    className={`collapse show`}
   >
    <SideBarRowComponents
     text={'អ្នកប្រើប្រាស់ទាំងអស់'}
     goTo={'/adminUsers/users'}
     icon={'fas fa-users'}
     mar={true}
    />
   </div>
   <div
    id="mulDash"
    onClick={() => setActiveNav('dash')}
    className={`collapse show`}
   >
    <SideBarRowComponents
     text={'អ្នកគ្រប់គ្រង'}
     goTo={'/adminUsers/admins'}
     icon={'fas fa-users-cog'}
     mar={true}
    />
   </div>
   <div
    id="mulDash"
    onClick={() => setActiveNav('dash')}
    className={`collapse show`}
   >
    <SideBarRowComponents
     text={'អ្នកប្រើប្រាស់ទូទៅ'}
     goTo={'/adminUsers/generals'}
     icon={'fas fa-user-friends'}
     mar={true}
    />
   </div>

   <div
    aria-expanded={false}
    aria-controls="mulElearn"
    onClick={() => setActiveNav('elearn')}
   >
    <SideBarRow
     text={'E-Learning'}
     goTo={'/adminElearn'}
     icon={'fas fa-play-circle'}
     id={'elearn'}
     activeNav={activeNav}
    />
   </div>

   <div
    id="mulElearn"
    onClick={() => setActiveNav('elearn')}
    className={`collapse show`}
   >
    <SideBarRowComponents
     text={'Courses'}
     goTo={'/adminElearn/courses'}
     icon={'fas fa-folder'}
     num={count && count}
    />

    <SideBarRowComponents
     text={`Request Enroll`}
     goTo={'/adminElearn/students'}
     icon={'fas fa-user-graduate'}
     num={reqEnrolls && reqEnrolls.length}
    />
   </div>
   {/* for ebook link  */}
   <div
    aria-expanded={false}
    aria-controls="mulEbook"
    onClick={() => setActiveNav('ebook')}
   >
    <SideBarRow
     text={'E-Book'}
     goTo={'/adminEbook'}
     icon={'fas fa-book'}
     mar={true}
     id={'ebook'}
     activeNav={activeNav}
    />
   </div>

   <div
    id="mulEbook"
    onClick={() => setActiveNav('ebook')}
    className={`collapse show`}
   >
    <SideBarRowComponents
     text={'Courses'}
     goTo={'/adminEbook/courses'}
     icon={'fas fa-folder'}
    />
    <SideBarRowComponents
     text={'Contents'}
     goTo={'/adminEbook/contents'}
     icon={'fas fa-film'}
     mar={true}
    />
   </div>

   <div
    aria-expanded={false}
    aria-controls="mulEshop"
    onClick={() => setActiveNav('eshop')}
   >
    <SideBarRow
     text={'E-Shop'}
     goTo={'/adminEshop'}
     icon={'fas fa-shopping-bag'}
     mar={true}
     id={'eshop'}
     activeNav={activeNav}
    />
   </div>

   <div
    id="mulEshop"
    onClick={() => setActiveNav('eshop')}
    className={`collapse show`}
   >
    <SideBarRowComponents
     text={'Dashboard'}
     goTo={'/adminEshop/dashboard'}
     icon={'fas fa-user-graduate'}
    />
    <SideBarRowComponents
     text={'Clients'}
     goTo={'/adminEshop/userlist'}
     icon={'fas fa-folder'}
    />
    <SideBarRowComponents
     text={'Stocks'}
     goTo={'/adminEshop/productLists'}
     icon={'fas fa-film'}
     mar={true}
    />
    <SideBarRowComponents
     text={'Client Order'}
     goTo={'/adminEshop/orderlist'}
     icon={'fas fa-user-graduate'}
    />

    <SideBarRowComponents
     text={'Puchase Products'}
     goTo={'/adminEshop/puchases'}
     icon={'fas fa-user-graduate'}
    />

    {/* <SideBarRowComponents
          text={"Saled Bypass"}
          goTo={"/adminEshop/sales"}
          icon={"fas fa-user-graduate"}
        /> */}
        <SideBarRowComponents
          text={"Add Products"}
          goTo={"/adminEshop/addProducts"}
          icon={"fas fa-user-graduate"}
        />
        <SideBarRowComponents
          text={"Add Suppliers"}
          goTo={"/adminEshop/inventory"}
          icon={"fas fa-user-graduate"}
          mar={true}
        />
        {/* <SideBarRowComponents
          text={"Reports"}
          goTo={"/adminEshop/reports"}
          icon={"fas fa-user-graduate"}
        /> */}
      </div>
    </div>
  );
};

export default SideBar;
