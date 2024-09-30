import React, { useState } from 'react';
import food from '../assets/food.png';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });

    const styles = `
        @keyframes rotate {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .animate-rotate-slow {
            animation: rotate 50s linear infinite;
        }
    `;

    const validateForm = () => {
        let emailError = '';
        let passwordError = '';
        let confirmPasswordError = '';

        // Email validation (basic format check)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            emailError = 'Email is required';
        } else if (!emailRegex.test(email)) {
            emailError = 'Invalid email format';
        }

        // Password validation (basic non-empty check)
        if (!password) {
            passwordError = 'Password is required';
        } else if (password.length < 6) {
            passwordError = 'Password must be at least 6 characters';
        }

        // Confirm password validation
        if (confirmPassword !== password) {
            confirmPasswordError = 'Passwords do not match';
        }

        // Set error messages
        setErrors({
            email: emailError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
        });

        // Return true if no errors
        return !emailError && !passwordError && !confirmPasswordError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Proceed with the form submission
            console.log('Form submitted:', { email, password });
        }
    };
    const signup = () => {
        axios.post("http://localhost:3000/signup", { email, password })
          .then((response) => {
            console.log(response);
            alert("You have Signed in successfully!. Login in continue"); 
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <div>
            <div className="flex">
                <div className="w-full lg:w-2/5 bg-black p-4 h-screen relative">
                    <div className="flex justify-between p-3">
                        <h1 className="text-white text-3xl font-bold">Restaurant</h1>
                        <a href="/" className="text-white font-semibold border rounded-2xl px-4 py-2 hover:bg-orange-600 border-orange-600 hover:text-white">
                            Login
                        </a>
                    </div>

                    <div className="mt-[100px]">
                        <h1 className="text-white text-[40px] font-bold text-center">Sign Up</h1>
                        <p className="text-center pt-3 text-sm text-white">Please sign up to proceed</p>
                        <div className="flex justify-center items-center">
                            <form onSubmit={handleSubmit} className="mt-6">
                                <div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="E-Mail"
                                        className="rounded-[50px] px-8 py-4 text-white bg-gray-900 mt-7 w-[350px] placeholder-white"
                                    />
                                    {errors.email && <p className="text-red-500 mt-2">{errors.email}</p>}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="rounded-[50px] px-8 py-4 text-white bg-gray-900 mt-7 w-[350px] placeholder-white"
                                    />
                                    {errors.password && <p className="text-red-500 mt-2">{errors.password}</p>}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm Password"
                                        className="rounded-[50px] px-8 py-4 text-white bg-gray-900 mt-7 w-[350px] placeholder-white"
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 mt-2">{errors.confirmPassword}</p>}
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="rounded-[50px] px-8 py-4 text-white bg-orange-600 mt-7 hover:bg-orange-500 w-[350px]"
                                     onClick={signup}>
                                        Sign Up
                                    </button>
                                </div>
                                <div className="flex justify-between items-center px-5">
                                    <label className="pt-[20px] text-white">
                                        <input type="checkbox" className="mx-1" />Remember me
                                    </label>
                                    <a href="#" className="text-orange-500 mt-5">Forgot?</a>
                                </div>
                                <div className="mt-10">
                                    <h3 className="text-white text-center">
                                        Already have an account? <a href="/" className="text-orange-500">Login</a>
                                    </h3>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-3/5 hidden lg:block bg-bgimg bg-cover bg-center">
                    <style>{styles}</style>
                    <div className="relative w-full h-screen bg-black/85 flex justify-center items-center">
                        <img src={food} alt="food" className="w-[550px] animate-rotate-slow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
