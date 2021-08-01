import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="navbar-logo-link navbar-link">
          <i class="fas fa-hourglass-half"></i>
           TakeABreak
        </Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-link navbar-link-right">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link navbar-link-right">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
