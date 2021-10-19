import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                    <h1 className="logo me-auto"><a href="index.html">Medilab</a></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#"> <Link to="/home">Home</Link></a></li>
                            <li><a className="nav-link scrollto" href="#"> <Link to="/about">About</Link> </a></li>
                            <li><a className="nav-link scrollto" href="#"><Link to="/services">Services</Link></a></li>
                            <li><a className="nav-link scrollto" href="#"> <Link to="/departments">Departments</Link></a></li>
                            <li><a className="nav-link scrollto" href="#"><Link to="/docktors">Docktors</Link></a></li>
                            <li><a className="nav-link scrollto" href="#"><Link to="/contact"> Contact</Link></a></li>
                            <li><a className="nav-link scrollto" href="#"><Link to="/login"> Login</Link></a></li>
                            <li><a className="nav-link scrollto" href="#"><Link to="/registar">Reginster</Link></a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

                </div>
            </header>
        </>
    );
};

export default Header;