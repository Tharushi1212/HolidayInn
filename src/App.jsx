import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Reservation from './pages/Reservation';
import AdminDashboard from './pages/AdminDashboard';
import Services from './pages/Services';
import BanquetDetails from './pages/BanquetDetails';
import ReservationSuccess from './pages/ReservationSuccess';
import BanquetDetails2 from './pages/BanquetDetails2';
import BanquetDetails3 from './pages/BanquetDetails3';
import BanquetDetails4 from './pages/BanquetDetails4';
import View from './pages/View';
import ReservationUpdate from './pages/ReservationUpdate';
import ReservationUpdateSuccess from './pages/ReservationUpdateSuccess';
import Halls from './components/Halls';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservations" element={<View />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/BanquetDetails" element={<BanquetDetails />} />
          <Route path="/BanquetDetails2" element={<BanquetDetails2 />} />
          <Route path="/BanquetDetails3" element={<BanquetDetails3 />} />
          <Route path="/BanquetDetails4" element={<BanquetDetails4 />} />
          <Route path="/reservationSuccess" element={<ReservationSuccess />} />
          <Route
            path="/reservationUpdateSuccess"
            element={<ReservationUpdateSuccess />}
          />
          <Route
            path="/reservationUpdate/:id"
            element={<ReservationUpdate />}
          />
          <Route path="/halls" element={<Halls />} />
        </Routes>
      </BrowserRouter>
      <Footer /> {/* Add Footer here to display it on all pages */}
    </div>
  );
}

export default App;
