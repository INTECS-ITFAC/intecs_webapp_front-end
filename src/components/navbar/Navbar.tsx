import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/images/intecs_logo.png";
import "./Navbar.scss";
import { useLocation } from "react-router-dom";

// @ts-ignore
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
          <Nav className="ml-auto" activeKey={location.pathname}>
            <div className="link-div">
              <Nav.Link href="/">Home</Nav.Link>
            </div>
            <div className="link-div">
              <Nav.Link href="/events">Events</Nav.Link>
            </div>
            <div className="dropdown link-div">
              <Nav.Link>Projects</Nav.Link>
              <div className="dropdown-content">
                <a href="/linkIT">LinkIT</a>
                <a href="/INTECSOpenSourceProjects">
                  INTECS Open Source Projects
                </a>
              </div>
            </div>
            <div className="dropdown link-div">
              <Nav.Link href="/studentsWork">Student's Work</Nav.Link>
              <div className="dropdown-content">
                <a href="/StudentsWork">First year projects</a>
                <a href="/StudentsWork">Second year projects</a>
                <a href="/StudentsWork">Fourth year projects</a>
                <a href="/StudentsWork">Research publications</a>
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

export default NavbarComponent;
