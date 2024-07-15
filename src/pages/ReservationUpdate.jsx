import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../components/ReservationForm.css';
import './ReservationUpdate.css';

const ReservationUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [index, setIndex] = useState();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    numberOfGuests: '',
    eventDetails: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost/holidayinn/Backend/view.php?id=${id}`
        );
        const data = response.data;
        setFormData(data[id]);
        setIndex(data[id].id);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.put(
          `http://localhost/holidayinn/Backend/update.php?id=${index}`,
          formData
        );
        navigate('/reservationUpdateSuccess');
      } catch (error) {
        console.error('Update failed', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      eventType: '',
      numberOfGuests: '',
      eventDetails: '',
    });
    navigate('/reservations');
  };

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

  return (
    <div className="reservationupdate-form-container">
      <h2>Update Your Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={formData.name}
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
                placeholder={formData.email}
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
                placeholder={formData.phone}
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
            placeholder={formData.date}
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
            placeholder={formData.eventType}
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
            placeholder={formData.numberOfGuests}
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
            placeholder={formData.eventDetails}
          ></textarea>
          {errors.eventDetails && (
            <span className="error">{errors.eventDetails}</span>
          )}
        </div>
        <div className="button-wrapper-update">
          <button type="submit" className="btn-banquet">
            Update
          </button>

          <button onClick={handleCancel} className="btn-banquet">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationUpdate;
