import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';
import './Home.css';
import hall1 from '../assets/images/ddd-hall.jpg';
import hall2 from '../assets/images/aaa-hall.jpeg';
import hall3 from '../assets/images/bbb-hall.jpeg';
import hall4 from '../assets/images/ccc-hall.jpeg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Explore = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const halls = [
    {
      id: 1,
      name: 'Grand Ballroom',
      description:
        'A beautiful hall perfect for weddings and large gatherings.',
      price: 'Starting at $1000',
      image: hall4,
    },
    {
      id: 2,
      name: 'Second Ballroom',
      description:
        'A beautiful hall perfect for weddings and large gatherings.',
      price: 'Starting at $1000',
      image: hall2,
    },
    {
      id: 3,
      name: 'Third Ballroom',
      description: 'An elegant hall with modern amenities for your events.',
      price: 'Starting at $1200',
      image: hall3,
    },
  ];

  const filteredHalls = halls.filter((hall) =>
    hall.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleReserveClick = () => {
    navigate('/reservation');
  };

  return (
    <div className="explore-container">
      <div className="search-filter-home">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Enter Hall Name"
            value={searchTerm}
            onChange={handleSearchChange}
          ></input>
          <button className="search-txt">Search</button>
        </div>
      </div>
      <h1 className="explore-title">Our Banquet Halls</h1>
      <p className="explore-subtitle">
        Unlock the magic of your event with our enchanting <br />
        banquet hall experience.
      </p>

      <section className="hotel-halls" data-aos="fade-up">
        <div className="container padding">
          <div className="row">
            <div className="hall-grid-wrapper">
              {filteredHalls.map((hall) => (
                <div className="img-wrapper" key={hall.id}>
                  <img src={hall.image} className="hall-img" alt={hall.name} />
                  <p className="hotel-description">{hall.name}</p>
                  <p className="hotel-description">
                    {hall.description}
                    <br />
                    {hall.price}
                  </p>
                  <button className="btn-banquet" onClick={handleReserveClick}>
                    Reserve
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
