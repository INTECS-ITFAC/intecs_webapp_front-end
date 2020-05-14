import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell,faFlag } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/images/intecs_logo.png";
import "./AdminNavBar.scss";

function AdminNavbarComponent() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        AdminLTE
      </Navbar.Brand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <Nav className="mr-auto">
      <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link href="#">
        <FontAwesomeIcon style={{color:"white"}} icon={faEnvelope} />
    </Nav.Link>

    <Nav.Link href="#">
        <FontAwesomeIcon style={{color:"white"}} icon={faBell} />
    </Nav.Link>

    <Nav.Link href="#">
        <FontAwesomeIcon style={{color:"white"}} icon={faFlag} />
    </Nav.Link>&nbsp;

    <Nav.Link href="#">
        Profile
    </Nav.Link>&nbsp;
  </Navbar.Collapse>


    </Navbar>
  
  </>
  );
}

AdminNavbarComponent.propTypes = {};

export default AdminNavbarComponent;
