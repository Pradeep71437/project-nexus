// src/components/AdminDashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/details');
          console.log('API response:', response.data); // Log the response
          setFeedbacks(response.data.feedbacks2 || []); // Set feedbacks
        } catch (error) {
          console.error('Error fetching feedbacks:', error);
        }
      };
      

    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h1 className='text-white font-bold text-[60px]'>Admin Dashboard</h1>
      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-800'>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>Name</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>Email</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider'>Thoughts</th>
          </tr>
        </thead>
        <tbody className='bg-gray-700 divide-y divide-gray-600'>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <tr key={feedback._id}>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{feedback.name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{feedback.email}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{feedback.thoughts}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className='px-6 py-4 text-sm text-gray-300 text-center'>No feedback available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
