// src/components/StudentTimetable.jsx
import React, { useState } from 'react';

const StudentTimetable = () => {
    const [timetable] = useState([
        { id: 1, day: 'Monday', subject: 'Math', time: '09:00 - 10:00' },
        { id: 2, day: 'Tuesday', subject: 'Science', time: '10:00 - 11:00' },
        { id: 3, day: 'Wednesday', subject: 'English', time: '11:00 - 12:00' },
    ]);

    return (
        <div>
            <h2 className="text-2xl mb-4">Classroom Timetable</h2>
            <ul className="space-y-2">
                {timetable.map(entry => (
                    <li key={entry.id} className="p-4 bg-white shadow rounded flex justify-between">
                        <div>
                            <h3 className="font-bold">{entry.subject}</h3>
                            <p>{entry.day}, {entry.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentTimetable;
