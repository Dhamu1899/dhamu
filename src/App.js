import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientLandingScreen from './Pages/PatientLandingScreen';
import AdminLandingScreen from './Pages/AdminLandingScreen';
import AddPatient from './Components/AddPatient';
import AddDoctor from './Components/AddDoctor';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import FindDoctor from './Components/FindDoctor';

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
        <Route path="/Components/AddPatient" element={<AddPatient />} />
        <Route path="/Components/FindDoctor" element={<FindDoctor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
