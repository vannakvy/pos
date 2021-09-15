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
 const [count, setCount] = useState(0);
 const dispatch = useDispatch();
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

   async function fetchReqEnroll() {
    const { data } = await axios.get(
     `/api/eLearning/enrolls/user/request`,
     config
    );
    if (data) {
     dispatch({ type: GET_REQ_ENROLL_SUC, payload: data });
    }
   }
   fetchReqEnroll();

   async function fetchCourses() {
    const { data } = await axios.get(
     `/api/courses/courseType/AllCourses?pageNumber=1&keyword=&pageSize=`
    );
    if (data) {
     setCount(data.count);
    }
   }

   fetchCourses();

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
     text={'អ្នកប្រើប្រាស់'}
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
     text={'ផ្នែករៀនជាវីដីអូ'}
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
     text={'មុខវិទ្យាទាំងអស់'}
     goTo={'/adminElearn/courses'}
     icon={'fas fa-folder'}
     num={count && count}
    />

    <SideBarRowComponents
     text={`សិស្សបានស្នើសុំរៀន`}
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
     text={'ផ្នែករៀនជាការអាន'}
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
     text={'មុខវិទ្យាទាំងអស់'}
     goTo={'/adminEbook/courses'}
     icon={'fas fa-folder'}
    />
    <SideBarRowComponents
     text={'មុខវិទ្យាជាផ្នែកៗ'}
     goTo={'/adminEbook/contents'}
     icon={'fas fa-film'}
     mar={true}
    />
   </div>

   <div
    aria-expanded={false}
    aria-controls="mulEshop"
    onClick={() => setActiveNav('quiz')}
   >
    <SideBarRow
     text={'លំហាត់'}
     goTo={'/adminQuiz'}
     icon={'fas fa-dumbbell'}
     mar={true}
     id={'quiz'}
     activeNav={activeNav}
    />
   </div>

   <div onClick={() => setActiveNav('quiz')}>
    <SideBarRowComponents
     text={'លំហាត់'}
     goTo={'/adminQuiz'}
     icon={'fas fa-feather-alt'}
    />
   </div>
   <div onClick={() => setActiveNav('quiz1')}>
    <SideBarRowComponents
     text={'បញូលលំហាត់'}
     goTo={'/adminQuiz'}
     icon={'fas fa-feather-alt'}
    />
   </div>

   <div
    aria-expanded={false}
    aria-controls="mulEshop"
    onClick={() => setActiveNav('eshop')}
   >
    <SideBarRow
     text={'ការទិញទំនិញ'}
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
     text={'ទំព័រដើម'}
     goTo={'/adminEshop/dashboard'}
     icon={'fas fa-user-graduate'}
    />
    <SideBarRowComponents
     text={'អតិថិជន'}
     goTo={'/adminEshop/userlist'}
     icon={'fas fa-folder'}
    />
    <SideBarRowComponents
     text={'ស្ដុកទំនិញ'}
     goTo={'/adminEshop/productLists'}
     icon={'fas fa-film'}
     mar={true}
    />
    <SideBarRowComponents
     text={'អតិថិជនដែលបានកាម៉ង់'}
     goTo={'/adminEshop/orderlist'}
     icon={'fas fa-user-graduate'}
    />

    <SideBarRowComponents
     text={'ការបញ្ចាទិញ'}
     goTo={'/adminEshop/puchases'}
     icon={'fas fa-user-graduate'}
    />

    {/* <SideBarRowComponents
          text={"Saled Bypass"}
          goTo={"/adminEshop/sales"}
          icon={"fas fa-user-graduate"}
        /> */}
    <SideBarRowComponents
     text={'បញ្ចូលនិងកែប្រែទំនិញ'}
     goTo={'/adminEshop/addProducts'}
     icon={'fas fa-user-graduate'}
    />
    <SideBarRowComponents
     text={'បញ្ចូលអ្នកផ្គត់ផ្គង់'}
     goTo={'/adminEshop/inventory'}
     icon={'fas fa-user-graduate'}
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
