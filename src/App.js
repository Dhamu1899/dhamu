import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientLandingScreen from './Pages/PatientLandingScreen';
import AdminLandingScreen from './Pages/AdminLandingScreen';
import UpdatePatient from './Components/UpdatePatient';
import AddDoctor from './Components/AddDoctor';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import BookingAppointment from './Components/BookingAppointment';
import FindDoctor from './Components/FindDoctor';
import AddAdmin from './Components/AddAdmin';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Service" element={<Service />} />
        <Route path="/pages/Contact" element={<Contact />} />
        <Route path="/Pages/Patientlandingscreen" element={<PatientLandingScreen />} />
        <Route path="/Pages/AdminLandingscreen" element={<AdminLandingScreen />} />
        <Route path="/Components/AddDoctor" element={<AddDoctor />} />
        <Route path="/Components/UpdatePatient" element={<UpdatePatient />} />
        <Route path="/Components/BookingAppointment" element={<BookingAppointment />} />
        <Route path="/Components/FindDoctor" element={<FindDoctor />} />
        <Route path="/Components/AddAdmin" element={<AddAdmin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
