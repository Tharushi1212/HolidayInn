import React, { useEffect, useState } from 'react';
import './ReservationForm.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const ReservationForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    numberOfGuests: '',
    eventDetails: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    const namePattern = /^[A-Za-z\s]{2,100}$/;
    const phonePattern = /^0[0-9]{9}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!namePattern.test(formData.name)) {
      formErrors.name = 'Name must be 2-100 non-numeric characters.';
    }
    if (!phonePattern.test(formData.phone)) {
      formErrors.phone =
        'Contact No must start with 0 and be exactly 10 digits.';
    }
    if (
      formData.email.length < 6 ||
      formData.email.length > 100 ||
      !emailPattern.test(formData.email)
    ) {
      formErrors.email =
        'Email must be 6-100 characters and a valid email address.';
    }
    if (formData.eventDetails.length > 5000) {
      formErrors.eventDetails = 'Message must be 0-5000 characters.';
    }
    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post(
          'http://localhost/holidayinn/Backend/reservation.php',
          formData
        );

        if (
          response.status === 200 &&
          response.data.message === 'Reservation successfully made'
        ) {
          console.log('Form data submitted successfully');
          setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            eventType: '',
            numberOfGuests: '',
            eventDetails: '',
          }); // Reset all form fields
          navigate('/reservationSuccess');
        } else {
          console.error('Form submission failed', response.data.message);
        }
      } catch (error) {
        console.error('Form submission failed', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="reservation-form-container" data-aos="fade-up">
      <h2>Book Your Banquet</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact No:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventType">Event Type:</label>
          <input
            type="text"
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numberOfGuests">Number of Guests:</label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDetails">Message:</label>
          <textarea
            id="eventDetails"
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleChange}
          ></textarea>
          {errors.eventDetails && (
            <span className="error">{errors.eventDetails}</span>
          )}
        </div>
        <div className="button-wrapper">
          <button type="submit" className="btn-banquet">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
