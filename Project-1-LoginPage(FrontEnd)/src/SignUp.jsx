import React, { useEffect, useRef, useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import HALO from 'vanta/dist/vanta.halo.min';  
import * as THREE from 'three';
import "./index.css";

const SignUp = () => {
  const vantaRef = useRef(null);  // Create a reference for the Vanta background

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const vantaEffect = HALO({
      el: vantaRef.current,  // Apply the effect to the div with this reference
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      THREE,  // Include Three.js for Vanta
    });

    // Cleanup on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regex for valid email

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Handle form submission (e.g., send data to backend)
      console.log('Form submitted successfully', { email, password, confirmPassword });
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div
      ref={vantaRef}
      style={{ height: '100vh', width: '100%', color: 'white' }}
    >
      <form action="#" className='text-center pt-[50%] lg:pt-[15%]' onSubmit={handleSubmit}>
        <div
          className='backdrop-blur-[90px] mx-5 py-5 lg:mx-[25%] xl:mx-[35%] shadow-sm shadow-white rounded-lg bg-black/20 pb-[20px]'
          style={{
            border: "2px solid rgba(255, 255, 255, .2)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
            color: "#fff"
          }}
        >        
        <h1 className='text-[40px] lg:text-[50px] font-bold'>Sign Up</h1>

          <div className='px-8'>
            <div className='relative'>
              <input 
                type="email" 
                placeholder='E-Mail' 
                className='rounded-3xl px-5 py-2  text-white border-2 border-white bg-transparent mt-7 w-full placeholder-white' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FaUser className='absolute top-[40px] right-[20px]' />
              {errors.email && <p className="text-red-500 text-left mt-2">{errors.email}</p>}
            </div>
            <br></br>

            <div className='relative'>
              <input 
                type="password" 
                placeholder='Password' 
                className='rounded-3xl px-5 py-2 w-full text-white border-2 border-white bg-transparent placeholder-white'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className='absolute top-[13px] right-[20px]' />
              {errors.password && <p className="text-red-500 text-left mt-2">{errors.password}</p>}
            </div>

            <div className='relative mt-6'>
              <input 
                type="password" 
                placeholder='Confirm Password' 
                className='rounded-3xl px-5 py-2 w-full text-white border-2 border-white bg-transparent placeholder-white'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FaLock className='absolute top-[13px] right-[20px]' />
              {errors.confirmPassword && <p className="text-red-500 text-left mt-2">{errors.confirmPassword}</p>}
            </div>
        
            <div className='mt-[30px]'>
              <button type="submit" className='bg-white w-full text-black rounded-3xl font-semibold py-2 px-3'>Sign Up</button>
            </div>

            {isSubmitted && <p className="text-green-500 mt-4">Registration successful!</p>}

            <div className='mt-[20px]'>
              <h3 className='py-2'>Already have an account?</h3>
              <a href="/" className='font-bold '>Login</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
