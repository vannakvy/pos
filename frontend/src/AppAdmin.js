import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';
import AddminContentScreen from './screens/adminEbooks/AddminContentScreen.js';
import AddminCourseScreen from './screens/adminEbooks/AddminCourseScreen.js';
import AddminDetailScreen from './screens/adminEbooks/AddminDetailScreen.js';
import AdminCourses from './screens/adminElearn/AdminCourses.js';
import AdminElearn from './screens/adminElearn/AdminElearn.js';
import AdminStudents from './screens/adminElearn/AdminStudents.js';
import AdminVideos from './screens/adminElearn/AdminVideos.js';
import CoursesDetail from './screens/adminElearn/CourseDetail.js';
import ProductListScreen from './screens/eShopScreens/ProductListScreen';
import ProductEditScreen from './screens/eShopScreens/ProductEditScreen';
import OrderListScreen from './screens/eShopScreens/OrderListScreen';
import UserListScreen from './screens/eShopScreens/UserListScreen';
import UserEditScreen from './screens/eShopScreens/UserEditScreen';
import AdminUsers from './screens/adminUsers/AdminUsers';
import SaleScreen from './screens/eShopScreens/SaleScreen';
import PuchaseScreen from './screens/eShopScreens/PuchaseScreen';
import ReportScreen from './screens/eShopScreens/ReportScreen';
import UserDetails from './screens/adminUsers/UserDetails';
import AddProductScreen from './screens/eShopScreens/AddProductScreen';
import Stock from './screens/eShopScreens/Stock';
import PurchaseProductScreen from './screens/eShopScreens/PurchaseProductScreen';
import SaleByPassScreen from './screens/eShopScreens/SaleByPassScreen';
import Supplier from './screens/eShopScreens/Supplier';
import PurchaseListScreen from './screens/eShopScreens/PurchaseListScreen';
import StockDetail from './screens/eShopScreens/StockDetail';
import EshopDashboard from './screens/eShopScreens/EshopDashboard';
import Test from './screens/eShopScreens/Test';
import Team from './components/Team';
import Quiz from './screens/adminQuiz/Quiz';

const AppAdmin = () => {
 return (
  <Router>
   <div className="d-flex position-relative">
    <div
     className="overflow-auto p-2 border-right border-bottom d-none d-lg-block bg-light"
     style={{
      minWidth: '260px',
      height: '94vh',
      position: 'sticky',
      top: '60px',
     }}
    >
     <SideBar />
    </div>
    <div className="w-100 mx-1" style={{ minHeight: '100vh' }}>
     <Switch>
      {/* elearning */}
      <Route
       path="/adminElearn/courses/search/page/:pageNumber"
       component={AdminCourses}
      />
      <Route
       path="/adminElearn/courses/page/:pageNumber"
       component={AdminCourses}
      />
      <Route path="/adminElearn/courses/:id" component={CoursesDetail} />
      <Route path="/adminElearn/courses" component={AdminCourses} />
      <Route path="/adminElearn/videos" component={AdminVideos} />
      <Route path="/adminElearn/students" component={AdminStudents} />
      <Route path="/adminElearn" component={AdminElearn} />
      {/* for ebook path  */}
      <Route path="/adminEbook/courses" component={AddminCourseScreen} />
      <Route path="/adminEbook/contents" component={AddminContentScreen} />
      <Route path="/adminEbook/details/:id" component={AddminDetailScreen} />
      {/* for ebook path  */}
      <Route path="/adminQuiz" component={Quiz} />
      {/* for eshop admin routes  */}
      <Route
       path="/adminEshop/product/:id/edit"
       component={ProductEditScreen}
      />
      <Route path="/adminEshop/productLists/:pageNumber" component={Stock} />
      <Route path="/adminEshop/productLists" component={Stock} />

      {/* <Route path="/adminEshop/dashboard" component={Team} /> */}
      <Route path="/adminEshop/purchaselists" component={PurchaseListScreen} />

      <Route
       path="/adminEshop/addProduct/:pageNumber"
       component={AddProductScreen}
       exact
      />
      <Route path="/adminEshop/orderlist" component={OrderListScreen} />
      <Route path="/adminEshop/userlist" component={UserListScreen} />
      <Route path="/adminEshop/user/:id/edit" component={UserEditScreen} />
      <Route path="/adminEshop/inventory" component={Supplier} />
      <Route
       path="/adminEshop/puchases/:pageNumber"
       component={PurchaseProductScreen}
      />
      <Route path="/adminEshop/puchases" component={PurchaseProductScreen} />

      <Route path="/adminEshop/sales" component={SaleByPassScreen} />
      <Route path="/adminEshop/addProducts" component={AddProductScreen} />
      <Route path="/adminEshop/reports" component={ReportScreen} />
      <Route path="/adminEshop/stockDetail/:id" component={StockDetail} />
      <Route path="/adminEshop" component={EshopDashboard} />
      <Route path="/adminUsers/:uid/details" component={UserDetails} />
      <Route path="/adminUsers/users" component={AdminUsers} />
     </Switch>
    </div>
   </div>
  </Router>
 );
};

export default AppAdmin;
