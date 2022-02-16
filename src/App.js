import React from 'react';
import ModelComponent from './Common/model';
import { useRoutes } from 'react-router-dom';
import Management from './Pages/Management/management';
import Dashboard from './Common/Dashboard/dashboard';
import Protected from './Pages/private/private'
import Student from './Common/StudentList/Student';
import CreateStudent from './Pages/createStudent';
import LoginPage from './Pages/LoginPage';
import SignUpPage1 from './Pages/SignUpPage1';
import Welcome from './welcome/welcome';

export default function App() {

  const routes = useRoutes([
    { path:'/', element: <Welcome/> },
    { path:'/loginPage', element: <LoginPage/> },
    { path:'/signUpPage1', element: <SignUpPage1/> },
    { path:'/wed', element: <Management/> },
    { path:'/dashboard', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> },{ path: 'createStudent', element: <CreateStudent /> }] }
  ])
return routes;
}