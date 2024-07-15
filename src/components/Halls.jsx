import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import hall1 from '../assets/images/ddd-hall.jpg';
import hall2 from '../assets/images/aaa-hall.jpeg';
import hall3 from '../assets/images/bbb-hall.jpeg';
import hall4 from '../assets/images/ccc-hall.jpeg';
import '../pages/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Halls = () => {
  const navigate = useNavigate();
  const [halls, setHalls] = useState([
    {
      id: 1,
      name: 'Grand Ballroom',
      description:
        'A beautiful hall perfect for weddings and large gatherings.',
      price: '$1000',
      image: hall4,
      navigateTo: '/BanquetDetails',
    },
    {
      id: 2,
      name: 'Second Ballroom',
      description:
        'A beautiful hall perfect for weddings and large gatherings.',
      price: '$1000',
      image: hall2,
      navigateTo: '/BanquetDetails2',
    },
    {
      id: 3,
      name: 'Third Ballroom',
      description: 'An elegant hall with modern amenities for your events.',
      price: '$1200',
      image: hall3,
      navigateTo: '/BanquetDetails3',
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="hotel-halls" data-aos="fade-up" id="halls">
      <div className="container padding">
        <p className="our-halls-txt">Our Banquets</p>
        <div className="row">
          <div className="hall-grid-wrapper">
            {halls.map((hall) => (
              <div key={hall.id} className="img-wrapper">
                <img src={hall.image} className="hall-img" alt={hall.name} />
                <p className="hotel-description">{hall.name}</p>
                <p className="hotel-description">
                  {hall.description}
                  <br />
                  Starting at {hall.price}
                </p>
                <button
                  className="btn-banquet"
                  onClick={() => navigate(hall.navigateTo)}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Halls;
