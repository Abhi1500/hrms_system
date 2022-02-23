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


    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav ">
  <div className="container-fluid">
  <div className='nav-right' style={{ padding: '10px 50px 10px ', fontSize: '25px', justifyContent: 'start' }}>
                    <strong style={{ placeSelf: 'left', color: 'white' }}>  { h1}</strong>
                </div><br />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
       


      </ul>
      <div><h3 style={{color:'white',fontStyle:'initial',paddingLeft:'2.7vw'}}>Hello  { h1 } </h3></div>
      
        <img src={avatar} alt='' style={{ borderRadius: '50%' }} className="img" />
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
    {/* <a className="nav-link active" aria-current="page"  onClick={routeChange} >Logout</a> */}

    {/* </div> */}
    {/* </div> */}
    {/* </nav> */}
  </>
}