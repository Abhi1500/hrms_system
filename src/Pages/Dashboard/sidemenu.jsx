import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import image from '../../welcome/images/logo.png'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

export default function Sidemenu() {
    const [viewstudentList, setViewstudentList] = useState(false)
    const [viewteacherstList, setViewteacherstList] = useState(false)
    return (
        <div className="w-60 h-100 shadow-md  absolute py-0 " id="sidenavSecExample">
            <div className="pt-0 pb-2 px-6">
                <a href="#!">
                    <div className="flex items-center ">
                        <div className="shrink-0 mb-3">
                            <img src={image} className="rounded-full " style={{ width: '-webkit-fill-available' }} alt="Avatar" />
                        </div>

                    </div>
                </a>
                <div><p style={{ color: 'blue' }}><strong>St. Xavier's High School</strong></p></div>
            </div>
            <ul className="relative px-1 ">
                <li className="relative my-3">
                    <button type="button" className="btn btn-secondary" style={{ backgroundColor: '#0dcaf0', border: 'none', color: 'white' }}><i className="bi bi-speedometer2" style={{ color: 'black', fontSize: '20px' }}></i>  Dashboard</button>

                </li>
                <li className="relative my-3" id="sidenavSecEx2">
                    <div className="d-flex justify-content-center ">
                        <Dropdown outline color="primary" isOpen={viewteacherstList} toggle={() => setViewteacherstList(!viewteacherstList)} >
                            <DropdownToggle caret style={{ backgroundColor: '#0dcaf0', border: 'none', color: 'white' }} >
                                <i className="bi bi-person-circle" style={{ color: 'black', fontSize: '20px' }}></i>  Teachers
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
                                <b><i className="bi bi-people-fill" style={{ color: 'black', fontSize: '20px' }}></i></b>  Students
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>
                                    <span><Link to='student' style={{ textDecoration: 'none' }}>Student List</Link></span>
                                </DropdownItem>
                                <DropdownItem>
                                    <span><Link to='createStudent' style={{ textDecoration: 'none' }}>Add Student</Link></span>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </li>
            </ul>

        </div>
    )
}

