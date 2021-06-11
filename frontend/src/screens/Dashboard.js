import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import About from '../components/About';
import Context from '../components/Context';
import Gallery from '../components/Gallery';
import LandingPage from '../components/LandingPage';
import PageComEbook from '../components/PageComEbook';
import PageComElearn from '../components/PageComElearn';
import PageComEshop from '../components/PageComEshop';

const Dashboard = ({ history }) => {
 const navbarL = useSelector((state) => state.navbarList);
 const { navbar } = navbarL;

 useEffect(() => {
  if (navbar === 'Dashboard') {
   history.push(`/`);
  } else if (navbar === 'Elearning') {
   history.push(`/elearning`);
  } else if (navbar === 'Eshop') {
   history.push(`/eshop`);
  } else if (navbar === 'Ebook') {
   history.push(`/ebook`);
  } else if (navbar === 'Admin') {
   history.push(`/adminUsers`);
  }
 }, [history, navbar]);

 return (
  <div className="overflow-hidden">
   <div className="container-md mt-sm-0 mt-md-5">
    <LandingPage />
    {/* <Gallery /> */}
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
