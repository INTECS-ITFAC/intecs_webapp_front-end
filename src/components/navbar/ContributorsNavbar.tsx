import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/images/intecs_logo.png";
import "./Navbar.scss";

function ContributorsNavbarComponent() {
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
        <Nav className="ml-auto">
          <div className="link-div">
            <Nav.Link href="/">Back</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

ContributorsNavbarComponent.propTypes = {};

export default ContributorsNavbarComponent;
