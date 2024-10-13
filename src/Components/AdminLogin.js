import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'

const AdminLogin = () => {
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
      navigate("/Pages/AdminLandingScreen")
    } else {
      alert("Please provide valid credentials.");
    }
  };

  return (
    <div className="login-container">
      
    <h2>Admin</h2>
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
    
    </form>
    </div>
  )
}

export default AdminLogin ;
