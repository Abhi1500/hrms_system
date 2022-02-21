import React from 'react';
// import ModelComponent from './Common/model';
import { useRoutes } from 'react-router-dom';
import Management from './Pages/Management/management';
import Dashboard from './Common/Dashboard/dashboard';
import Protected from './Pages/private/private'

// import Student from './Common/StudentList/Student';
// =======
import Student from './Common/StudentList/Student';
import CreateStudent from './Pages/createStudent/createStudent';

export default function App() {

  const routes = useRoutes([
    { path:'/wed', element: <Management/> },
    { path:'/', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> },{ path: '', element: <CreateStudent /> }] }
  ])
return routes;
}