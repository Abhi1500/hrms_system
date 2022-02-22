import React from 'react';
// import ModelComponent from './Common/model';
import { useRoutes } from 'react-router-dom';
import Management from './Pages/Management/management';
import Dashboard from './Common/Dashboard/dashboard';

// import Protected from './Pages/private/private'
import Student from './Common/StudentList/Student';
import LoginPage from './Pages/LoginPage';
import SignUpPage1 from './Pages/SignUpPage1';
import Welcome from './welcome/welcome';
import CreateStudent from './Pages/createStudent/createStudent'

export default function App() {

  const routes = useRoutes([
    {path: '/', element: <Welcome/>},
    {path:'/SignUpPage1', element: <SignUpPage1/>},
    {path:'/LoginPage',element: <LoginPage/>},
    { path:'/d', element: <Management/> },
    { path:'/dashboard', element:  <Dashboard/>, children: [
      { path: 'student', element: <Management /> },
      {path: 'CreateStudent', element: <CreateStudent/>}
    
    ] },
      
  ])

  return routes
}



