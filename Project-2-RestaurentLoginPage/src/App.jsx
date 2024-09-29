import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div> 
            <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            </Routes>
    
    </div>
  )
}

export default App