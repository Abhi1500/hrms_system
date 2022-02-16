import React from 'react';
import ModelComponent from './Common/model';
import { useRoutes } from 'react-router-dom';
import Management from './Pages/Management/management';
import Dashboard from './Common/Dashboard/dashboard';
import Protected from './Pages/private/private'
import Student from './Common/StudentList/Student';
import Welcome from './welcome/welcome';

function App() {

  const routes = useRoutes([
    { path:'/', element: <Welcome/> },
    { path:'/dfg', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> }] },
  ])

  return routes
}

export default App;
