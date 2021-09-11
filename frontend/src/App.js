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
import { Quiz } from './screens/eBookScreens/Quiz';
import QuizDetail from './screens/eBookScreens/QuizDetail';

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
     <Route
      path="/elearning/search/page/:pageNumber"
      component={DashboardElearn}
     />
     <Route path="/elearning" component={DashboardElearn} />
     {/* ebooks routes */}
     <Route path="/ebook/quiz" component={Quiz} exact />
     <Route path="/ebook/quiz/:id" component={QuizDetail} exact />
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
      bottom: '0px',
      left: '0px',
      zIndex: '1000',
     }}
    >
     <img
      className="border border-5 border-info rounded"
      width="100px"
      //   src="https://www.psycharchives.org/retrieve/096175aa-f7f2-4970-989d-d934c30b5551"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAABg1BMVEX//////v/8/////P/5/////v7RICajGB38/v////3//f32//+hAAD9//3///z/+v+dAACYAADokpTODBDSAADadnOmAADXHSnXQUv/9+ztnZ/WHx/iw76zXVqiDQ21VFjSHjLHCA30vLfkn5rOHR/GdnvuxL/bY2fhjovSAA6sAACQAADw29fv///JAAChDBL78/DhfIPMIiqcGx7VABilABGyPkj/9PSpFR2gGhmoHij76uXZAAC+fn/GJyPvzNDmuLv15emcGifbqKXKkpfasLrp0Na7ZW3aiZPq2tOkTU66jYabABavRkmfLjPSioutbHTjv8aoV13dWWDZen7nv7XVYGzXSFP80dbWsq++hYepJjTWaW3MNT3prarNeXvYmJHgOUHi3NXlZWflhoLlN0L44dXdRVj2wMrMZHPlpai7SFLGKDX30snvr6HOW1b94enfMknpcXzmioHvipqaSkfMpp6wR0KqY2+9fovem6W/mJ3gVWazaGXk1tfEUV70sr10qP84AAAgAElEQVR4nO19jV/bRrb2zGhsSxqPbCNjAXIdDMKgIFvClmMbgT8CgdIN8LLQkA+gTZub7ZJwQ3P3du9mm27+9HtGNsYkpNvdd5N4b/y0v19sWTLSo/PxnJkzMkIjjDDCCCOMMMIII4wwwggjjDDCCCOMMMIII4wwwggj/J+CQhBSyac+i+EE1sjG6jMPf+rzGEaolLZTmfjkyHSuQYR2bucqrid/6hMZRhCyFq+4I8t5D9bjjXrc+9RnMZRQ6Z2blRE510OBmDOynPdAwSQbc+PeKOZcA4wJupOMe/RTn8gwAsiR0ReZETfXAqQxzY7cagAEXZYLGCMnVRuZDkDRIhGOB8kBdOI17VOd0FCBgo0QSeGD2zZG5HQhte7seYRfIWMjI39e5ChhrBX/DGzDJPginknd6NArZNzJeJ8XOZQgmWJ85aK5ROfisVg9tSlHBnf9MvV5ZSuMa1tbHUQGAy/mSrAcA7jVziBpZDP5mZUPG1/l4su/m7xCDlGCWEhOvHNl3xufEzkQaDbu5tyKm5m7kpUIVr+qNmIVd7t2ZXBr+3MqPDXMb+SEiVTivwxshlIBb8RuNiqZdXRJGka1nczk5zOGTHAndJ+YoOESQA5BzlzdjReI2t9ISKfyGVkOCGBPUNOoV+K7Vz4Ik9jWdqqALrKVqMpb8aSnXPM9/yeBFSrfcIGdeiU3B4xcpmmooxQopXK7EJYwvEFEBlf7f5mkd+FmWOY4FEgYRxCJSGK3QYRfcSmflEhECV/jiNL9XLzEw+ykMkV7yWq9Umm42xqR+Nufzy17hHIuy+HVrucGRgKBG0oVz1MZErmfMnIJGv4vkwghWCZEqtUQYlwKmSCUhp93X8va8IpKEH/owU48nqy6i3ss8c60Sza1K3wPbnyw9eD3d+sD5GicOksvDicm9g++DghTxt7CQptQDHw4s/cOJw7v7W4gJgt27vf3mJr6oaPQoRWVCngGxZ1s9sHDncx2gN4+UdJZjt9RiZdd/epRFSxscAyZ1o502zdNS9ft6CvMpm39CtIvgY3i5FI078M7XzcOglBonpTsfG/XfCl61Pq4V/wPQFEIkmRh4cT7XfzZFkKRy3gLn9HOrVx1+8ZyJp5rACByJ7vzVhFMg8N0c9rK275hlPVxzOCfqGlFy+Vo1DSj0bI/TmR2/1g3jajv+1Y0qk+cM4LJScm3jKhhmZZlGpZvzUDk+1TX/9vxMLmzhziXLt5DeqLZu/WY68Z6qMRiuZq4+0SR2IHf9K17UzOz3xiWMY4QsFLeP/reNAzrxYt5ownbmFe2DDO/v/DtwXG+HNUPJ1mCBTNHQOrj8fn5/Wk/akStDaINrWv1wTdvxr8liF28hzPe+HM1NoB6oxH3wvhLSQA3316DMIzQoQ5WgozoyhKlk3nTzGtFPmGa45TM+2Wz3OYMUe9J2ij7C1TiCTblG9YSIlzz1oxmVD+i0q+c1ZBA9m6l4psDIi+Yu+vWKz1i3GQylYzn4qFCxowU7KhV1rCMVHJYssYVZOjpBUZYyWraiowmSul7NFsyonYLSUhTZfyN3zTLHtYSdDYf1ZeKCQkscwws6/Hku1ly2AB547t6I7ntECwp4Fza2u04RJlKHRyrmnK359YKTscLiiKjRZj0tW2YExwyNSdjS2MzmDlOwdHwJBhIWpOKrcLTAH1vlu1xpFEsYw6mZkX9NgLpPWUBOZSCREBP7Wg56shDTw6oHNpOue5ygRYxY86NVEN4kqjMb8+1g0RPmoQA8rJ207RalIF+0chFzFDIZMmcTlOhqgniK+Wo389G5Aji7ziSI2RKN/JL3Y2TIuo48tDHHCJLXFnPxOrVuY3gl/VKHByqDso588UDDxXp5JPj/xh/imiYzsCtzvyyZU6fiFiKpYugMUiOhlpp4XkXlNKTvGEdQjUH5ETNpVA6k8Bu+uUADb3lwGljpm7mYo2cu+zGY7fDSJPZ3NIQYdLkH8bOvR/+2OmqaMxltA/5Omr9uHRWo+yCgEFyIuREj1oTfe1EzvJR67nCpJ7lhPn7VLfMQ4UMr0q+ANROmHq3IHE3YhUQNZCbMs+yCpQYkURxaY0wxifv9EoMDbOzsl82TNO2j8cCStVQ4A2So1CwEGsfXVgVeVoCQ6oxNbScA9Hwg5znlqkvoCtDsUMLEqHt5EXibuTqP2lUFvpeod+rISnn3mXHpPNiRbeaQJD9/A1VmSBhkByEZvWy+X1/dxqUzCi4kAbkWOZRIfv11M+GZVnHIJz/DVQggLPOzoWoid9wkAxZS+EIMhIT5NCO2s8sHMuFo+kV3yo/t9IzNCJc411y9vtfTUJyJkNyQCPlbTufb5p++T5w829CDvG2e4I4uQrBhnqnrxyNcHqSCONCS+tnFo3LmPKzJ9O+AQKmFgbVQXKgUAByDi+/27FNqzxJFEFO1IBKwzB9e96hRBlScjDhKkb9WU3MsSdmHer1Rnxd1A9K+9zbUAmXgzsqomjvhMth5c4VjBNcg2ORdwBaxZ5Bb8ccTmdKZWuaSGKwQ1CXBdl4rNAuOdOHjx8fzo+daQirfDhHdRQNkyKTpX5gkMlaN+bE18RbrG5otCZB7FSc9f/8zxdPPNbdV+Ni1KYYZil1GkTd7LvkSEG63PRBUwI5RE2QXb+svxRjZkCO/lLzNI0Ntb4Bw2ntnSMm9d8Hj9wuN4q4cJl52XZW46D0UW3jxIFSqhuYFXR+cPRzRxAi0RdQlo+FKftKtkoURen9J0YI5qpE+WMrar8hXREIClnGUmIoLeYCpHPP0qdnef8k1c0uN+soTMFYwrVABdNXwE64oqiSqoRVOUbtlXw6HL7AyrGwnDCVaz1ywkF5le2CIxmB2DvB2EnJgmRF5dCt9CWUUPjwDnQJaC/spqHbpwzKbCxBNFlLNiqxRny1N2RKmEwoxZhrkYjwLQjNsiCNSLRgN0tBOBJ06jeN0hmYB2hIUZWXS5QKqiBQWUbU/1tHeCD6wWhCLU5kxNiUafoHjDEqD6/lwG3rlEDllvVDVZFUjUqSt1Nt1GO57drfO1QiBdPwD08LhZkjSDv+YYQSnih2vpuxzKZfaHVkyEpQYuZFKT5WKLQPrGjUPxYlf8058i3/Xqu1QdhQk7ORtsxy2dS/heqaUontxqEKd+tbf/dQmRbSzbKZtnXbjEJkeUqoBHnsD4ZvNqOW5R+IYSFM6FLaApGo58V4at5yhBtNWcCfEbX8ZwgNNTmdsiiQoqY1xlkCEcdoViqNxXXy92IBBJVWPm2WDXG0tfLjGTArqxI6zuumBXaRHkdMFTODyqzVbDYNIwo+9XMQzoGNpX0TqNJXJog0zDEHo9M0nGZet0vPx1rOmx/BjOqNWypFnfstqJao+p4DiUpY59X8tG/benl+hol5C6ZKZOHl+MHBS/jvFPiDWg2+IvjThK/b9vT4DCdciL32OODgYOngS4hcH/Nq/1EQMrP/+Ghmkjkv0+m6Key9mcki9rIUNYwZRH9tKIFQpk1OBpOaRi7aV0BOdoEHZB2lXjA5qfUzk3LNPkMJLKFwQF1CzDn0w1Bgzsv88KDD5Kf7X9NfXT4kSwkJcj1lOHJB4uW03gCtssxA+fWHNS53+hBX9C8EKeKEzCgYPJM7z6HcgThZQFMvNQDTXtV+7d5iSaKMcy4npMvrjHQxeBzsAuxp6oWL4mv2GUpgifAIXKUkaRo9sIyyYR2qdD6gWItIUqcTXjSR0Pkb7520C9pF4XCRMggWUNA8LDyBCU3jCtBFIhEaZiMV6lMJh/xhzhUVPg8RUaCsC11LVSOE9KbdRalBwqJe4Zh0t4nJ5q4PCsX1aYrUJUFOfopo/8WFO0E47nRLArRxx3mjvj1/QghwCmWFuFxUpOFEuNgmjqWeBmIPh/PgEHUH4i7ISqk7OAjUMCaY6W4c4J6E4lDuHUcQTaisH/4+vjNC7EG1CdCzVrRD+SstvGPUOw9nGiT2xkPFRPGtYxQwO7S1/gyq+OVHc3vhghEo1iHTrd+CCmT5j22tG6iDzdW5HnbXWlDcS936jJJE+/UO7Ln9LZR3oeWswT6rmw+6xzlz4XGr6ypYDloPv2B19e/p0389RO/NuW2Vo/o81ciG071lM14Cdbtut7Qf3ok/Edj+OhnPufVGw03GF8U0g0qo900ymXNdt5HKPNoIb/NZ/GY8FyIVjycra6hXvKLso1Rvu/tQC8l5nUylqvHbXXf+On4zBztkntWghEE3xHdkbiazH42US1D0SpBjzyKNRk7Dmb0Hf+rGGZAjzimEoasHgPx1KtV6w72ZTMbdWD3VRmJQvbacrNSrOSAotuwu/gB+VtxIVWL1WL0KiNXrsfgcIhzLEl1PumJrrhqLVeN/SzC4QZupeqzSqK6CPMSkvZiqL1fqi195BJTXf6fEXAh8hj76wCFI/3Ehlv2nEAhJbffLtakfj4r410Qa7VTAaFI3fmq37/zebcTDW+rtNBqx1Ffra+vbi/VYYzEgkqy1dpP1xvIq4KtFKPpTe4IctLZYr1TduZ9+Wr0LHMdXRThx2n8GwmKLLZBOxPvhJ7deWS4EGlcpDe5vuzEo/G7XkPKRx+M59g5FIn8cYDGSoDydnT0rJqT3TWKL3KF8VW1U3bYQgyRwG8mC+GDuZiW0IWC1DezkbkCwYjSbqrvb4mPF2amKjVzG32Xqy7nfB0LuBF9UY24ySySVKl/k6pVK/ZZYkcJI527dvaFAia9BeP5uOVY9AAd+cLVl+iOAS4Gok8x5LnFFgWwFJy3JjL1nd9EgtwcukHSYxFRVCe7mQrdykrF6ss1kWQbG1lIxN9ViKsfZJFT64ispg425R1QlaC7ZqG97jEHKK3rbjVhuE0F1pn6Rq1TC8STQBNipVnI3EnAniILRWsatO4/c6mvtQ410gKOICwb/7go3MewCWZRzybGFVz0hmCNFA3WvisqobzmhShlYeQX03XAr1Ycg6aB6IM5ifBHIIbvucu4rJCcYaD6Gd+r13C5RNZTNxHK3RN1ASCtVz92mKvWqFRcKFQmkD08gYC+27ACPHMip3600lgNMMflOkMMJxhJo9Rs59zXaTDbuio8+CDlUIveXDo/eKKBrkRhDhqsQQ3xcuWcJcmYRv7ZkIGIKboAdhXgNuMFO7636ixOoPEJuxyo3H/S0iELW4zH3FpI4yoYvAAmwrUpuB3HSTi7ndvriprbsxlJZuGXqFxCUNt1G9TVEbbQlfFAoa5mTX8AM22gvHos/QB+GHEUmp/m8ni+N01BVYbB/8GDK0JO8cCt95j3kiHbSgXoJ8n0rHmvcvZjGFU3dQEKQWo6lgt42LpwMdsGD5BTXMpX4JoSkh6nl1OaloHudiyV3kSzIqVccCL2ZB6hHjkhNYIuvIKt1aOd2vfqF9oEaD7Djm4ZhmPb8ZPieEaRNPp05gWgcklMgyrV/uLfx4o6BX7QhomxfzmGB+QEbmUojiXomRiUN+IsHZIAcFCw3YiBVCNl066m1y8j6u3gFUnxITsx1WqmGu1NTB8jB0nYdvIqg166bDD7Q4zTIgi7Gp6JN09+dmTk5ffnztJW2dd0UHX1AjgNZFhPQdxIdiDhIYkr7f/7i9ckhmIrI+sc+kaKxWCHZmxV3mfSiE5GUTKyRccACshB8bxWy2Qff3m1WUt8IEm4AOQ/6DeAQbUUSIyE5VQetZhq5hwht5S7IoU41trjGVIjyjdRPH2gEUVmyQ3JMs2mXSqV0ydZNy7KExAkt5ymQowgzpnAFA2My/NWaFqxfzlJwtBav5zYHrYyo5A6wsTzwx9x6LLMVuhVkoFQKxGIllltVQEBKN1xhQX01twa2tdkjJ+eg4DZw4aDv4j1yNLQez9WDCMdOHbL7+8bg/j+5oWO6FVqO7h+czJxMvTyc1lfSuu6b4Wb9KcQcDVOS/X7BG4h7Ev8rk6h32RIH5CTrcK+vkEP3rpCDlRzo4S1hORnQyC6I4Xr97hoSk4iCBFAsl+RkrpCDHtxsuM9o58KtqLTtupuUMER+H6um/u4Y9z8HshEG3qj/s0cvBpwmnZmpW6Yp3Mo+g0QSkfnpq8ngS48m+r017A6SEsXOhWLGnDyAmPPsKjkMgrSbvCRHE0pIdCZBzKlXbt++7bqhRAS5EIEIHP/psmlpHWjdJH1yiPYFfL4WuD1y0C+Zxt3NvQd37rQ377rxhx+GGxnN5sGPSuNi3QLGkXDGX1zYri1IswtEplj2voWSWXN4f4yXJH75RZ1c7z+SqpeBljXwwbCCh1oIlPXTFJRCQe+5XhRvAX/Vi2wVKuTVXKO6o4hFEw+TMXeu+12QN8lqrpJchz/aIweTrWo99igbu7Cc3XgMgjvUnZlqrOH+WSUfor7CmN4/+nH/RCteqQw4U14Iv9JnkcyAnB8o8NgRHPTxy+/+cl68UMwg7h1RWDndRSOIZrfuT1KsuQ0RZru5DdMHOaH91IFsNXm3UU/uEcjFa/FG41bYfyypClK33UpmjxC5Rw6wtw4F7K3lSpccCSS0263gc6I6gz3+9eQoYAxiVQaj9Mq0iGidzYs4vQQlKJaVlsqVVocONBWJk6Fy4mJ/OPudaqiQu8XprXjmNdjQZq4BZQAL+wYT7JlbT/4OD6ZytgsHbYvxLweytRsOaXBVpi2ow5bPIRn1yNEITWxXoYbtkbORisUe/e1GiEd1UZqTD2A5PALVJKMJSeWD6RBed4RbWfNUFo0ntTen35xq3Yak8HPxZAKJ0gs3kzgk1Qz4kNNdNoK2c9U5jlk7VRcVaNfiCql6RdzjAXJIAPYQ36OaRJ/FIGaFLoOZdgNs7LVQTz1yRE9MFmyrEZITgUIslvylJ7aySTe27JEPUJlHuEK4mPLW+KBfQa1Eu1W5hyMYRShJqBq/4lZA4OUsA0RUEixDcbXzXXfDdgMiCCYamFO94YhqA22JlQFfIDHZDjoH7AVokNhuBq6XMuARjCW+WgM7Zto3kJtyDkhwBrVVw3XAqSOIziXrwnJUyhK33PoOpEoV6kDqwd9Iih7fjwVBzlE4nrP1m9teWVvc2uTqA7HmBgqfOdFR6IC11FOvH2TXNpOVhns3ALlYO5+DKnMn24KgdL6bWa43TlseVv+42Gikbq+32+s7i5VG5qHgtlPYcRvuWkus5IZSwRWDHqp0vl5tVG8UHCpxrAatHTCuzcL5ByXkCiKcTIl8JSrP33iIRL692ahXc5k4pJCqKwb4IhKoObfu5m5mkpCXquB1kkTWFu/WKxCIoRKbXIRkHmukkluIetuZWL2eSaYgAbmZ15xj4okRsko9t7iHhKU+yDSAHLqxCCZUj6VWQXOToJKCqN+oL77+kHRcAVE5cUpiCcv8bw50PIH2HqUa4EYNcIr44kNwGxWjvdsp0MFC9CW3OyKZ0bV4VWSZm0COF4+78VwuntlCjHpzcJ2NijC/u+uKrEZIbTuTcwXdghwO0Rn23iZb8UwOvuHmKopo4Mw3xZfFk3MfkI63IJoBj0MdCFXd+ydqIc+xi4wlWky09h8fLbt3Y7e/WIMoCuJOAd948LdltxrbmcuKORbQMNnVVTGNsPqXBKp1X879pfsEBOfLW6Ij/Nm6eAuHquu9WQqxjBsyxnew+7oaiGNW51bvCGFee9idhBDvPiaW9LIBSufXxo0l/uatJ0wSqnmeJia3+kUpQVQLav0JpoF16ZfSoLczI6o4+ld7A3n/C/AnalkRM5IHlmFGrUMN/cosdrulDWY50McJSRajorRfYXMiev0uS3qxAlZMqopBGFGwXLwWiIDXgXmpfeUtdXFJAgHhRajY1jsr0n39MWfaQa10HluGWGxYgBNKvG+/H1hiMIdi0SCgqGoEX8oOkFCURhS1vx49AnmfhqvWgIyIAmqJkp7jYpXLinY5xUu76FsS7A/8RbDYJkaOxXHiNf8YU+0RxJRwyhaR87/53fWZ8xydvtpj3ZIcKibQxv3bRDotVbiVwiIsvKAICCZMZLGTaGeGghQsB1yMDzZVcCUSUVWJJ0hEAbuSuCZ3l52HPgiGJWta92JlKaEB1/0hCdGqwkWjJgD3Js7Fa84/QPnwNgh5c2/iSUErPn2ZXrF0X0gdfa9zRoOO3J31jEjSYICO1MKqUoKw3NsmMbAUcTWcKgpYPBJkg+9gMvhnoKaUuFQMFbfQxwPnwOGoBGGyFrZ2FIeoifJVWjfFCt9Scyl7dvJcFJ/modNhQSJ8/JQICWigdU+8D/t56NR4FwdM5hI56L2j3453X7ZIYbyPhamWhmTMcOuou+GJ+NKZ3qdZRaLMGZvwbdt/PH7i/Vad9cHRgTDThKpBn+IIPP1M5PJofrZ1usfCllrx8Lu//rXTH1dWsBxmHEzn07oP0H0NrIg9tsXLvIGOViyxOX1SPEn7XZi6raeff01ljma620oT4rtEb6AJu54ipo3lfd0S0G3zI0rfXwFcsVMqG2XLjE5BlQvGTr60y1HLMraIpoZBERNn9X7rr50rz7gAyOjI9oFJy5yelCAdHfpNo2nkp9G9FRMCl2me0FOxDKRp+qbtW7CfPUVkUtBBZ5bN/M/iO8Z8y4pCejxBbExvmmZIlVXOO9ee7McGOH4nHW0aZf0wjAWY4M60JcrPfa+3NBGzdY8Q9Zd3nlQgd1pQi1nPz865LMnaRuG5ZU2fddC5M2Ea1oJTg9D9X2CWh2O7C0uHhtE0o2cQt+/PmlFjwjkX3xe0jqxp68tzjzpi0P/ZTKFQOLIMfTjIEc/if+GD3YBlCwitc2Jb04ZlP9HC0IIIb3OZaN+9fSiWGSmAtUzzosawxFnHaKYPKNMIOtQNfYYSUEuzflQfg1vAGLirZc8SqYjavlhHHmY/wsbgTYHR4pLd9PdrQro4edMeDnKEg3Tm87qxy7vaBbISh3snivPT7jgNZh1Hqe29EyQVTcWT05ZfmhGLSiKYvLItO0tUyPOglvQZpIJ0mbLL/gLUG1ICLZggEZgUQTM2lG/d5zNIaEG37ALG6r4V9U9AGinkadouDc/DLYh2vxWQnoQTVWLwY1hh6ScQdOE9Qxt/fZjV+qvz1K6EJ4K7A7EUGhclkdfBmZ5LRRly9IRl5GdEBwmZ1aP2AkgildJTs2zuK4STGdsCcmj3OxYsMYsoeYdNw/6aSCCqg9N24eO3bv1GwCW/CWf9TH9N5G1ZjAAq/T5jBLXC5XyNWDwd1YiWoLiTt8wnnCYgUofkhJ8DOfoCFO+gXE78pn2kUKlnOXJ3XH9BFyP6mAvL2fdA+A7xs3SQKFyYNx227Ef9WQU8AgwAapt+PCakeFk+8MdwxwsyVOJiBbR+n4RPTH6HHIyL5MC0Vk4IVa4jR6NLutk0XxQ8UTnIQ9y6rVBNDJcaTcuyF2rgJeBaUCVdrgheYhdVeYQs6Ib1kkVAwRyK9YoYovi75ACzZMYyreeBeHktOZCtylE//3gp66EhXe4pENGodxzOfYqovL/FuGhPp/27GRwE/TXgXHJ0K2po4HyBPa2Pic4e/BY51vzJyensuHgyyptwgfQ15HCQ25aYqrf09MSUJ8L7cK6mUagQalHD6E6oPz+VkMzp5bnuBcX+E0s0GYklegXE0NpKOX0mtkXeJkdfKeV1Pxr9sd2NVdeSw/jMhC2sx/DzEw541keoKv8Z0MmJbjNKOFFj2vNnYgSmX0S2vGKiPyXMRD7yn6Ai2veb/xFO9bxNDtT5himEcIEkQlKvIYeKgs0rHD3WwRCtlWOPYm1o6qsrSIzDFfn5ptXtN7B0famVuOxQ9FpBf74LQkwAGboM/0BwGWPh8yvetpzy/v7+MdQJhlN8n+WI1dsi8HvZpbJVNvQxKPKHznIw4gStgWI2lxzHmZrOR0XLjpW37hU80fWGuaYp3hvtYrAFMhv62bT0LDmxoyUnrOLfJidcNFw70pv+9yQcQOuR021IgpIKdE5E5mIBMZYIOT80jeiE97G7RX8DhJppQ1qZ/lpMFTNnX7cMkdYt2z5+UgjEGJYov/qjdASu5nSlaRygedOaUOh1biVSeUR+moZqNlzCiGZ8kMrduVwqLAdCFignreaJMb4wmRnRYBiXN0rMKevm4RZKFGVQOGzKyIe+VS5DnVDef3Jy9tQLvL5bUdDDgQEEPoXPp7qLWa8jB1O+H236B+G2gm6Yh905eILGTQPI4dKX84dfChVAyJZdNqKdISQHk8lDPX8E95BxSSKYss542NJkQPIyIazaOnjatHf5ICEIF/NQQsxbZjogkyJQX0cOeJ+TN6xo2EjplIzodNBtPqhNw65nIA1frNgvWUIIhpO8GT32yBCtxQofrUllwsdX9CnRVaxGCEi8iErQfUjWZZFju9ndMJr25e9bifa1tg0xuanvy3I4IAZX/Qc7mm8zqiF2CkX3nyivFSVyz4z6Y2CbshYFIzqqUUJBM0F8e+xJsgpueYQYocQ5tgzziH+gNuN/BgrnjE1COB1beV7g7OqT17YsSDW+GC3ssmP5Vx75i72oWQbGTi9+PMOZgXrLWprxyPnZvhm19mfOlGLtbB4s8PlMgWM2thIt+4+fjE09OdbNaH4WnFmbN83o0cLswkFUDAYWuCwNTbYSTyLApBiMlSYcMfdxpbOidmxZE/tlMdJsXUcOPfJFwg96K+3Q87Qp9FHpPl0qWWI1fvoQ0ZmSGLg304bHJA84Ad2TF+GsWfpekyhPzPti8FD3fcuwVsbC57IMDah39vXMk+P0hIe4Grli0zQ4Nk88HrSX9g3btt4hhyWy6TwQQC4mKMpQgfq6XSqgJyXTgsstTRDydQn0km7ZTQ2K2GA/b5sijpl5Y0xjoqV31xJDbmA2Zql8wkEgD0fxiYlKtZnjkp2G0ztjoNv5ZVMTVjgqpP/EQn2sBU4b7rBlXflpAyp53449GWv1m7Wnek+0dUh7bKH76FpOnO62sVcJsdRcaS29mDg+PjyaDSDFYdFC6pwe7R8/Pj6cP2ghh8EAAAKZSURBVAnett1PCLGsvmD5TaH29jV6Jd4Q8RyUpXK/SZIgbQFqgdqVdjnMxSq6fscXvOj2qIpnCnZfMSoGhMJnJKPwwURiLYrn1bTBXnmCFG3S8+hApTIEoFydh3hrgE0vEawODjYpEZluWQvkYoiCq5Qf6f6VXylSEJHliNrv+BKLhYmYOxdDOwAiRyKKWGEhNknd5Vtgm5IsyMKXS66pmG4nn2Bx668BrDowomVDzM+MIfy2bm8dps/6Ro5ljO7nr5KDiJjoxZeNF6B9ImI9UkTjYio3Ei6ZFsukxbQuDceCFEXjWBwGlF78PYUDw8DykNGDPGAGZKnhz6LLAhODdCPBUtm0z/oPOBRtoUFUf+vnVBTRIXIZQPuzf/1RB9L9zWFBSuRielwEGnFk/zjcdcIPcoH/NCBkaEdQaoJW8QdH/TGV6P3nvln2T6/0tKqP7c/nt2ZEIXkWFRJm5WCwKQlTrB6Jp1+bL66Scfg5kUMTjLcmSunm2JVFaOIJvWKGpmz6V8nYt2ufDTmiVCTIO3eCt3qOGZ6c7j53KLhCxkH687Gc9yHCEmzJF5O449qVDDZbGpEjhvk6L9Irpf0AX2kVnyl9Pr81815g0SZaOP3BU648YIgWRuSEwgOHC6YjV4VhqzT6Hc/3gZzrtSEpC4cP5Lw0+h3P92Iv/Zn9VOVvhMKh8jz6jBTyPwKSSJAHuu0NxSjdsAFjVijb1iiVXwfMOs9NMzpyq+uA2Yn+9gD7CH2M2SNy3gOOTtLRETnvQSIwRuS8B0RGM75uT/4b/IzZx4dY+XP2zR9G2eo6KGK6iSn/Dj+A9/GBZYJlGQ33o8E/KfjwNV2NMMIII4wwwggjjDDCCCOMMMIII4wwwggjjDDCCB8C/wuMQ1elX9ai3AAAAABJRU5ErkJggg=="
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
