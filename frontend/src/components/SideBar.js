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
  <>
   <div
    data-toggle="collapse"
    data-target="#mulDash"
    aria-expanded={false}
    aria-controls="mulDash"
    onClick={() => setActiveNav('dash')}
   >
    <SideBarRow
     text={'Dashboard'}
     goTo={'/admin'}
     icon={`fas fa-cog`}
     id={'dash'}
     activeNav={activeNav}
    />
   </div>

   <div
    id="mulDash"
    onClick={() => setActiveNav('dash')}
    className={`collapse ${sidecom && sidecom === 'dash' ? 'show' : ''}`}
   >
    <SideBarRowComponents
     text={'Courses'}
     goTo={'/admin/courses'}
     icon={'fas fa-folder'}
    />
    <SideBarRowComponents
     text={'Videos'}
     goTo={'/admin/videos'}
     icon={'fas fa-film'}
     mar={true}
    />
    <SideBarRowComponents
     text={'Students'}
     goTo={'/admin/students'}
     icon={'fas fa-user-graduate'}
     mar={true}
    />
   </div>

   <div
    data-toggle="collapse"
    data-target="#mulElearn"
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
    className={`collapse ${sidecom && sidecom === 'elearn' ? 'show' : ''}`}
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
     text={'Students'}
     goTo={'/adminElearn/students'}
     icon={'fas fa-user-graduate'}
    />
   </div>
   {/* for ebook link  */}
   <div
    data-toggle="collapse"
    data-target="#mulEbook"
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
    className={`collapse ${sidecom && sidecom === 'ebook' ? 'show' : ''}`}
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
    <SideBarRowComponents
     text={'Details'}
     goTo={'/adminEbook/details'}
     icon={'fas fa-user-graduate'}
    />
   </div>

   <div
    data-toggle="collapse"
    data-target="#mulEshop"
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
    className={`collapse ${sidecom && sidecom === 'eshop' ? 'show' : ''}`}
   >
    <SideBarRowComponents
     text={'Users'}
     goTo={'/adminEshop/userlist'}
     icon={'fas fa-folder'}
    />
    <SideBarRowComponents
     text={'Products'}
     goTo={'/adminEshop/productLists'}
     icon={'fas fa-film'}
     mar={true}
    />
    <SideBarRowComponents
     text={'Order'}
     goTo={'/adminEshop/orderlist'}
     icon={'fas fa-user-graduate'}
    />
    <hr/>
        <SideBarRowComponents
     text={'Puchases'}
     goTo={'/adminEshop/puchases'}
     icon={'fas fa-user-graduate'}
    />
            <SideBarRowComponents
     text={'Sales'}
     goTo={'/adminEshop/sales'}
     icon={'fas fa-user-graduate'}

    />
            <SideBarRowComponents
     text={'Inventory'}
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
  </>
 );
};

export default SideBar;
