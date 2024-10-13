import React, { useState, useEffect } from 'react';
import './AddDoctor.css';

const AddDoctor = () => {
    const [doctor, setDoctor] = useState({
        id: '',
        name: '',
        qualification: '',
        experience: '',
        specialty: '',
        location: ''
    });
    const [doctorsList, setDoctorsList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [searchLocation, setSearchLocation] = useState(''); // State for search input
    const [showForm, setShowForm] = useState(false); // State to control the visibility of the form

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
                const updatedDoctors = doctorsList.map((doc) =>
                    doc.id === doctor.id ? doctor : doc
                );
                setDoctorsList(updatedDoctors);
                localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
                setEditMode(false);
                setCurrentIndex(null);
            } else {
                // Add new doctor with a unique ID
                const newDoctor = { ...doctor, id: Date.now().toString() }; // Generate a unique ID based on timestamp
                const updatedDoctors = [...doctorsList, newDoctor];
                setDoctorsList(updatedDoctors);
                localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
            }
            resetForm();
            setShowForm(false); // Hide the form after submission
        } else {
            alert('Please fill in all fields');
        }
    };

    const resetForm = () => {
        setDoctor({
            id: '',
            name: '',
            qualification: '',
            experience: '',
            specialty: '',
            location: ''
        });
    };

    const handleEdit = (id) => {
        const doctorToEdit = doctorsList.find(doc => doc.id === id);
        setDoctor(doctorToEdit);
        setEditMode(true);
        setCurrentIndex(doctorsList.indexOf(doctorToEdit));
        setShowForm(true); // Show the form when editing
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this doctor?');
        if (confirmDelete) {
            const updatedDoctors = doctorsList.filter(doc => doc.id !== id);
            setDoctorsList(updatedDoctors);
            localStorage.setItem('doctors', JSON.stringify(updatedDoctors));
        }
    };

    const filteredDoctors = doctorsList.filter(doc => 
        doc.location.toLowerCase().includes(searchLocation.toLowerCase())
    ); // Filter logic based on search input

    return (
        <div className='add-doctor-container'>
            <div className='doctors-list-container'>
                <h2>Doctors List</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Search by location"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
                    />
                </div>
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
                        {filteredDoctors.length === 0 ? (
                            <tr>
                                <td colSpan="6">No doctors found.</td>
                            </tr>
                        ) : (
                            filteredDoctors.map((doc) => (
                                <tr key={doc.id}>
                                    <td>{doc.name}</td>
                                    <td>{doc.qualification}</td>
                                    <td>{doc.experience}</td>
                                    <td>{doc.specialty}</td>
                                    <td>{doc.location}</td>
                                    <td>
                                        <button onClick={() => handleEdit(doc.id)}>Edit</button>
                                        <button onClick={() => handleDelete(doc.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                <button onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancel' : 'Add Doctor'}
                </button>
            </div>
            {showForm && ( // Render the form only if showForm is true
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
            )}
        </div>
    );
};

export default AddDoctor;
