import React from 'react';
import './Navbar.css';
import logo from '../../Assets/logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="navbar-brand m-2">
                    <img src={logo} alt="LOGO" height="50" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Random</a>
                        <a className="nav-item nav-link" href="#">Palette</a>
                        <a className="nav-item nav-link" href="#">Contact Us</a>
                        <a className="nav-item nav-link" href="#">About Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
