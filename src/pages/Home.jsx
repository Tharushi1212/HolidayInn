import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import '../components/Navbar.css';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Halls from '../components/Halls';
import video1 from '../assets/images/video1.mp4';
import video2 from '../assets/images/video2.mp4';
import video3 from '../assets/images/video3.mp4';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="home-container">
        {/* <div className="home-text">
          <h1>Simple - Unique - Friendly</h1>
          <h2 className="hero-title">Make Yourself At Home In Our Hotel</h2>
        </div> */}
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <video width="100%" autoPlay muted playsInline className="video">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video width="100%" autoPlay muted className="video">
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <video width="100%" autoPlay muted className="video">
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        </Swiper>
      </div>
      <Halls searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
