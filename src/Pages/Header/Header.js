import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseFirebase from '../Hook/UseFirebase';

const Header = () => {

    const { user, handleLogOut } = UseFirebase();
    console.log(user);
    return (
        <div>
            <Navbar className=" " collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Contact Manager
                    </Navbar.Brand>
                    <Navbar />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="text-decoration-none text-white " to="/home">Home</Link>

                            <Link className="text-decoration-none text-white ms-2" to="/contact">Contact</Link>

                            {
                                user.email ?
                                    <button onClick={handleLogOut} className="text-decoration-none text-white ms-2 btn-dark" href="#contact"> Logout</button> : <Link
                                        className="text-decoration-none text-white ms-2" to="/login">Login</Link>
                            }

                        </Nav>
                        <Nav>

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