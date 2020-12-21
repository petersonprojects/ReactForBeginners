import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar id="headerTitle" bg="dark" expand="lg" sticky="top">
                {/* <Navbar.Brand id="headerTitle" href="/">React<b className="reactBold mr-auto" style={{color:'lightskyblue'}}>4Beginners</b></Navbar.Brand> */}

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto verticalLine">
                    <Nav.Link id="navLink" href="/">Home</Nav.Link>
                    <Nav.Link id="navLink" target="_blank" href="https://github.com/petersonprojects/reactForBeginners" >Github</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header