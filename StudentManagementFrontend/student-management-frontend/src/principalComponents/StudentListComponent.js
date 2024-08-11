// src/components/StudentList.jsx
import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import axiosInstance from '../authComponent/axiosInstance';

const StudentListComponent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axiosInstance.get('/users/list-students')
            .then(response => { setStudents(response.data); console.log(response) })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    console.log(students)

    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleCreateOrUpdate = (student) => {
        if (student.id) {
            setStudents(students.map(s => (s.id === student.id ? student : s)));
        } else {
            setStudents([...students, { ...student, id: Date.now() }]);
        }
    };

    const handleDelete = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">Student List</h2>
            <button onClick={() => setSelectedStudent({})} className="bg-green-500 text-white py-1 px-3 rounded mb-4">
                Add Student
            </button>
            <ul className="space-y-2">
                {(students.length === 0) ? <h3>No Students Found </h3> : <br></br>}
                {students.map(student => (
                    <li key={student.id} className="p-4 bg-white shadow rounded flex justify-between">
                        <div>
                            <h3 className="font-bold">{student.username}</h3>

                        </div>
                        <div className="space-x-2">
                            <button onClick={() => setSelectedStudent(student)} className="bg-yellow-500 text-white py-1 px-3 rounded">Edit</button>
                            <button onClick={() => handleDelete(student.id)} className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
                        </div>

                    </li>
                ))}
            </ul>
            {selectedStudent && (
                <ModalForm
                    entity={selectedStudent}
                    onSave={handleCreateOrUpdate}
                    onClose={() => setSelectedStudent(null)}
                    type="Student"
                />
            )}
        </div>
    );
};

export default StudentListComponent;
