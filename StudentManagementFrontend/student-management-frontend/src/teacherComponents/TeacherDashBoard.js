// src/components/TeacherDashboard.jsx
import React, { useState } from 'react';
import TeacherStudentList from './TeacherStudentList';
import TimetableComponent from '../principalComponents/TimetableComponent';
import StudentListComponent from '../principalComponents/StudentListComponent';

const TeacherDashboard = () => {
    const [view, setView] = useState('students');

    const renderView = () => {
        switch (view) {
            case 'students':
                return <StudentListComponent />;
            case 'teachers':
                return <TeacherStudentList />;
            case 'timetable':
                return <TimetableComponent />;
            default:
                return <TimetableComponent />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-green-600 text-white p-4">
                <h1 className="text-3xl">Teacher Dashboard</h1>
            </header>
            <nav className="bg-white shadow p-4 flex space-x-4">
                <button onClick={() => setView('students')} className="text-green-600">Students</button>
                <button onClick={() => setView('timetable')} className="text-green-600">Timetable</button>
                <button onClick={() => setView('teachers')} className="text-green-600">Teachers</button>
            </nav>
            <main className="flex-grow p-6">
                {renderView()}
            </main>
        </div>
    );
};

export default TeacherDashboard;
