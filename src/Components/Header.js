// Header.js
import React from 'react';
import './Header.css';
import { Routes, Route } from 'react-router-dom';
import PatientLogin from './PatientLogin';
import AdminLogin from './AdminLogin';
import Register from './Register';
import AddDoctor from './AddDoctor';
import UpdatePatient from './UpdatePatient';
import PatientDashboard from './PatientDashboard';
import BookingAppointment from './BookingAppointment'
import FindDoctor from './FindDoctor';
import AddAdmin from './AddAdmin';
import Navbar from './Navbar'; // Import the Nav component
const  Header = () => {
  return (
    <div className='header-container'>
    
      <Navbar /> 
      <Routes>
        <Route path="/patientlogin" element={<PatientLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/Update-patient" element={<UpdatePatient />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/BookingAppointment" element={<BookingAppointment />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/AddAdmin" element={<AddAdmin />} />
      </Routes>
    </div>
  );
}

export default Header;
