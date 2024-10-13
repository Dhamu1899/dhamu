import React, { useState } from 'react';
import './AddDoctor.css';

const AddDoctor = () => {
    const [doctor, setDoctor] = useState({
        name: '',
        qualification: '',
        experience: '',
        specialty: '',
        location: ''
    });
    const [doctorsList, setDoctorsList] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({
            ...doctor, [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            doctor.name && doctor.qualification && doctor.experience && doctor.specialty && doctor.location
        ) {
            setDoctorsList([...doctorsList, doctor]);
            setDoctor({
                name: '',
                qualification: '',
                experience: '',
                specialty: '',
                location: ''
            });
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className='add-doctor-container'>
            <div className='doctor-container'>
            <h2>Add Doctor Information</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Doctor Name:</label>
                    <input type="text" name='name' value={doctor.name} onChange={handleChange} placeholder='Enter Doctor name' />
                </div>
                <div>
                    <label>Qualification:</label>
                    <input type="text" name='qualification' value={doctor.qualification} onChange={handleChange} placeholder='Enter qualification' />
                </div>
                <div>
                    <label>Years Of Experience:</label>
                    <input type="text" name='experience' value={doctor.experience} onChange={handleChange} placeholder='Enter years of experience' />
                </div>
                <div>
                    <label>Specialty:</label>
                    <input type="text" name='specialty' value={doctor.specialty} onChange={handleChange} placeholder='Enter specialty' />
                </div>
                <div>
                    <label>Location:</label>
                    <input type="text" name='location' value={doctor.location} onChange={handleChange} placeholder='Enter location' />
                </div>
                <button type='submit'>Add Doctor</button>
            </form>
            </div>
            <div className='doctors-list-container'>
            <h2>Doctors List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Doctor Name</th>
                        <th>Qualification</th>
                        <th>Years Of Experience</th>
                        <th>Specialty</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {doctorsList.map((doc, index) => (
                        <tr key={index}>
                            <td>{doc.name}</td>
                            <td>{doc.qualification}</td>
                            <td>{doc.experience}</td>
                            <td>{doc.specialty}</td>
                            <td>{doc.location}</td>
                        </tr>
                    
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AddDoctor;
