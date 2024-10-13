import React from 'react';
import { motion } from 'framer-motion';
import DoctorCard from './DoctorCard';
import ReviewSection from './ReviewSection';
import AchievementsSection from './AchievementsSection';
import './HomePage.css'

const HomePage = () => {
  const doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', image: '/Doctor1.jpg' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurologist', image: '/Doctor2.jpg' },
    { id: 3, name: 'Dr. Mike Johnson', specialty: 'Pediatrician', image: '/Doctor3.jpg' },
    { id: 4, name: 'Dr. Mike Johnson', specialty: 'Pediatrician', image: '/Doctor3.jpg' },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="grid md:grid-cols-1 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="Doctor1.jpg" alt="Doctor Team" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">Welcome to MediCare</h2>
            <p className="text-gray-700 mb-4">
              We are committed to providing the highest quality healthcare services to our community.
              Our team of experienced doctors and state-of-the-art facilities ensure that you receive
              the best possible care.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-md text-lg font-medium"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Doctors</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Infrastructure</h2>
          <img src="/Hos.jpg" alt="Hospital Infrastructure" className="w-full rounded-lg shadow-lg" />
        </motion.div>
      </section>
      <ReviewSection />
      <AchievementsSection />

      
    </div>
  );
};

export default HomePage;
