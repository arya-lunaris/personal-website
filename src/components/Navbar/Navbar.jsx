import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="navbar">
      <nav>
        <ul>
          <li className="navbar-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src="https://imgur.com/T7E7ZTl.png" alt="Logo" />
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;