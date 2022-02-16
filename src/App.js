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

export default function App() {

  const routes = useRoutes([
// <<<<<<< Ashish-StudentList
    { path:'/', element: <Welcome/> },
    { path:'/g', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> },{ path: 'createStudent', element: <CreateStudent />  },] },
// =======
    { path:'/wed', element: <Management/> },
    { path:'/', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> },{ path: 'createStudent', element: <CreateStudent /> }] }
// >>>>>>> master
  ])
return routes;
}