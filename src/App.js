import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Studentlist from './Pages/Students/studentList';
import Dashboard from './Pages/Dashboard/dashboard';
import Protected from './Common/private'
import Welcome from './welcome/welcome';
import CreateStudent from './Pages/Students/createStudent';
import LoginPage from './Pages/LoginPage';
import SignUpPage1 from './Pages/SignUpPage1';
import UpdateStudent from './Pages/Students/updateStudent';
import Maincontent from './Pages/Dashboard/mainContent/mainContent';
import axios from 'axios';
import loading from './images/loading.gif'

export default function App(props) {
const [loader, setLoader] = useState(false)

  useEffect(() => {
    axios.interceptors.request.use(function (config) {
      setLoader(true)
      return config;
    }, function (error) {
      setLoader(false);
      return Promise.reject(error);
    });
  
  axios.interceptors.response.use(function (response) {
      setLoader(false);
      return response;
    }, function (error) {
      setLoader(false);
      return Promise.reject(error);
    });
  }, [])
  
  const routes = useRoutes([

    { path: '/', element: <Welcome /> },
    { path: '/loginPage', element: <LoginPage /> },
    { path: '/signUpPage1', element: <SignUpPage1 /> },
    {
      path: '/dashboard', element: <Protected page={<Dashboard />} />, children: [
        { path: '', element: <Maincontent /> },
        { path: 'student', element: <Studentlist /> },
        { path: 'createStudent', element: <CreateStudent /> },
        { path: 'updateStudent', element: <UpdateStudent /> },
      ]
    }
    
  ])
  return<>
   {routes}
   { loader && <div class="w-100 h-100 position-absolute d-grid" style={{
     backgroundColor: '#80808033',
    placeContent: 'center'
   }}>
     <img src={loading}/>
   </div> } 
  </>;
}
