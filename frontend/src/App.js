import React from 'react';
import {
 BrowserRouter as Router,
 NavLink,
 Route,
 Switch,
} from 'react-router-dom';
import Footer from './components/Footer';
import Dashboard from './screens/Dashboard';
import Navbar from './components/Navbar.js';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AppAdmin from './AppAdmin';
import DashboardElearn from './screens/eLearningScreens/DashboardElearn';
import CoursesScreen from './screens/eLearningScreens/CoursesScreen';
import CourseDetailsScreen from './screens/eLearningScreens/CourseDetialsScreen';
import CourseVideoScreen from './screens/eLearningScreens/CourseVideoScreen';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import EbookHomeScreen from './screens/eBookScreens/EbookHomeScreen';
import EbookCourseScreen from './screens/eBookScreens/EbookCourseScreen';

import ProductScreen from './screens/eShopScreens/ProductScreen';
import CartScreen from './screens/eShopScreens/CartScreen';
import ShippingScreen from './screens/eShopScreens/ShippingScreen';
import ProfileScreen from './screens/eShopScreens/ProfileScreen';
import PaymentScreen from './screens/eShopScreens/PaymentScreen';
import PlaceOrderScreen from './screens/eShopScreens/PlaceOrderScreen';
import OrderScreen from './screens/eShopScreens/OrderScreen';
//
import HomeScreen from './screens/eShopScreens/HomeScreen';
import Covid from './components/covideComponents/Covid';
import MyOrderScreen from './screens/eShopScreens/MyOrderScreen';
import { navbarList } from './actions/navbarActions';
import { useDispatch } from 'react-redux';
import MyCoursesScreen from './screens/eLearningScreens/MyCoursesScreen';
import AppTeacher from './AppTeacher';
import MyCoursesDetailScreen from './screens/eLearningScreens/MyCoursesDetailScreens';
import { COURSE_LIST_SUCCESS } from './constants/eLearningConstants/courseConstants';
import { LOADER_TOP_FALSE, LOADER_TOP_TRUE } from './constants/navbarConstants';
import axios from 'axios';
import NavbarBottom from './components/NavbarBottom';

import NewFooter from './components/newFooter';
import EbookLiveCode from './screens/eBookScreens/EbookLiveCode';
import EbookLanguageScreen from './screens/eBookScreens/EbookLanguageScreen';

const App = () => {
 const dispatch = useDispatch();

 const gotoCourses = async () => {
  dispatch({ type: LOADER_TOP_TRUE });
  const { data } = await axios.get(
   `/api/courses/courseType/AllCourses?pageNumber=1&keyword=&pageSize=`
  );
  if (data) {
   dispatch({ type: COURSE_LIST_SUCCESS, payload: data });
   dispatch({ type: LOADER_TOP_FALSE });
   //  history.push('/elearning/courses');
  }
 };
 return (
  <Router>
   <div style={{ background: 'rgb(230,230,230)' }}>
    <Navbar />
    <Switch>
     {/* admin */}
     <Route path="/teacherCourses" component={AppTeacher} />
     <Route path="/teacherStudents" component={AppTeacher} />
     <Route path="/adminUsers" component={AppAdmin} />
     <Route path="/adminElearn" component={AppAdmin} />
     <Route path="/adminEbook" component={AppAdmin} />
     <Route path="/adminEshop" component={AppAdmin} />
     {/* frontend */}
     <Route
      path="/elearning/mycourses/:eid"
      component={MyCoursesDetailScreen}
     />
     <Route
      path="/elearning/courses/:id/videos/:vid"
      component={CourseVideoScreen}
     />
     <Route
      path="/elearning/courses/:id"
      component={CourseDetailsScreen}
      exact
     />
     <Route
      path="/elearning/courses/search/page/:pageNumber"
      component={CoursesScreen}
      exact
     />
     <Route
      path="/elearning/courses/page/:pageNumber"
      component={CoursesScreen}
     />
     <Route
      path="/elearning/courses"
      component={CoursesScreen}
      onEnter={gotoCourses}
     />
     <Route path="/elearning/mycourses" component={MyCoursesScreen} />
     <Route path="/elearning" component={DashboardElearn} />
     {/* ebooks routes */}
     <Route path="/ebook/languages" component={EbookLanguageScreen} exact />
     <Route path="/ebook/:lang/:id" component={EbookCourseScreen} exact />
     <Route path="/ebook/:lang/:id/:code" component={EbookLiveCode} />
     <Route path="/ebook" component={EbookHomeScreen} exact />
     {/* eshop routes  */}
     <Route path="/eshop/order/:id" component={OrderScreen} />
     <Route path="/eshop/payment" component={PaymentScreen} />
     <Route path="/eshop/placeorder" component={PlaceOrderScreen} />
     <Route path="/eshop/shipping" component={ShippingScreen} />
     <Route path="/eshop/product/:id" component={ProductScreen} />
     <Route path="/eshop/cart/:id?" component={CartScreen} />
     <Route path="/eshop/profile" component={ProfileScreen} />
     <Route path="/eshop/myorder" component={MyOrderScreen} />
     <Route path="/eshop/search/:keyword" component={HomeScreen} exact />
     <Route path="/eshop/page/:pageNumber" component={HomeScreen} exact />
     <Route path="/eshop" component={HomeScreen} />
     {/* Covid route  */}
     <Route path="/covid" component={Covid} />
     <Route path="/login" component={LoginScreen} />
     <Route path="/register" component={RegisterScreen} />
     <Route path="/" exact component={Dashboard} />
    </Switch>

    <NavLink
     className="navbar_link rounded text-light p-2"
     onClick={() => dispatch(navbarList('Covid19'))}
     to="/covid"
     style={{
      position: 'fixed',
      bottom: '70px',
      left: '10px',
      zIndex: '1000',
     }}
    >
     <img
      className="covid_rotate rounded-circle"
      width="50px"
      height="50px"
      src="https://www.psycharchives.org/retrieve/096175aa-f7f2-4970-989d-d934c30b5551"
      alt=""
     />
    </NavLink>
    {/* <NavbarBottom /> */}
   </div>
   {/* <Footer /> */}

   <NewFooter />
   <MessengerCustomerChat pageId="2779357535722724" appId="569705490844811" />
  </Router>
 );
};

export default App;
