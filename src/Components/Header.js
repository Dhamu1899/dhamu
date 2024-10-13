// Header.js
import React from 'react';
import './Header.css';
import { Routes, Route } from 'react-router-dom';
import PatientLogin from './PatientLogin';
import AdminLogin from './AdminLogin';
import Register from './Register';
import AddDoctor from './AddDoctor';
import AddPatient from './AddPatient';
import PatientDashboard from './PatientDashboard';
import FindDoctor from './FindDoctor';
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
        <Route path="/add-patient" element={<AddPatient />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
      </Routes>
    </div>
  );
}

export default Header;
