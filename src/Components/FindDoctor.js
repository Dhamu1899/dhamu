import React, { useState } from 'react';
import BookingForm from './BookingForm';
import "./FindDoctor.css";

function FindDoctor() {
    const [location, setLocation] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [showDoctorList, setShowDoctorList] = useState(false);

    const doctors = [
        { id: 1, name: 'Dr.Tina', location: 'Chennai', specialty: 'Cardiology', slots: ['10:00 AM', '11:00 AM', '2:00 PM'] },
        { id: 2, name: 'Dr.Jaansi', location: 'Vellore', specialty: 'Neurology', slots: ['9:00 AM', '1:00 PM', '3:00 PM'] },
        { id: 3, name: 'Dr.Jan', location: 'Coimbatore', specialty: 'Dermatology', slots: ['10:30 AM', '12:00 PM', '4:00 PM'] },
        { id: 4, name: 'Dr.Prashanth', location: 'Chennai', specialty: 'Psychiatrist', slots: ['11:00 AM', '1:00 PM', '3:00 PM'] },
        { id: 5, name: 'Dr.Santhosh', location: 'Chennai', specialty: 'ENT', slots: ['9:30 AM', '12:30 PM', '2:30 PM'] },
        { id: 6, name: 'Dr.Charu', location: 'Nungambakkam', specialty: 'Pediatrician', slots: ['10:00 AM', '1:00 PM', '3:00 PM'] },
        { id: 7, name: 'Dr.Gokul', location: 'Salem', specialty: 'Ophthalmologist', slots: ['9:00 AM', '11:00 AM', '1:00 PM'] },
    ];

    const filteredDoctors = doctors.filter(
        (doctor) => doctor.location === location && doctor.specialty === specialty
    );
    const handleFindDoctor = () => {
        setShowDoctorList(true);
    };

    const handleBookAppointment = (doctor) => {
        setSelectedDoctor(doctor);
        setShowBookingForm(true);
    };


    return (
        <div className='find-doctor-container'>
            <h2>Find Doctor</h2>
            <label>
                Location:
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </label>
            <label>
                Specialty:
                <input
                    type="text"
                    placeholder="Specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                />
            </label>
            <button type="button" onClick={handleFindDoctor}>Find Doctor</button>
            {showDoctorList && (
                <ul>
                    {filteredDoctors.map((doctor) => (
                        <li key={doctor.id}>
                            {doctor.name} - {doctor.specialty} ({doctor.location})
                            <button onClick={() => handleBookAppointment(doctor)}>Book Appointment</button>
                        </li>
                    ))}
                </ul>
            )}
            {showBookingForm && selectedDoctor && (
                <BookingForm doctor={selectedDoctor} onClose={() => setShowBookingForm(false)} />
            )}
        </div>
    );
}

export default FindDoctor;
