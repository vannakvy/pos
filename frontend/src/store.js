import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { navbarListReducers } from './reducers/navbarReducers.js';
import {
 userListReducer,
 userLoginReducer,
 userRegisterReducer,
 userUpdateProfileReducer,
 userUpdateReducer,
 userDeleteReducer,
 userDetailsReducer,
} from './reducers/eShopReducers/userReducers';
import {
 courseCreateReducer,
 courseDeleteReducer,
 courseDetailsReducer,
 courseListReducer,
 courseUpdateReducer,
} from './reducers/eLearningReducers/courseReducers';
import {
 sectionCreateReducer,
 sectionDeleteReducer,
 sectionListReducer,
 sectionUpdateReducer,
 videoCreateReducer,
 videoDeleteReducer,
 videoUpdateReducer,
} from './reducers/eLearningReducers/sectionReducers';

import {
 courseEnrollReducer,
 createEnrollCoursesReducer,
 getEnrollSectionReducer,
 userEnrollCoursesReducer,
} from './reducers/eLearningReducers/enrollReducers';

import {
 getContentReducer,
 contentCreateReducer,
 contentDeleteReducer,
 contentUpdateReducer,
} from './reducers/eBookReducers/eBookContentReducers';

import {
 getOneLanguageReducer,
 getLanguagesReducer,
 languageCreateReducer,
 languageDeleteReducer,
 languageUpdateReducer,
} from './reducers/eBookReducers/eBookCourseReducers';

import {
 detailUpdateReducer,
 getDetailByContentReducer,
 delailDeleteReducer,
 oneDetailReducer,
 detailCreateReducer,
} from './reducers/eBookReducers/eBookDetailReducers';
import {
 productReviewCreateReducer,
 productUpdateReducer,
 productDetailsReducer,
 productCreateReducer,
 productListReducer,
 productTopRatedReducer,
 productDeleteReducer,
} from './reducers/eShopReducers/productReducers';
import {
 orderListReducer,
 orderCreateReducer,
 orderDeliverReducer,
 orderDetailsReducer,
 orderListMyReducer,
 orderPayReducer,
} from './reducers/eShopReducers/orderReducers';
import { cartReducer } from './reducers/eShopReducers/cartReducers';
const reducer = combineReducers({
 // courses
 navbarList: navbarListReducers,
 courseList: courseListReducer,
 courseDetail: courseDetailsReducer,
 courseDelete: courseDeleteReducer,
 courseCreate: courseCreateReducer,
 courseUpdate: courseUpdateReducer,
 sectionList: sectionListReducer,
 sectionCreate: sectionCreateReducer,
 sectionDelete: sectionDeleteReducer,
 sectionUpdate: sectionUpdateReducer,
 videoCreate: videoCreateReducer,
 videoDelete: videoDeleteReducer,
 videoUpdate: videoUpdateReducer,
 //enroll
 enroll: courseEnrollReducer,
 userEnrollCourses: userEnrollCoursesReducer,
 createEnrollCourses: createEnrollCoursesReducer,
 getEnrollSection: getEnrollSectionReducer,
 //  for ebook reducer
 courses: getLanguagesReducer,
 languageCreate: languageCreateReducer,
 languageDelete: languageDeleteReducer,
 languageUpdate: languageUpdateReducer,
 course: getOneLanguageReducer,

 contentsByLang: getContentReducer,
 contentCreate: contentCreateReducer,
 contentDelete: contentDeleteReducer,
 contentUpdate: contentUpdateReducer,

 oneDetail: oneDetailReducer,
 detailCreate: detailCreateReducer,
 detailUpdate: detailUpdateReducer,
 detailByContentId: getDetailByContentReducer,
 detailDelete: delailDeleteReducer,

 //eshop
 productList: productListReducer,
 productTopRated: productTopRatedReducer,
 productDelete: productDeleteReducer,
 productCreate: productCreateReducer,
 productUpdate: productUpdateReducer,
 productDetails: productDetailsReducer,
 productReviewCreate: productReviewCreateReducer,
 cart: cartReducer,

 orderList: orderListReducer,
 orderCreate: orderCreateReducer,
 orderDetails: orderDetailsReducer,
 orderPay: orderPayReducer,
 orderDeliver: orderDeliverReducer,
 orderListMy: orderListMyReducer,

 userDetails: userDetailsReducer,
 userUpdateProfile: userUpdateProfileReducer,
 userList: userListReducer,
 userDelete: userDeleteReducer,
 userUpdate: userUpdateReducer,
 userLogin: userLoginReducer,
 userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
 ? JSON.parse(localStorage.getItem('userInfo'))
 : null;

const navbarFromStorage = localStorage.getItem('navbar')
 ? JSON.parse(localStorage.getItem('navbar'))
 : 'Dashboard';

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
 ? JSON.parse(localStorage.getItem('shippingAddress'))
 : {};

const cartItemsFromStorage = localStorage.getItem('cartItems')
 ? JSON.parse(localStorage.getItem('cartItems'))
 : [];

// const initialState = {
//  userLogin: { userInfo: userInfoFromStorage },
//  navbarList: { navbar: navbarFromStorage },
// };
const initialState = {
 cart: {
  cartItems: cartItemsFromStorage,
  shippingAddress: shippingAddressFromStorage,
 },
 userLogin: { userInfo: userInfoFromStorage },
 navbarList: { navbar: navbarFromStorage },
};
const middleware = [thunk];

const store = createStore(
 reducer,
 initialState,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
