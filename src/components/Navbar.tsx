import React from 'react';
import logo from './../assets/images/logo.jpg';
import './../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="div">
            <img src={logo} style={logoStyle} />

            <button
                style={buttonStyle}>
                Home
        </button>

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
