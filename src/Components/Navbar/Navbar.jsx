import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
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
                        <Link to="/random" className="nav-item nav-link">Random</Link>
                        <Link to="/palette" className="nav-item nav-link">Palette</Link>
                        <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
                        <Link to="/about" className="nav-item nav-link">About Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
