import React, { useEffect, useState } from 'react';
import SideBarRow from './SideBarRow';
import $ from 'jquery';
import SideBarRowComponents from './SideBarRowComponents';

const SideBar = () => {
 const [sidecom, setSidecom] = useState('');
 const [activeNav, setActiveNav] = useState('');
 useEffect(() => {
  if ($('#dash').hasClass('grediant') && !$('#mulDash').hasClass('show')) {
   setSidecom('dash');
   setActiveNav('dash');
  } else if (
   $('#elearn').hasClass('grediant') &&
   !$('#mulElearn').hasClass('show')
  ) {
   setSidecom('elearn');
   setActiveNav('elearn');
  } else if (
   $('#ebook').hasClass('grediant') &&
   !$('#mulEbook').hasClass('show')
  ) {
   setSidecom('ebook');
   setActiveNav('ebook');
  } else if (
   $('#eshop').hasClass('grediant') &&
   !$('#mulEshop').hasClass('show')
  ) {
   setSidecom('eshop');
   setActiveNav('eshop');
  }
 }, []);

 return (
  <div style={{ minHeight: '100vh' }}>
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
     text={'Courses'}
     goTo={'/adminUsers/courses'}
     icon={'fas fa-folder'}
    />
    <SideBarRowComponents
     text={'Videos'}
     goTo={'/adminUsers/videos'}
     icon={'fas fa-film'}
     mar={true}
    />
    <SideBarRowComponents
     text={'Students'}
     goTo={'/adminUsers/students'}
     icon={'fas fa-user-graduate'}
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
    />
    <SideBarRowComponents
     text={'Videos'}
     goTo={'/adminElearn/videos'}
     icon={'fas fa-film'}
     mar={true}
    />
    <SideBarRowComponents
     text={'Request Enroll'}
     goTo={'/adminElearn/students'}
     icon={'fas fa-user-graduate'}
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
    <SideBarRowComponents
     text={'Puchase Lists'}
     goTo={'/adminEshop/purchaselists'}
     icon={'fas fa-user-graduate'}
    />
    <SideBarRowComponents
     text={'Saled Bypass'}
     goTo={'/adminEshop/sales'}
     icon={'fas fa-user-graduate'}
    />
    <SideBarRowComponents
     text={'Add Products'}
     goTo={'/adminEshop/addProducts'}
     icon={'fas fa-user-graduate'}
    />
    <SideBarRowComponents
     text={'Add Suppliers'}
     goTo={'/adminEshop/inventory'}
     icon={'fas fa-user-graduate'}
     mar={true}
    />
    <SideBarRowComponents
     text={'Reports'}
     goTo={'/adminEshop/reports'}
     icon={'fas fa-user-graduate'}
    />
   </div>
  </div>
 );
};

export default SideBar;
