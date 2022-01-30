import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar className=" " collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Contact Manager
                    </Navbar.Brand>
                    <Navbar />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="text-decoration-none text-white " to="/home">Home</Link>
                            <Link className="text-decoration-none text-white ms-2" to="/login">Login</Link>
                            <a className="text-decoration-none text-white ms-2" href="#contact"> Logout</a>

                        </Nav>
                        <Nav>
                            <Link className="text-decoration-none text-white ms-2" to="blog">Contact List</Link>
                            <Link eventKey={2} href="#memes">

                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;