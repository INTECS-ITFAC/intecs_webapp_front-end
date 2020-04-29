import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/images/intecs_logo.png";
import "./Navbar.scss";

function NavbarComponent() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="nav-bar"
      fixed="top"
    >
      <Navbar.Brand href="/">
        <div className="row align-items-center brand-div">
          <img
            alt="logo"
            src={Logo}
            className="d-inline-block align-top brand-img"
          />
          Information Technology Society <br />
          University of Moratuwa
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div className="link-div">
            <Nav.Link href="/">Home</Nav.Link>
          </div>
          <div className="link-div">
            <Nav.Link href="/events">Events</Nav.Link>
          </div>
          <div className="link-div">
            <Nav.Link href="/projects">Projects</Nav.Link>
          </div>
          <div className="link-div">
            <Nav.Link href="/about">About</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavbarComponent.propTypes = {};

export default NavbarComponent;
