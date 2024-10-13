import React , { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientLogin.css'


function PatientLogin() {
   const [credentials,setCredentials] = useState({uniqueId:'',password:''});
   const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated login check
    if (credentials.uniqueId && credentials.password) {
      alert("Login successful!");
      navigate("/Pages/PatientLandingScreen")
    } else {
      alert("Please provide valid credentials.");
    }
  };

  return (
    
    <div className="login-container">
      
    <h2>Patient</h2>
    <form onSubmit={handleSubmit}>
        <input type="text"
        name="uniqueId" placeholder="UniqueID" onChange={handleChange}/>
         <input type="password"
        name="password" placeholder="Password" onChange={handleChange}/>
    {/* <div className="radio-group">
       <input type="radio" name="userType" value="patient" checked={userType==='patient'} onChange={() =>
        setUserType('patient')} /> Patient 
        <input type="radio" name="userType" value="admin" checked={userType==='admin'} onChange={() =>
        setUserType('admin')} /> Admin 
    </div>  */}
    <button type="submit">Login</button> 
    <div className="new-user">
      <p>Not a member?</p><p><a href="/register">Register</a></p>
    </div> 
    </form>
    </div>
  )
}
export default PatientLogin;

