import React, { useState } from 'react';
import './BookingAppointment.css';

const BookingAppointment = ({ doctor, onClose }) => {
    const [selectedSlot, setSelectedSlot] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');

    const handleBook = () => {
        if (!selectedSlot || !appointmentDate) {
            alert('Please select a date and time slot.');
            return;
        }
        alert(`Appointment booked with ${doctor.name} on ${appointmentDate} at ${selectedSlot}`);
        onClose();
    };

    const handleCancel = () => {
        setSelectedSlot('');
        setAppointmentDate('');
        onClose();
    };

    return (
        <div className="booking-form">
            <h2>Book Appointment with Dr. {doctor.name}</h2>
            <label htmlFor="appointmentDate">Select Date:</label>
            <input
                type="date"
                id="appointmentDate"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
            />

            <label htmlFor="timeSlot">Select Time Slot:</label>
            <select
                id="timeSlot"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                required
            >
                <option value="">Select Time Slot</option>
                {doctor.slots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                ))}
            </select>

            <div className="button-container">
                <button className="book-button" onClick={handleBook}>Book Appointment</button>
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default BookingAppointment;
