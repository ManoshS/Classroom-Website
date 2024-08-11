// src/components/StudentList.jsx
import React, { useState } from 'react';

const StudentList = () => {
    const [students] = useState([
        { id: 1, name: 'Alice Brown', class: '10th Grade' },
        { id: 2, name: 'Bob White', class: '10th Grade' },
        { id: 3, name: 'Charlie Green', class: '10th Grade' },
    ]);

    return (
        <div>
            <h2 className="text-2xl mb-4">My Classmates</h2>
            <ul className="space-y-2">
                {students.map(student => (
                    <li key={student.id} className="p-4 bg-white shadow rounded flex justify-between">
                        <div>
                            <h3 className="font-bold">{student.name}</h3>
                            <p>{student.class}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
