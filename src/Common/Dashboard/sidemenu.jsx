import React from 'react'
import { Link } from 'react-router-dom'

function Sidemenu() {
    return (
        <div className="w-60 h-100 shadow-md bg-white absolute py-3 " id="sidenavSecExample">
            <div className="pt-4 pb-2 px-6">
                <a href="#!">
                    <div className="flex items-center ">
                        <div className="shrink-0">
                            {/* <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar" /> */}
                        </div>
                        <div className="grow ml-3">
                            <p className="text-sm font-semibold text-blue-600">School Name</p>
                        </div>
                    </div>
                </a>
            </div>
            <ul className="relative px-1 ">
                <li className="relative my-3">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                    <i className="bi bi-speedometer"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="relative my-3" id="sidenavSecEx2">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
                    <i className="bi bi-person-circle"></i>
                        <span>teachers</span>
                        <i className="bi bi-caret-down-fill"></i>
                    </a>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx2" aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                            <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 1</a>
                        </li>
                        <li className="relative">
                            <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 2</a>
                        </li>
                    </ul>
                </li>
                <li className="relative my-3" id="sidenavSecEx3">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx3" aria-expanded="false" aria-controls="collapseSidenavSecEx3">
                    <i className="bi bi-people-fill"></i>
                        <span>Students</span>
                        <i className="bi bi-caret-down-fill"></i>

                    </a>
                    <ul className="relative accordion-collapse collapse" id="collapseSidenavSecEx3" aria-labelledby="sidenavSecEx3" data-bs-parent="#sidenavSecExample">
                        <li className="relative">
                            <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 3</a>
                        </li>
                        <li className="relative">
                            <a href="#!" className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 4</a>
                        </li>
                    </ul>
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
                    
                </li>
            </ul>
            
        </div>
    )
}

export default Sidemenu