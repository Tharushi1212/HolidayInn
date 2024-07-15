import React from 'react';
import './Services.css';
import mainImage from '../assets/images/Main.jpg';
import secondaryImage from '../assets/images/Secondary.jpg';

const Services = () => {
  return (
    <div className="container1">
      <div className="main-image">
        <img src={mainImage} alt="Main" />
      </div>
      <div className="content">
        <h1>Services</h1>
        <p>
          We offer a wide range of services <br />
          to meet your needs:
        </p>
        <ul>
          <li>Venue</li>
          <li>Restaurant</li>
          <li>Catering</li>
          <li>Conference Room</li>
          <li>High Class Security</li>
        </ul>
      </div>
      <div className="secondary-image">
        <img src={secondaryImage} alt="Secondary" />
      </div>
    </div>
  );
};

export default Services;
