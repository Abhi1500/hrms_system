import React from 'react';
// import ModelComponent from './Common/model';
import { useRoutes } from 'react-router-dom';
import Management from './Pages/Management/management';
import Dashboard from './Common/Dashboard/dashboard';
import Protected from './Pages/private/private'

// import Student from './Common/StudentList/Student';
import Welcome from './welcome/welcome';
// =======
import Student from './Common/StudentList/Student';
// >>>>>>> master
import CreateStudent from './Pages/createStudent';
import LoginPage from './Pages/LoginPage';
import SignUpPage1 from './Pages/SignUpPage1';
import Welcome from './welcome/welcome';

export default function App() {

  const routes = useRoutes([
// <<<<<<< anil-welcome-page
    { path:'/', element: <Welcome/> },
    { path:'/loginPage', element: <LoginPage/> },
    { path:'/signUpPage1', element: <SignUpPage1/> },
// =======
// <<<<<<< Ashish-StudentList
    { path:'/', element: <Welcome/> },
    { path:'/g', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> },{ path: 'createStudent', element: <CreateStudent />  },] },
// =======
// >>>>>>> master
    { path:'/wed', element: <Management/> },
    { path:'/dashboard', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> },{ path: 'createStudent', element: <CreateStudent /> }] }
// >>>>>>> master
  ])
return routes;
}