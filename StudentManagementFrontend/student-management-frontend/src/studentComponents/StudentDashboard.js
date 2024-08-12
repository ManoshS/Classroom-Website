// src/components/StudentDashboard.jsx
import React, { useState } from 'react';
import StudentList from './StudentList';
import StudentTimetable from './StudentTimetable';
import logout from '../authComponent/logout'
const StudentDashboard = () => {
    const [view, setView] = useState('students');

    const renderView = () => {
        switch (view) {
            case 'students':
                return <StudentList />;
            case 'timetable':
                return <StudentTimetable />;
            default:
                return <StudentList />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white p-4">
                <h1 className="text-3xl">Student Dashboard</h1>
                <button className="absolute top-0 right-0 m-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={logout}>
          Logout
        </button>
            </header>
            <nav className="bg-white shadow p-4 flex space-x-4">
                <button onClick={() => setView('students')} className="text-blue-600">Classmates</button>
                <button onClick={() => setView('timetable')} className="text-blue-600">Timetable</button>
            </nav>
            <main className="flex-grow p-6">
                {renderView()}
            </main>
        </div>
    );
};

export default StudentDashboard;
