import React from 'react';
import { motion } from 'framer-motion';
import './AchievementsSection.css'; 

// Array of achievements
const achievements = [
  { 
    id: 1, 
    title: 'Best Hospital Award', 
    year: '2022', 
    description: 'Awarded for outstanding patient care and innovation in healthcare services.',
    seal: 's1.jpg' // Update with actual path
  },
  { 
    id: 2, 
    title: 'Excellence in Patient Care', 
    year: '2021', 
    description: 'Recognized for maintaining exceptional standards in patient care.',
    seal: 's1.jpg' // Update with actual path
  },
  { 
    id: 3, 
    title: 'Innovation in Healthcare', 
    year: '2020', 
    description: 'Honored for pioneering new methods in patient treatment.',
    seal: 's1.jpg' // Update with actual path
  },
  { 
    id: 4, 
    title: 'Community Impact Award', 
    year: '2019', 
    description: 'Celebrated for significant contributions to community health initiatives.',
    seal: 's1.jpg' // Update with actual path
  },
];

const AchievementsSection = () => {
  return (
    <section className="achievements-section mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
          key={achievement.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="achievement-card bg-white rounded-lg shadow-lg p-6 text-center"
      >
          <img src={achievement.seal} alt="Seal" className="seal-image" />
          <h3 className="achievement-title text-primary">{achievement.title}</h3>
          <p className="achievement-year">{achievement.year}</p>
          <p className="description">Your descriptive text here, explaining the achievement or adding context.</p>
      </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
