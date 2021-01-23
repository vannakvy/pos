import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
=======
import SideBar from './components/SideBar';
>>>>>>> 0c716713cbe4ba77add1e3dbc126c26968b3fa9b
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
<<<<<<< HEAD
import PuchaseScreen from './screens/eShopScreens/PuchaseScreen.jsx';
import SaleScreen from './screens/eShopScreens/SaleScreen.jsx';
import Inventory from './screens/eShopScreens/Inventory.jsx';
import Report from './screens/eShopScreens/Report.jsx';
import SideBar from './components/eLearningComponents/SideBar'
=======
import AdminUsers from './screens/adminUsers/AdminUsers';
>>>>>>> 0c716713cbe4ba77add1e3dbc126c26968b3fa9b

const AppAdmin = () => {
 return (
  <Router>
   <div className="d-flex position-relative">
    <div
     className="overflow-auto px-2 py-2 border-right border-bottom"
     style={{
      width: '350px',
      height: '94vh',
      position: 'sticky',
      top: '69px',
     }}
    >
     <SideBar />
    </div>
    <div className="container-fluid">
     <Switch>
      {/* elearning */}
      <Route path="/adminElearn/courses/:id" component={CoursesDetail} />
      <Route path="/adminElearn/courses" component={AdminCourses} />
      <Route path="/adminElearn/videos" component={AdminVideos} />
      <Route path="/adminElearn/students" component={AdminStudents} />
      <Route path="/adminElearn" component={AdminElearn} />
      {/* for ebook path  */}
      <Route path="/adminEbook/courses" component={AddminCourseScreen} />
      <Route path="/adminEbook/contents" component={AddminContentScreen} />
      <Route path="/adminEbook/details/:id" component={AddminDetailScreen} />

      {/* for eshop admin routes  */}
      <Route
       path="/adminEshop/product/:id/edit"
       component={ProductEditScreen}
      />
      <Route path="/adminEshop/productLists" component={ProductListScreen} />
      <Route path="/adminEshop/orderlist" component={OrderListScreen} />
      <Route path="/adminEshop/userlist" component={UserListScreen} />
      <Route path="/adminEshop/user/:id/edit" component={UserEditScreen} />
<<<<<<< HEAD
      <Route path="/adminEshop/puchases" component={PuchaseScreen} />
      <Route path="/adminEshop/sales" component={SaleScreen} />
      <Route path="/adminEshop/inventory" component={Inventory} />
      <Route path="/adminEshop/reports" component={Report} />
      <Route path="/admin" component={AdminCourses} />
=======

      <Route path="/adminUsers" component={AdminUsers} />
>>>>>>> 0c716713cbe4ba77add1e3dbc126c26968b3fa9b
     </Switch>
    </div>
   </div>
  </Router>
 );
};

export default AppAdmin;
