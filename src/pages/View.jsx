import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../components/DeleteModal';
import './View.css';

const View = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedReservationId, setSelectedReservationId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedReservationId(id);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedReservationId(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost/holidayinn/Backend/view.php'
        );
        const dataWithIndex = response.data.map((item, index) => ({
          ...item,
          index,
        }));
        setData(dataWithIndex);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/reservationUpdate/${id}`);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost/holidayinn/Backend/delete.php?id=${selectedReservationId}`
      );
      setShowModal(false);
      handleRefresh();
    } catch (error) {
      console.error('Failed to delete reservation', error);
    }
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="view">
      <div className="container">
        <h2 className="view-header-txt">Your Reservations</h2>
        <table className="view-table">
          <thead>
            <tr>
              <th>ID</th>
              <th className="thead-view-txt">Name</th>
              <th className="thead-view-txt">Email</th>
              <th className="thead-view-txt">Phone</th>
              <th className="thead-view-txt">Date</th>
              <th className="thead-view-txt">Event Type</th>
              <th className="thead-view-txt">Number of Guests</th>
              <th className="thead-view-txt">Event Details</th>
              <th className="thead-view-txt">Update</th>
              <th className="thead-view-txt">Cancel Reservation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.index}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.date}</td>
                <td>{item.eventType}</td>
                <td>{item.numberOfGuests}</td>
                <td>{item.eventDetails}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(item.index)}
                    className="update-btn"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteClick(item.id)}
                    className="delete-btn"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <DeleteModal
          showModal={showModal}
          handleClose={handleClose}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default View;
