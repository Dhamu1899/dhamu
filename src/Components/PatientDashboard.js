import React from 'react';
import { Link } from 'react-router-dom';

 function PatientDashboard() {
  return (
    <div>
        <h2>Patient Dashboard</h2>
        <ul>
        <li><Link to= "/appointments">View Appointments</Link></li> 
        <li><Link to= "/reports">View Reports</Link></li>
        </ul>
        </div>
  );
}
export default PatientDashboard;

