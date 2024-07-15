// import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="logo-section">
          <img src="path/to/logo.png" alt="Logo" className="logo" />
          <h1 className="hotel-name">Holiday Inn</h1>
        </div>
        <div className="current-tab">
          <h2>Dashboard</h2>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </header>
      <nav className="admin-nav">
        <ul>
          <li>Dashboard</li>
          <li>Banquet Halls</li>
          <li>Booking</li>
          <li>Client</li>
          <li>Settings</li>
        </ul>
      </nav>
      <main className="admin-content">
        <div className="content-box calendar">
          <h3>Calendar</h3>
          {/* Add calendar component or calendar code here */}
        </div>
        <div className="content-box reviews">
          <h3>Latest Customer Reviews</h3>
          {/* Add reviews component or reviews code here */}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
