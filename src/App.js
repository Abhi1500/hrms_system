import React from 'react';
// import ModelComponent from './Common/model';
import { useRoutes } from 'react-router-dom';
import Management from './Pages/Management/management';
import Dashboard from './Common/Dashboard/dashboard';
import Protected from './Pages/private/private'
<<<<<<< HEAD
// import Student from './Common/StudentList/Student';
import Welcome from './welcome/welcome';
=======
import Student from './Common/StudentList/Student';
>>>>>>> 280f514eb45f6ff221e836648f0b04eb705ec3d3
import CreateStudent from './Pages/createStudent';

export default function App() {

  const routes = useRoutes([
<<<<<<< HEAD
    { path:'/', element: <Welcome/> },
    { path:'/g', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> },{ path: 'createStudent', element: <CreateStudent />  },] },
=======
    { path:'/wed', element: <Management/> },
    { path:'/', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> },{ path: 'createStudent', element: <CreateStudent /> }] }
>>>>>>> 280f514eb45f6ff221e836648f0b04eb705ec3d3
  ])
return routes;
}