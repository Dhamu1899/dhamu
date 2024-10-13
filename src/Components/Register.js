import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [patientDetails, setPatientDetails] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    address: '',
    state: '',
    country: '',
    mobile: '',
    illnessDetails: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails({ ...patientDetails, [name]: value });
  };

  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${timestamp}-${randomNumber}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientDetails.password === patientDetails.confirmPassword) {
      const uniqueId = generateUniqueId();
      const newPatient = { ...patientDetails, uniqueId };
      
      // Save the new patient details to local storage
      const existingPatients = JSON.parse(localStorage.getItem('patients')) || [];
      localStorage.setItem('patients', JSON.stringify([...existingPatients, newPatient]));

      alert('Successfully registered! Your ID is ' + uniqueId);
      navigate("/PatientLogin");
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="register-container">
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name*</label>
          <input type="text" name="firstName" placeholder="Enter First Name" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name*</label>
          <input type="text" name="middleName" placeholder="Enter Middle Name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name*</label>
          <input type="text" name="lastName" placeholder="Enter Last Name" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date Of Birth*</label>
          <input type="date" name="dob" onChange={handleChange} required />
        </div>
        <div className="form-group full-width">
          <label htmlFor="address">Address*</label>
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="state">State*</label>
          <input type="text" name="state" placeholder="State" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country*</label>
          <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile*</label>
          <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
        </div>
        <div className="form-group full-width">
          <label htmlFor="illnessDetails">Illness Details*</label>
          <textarea name="illnessDetails" placeholder="Existing Illness" onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register