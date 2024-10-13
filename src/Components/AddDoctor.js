import React, { useState, useEffect } from 'react';
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
    const [editMode, setEditMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        // Load existing doctors from local storage
        const savedDoctors = JSON.parse(localStorage.getItem('doctors')) || [];
        setDoctorsList(savedDoctors);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({
            ...doctor, [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (doctor.name && doctor.qualification && doctor.experience && doctor.specialty && doctor.location) {
            if (editMode) {
                // Update doctor information
                const updatedDoctors = doctorsList.map((doc, index) =>
                    index === currentIndex ? doctor : doc
                );
                setDoctorsList(updatedDoctors);
                localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
                setEditMode(false);
                setCurrentIndex(null);
            } else {
                // Add new doctor
                const updatedDoctors = [...doctorsList, doctor];
                setDoctorsList(updatedDoctors);
                localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
            }
            resetForm();
        } else {
            alert('Please fill in all fields');
        }
    };

    const resetForm = () => {
        setDoctor({
            name: '',
            qualification: '',
            experience: '',
            specialty: '',
            location: ''
        });
    };

    const handleEdit = (index) => {
        setDoctor(doctorsList[index]);
        setEditMode(true);
        setCurrentIndex(index);
    };

    const handleDelete = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this doctor?');
        if (confirmDelete) {
            const updatedDoctors = doctorsList.filter((_, i) => i !== index);
            setDoctorsList(updatedDoctors);
            localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
        }
    };

    return (
        <div className='add-doctor-container'>
            <div className='doctor-container'>
                <h2>{editMode ? 'Edit Doctor Information' : 'Add Doctor Information'}</h2>
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
                    <button type='submit'>{editMode ? 'Update Doctor' : 'Add Doctor'}</button>
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorsList.length === 0 ? (
                            <tr>
                                <td colSpan="6">No doctors found.</td>
                            </tr>
                        ) : (
                            doctorsList.map((doc, index) => (
                                <tr key={index}>
                                    <td>{doc.name}</td>
                                    <td>{doc.qualification}</td>
                                    <td>{doc.experience}</td>
                                    <td>{doc.specialty}</td>
                                    <td>{doc.location}</td>
                                    <td>
                                        <button onClick={() => handleEdit(index)}>Edit</button>
                                        <button onClick={() => handleDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddDoctor;
