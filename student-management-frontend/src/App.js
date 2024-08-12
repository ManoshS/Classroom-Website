// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './authComponent/Login';
import Register from './authComponent/Registeration';
import PrincipalDashboard from './principalComponents/PrincipalDashboard';
import TeacherDashboard from './teacherComponents/TeacherDashBoard';
import StudentDashboard from './studentComponents/StudentDashboard';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrincipalDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/register" element={<Register role="1" />} />
        <Route path="/registerTeacher" element={<Register role="2" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />

      </Routes>
      <Footer />
    </Router>
  );
}




export default App;
