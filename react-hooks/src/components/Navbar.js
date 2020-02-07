import React from 'react';
import logo from '../img/logo.png';


const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo-container">
                <img className="logo" src={logo} alt="KidsFly logo" />
            </div>
        </header>
    );
};

export default Navbar;