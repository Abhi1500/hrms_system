import React, {  } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import avatar from '../../images/avatar.png'

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
      <div className='search d-flex justify-content-center'>
        <div style={{marginRight:'0px'}}>

        <img src={avatar} alt='' style={{ borderRadius: '50%',height:'50px' ,paddingTop:'10px'}} className="img" />
        </div>&nbsp;&nbsp;
        <div >
        
          <Link to='/' style={{ }} onClick={routeChange}><i className="bi bi-box-arrow-left" style={{ fontSize: '40px',}}></i></Link>
        </div>
      </div>


    </div>


   
  </>
}