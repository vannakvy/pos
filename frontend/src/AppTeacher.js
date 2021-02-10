import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideBar from './components/teacherComponents/SideBar';
import TeacherScreen from './screens/teacher/TeacherScreen';

const AppTeacher = () => {
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
      <Route path="/teacherCourses" component={TeacherScreen} />
      <Route path="/teacherStudents" component={TeacherScreen} />
     </Switch>
    </div>
   </div>
  </Router>
 );
};

export default AppTeacher;
