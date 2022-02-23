import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../welcome/images/logo.png'

export default function Sidemenu() {
    
    return (
        <>
            <nav className="navbarr" style={{ height: '100%', width: '100%' }}>
                <img src={image} className="rounded-full " style={{ width: '-webkit-fill-available', textAlign: 'center' }} alt="Avatar" />
                <div className="container-fluid">
                    <div><p style={{ color: 'black',textAlign:'center' }}><strong>St. Xavier's High School</strong></p></div>

                    <ul className="navbar-nav " >
                    <hr/>
                    <li className="nav-item">
                            <a className="nav-link">&nbsp;&nbsp;<i className="bi bi-window-dash" style={{ color: 'black', fontSize: '20px' }}></i>  Dashboard</a>
                        </li><hr/>
                        <li className="nav-item">
                            <a className="nav-link" >
                                <details style={{listStyleType:'none'}}>
                                    <summary style={{listStyleType:'none'}}>&nbsp;&nbsp; <i className="bi bi-person-circle" style={{ color: 'black', fontSize: '20px' }}></i>  Teachers</summary>
                                    <div style={{textAlign:'center'}}><span><Link to='teachers' style={{ textDecoration: 'none' }}>Teachers List</Link></span></div><br/>
                                    <div style={{textAlign:'center'}}><span><Link to='createTeachers' style={{ textDecoration: 'none' }}>Add Teachers</Link></span></div>
                                </details>
                            </a>
                        </li><hr />
                        <li className="nav-item">
                            <a className="nav-link" href="#"><details>
                                <summary style={{listStyleType:'none'}}><b>&nbsp;&nbsp;<i className="bi bi-people-fill" style={{ color: 'black', fontSize: '20px' }}></i></b>  Students</summary>
                                <div style={{textAlign:'center'}}><span><Link to='student' style={{ textDecoration: 'none' }}>Student List</Link></span></div><br/>
                                <div style={{textAlign:'center'}}><span><Link to='createStudent' style={{ textDecoration: 'none' }}>Add Student</Link></span></div>
                            </details></a>
                        </li><hr />
                        <li className="nav-item">
                            <a className="nav-link" href="#">&nbsp;&nbsp;<i className="bi bi-binoculars-fill" style={{ color: 'black', fontSize: '20px' }}></i>  About Us</a><hr/>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
       
    )
}

