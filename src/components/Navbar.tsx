import React from 'react';
import logo from './../assets/images/logo.jpg';

import {
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="div">
            <img src={logo} style={logoStyle} alt={'logo'} />

            <Link to="/">
                <button
                style={buttonStyle}>
                Home
                </button>
            </Link>
            <Link to="/events">
                <button
                style={buttonStyle}>
                Events
                </button>
            </Link>
            <Link to="/projects">
                <button
                style={buttonStyle}>
                Projecs
                </button>
            </Link>
            <Link to="/about">
                <button
                style={buttonStyle}>
                About
                </button>
            </Link>


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
