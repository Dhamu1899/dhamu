import React, { useState, useEffect } from 'react';
import './AddPatient.css';

const AddPatient = () => {
  const [patientDetails, setPatientDetails] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    address: '',
    state: '',
    country: '',
    mobile: '',
    relativeName: '',
    relativeMobile: '',
    reports: null,
    illnessDetails: '',
    password: '',
    confirmPassword: '',
    uniqueId: '',
  });
  
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [formVisible, setFormVisible] = useState(false); // New state to control form visibility

  useEffect(() => {
    // Load existing patients from local storage on component mount
    const savedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(savedPatients);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'reports') {
      setPatientDetails((prevDetails) => ({
        ...prevDetails,
        [name]: files,
      }));
    } else {
      setPatientDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${timestamp}-${randomNumber}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientDetails.password !== patientDetails.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (!editMode) {
      const uniqueId = generateUniqueId();
      const newPatient = { ...patientDetails, uniqueId };
      const updatedPatients = [...patients, newPatient];
      setPatients(updatedPatients);
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      alert(`Successfully registered! Your ID is ${uniqueId}`);
    } else {
      const updatedPatients = patients.map((patient) =>
        patient.uniqueId === patientDetails.uniqueId ? patientDetails : patient
      );
      setPatients(updatedPatients);
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      alert('Patient details updated successfully');
    }
    
    resetForm();
  };

  const handleSearch = () => {
    const result = patients.filter(
      (patient) =>
        patient.uniqueId.includes(searchQuery)
    );

    if (result.length > 0) {
      setPatientDetails(result[0]); // Fill form with the patient details
      setEditMode(true); // Set to edit mode since we found the patient
      setFormVisible(true); // Show the form
    } else {
      alert('Patient not found');
      setFormVisible(false); // Hide the form if not found
    }
  };

  const resetForm = () => {
    setPatientDetails({
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      address: '',
      state: '',
      country: '',
      mobile: '',
      relativeName: '',
      relativeMobile: '',
      reports: null,
      illnessDetails: '',
      password: '',
      confirmPassword: '',
      uniqueId: '',
    });
    setEditMode(false);
    setFormVisible(false); // Reset form visibility
  };

  return (
    <div className="add-patient-container">
      <div className='patient-container'>
        <h2>Patients List</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Relative Name</th>
              <th>Relative Mobile</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.uniqueId}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.dob}</td>
                <td>{patient.mobile}</td>
                <td>{patient.address}</td>
                <td>{patient.relativeName}</td>
                <td>{patient.relativeMobile}</td>
                <td>{patient.uniqueId}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Search Patient by ID</h2>
        <input 
          type="text" 
          placeholder="Enter ID" 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {formVisible && ( // Conditional rendering of the form based on formVisible state
        <form onSubmit={handleSubmit} className="patient-form">
          <label htmlFor='firstName'>First Name*</label>
          <input type='text' name='firstName' value={patientDetails.firstName} placeholder="Enter First Name"
            onChange={handleChange} required />
          <label htmlFor='middleName'>Middle Name</label>
          <input type='text' name='middleName' value={patientDetails.middleName} placeholder="Enter Middle Name"
            onChange={handleChange} />
          <label htmlFor='lastName'>Last Name*</label>
          <input type='text' name='lastName' value={patientDetails.lastName} placeholder="Enter Last Name"
            onChange={handleChange} required />
          <label htmlFor='dob'>Date Of Birth*</label>
          <input type='date' name='dob' value={patientDetails.dob} onChange={handleChange} required />
          <label htmlFor='address'>Address*</label>
          <input type='text' name='address' value={patientDetails.address} placeholder="Enter Address"
            onChange={handleChange} required />
          <label htmlFor='state'>State*</label>
          <input type='text' name='state' value={patientDetails.state} placeholder="Enter State"
            onChange={handleChange} required />
          <label htmlFor='country'>Country*</label>
          <input type='text' name='country' value={patientDetails.country} placeholder="Enter Country"
            onChange={handleChange} required />
          <label htmlFor='mobile'>Mobile*</label>
          <input type='text' name='mobile' value={patientDetails.mobile} placeholder="Enter Mobile"
            onChange={handleChange} required />
          <label htmlFor='relativeName'>Relative Name*</label>
          <input type='text' name='relativeName' value={patientDetails.relativeName} placeholder="Enter Relative Name"
            onChange={handleChange} required />
          <label htmlFor='relativeMobile'>Relative Mobile*</label>
          <input type='text' name='relativeMobile' value={patientDetails.relativeMobile} placeholder="Enter Relative Mobile"
            onChange={handleChange} required />
          <label htmlFor='illnessDetails'>Illness Details*</label>
          <textarea name='illnessDetails' value={patientDetails.illnessDetails} placeholder="Existing Illness"
            onChange={handleChange} required />
          <label htmlFor='reports'>Reports*</label>
          <input type='file' name='reports' onChange={handleChange} multiple />
          {!editMode && (
            <>
              <label htmlFor='password'>Password*</label>
              <input type='password' name='password' value={patientDetails.password} placeholder="Password"
                onChange={handleChange} required />
              <label htmlFor='confirmPassword'>Confirm Password*</label>
              <input type='password' name='confirmPassword' value={patientDetails.confirmPassword} placeholder="Confirm Password"
                onChange={handleChange} required />
            </>
          )}
          <button type='submit'>{editMode ? 'Update Patient' : 'Add Patient'}</button>
        </form>
      )}
    </div>
  );
};

export default AddPatient;
