import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
