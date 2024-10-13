import React, { useState, useEffect } from 'react';
import './UpdatePatient.css';

const UpdatePatient = () => {
  const [patientDetails, setPatientDetails] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    address: '',
    state: '',
    country: '',
    mobile: '',
    reports: null,
    illnessDetails: '',
    password: '',
    confirmPassword: '',
    uniqueId: '',
  });
  
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

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
      reports: null,
      illnessDetails: '',
      password: '',
      confirmPassword: '',
      uniqueId: '',
    });
    setEditMode(false);
    setFormVisible(false); // Reset form visibility
  };

  const handleEdit = (uniqueId) => {
    const patientToEdit = patients.find(patient => patient.uniqueId === uniqueId);
    setPatientDetails(patientToEdit);
    setEditMode(true);
    setFormVisible(true);
  };

  const handleDelete = (uniqueId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this patient?');
    if (confirmDelete) {
      const updatedPatients = patients.filter(patient => patient.uniqueId !== uniqueId);
      setPatients(updatedPatients);
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      alert('Patient deleted successfully');
    }
  };

  return (
    <div className="add-patient-container">
      <div className='patient-container'>
        <h2>Patients List</h2>
        {patients.length === 0 ? (
          <p>No patients found.</p> // Message when no patients are found
        ) : (
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>ID</th>
                <th>Actions</th>
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
                  <td>{patient.uniqueId}</td>
                  <td>
                    <button onClick={() => handleEdit(patient.uniqueId)}>Edit</button>
                    <button onClick={() => handleDelete(patient.uniqueId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {formVisible && (
          <form onSubmit={handleSubmit} className="patient-form">
            <div className="form-left">
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
            </div>
            <div className="form-right">
              <label htmlFor='mobile'>Mobile*</label>
              <input type='text' name='mobile' value={patientDetails.mobile} placeholder="Enter Mobile"
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
            </div>
          </form>
        )}
      </div>

      {/* Search Section Below the Form */}
      <div className="search-container">
        <h2>Search Patient by ID</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter Patient ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default UpdatePatient;
