import React from 'react';
import { Link } from 'react-router-dom'; // I added this
import './Navbar.css';
import profile from '../assets/images/profile-img.jpg';
import logo from '../assets/images/hotel-logo.jfif';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Holiday Inn Logo" />
        <span className="logo-title">Holiday Inn</span>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="services">Services</a>
        <a href="explore">Banquets</a>
        <a href="reservations">Reservations</a>
        {/* <a href="contact">Contact</a> */}
      </div>
      <div className="search-filter">
        <div className="navbar-search">
          <img src={profile} className="profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
