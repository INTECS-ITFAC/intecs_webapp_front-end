import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <div className="nav-bar-container">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/events">
        <div>Events</div>
      </Link>
      <Link to="/projects">
        <div>Projecs</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
