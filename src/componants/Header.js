import React from "react";
import "./Home.css";

export default function Header() {
    return (
        <div>
            <nav className="autohide navbar navbar-expand-lg navbar-dark bg-success">

                <div className="container-fluid">
                    <a className="navbar-brand d-flex flex-row" href=" #">
                        <img src="/querio.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-middle fs-1" />
                        <div className="logotext mt-0">
                            <h3 className="mt-1 ms-2 mb-0">Quora</h3>
                            <h6 className="mt-0 ms-2">for collage</h6>
                        </div>

                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">


                        <ul className="  navbar-nav ms-0 mb-5 mb-lg-0 ">

                            <li className="nav-item me-3 me-lg-0 px-2" >
                                <a className="nav-link mx-1 text-white" href="/">
                                    <h4><i className="fa-solid fa-house"></i></h4>
                                </a>
                            </li>

                            <li className="nav-item me-3 me-lg-0 px-2" >
                                <a className="nav-link mx-1 text-white" href="/">
                                    <h4><i className="fa-solid fa-book"></i></h4>
                                </a>
                            </li>

                            <li className="nav-item me-3 me-lg-0 px-2" >
                                <a className="nav-link mx-1 text-white" href="/">
                                    <h4><i className="fa-solid fa-pen-to-square"></i></h4>
                                </a>
                            </li>

                            <li className="nav-item me-3 me-lg-0 px-2" >
                                <a className="nav-link mx-1 text-white" href="/">
                                    <h4><i className="fa-solid fa-user-group"></i></h4>
                                </a>
                            </li>

                            <li className="nav-item me-3 me-lg-0 px-2" >
                                <a className="nav-link mx-1 text-white" href="/">
                                    <h4><i className="fa-solid fa-bell"></i></h4>
                                </a>
                            </li>

                        </ul >
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

                            <button type="button" className="btn btn-outline-light">Go</button>
                        </form>


                    
                        <div className="btn-group ms-2">
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="dev.jpg" width="40" height="40" className="rounded-circle"/>
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">My Profile</a></li>
                                <li><a className="dropdown-item" href="/">Setting</a></li>
                                <li><a className="dropdown-item" href="/">Privecy and Safety</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="/">Sign Out</a></li>
                            </ul>
                        </div>

                    </div>

                </div >
            
            </nav >
        </div >
    );
}
