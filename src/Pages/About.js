import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Hospital</h1>
      <p>
        Welcome to our hospital. We provide comprehensive healthcare services 
        with a commitment to excellence and compassion. Our mission is to 
        enhance the health of the communities we serve through quality 
        healthcare, education, and research.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to deliver high-quality, patient-centered care 
        and to promote health and wellness in our community. We believe 
        that every patient deserves individualized attention and care.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Compassion</li>
        <li>Integrity</li>
        <li>Teamwork</li>
        <li>Innovation</li>
        <li>Respect</li>
      </ul>
      <h2>Services We Offer</h2>
      <p>
        Our hospital offers a range of services including:
      </p>
      <ul>
        <li>Emergency Care</li>
        <li>Inpatient & Outpatient Services</li>
        <li>Surgery</li>
        <li>Diagnostics</li>
        <li>Maternity Care</li>
        <li>Pediatrics</li>
      </ul>
    </div>
  );
}

export default About;
