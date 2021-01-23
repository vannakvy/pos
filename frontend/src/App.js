import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

const App = () => {
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
    <Route path="/courses/:id/videos/:vid" component={CourseVideoScreen} />
    <Route path="/courses/:id" component={CourseDetailsScreen} />
    <Route path="/courses" component={CoursesScreen} />
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
    <Route path="/eshop" component={HomeScreen} />

    <Route path="/login" component={LoginScreen} />
    <Route path="/register" component={RegisterScreen} />
    <Route path="/" exact component={Dashboard} />
   </Switch>
   <Footer />
  </Router>
 );
};

export default App;
