import React from 'react';
import './Footer.css';
import logo from '../assets/images/hotel-logo.jfif';

const Footer = () => {
  return (
    <footer className="fixed-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <p className="footer-logo-txt">
              <img src={logo} className="footer-logo" alt="" />
            </p>
            <div className="d-flex wrap-logo-content">
              <p className="contact-info-txt">Holiday Inn</p>
            </div>

            <div className="social-media-icons"></div>
          </div>

          <div className="col-lg-4 justify-content-center">
            <div className="footer-subscribe-wrap">
              <p className="connect-txt mb-3">Our Services</p>
              <p className="subscribe-txt-para mb-3">Conference Rooms</p>
              <p className="subscribe-txt-para mb-3">Weddings</p>
              <p className="subscribe-txt-para mb-3">Day outs</p>

              <div className="input-group d-block">
                <form id="subscribeForm">
                  <span className="validation error-email text-danger"></span>
                  <span className="response-subscribe row justify-content-end"></span>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 justify-content-center">
            <div className="footer-subscribe-wrap">
              <a href="./reservation">
                {' '}
                <p className="connect-txt mb-3">Connect with Us</p>
              </a>
              <p className="subscribe-txt-para mb-3 " type="email">
                udugamaholidayinn@gmail.com
              </p>
              <p className="subscribe-txt-para mb-3">077 9009127</p>
              <p className="subscribe-txt-para mb-3">077 9009127</p>

              <div className="input-group d-block">
                <form id="subscribeForm">
                  <span className="validation error-email text-danger"></span>
                  <span className="response-subscribe row justify-content-end"></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
