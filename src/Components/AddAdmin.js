import React, { useState, useEffect } from 'react';
import './AddAdmin.css';

const AddAdmin = () => {
  const [admins, setAdmins] = useState([]);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    // Load existing admins from local storage
    const savedAdmins = JSON.parse(localStorage.getItem('admins')) || [];
    setAdmins(savedAdmins);
  }, []);

  const generateUniqueId = () => {
    // Generate a unique ID (e.g., timestamp + random number)
    return `admin_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !mobile || !password || password !== confirmPassword) {
      alert('Please fill in all fields correctly. Passwords must match.');
      return;
    }

    const newAdmin = {
      id: generateUniqueId(),
      name,
      mobile,
      password, // Be cautious with storing passwords; consider hashing in a real application
    };

    // Save the new admin to local storage
    const updatedAdmins = [...admins, newAdmin];
    setAdmins(updatedAdmins);
    localStorage.setItem('admins', JSON.stringify(updatedAdmins));

    // Clear form fields
    setName('');
    setMobile('');
    setPassword('');
    setConfirmPassword('');
    setRegistrationSuccess(true);
  };

  return (
    <div className="admin-register-container">
      <h2>Admin Registration</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="mobile">Mobile Number*</label>
        <input
          type="tel"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />

        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password*</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>

      {registrationSuccess && <p>Registration successful! Unique ID generated.</p>}

      {/* Admin History Section */}
      <h3>Registered Admins</h3>
      {admins.length === 0 ? (
        <p>No admins registered yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Unique ID</th>
              <th>Name</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.id}</td>
                <td>{admin.name}</td>
                <td>{admin.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AddAdmin;
