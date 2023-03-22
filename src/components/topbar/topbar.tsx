import React, {FC} from "react";
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./topbar.scss";

const TopBar: FC = () => {
    return (
        <Navbar expand="md" bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand className="mx-3" as={NavLink} to="/">
                    Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" id="custom-toogler"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="mx-2" href="#dashboard">My Projects</Nav.Link>
                        <Nav.Link className="mx-2" href="#saisie">Contact</Nav.Link>
                        <Nav.Link className="mx-2" as={NavLink} to="/aboutme">About me</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://www.linkedin.com/in/stevie-lavenu/" target="_blank" className="mx-2 topbar-text">
                            <Image
                                src="/linkedin.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top me-2"
                                alt="User"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default TopBar;