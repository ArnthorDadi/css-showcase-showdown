import React from 'react';

import Nav from 'react-bootstrap/Nav';
import { GoMarkGithub } from "react-icons/go";

import './index.css';

function Footer() {
    return (
        <footer className="navbar-fixed-bottom footer bg-dark">
			<div className="container">
                <Nav className="d-flex justify-content-center">
                    <Nav.Item>
                        <Nav.Link><GoMarkGithub /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="">Copyright &copy; 2020</Nav.Link>
                    </Nav.Item>
                </Nav>
			</div>
		</footer>
    ); 
}

export default Footer;