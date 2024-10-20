import { Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import AdminDashboard from "./components/AdminDashboard";


const App = () => {
  return (
    <div className='bg-[#051139] h-auto'>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/admin" element={<AdminDashboard />} />

   
    </Routes>
    </div>
  )
}

export default App