// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your styles

const Nav = () => {
  return (
    <nav className='nav-container'>
      <div className="logo">INFY HOSPITAL</div>
      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Pages/About">About</Link></li>
          <li><Link to="/Pages/Service">Service</Link></li>
          <li><Link to="/Pages/Contact">Contact</Link></li>
        </ul>
      </div>
      <div className="other-options">
        <ul>
          <li><Link to="/patientlogin">Patient Login</Link></li>
          <li><Link to="/adminlogin">Admin Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
