import React from 'react';
import logo from './../assets/images/logo.jpg';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="div">
            <img src={logo} style={logoStyle} />

            <Link to="/"><button
                style={buttonStyle}>
                Home
        </button></Link>
            <Link to="/events"><button
                style={buttonStyle}>
                Event
        </button></Link>
            

        </div>
    );
}

export default Navbar;

const logoStyle = {
    height: '70px',
    margin: '0 0 0 40px',
};

const buttonStyle = {
    marginLeft: "auto",
    display: "flex"
}
