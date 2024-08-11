// src/components/TeacherList.jsx
import React, { useState } from 'react';
import ModalForm from './ModalForm';

const TeacherListComponent = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Mr. Smith', subject: 'Math' },
    { id: 2, name: 'Ms. Johnson', subject: 'English' },
  ]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleCreateOrUpdate = (teacher) => {
    if (teacher.id) {
      setTeachers(teachers.map(t => (t.id === teacher.id ? teacher : t)));
    } else {
      setTeachers([...teachers, { ...teacher, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Teacher List</h2>
      <button onClick={() => setSelectedTeacher({})} className="bg-green-500 text-white py-1 px-3 rounded mb-4">
        Add Teacher
      </button>
      <ul className="space-y-2">
        {teachers.map(teacher => (
          <li key={teacher.id} className="p-4 bg-white shadow rounded flex justify-between">
            <div>
              <h3 className="font-bold">{teacher.name}</h3>
              <p>{teacher.subject}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => setSelectedTeacher(teacher)} className="bg-yellow-500 text-white py-1 px-3 rounded">Edit</button>
              <button onClick={() => handleDelete(teacher.id)} className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {selectedTeacher && (
        <ModalForm 
          entity={selectedTeacher} 
          onSave={handleCreateOrUpdate} 
          onClose={() => setSelectedTeacher(null)} 
          type="Teacher"
        />
      )}
    </div>
  );
};

export default TeacherListComponent;
