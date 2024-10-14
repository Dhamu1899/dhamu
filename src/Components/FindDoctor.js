import React, { useState, useEffect } from 'react';
import './FindDoctor.css';

const FindDoctor = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [doctorList, setDoctorList] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  useEffect(() => {
    const savedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(savedPatients);

    const savedDoctors = JSON.parse(localStorage.getItem('doctors')) || [];
    setDoctorList(savedDoctors);

    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(savedAppointments);
  }, []);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    const doctorsInSameLocation = doctorList.filter(
      (doctor) => doctor.location.toLowerCase() === patient.location.toLowerCase()
    );
    setFilteredDoctors(doctorsInSameLocation);
    setIsModalOpen(true); // Open the modal when a patient is selected
  };

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    if (!selectedPatient || !selectedDoctor || !appointmentDate || !appointmentTime) {
      alert('Please fill in all fields: patient, doctor, appointment date, and time.');
      return;
    }

    const newAppointment = {
      patientId: selectedPatient.uniqueId, // Store patient ID for booking history
      patient: selectedPatient.firstName,
      illnessDetails: selectedPatient.illnessDetails,
      doctor: selectedDoctor,
      date: appointmentDate,
      time: appointmentTime,
      location: selectedPatient.location,
    };

    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    existingAppointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(existingAppointments));
    setAppointments(existingAppointments);
    setAppointmentDetails(newAppointment);
    alert(`Appointment booked successfully for ${newAppointment.patient} with ${newAppointment.doctor} on ${newAppointment.date} at ${newAppointment.time}`);

    const updatedPatients = patients.filter(p => p.uniqueId !== selectedPatient.uniqueId);
    setPatients(updatedPatients);
    localStorage.setItem('patients', JSON.stringify(updatedPatients));

    // Clear form fields
    setSelectedPatient(null);
    setSelectedDoctor('');
    setAppointmentDate('');
    setAppointmentTime('');
    setIsModalOpen(false); // Close the modal after booking
  };

  const handleDeletePatient = (uniqueId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this patient?');
    if (confirmDelete) {
      const updatedPatients = patients.filter((patient) => patient.uniqueId !== uniqueId);
      setPatients(updatedPatients);
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
      alert('Patient deleted successfully');
    }
  };

  const patientAppointments = appointments.filter(appointment => appointment.patientId === selectedPatient?.uniqueId); // Filter appointments by selected patient

  return (
    <div className="find-doctor-container">
      <h2>Find a Doctor & Book Appointment</h2>

      {/* Patient List Section */}
      <div className="patient-list-section">
        <h3>Select a Patient</h3>
        {patients.length === 0 ? (
          <p>No patients available. Please add a patient first.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Unique ID</th>
                <th>First Name</th>
                <th>Illness Details</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.uniqueId}>
                  <td>{patient.uniqueId}</td>
                  <td>{patient.firstName}</td>
                  <td>{patient.illnessDetails}</td>
                  <td>{patient.location}</td>
                  <td>
                    <button onClick={() => handlePatientSelect(patient)}>Find Doctor</button>
                    <button onClick={() => handleDeletePatient(patient.uniqueId)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal for Booking Appointment */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Book Appointment for {selectedPatient.firstName}</h3>
            <form onSubmit={handleAppointmentSubmit}>
              <label htmlFor="doctor">Select Doctor*</label>
              <select value={selectedDoctor} onChange={handleDoctorChange} required>
                <option value="">--Select Doctor--</option>
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name} - {doctor.specialty}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>No doctors available in this location</option>
                )}
              </select>

              <label htmlFor="appointmentDate">Appointment Date*</label>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />

              <label htmlFor="appointmentTime">Appointment Time*</label>
              <input
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />

              <button type="submit">Book Appointment</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Appointment Confirmation Section */}
      {appointmentDetails && (
        <div id="appointment-details" className="appointment-details-section">
          <h3>Appointment Booked Details</h3>
          <p><strong>Patient Name:</strong> {appointmentDetails.patient}</p>
          <p><strong>Illness Details:</strong> {appointmentDetails.illnessDetails}</p>
          <p><strong>Doctor:</strong> {appointmentDetails.doctor}</p>
          <p><strong>Date:</strong> {appointmentDetails.date}</p>
          <p><strong>Time:</strong> {appointmentDetails.time}</p>
          <p><strong>Location:</strong> {appointmentDetails.location}</p>
        </div>
      )}

      {/* Booking History Section */}
      {selectedPatient && patientAppointments.length > 0 && (
        <div className="booking-history-section">
          <h3>Booking History for {selectedPatient.firstName}</h3>
          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {patientAppointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.doctor}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FindDoctor;
