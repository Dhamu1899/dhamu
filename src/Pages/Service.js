import React from 'react';
import './Service.css'; // Import the CSS for styling

const services = [
  "Emergency Care",
  "Surgery Services",
  "Radiology",
  "Pharmacy",
  "Laboratory Services",
  "Inpatient Care",
  "Outpatient Care",
  "Physical Therapy",
];

const Service = () => {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className="service-item">{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default Service;
