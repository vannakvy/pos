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

const App = () => {
 const dispatch = useDispatch();
 return (
  <Router>
   <Navbar />
   <Switch>
    {/* admin */}
    <Route path="/adminUsers" component={AppAdmin} />
    <Route path="/adminElearn" component={AppAdmin} />
    <Route path="/adminEbook" component={AppAdmin} />
    <Route path="/adminEshop" component={AppAdmin} />
    {/* frontend */}
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
    <Route path="/elearning/courses" component={CoursesScreen} />
    <Route path="/elearning/mycourses" component={MyCoursesScreen} />
    <Route path="/elearning" component={DashboardElearn} />

    {/* ebooks routes */}
    <Route path="/ebook/:lang" component={EbookCourseScreen} />
    <Route path="/ebook" component={EbookHomeScreen} />

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
   <Footer />

   <NavLink
    className="navbar_link rounded text-light p-2"
    onClick={() => dispatch(navbarList('Covid19'))}
    to="/covid"
    style={{ position: 'fixed', bottom: '70px', right: '70px', zIndex: '1000' }}
   >
    <img
     className="covid_rotate rounded-circle"
     width="50px"
     height="50px"
     src="https://www.psycharchives.org/retrieve/096175aa-f7f2-4970-989d-d934c30b5551"
     alt=""
    />
   </NavLink>
  </Router>
 );
};

export default App;
