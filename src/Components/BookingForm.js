import React, { useState } from 'react';
import "./BookingForm.css";

const BookingForm = ({ doctor, onClose }) => {
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
            <h2>Book Appointment with {doctor.name}</h2>
            <label htmlFor="appointmentDate">Select Date:</label>
            <input
                type="date"
                id="appointmentDate"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
            />

            <label htmlFor="timeSlot">Select Time Slot:</label>
            <select
                id="timeSlot"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
            >
                <option value="">Select Time Slot</option>
                {doctor.slots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                ))}
            </select>

            <button onClick={handleBook}>Book Appointment</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default BookingForm;
