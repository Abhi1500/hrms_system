import React from 'react'
import './dashboard.css'
import Sidemenu from './sidemenu'
import { Outlet } from 'react-router-dom'
import Header from './header'


function Dashboard() {
  return (
<div className="grid-container pt-0">
  <div className="header"><Header/></div>
  <div className="sidemenu"><Sidemenu/></div>
  <div className="center-container"><Outlet/>
          
    </div> 
    </div>  )
}

export default Dashboard