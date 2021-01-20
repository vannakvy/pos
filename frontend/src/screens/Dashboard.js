import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import About from '../components/About';
import Context from '../components/Context';
import Gallery from '../components/Gallery';
import LandingPage from '../components/LandingPage';

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
   history.push(`/admin`);
  }
 }, [history, navbar]);

 return (
  <>
   <div className="container-fluid">
    <LandingPage />
    <Gallery />
    <h3 className="text-center">About Us</h3>
    <LandingPage />
    <About />
    <Context />
   </div>
  </>
 );
};

export default Dashboard;
