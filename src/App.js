import React from 'react';
import { useRoutes } from 'react-router-dom';
import Management from './Pages/Management/management';
import Dashboard from './Pages/Dashboard/dashboard';
import Protected from './Pages/private/private'
import Welcome from './welcome/welcome';
import CreateStudent from './Pages/createStudent/createStudent';
import LoginPage from './Pages/LoginPage';
import SignUpPage1 from './Pages/SignUpPage1';
import UpdateStudent from './Pages/updateStudent/updateStudent';
// import Student from './Common/StudentList/Student';
// =======

export default function App(props) {

  const routes = useRoutes([

    { path: '/', element: <Welcome /> },
    { path: '/loginPage', element: <LoginPage /> },
    { path: '/signUpPage1', element: <SignUpPage1 /> },
    {
      path: '/dashboard', element: <Protected page={<Dashboard />} />, children: [
        { path: 'student', element: <Management /> },
        { path: 'createStudent', element: <CreateStudent /> },
        { path: 'updateStudent', element: <UpdateStudent /> },
      ]
    }
    
  ])
  return routes;
}