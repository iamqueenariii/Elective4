import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Pages/Dashboard';
import Schedule from './Pages/Schedule';

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        

        <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Schedule" element={<Schedule />} />
        </Routes>
    </div>
  );
}

export default App;
