import React from 'react'
import './dashboard.css'
import Sidemenu from './sidemenu'
import { Outlet, useLocation } from 'react-router-dom'


function Dashboard() {
  return (
<div className="grid-container">
  <div className="header"></div>
  <div className="sidemenu"><Sidemenu/></div>
  <div className="center-container"><Outlet/>
          
    </div> 
    </div>  )
}

export default Dashboard