// src/components/Dashboard.jsx
import React, { useState } from 'react';
import StudentListComponent from './StudentListComponent';
import TeacherListComponent from './TeacherListComponent';
import ClassroomListComponent from './ClassroomListComponent';
import TimetableComponent from './TimetableComponent';
import ClassroomStudents from './ClassroomStudents'
import logout from '../authComponent/logout'

const PrincipalDashboard = () => {
  const [view, setView] = useState('students');

  const renderView = () => {
    switch (view) {
      case 'students':
        return <StudentListComponent />;
      case 'teachers':
        return <TeacherListComponent />;
      case 'classrooms':
        return <ClassroomListComponent />;
      case 'timetable':
        return <TimetableComponent />;
      case 'classStudents':
        return <ClassroomStudents />
      default:
        return <StudentListComponent />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl">Principal Dashboard</h1>
        <button className="absolute top-0 right-0 m-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={logout}>
          Logout
        </button>
      </header>
      <nav className="bg-white shadow p-4 flex space-x-4">
        <button onClick={() => setView('students')} className="text-blue-600">Students</button>
        <button onClick={() => setView('teachers')} className="text-blue-600">Teachers</button>
        <button onClick={() => setView('classrooms')} className="text-blue-600">Classrooms</button>
        <button onClick={() => setView('timetable')} className="text-blue-600">Timetable</button>
        <button onClick={() => setView('classStudents')} className="text-blue-600">Class Students</button>
      </nav>
      <main className="flex-grow p-6">
        {renderView()}
      </main>
    </div>
  );
};

export default PrincipalDashboard;
