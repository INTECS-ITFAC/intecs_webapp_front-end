import React from 'react';
import logo from './../assets/images/logo.jpg';

const Footer = () => {
    return (
        <div>
            <img src={logo} style={logoStyle} alt={'logo'} />
            Footer Here
        </div>
    );
}

export default Footer;

const logoStyle = {
    height: '70px',
    margin: '0 0 0 40px',
};
