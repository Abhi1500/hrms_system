import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../welcome/images/logo.png'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

export default function  Sidemenu() {
    const [viewstudentList, setViewstudentList] = useState(false)
    const [viewteacherstList, setViewteacherstList] = useState(false)
    return (
        <div className="w-60 h-100 shadow-md  absolute py-0 " id="sidenavSecExample">
            <div className="pt-0 pb-2 px-6">
                <a href="#!">
                    <div className="flex items-center ">
                        <div className="shrink-0 mb-3">
                            <img src={image} className="rounded-full " style={{width:'-webkit-fill-available'}} alt="Avatar" />
                        </div>
                        
                    </div>
                </a>
                <div><p style={{color:'blue'}}><strong>St. Xavier's High School</strong></p></div>
            </div>
            <ul className="relative px-1 ">
                <li className="relative my-3">
                <button type="button" class="btn btn-secondary" style={{ backgroundColor: '#0dcaf0', border: 'none', color: 'white' }}><i class="bi bi-speedometer2"style={{color:'black',fontSize:'20px'}}></i>  Dashboard</button>

                </li>
                <li className="relative my-3" id="sidenavSecEx2">
                    <div className="d-flex justify-content-center ">
                        <Dropdown outline color="primary" isOpen={viewteacherstList} toggle={() => setViewteacherstList(!viewteacherstList)} >
                            <DropdownToggle caret style={{ backgroundColor: '#0dcaf0', border: 'none', color: 'white' }} >
                            <i class="bi bi-person-circle"style={{color:'black',fontSize:'20px'}}></i>  Teachers
                            </DropdownToggle>
                            <DropdownMenu
                            >
                                <DropdownItem header>
                                    <span><Link to='teachers' style={{ textDecoration: 'none' }}>Teachers List</Link></span>
                                </DropdownItem>
                                <DropdownItem>
                                    <span><Link to='createTeachers' style={{ textDecoration: 'none' }}>Add Teachers</Link></span>
                                </DropdownItem>


                            </DropdownMenu>
                        </Dropdown></div>
                </li>
                <li>
                    <div className="d-flex justify-content-center ">
                        <Dropdown outline color="primary" isOpen={viewstudentList} toggle={() => setViewstudentList(!viewstudentList)} >
                            <DropdownToggle caret style={{ backgroundColor: '#0dcaf0', border: 'none', color: 'white' }} >
                            <b><i class="bi bi-people-fill"style={{color:'black',fontSize:'20px'}}></i></b>  Students
                            </DropdownToggle>
                            <DropdownMenu
                            >
                                <DropdownItem header>
                                    <span><Link to='student' style={{ textDecoration: 'none' }}>Student List</Link></span>
                                </DropdownItem>
                                <DropdownItem>
                                    <span><Link to='createStudent' style={{ textDecoration: 'none' }}>Add Student</Link></span>
                                </DropdownItem>


                            </DropdownMenu>
                        </Dropdown>
                    </div>
// <<<<<<< Ashish-StudentList
// =======




                    <li className="relative my-3">
                        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <i className="bi bi-speedometer"></i>
                            <span><Link to='student'>Student</Link></span>
                        </a>
                    </li>
                    
                    <li className="relative my-3">
                        <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                            <i className="bi bi-speedometer"></i>
                            <span><Link to='createStudent'>create Student</Link></span>
                        </a>
                    </li>

// >>>>>>> master
                </li>
            </ul>

        </div>
    )
}

