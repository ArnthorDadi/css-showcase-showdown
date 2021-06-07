import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../Assets/images/logo.png';

import './index.css';

function NavBar() {
    return(
        <>
        <Navbar bg="dark" expand="sm">
            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="text-primary" href="/">Home</Nav.Link>
                    <Nav.Link className="text-primary" href="/Cards">Cards</Nav.Link>
                    <Nav.Link className="text-primary" href="/Buttons">Buttons</Nav.Link>
                    <Nav.Link className="text-primary" href="/Signatures">Signatures</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    ); 
}

export default NavBar;
