import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import About from '../components/About';
import Context from '../components/Context';
import LandingPage from '../components/LandingPage';
import PageComEbook from '../components/PageComEbook';
import PageComElearn from '../components/PageComElearn';
import PageComEshop from '../components/PageComEshop';

const Dashboard = ({ history }) => {
 const navbarL = useSelector((state) => state.navbarList);
 const { navbar } = navbarL;

 useEffect(() => {
  window.scroll(0, 0);
  // if (navbar === 'Dashboard') {
  //  history.push(`/`);
  // } else if (navbar === 'Elearning') {
  //  history.push(`/elearning`);
  // } else if (navbar === 'Eshop') {
  //  history.push(`/eshop`);
  // } else if (navbar === 'Ebook') {
  //  history.push(`/ebook`);
  // } else if (navbar === 'Admin') {
  //  history.push(`/adminUsers`);
  // } else {
  //  history.push(`/`);
  // }
 }, [history, navbar]);

 return (
  <div className="overflow-hidden">
   <div
    className="mt-lg-0 mt-xl-5"
    style={{ maxWidth: 1300, margin: '0 auto' }}
   >
    <LandingPage />
    <PageComElearn />
    <PageComEbook />
    <PageComEshop />
    <About />
    <Context />
   </div>
  </div>
 );
};

export default Dashboard;
