import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link className="navbar-logo navbar-link">
            <i class="fas fa-hourglass-half"></i>
            TakeABreak
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
