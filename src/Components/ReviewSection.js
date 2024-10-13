import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ReviewSection.css'; // Import the CSS file for styles

const ReviewSection = () => {
  const initialReviews = [
    { id: 1, name: 'John D.', content: 'Excellent care and friendly staff!', rating: 5 },
    { id: 2, name: 'Sarah M.', content: 'Very professional and efficient service.', rating: 4 },
    { id: 3, name: 'Mike R.', content: 'State-of-the-art facilities and knowledgeable doctors.', rating: 5 },
    { id: 4, name: 'Linda T.', content: 'Compassionate staff and great attention to detail.', rating: 5 }, // Unique entry
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ name: '', content: '', rating: 5 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.content) {
      setReviews([{ ...newReview, id: reviews.length + 1 }, ...reviews]);
      setNewReview({ name: '', content: '', rating: 5 }); // Reset form
    }
  };

  // Shuffle reviews
  const shuffledReviews = [...reviews].sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <section className="review-section mb-16">
     
      
      {/* Review Form */}
      <form onSubmit={handleSubmit} className="review-form mb-8">
        <h3 className="form-title">Add Your Review</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <textarea
          name="content"
          placeholder="Your Review"
          value={newReview.content}
          onChange={handleChange}
          required
          className="form-textarea"
        />
        <select
          name="rating"
          value={newReview.rating}
          onChange={handleChange}
          className="form-select"
        >
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>
        <button type="submit" className="form-button">Add Review</button>
      </form>

      <h2 className="review-title">Patient Reviews</h2>
      <div className="review-grid">
        {shuffledReviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="review-card"
          >
            <div className="review-rating">
              <div className="text-yellow-400 mr-2">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <span className="text-gray-600">{review.rating}/5</span>
            </div>
            <p className="review-content">{review.content}</p>
            <p className="review-author">- {review.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
