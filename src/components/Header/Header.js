import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <h1 class="logo me-auto"><a href="index.html">Medilab</a></h1>
                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#"> <Link to="/home">Home</Link></a></li>
                            <li><a class="nav-link scrollto" href="#"> <Link to="/about">About</Link> </a></li>
                            <li><a class="nav-link scrollto" href="#"><Link to="/services">Services</Link></a></li>
                            <li><a class="nav-link scrollto" href="#"> <Link to="/departments">Departments</Link></a></li>
                            <li><a class="nav-link scrollto" href="#"><Link to="/docktors">Docktors</Link></a></li>
                            <li><a class="nav-link scrollto" href="#"><Link to="/contact"> Contact</Link></a></li>
                            <li><a class="nav-link scrollto" href="#"><Link to="/docktors">Reginster</Link></a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a>

                </div>
            </header>
        </>
    );
};

export default Header;