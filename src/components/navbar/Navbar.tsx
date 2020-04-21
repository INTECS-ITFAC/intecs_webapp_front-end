import React from "react";
//import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/images/logo.jpg";
import "./Navbar.scss";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Intecs
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavbarComponent.propTypes = {};

export default NavbarComponent;
