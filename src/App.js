import React from 'react';
import ModelComponent from './Common/model';
import { useRoutes } from 'react-router-dom';
import Management from './Pages/Management/management';
import Dashboard from './Common/Dashboard/dashboard';
// import Protected from './Pages/private/private'
import Student from './Common/StudentList/Student';
import LoginPage from './Pages/LoginPage';
import SignUpPage1 from './Pages/SignUpPage1';

function App() {

  const routes = useRoutes([
    {path:'/', element: <SignUpPage1/>},
    {path:'/LoginPage',element: <LoginPage/>},
    { path:'/d', element: <Management/> },
    { path:'/u', element:  <Dashboard/>, children: [
      { path: 'student', element: <Management /> }] },
  ])

  return routes
}

export default App;
{/* <Protected page={<Dashboard />} */}