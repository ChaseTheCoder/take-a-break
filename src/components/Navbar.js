import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/take-a-break/" className="navbar-logo-text">
          <i className="fas fa-hourglass-half"></i>
            TakeABreak
        </Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-link">
          <Link to="/take-a-break/" className="navbar-link-text">
            Home
          </Link>
        </li>
        <li className="navbar-link">
          <Link to="/take-a-break/about" className="navbar-link-text">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
