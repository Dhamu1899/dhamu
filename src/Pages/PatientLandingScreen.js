import React ,{ useState, useEffect} from 'react';
import './PatientLandingScreen.css';
const reports = [
  { id: 1, title: 'Blood Test Report', date: '2024-10-01', fileUrl: '/path/to/report1.pdf' },
  { id: 2, title: 'X-ray Report', date: '2024-09-25', fileUrl: '/path/to/report2.pdf' },
];
 
const appointments = [
  { id: 1, doctor: ' Dr.Tina', specialty : 'Cardiology' , date: '2024-10-15', time: '10:00 AM' },
  { id: 2, doctor: 'Dr. Jan', specialty : 'Dermatology' , date: '2024-11-01', time: '1:00 PM' },
];
 
const PatientLandingScreen = () => {
  return (
    <div className="patient-landing">
      <h1 className="title">Patient Landing Screen</h1>
      <p className="description">Welcome to the patient portal. Here you can manage your health records,
         schedule appointments, and more.</p>
       {/* Reports Section */}
       <section className="reports-section">
        <h2>Reports</h2>
        {reports.length === 0 ? (
          <p>No reports available.</p>
        ) : (
          <ul>
            {reports.map(report => (
              <li key={report.id}>
                {report.title} - {report.date}
                <a href={report.fileUrl} download>Download</a>
              </li>
            ))}
          </ul>
        )}
      </section>
 
      {/* Appointments Section */}
      <section className="appointments-section">
        <h2>Upcoming Appointments</h2>
        {appointments.length === 0 ? (
          <p>No upcoming appointments.</p>
        ) : (
          <ul>
            {appointments.map(appointment => (
              <li key={appointment.id}>
                {appointment.doctor} - {appointment.specialty} - {appointment.date} at {appointment.time}
              </li>
            ))}
          </ul>
        )}
      </section>
      <button className="action-button">Get Started</button>
     
    </div>
  );
}
export default PatientLandingScreen;
 