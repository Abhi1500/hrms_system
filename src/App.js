import React from 'react';
// import ModelComponent from './Common/model';
import { useRoutes } from 'react-router-dom';
import Management from './Pages/Management/management';
import Dashboard from './Common/Dashboard/dashboard';
import Protected from './Pages/private/private'
// import Student from './Common/StudentList/Student';
import Welcome from './welcome/welcome';
import CreateStudent from './Pages/createStudent';

function App() {

  const routes = useRoutes([
    { path:'/', element: <Welcome/> },
    { path:'/g', element: <Protected page={<Dashboard />} />, children: [
      { path: 'student', element: <Management /> },{ path: 'createStudent', element: <CreateStudent />  },] },
  ])

  return routes
}

export default App;
