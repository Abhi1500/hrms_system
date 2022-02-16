import React from 'react'
import './dashboard.css'
import Sidemenu from './sidemenu'
import { Outlet } from 'react-router-dom'


function Dashboard() {
  return (
<div className="grid-container pt-0">
  <div className="header"></div>
  <div className="sidemenu"><Sidemenu/></div>
  <div className="center-container"><Outlet/>
          
    </div> 
    </div>  )
}

export default Dashboard