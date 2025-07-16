import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onContactClick, onSkillsClick, onAboutClick }) => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-4">
        <div className="collapse navbar-collapse show" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row gap-5 custom-font align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link nav-custom">Home</Link>
            </li>
            <li className="nav-item">
              <button onClick={onAboutClick} className="nav-link nav-custom">About</button>
            </li>
            <li className="nav-item">
              <button onClick={onSkillsClick} className="nav-link nav-custom">Skills</button>
            </li>
            <li className="nav-item">
              <button onClick={onContactClick} className="nav-link nav-custom">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
