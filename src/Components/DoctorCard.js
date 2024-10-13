import React from 'react';
import { motion } from 'framer-motion';
import './DoctorCard.css'; // Import the CSS file

const DoctorCard = ({ doctor }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="doctor-card" // Use the CSS class for the card
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }} // Animation for entering
    >
      <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      <div className="doctor-details">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialty">{doctor.specialty}</p>
      </div>
    </motion.div>
  );
};

export default DoctorCard;
