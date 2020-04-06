import React from 'react';
import logo from './../assets/images/logo.jpg';
import './../styles/Navbar.css';

const Navbar = () => {
    return (
        <div className="div">
            <img src={logo} style={logoStyle} />
            <div style={buttonDivStyle}>
                <button
                    style={buttonStyle}>
                    Home
        </button>
                <button
                    style={buttonStyle}>
                    Event
        </button>
                <button
                    style={buttonStyle}>
                    About
        </button>
            </div>
        </div>
    );
}

export default Navbar;

const logoStyle = {
    height: '70px',
    margin: '0 0 0 40px',
};

const buttonStyle = {
    margin: '0 2% 0 2%',
}

const buttonDivStyle ={
    marginLeft: "70%",
    display: "flex"
}