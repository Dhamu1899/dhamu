import React, { useState } from 'react';
import './AdminLandingScreen.css';
import { useNavigate } from 'react-router-dom';

const AdminLandingScreen = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [admins, setAdmins] = useState([]);
  
  const [newPatient, setNewPatient] = useState('');
  const [newDoctor, setNewDoctor] = useState(''); 
  const [newAdmin, setNewAdmin] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState('');

  const handleAddPatient = () => {
    navigate("/Components/AddPatient")
  };

  const handleAddDoctor = () => {
    navigate("/Components/AddDoctor")
  };

  const handleAddAdmin = () => {
    if (newAdmin) {
      setAdmins([...admins, newAdmin]);
      setNewAdmin('');
      alert("Admin added successfully.");
    } else {
      alert("Please enter admin details.");
    }
  };

  const handleBookAppointment = () => {
    navigate ("/components/FindDoctor")

  };

  return (
    <div className="admin-landing">
      <header className="admin-header">Admin Dashboard</header>
      <main className="admin-content">
        <h1>Welcome to the Admin Panel</h1>
        <p>Here you can manage users, view reports, and adjust settings.</p>
      </main>
      
      <nav className="admin-nav">
        <ul>
          <li>
            
            <button onClick={handleAddPatient}>Add Patient</button>
          </li>
          <li>
           
            <button onClick={handleAddDoctor}>Add Doctor</button>
          </li>
          <li>
            
            <button onClick={handleAddAdmin}>Add Admin</button>
          </li>
          <li>
            
            <button onClick={handleBookAppointment}>Book Appointment</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminLandingScreen;
