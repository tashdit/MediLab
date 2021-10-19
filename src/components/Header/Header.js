import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Navbar, Container, Nav, } from 'react-bootstrap';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" className="header" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="logo">MediLab</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/ourServices">Services</Nav.Link>

                        {user?.email ? <Nav.Link onClick={logOut} as={Link} to="/login">Log Out</Nav.Link> :
                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                        <Nav.Link as={Link} to="/registar">Registar</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>


    );
};

export default Header;