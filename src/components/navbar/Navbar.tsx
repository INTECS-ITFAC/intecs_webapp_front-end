import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/images/intecs_logo.png";
import "./Navbar.scss";
import { useLocation } from "react-router-dom";

function NavbarComponent() {
  const location = useLocation();

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
        {location.pathname === "/contributes" ? (
          <Nav className="ml-auto">
            <div className="link-div">
              <Nav.Link href="/">Back</Nav.Link>
            </div>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <div className="link-div">
              <Nav.Link href="/">Home</Nav.Link>
            </div>
            <div className="link-div">
              <Nav.Link href="/events">Events</Nav.Link>
            </div>
            <div className="dropdown">
              <Nav.Link>Projects</Nav.Link>
              <div className="dropdown-content">
                <a href="/linkIT">LinkIT</a>
                <a href="/INTECSOpenSourceProjects">
                  INTECS Open Source Projects
                </a>
                <a href="/studentsWork">Students' Work</a>
              </div>
            </div>
            <div className="link-div">
              <Nav.Link href="/gallery">Gallery</Nav.Link>
            </div>
            <div className="link-div">
              <Nav.Link href="/about">About Us</Nav.Link>
            </div>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

NavbarComponent.propTypes = {};

export default NavbarComponent;
