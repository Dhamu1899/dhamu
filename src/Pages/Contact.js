import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <h2>Hospital Name</h2>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> contact@hospital.com</p>
        <p><strong>Address:</strong></p>
        <p>123 Health St.<br />Cityville, ST 12345</p>
      </div>
      
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
