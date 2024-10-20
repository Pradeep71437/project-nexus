import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Admin Dashboard: Feedback List</h1>
      <div className="mt-5">
        {feedbacks.length > 0 ? (
          feedbacks.map(feedback => (
            <div key={feedback._id} className="border p-4 my-4 rounded">
              <p><strong>Name:</strong> {feedback.name}</p>
              <p><strong>Email:</strong> {feedback.email}</p>
              <p><strong>Thoughts:</strong> {feedback.thoughts}</p>
              <p><small><strong>Date:</strong> {new Date(feedback.date).toLocaleString()}</small></p>
            </div>
          ))
        ) : (
          <p>No feedback available</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
