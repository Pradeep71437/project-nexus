import React, { useState } from 'react';
import axios from 'axios'; // To make API calls

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [thoughts, setThoughts] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/feedback', {
        name,
        email,
        thoughts
      });
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error submitting the feedback!', error);
    }
  };

  return (
    <div className='h-auto pb-20 mt-[100px]'>
      <div className=' flex items-start justify-center '>
        <h1 className='text-white font-rale font-bold text-[60px]'>HELP US TO DEVELOP BY GIVING A FEEDBACK</h1>
      </div>
      <div className='flex justify-center items-center'>
        <input 
          type="text" 
          className='w-1/2 border-2 p-3 mt-[70px] border-white bg-transparent rounded-lg placeholder:text-[19px] text-white'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='flex justify-center items-center'>
        <input 
          type="email" 
          className='w-1/2 border-2 p-3 my-[40px] border-white bg-transparent rounded-lg placeholder:text-[19px] text-white'
          placeholder='Your E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='flex justify-center items-start'>
        <textarea 
          className='w-1/2 border-2 p-3 pt-3 h-[160px] border-white bg-transparent rounded-lg placeholder:text-[19px] text-white align-text-top' 
          placeholder='Your Thoughts'
          value={thoughts}
          onChange={(e) => setThoughts(e.target.value)}
        />
      </div>
      <div className='flex justify-center items-center my-10'>
        <button 
          className='border-2 border-[#6A65FF] w-1/2 hover:bg-[#6A65FF] text-white font-rale font-semibold py-3 px-5 rounded-md lg:text-[17px]'
          onClick={handleSubmit}
        >
          SHARE YOUR FEEDBACK
        </button>
      </div>
    </div>
  );
}

export default Feedback;
