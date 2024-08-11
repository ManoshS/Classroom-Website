// src/components/Dashboard.jsx
import React, { useState } from 'react';
import StudentListComponent from './StudentListComponent';
import TeacherListComponent from './TeacherListComponent';
import ClassroomListComponent from './ClassroomListComponent';
import TimetableComponent from './TimetableComponent';

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
      default:
        return <StudentListComponent />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl">Principal Dashboard</h1>
      </header>
      <nav className="bg-white shadow p-4 flex space-x-4">
        <button onClick={() => setView('students')} className="text-blue-600">Students</button>
        <button onClick={() => setView('teachers')} className="text-blue-600">Teachers</button>
        <button onClick={() => setView('classrooms')} className="text-blue-600">Classrooms</button>
        <button onClick={() => setView('timetable')} className="text-blue-600">Timetable</button>
      </nav>
      <main className="flex-grow p-6">
        {renderView()}
      </main>
    </div>
  );
};

export default PrincipalDashboard;
