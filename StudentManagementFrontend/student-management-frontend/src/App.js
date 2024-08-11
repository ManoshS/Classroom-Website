// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './authComponent/Login';
import Register from './authComponent/Registeration';
import PrincipalDashboard from './principalComponents/PrincipalDashboard';
import Home from './Home';
import TeacherDashboard from './teacherComponents/TeacherDashBoard';
import StudentDashboard from './studentComponents/StudentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrincipalDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/index" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}




export default App;
