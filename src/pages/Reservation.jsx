import React from 'react';
import ReservationForm from '../components/ReservationForm';
import './Reservation.css';

const Reservation = () => {
  return (
    <div className="reservation-page">
      <p className="Guest-details-txt">Guest Details</p>
      <ReservationForm />
    </div>
  );
};

export default Reservation;
