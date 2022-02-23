import React, {  } from 'react';
import { useNavigate, Link } from 'react-router-dom'

import './header.css'



export default function Header() {
  const navi = useNavigate();
  const routeChange = (e) => {
    e.preventDefault();
    navi('/');
    sessionStorage.removeItem('token');
  }
  

  return <>
    <div className='header-container'>
      <div className='hello'> Welcome </div>
      <div className='search d-flex'>
        <div style={{marginRight:'-30px'}}>

          <input type="text1" placeholder='search...' />
        </div>
        <div >
          <Link to='/' onClick={routeChange}><i className="bi bi-box-arrow-left" style={{ fontSize: '40px' }}></i></Link>
        </div>
      </div>
    </div>
  </>
}