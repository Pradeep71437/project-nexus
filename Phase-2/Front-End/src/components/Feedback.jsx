import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [thoughts, setThoughts] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/feedback', {
                name,
                email,
                thoughts,
            });

            setMessage(response.data.message); // Show success message
            // Reset form fields after submission
            setName('');
            setEmail('');
            setThoughts('');
        } catch (error) {
            console.error('Error submitting feedback:', error);
            setMessage('Error submitting feedback, please try again.'); // Show error message
        }
    };

    return (
        <div className='h-auto pb-20 mt-[100px]'>
            <div className='flex items-start justify-center'>
                <h1 className='text-white font-rale font-bold text-[60px]'>Help Us To Develop By Giving A Feedback</h1>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center'>
                <input
                    type="text"
                    className='w-1/2 border-2 p-3 mt-[70px] border-white bg-transparent rounded-lg placeholder:text-[19px] text-white'
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    className='w-1/2 border-2 p-3 my-[40px] border-white bg-transparent rounded-lg placeholder:text-[19px] text-white'
                    placeholder='Your E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    className='w-1/2 border-2 p-3 pt-3 h-[160px] border-white bg-transparent rounded-lg placeholder:text-[19px] text-white'
                    placeholder='Your Thoughts'
                    value={thoughts}
                    onChange={(e) => setThoughts(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className='border-2 border-[#6A65FF] w-1/2 hover:bg-[#6A65FF] text-white font-rale font-semibold py-3 px-5 rounded-md lg:text-[17px]'
                >
                    SHARE YOUR FEEDBACK
                </button>
            </form>
            {message && <p className="text-white text-center mt-4">{message}</p>} {/* Display message */}
        </div>
    );
};

export default Feedback;
