// // src/components/TeacherStudentList.jsx
// import React, { useState } from 'react';

// const TeacherStudentList = () => {
//     const [teachers, setTeachers] = useState([
//         { id: 1, name: 'Alice Brown', class: '10th Grade' },
//         { id: 2, name: 'Bob White', class: '10th Grade' },
//     ]);

//  return (
//         <div>
//             <h2 className="text-2xl mb-4">Teachers List</h2>

//             <ul className="space-y-2">
//                 {teachers.map(teacher => (
//                     <li key={teacher.id} className="p-4 bg-white shadow rounded flex justify-between">
//                         <div>
//                             <h3 className="font-bold">{teacher.name}</h3>
//                             <p>{teacher.class}</p>
//                         </div>

//                     </li>
//                 ))}
//             </ul>

//         </div>
//     );
// };

// export default TeacherStudentList;

// src/components/TeacherStudentList.jsx
import React, { useState, useEffect } from 'react';
import axiosInstance from '../authComponent/axiosInstance';
import ModalForm from '../principalComponents/ModalForm';

const TeacherStudentList = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    axiosInstance.get('/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleCreateOrUpdate = (studentData) => {
    const url = studentData.id ? `/students/${studentData.id}` : '/students';
    const method = studentData.id ? 'put' : 'post';

    axiosInstance[method](url, studentData)
      .then(response => {
        setStudents(prevStudents => {
          if (studentData.id) {
            return prevStudents.map(student =>
              student.id === response.data.id ? response.data : student
            );
          } else {
            return [...prevStudents, response.data];
          }
        });
        setSelectedStudent(null);
      })
      .catch(error => console.error('Error saving student:', error));
  };

  const handleDelete = (id) => {
    axiosInstance.delete(`/students/${id}`)
      .then(() => setStudents(prevStudents => prevStudents.filter(student => student.id !== id)))
      .catch(error => console.error('Error deleting student:', error));
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">My Students</h2>
      <button onClick={() => setSelectedStudent({})} className="bg-green-500 text-white py-1 px-3 rounded mb-4">
        Add Student
      </button>
      <ul className="space-y-2">
        {students.map(student => (
          <li key={student.id} className="p-4 bg-white shadow rounded flex justify-between">
            <div>
              <h3 className="font-bold">{student.name}</h3>
              <p>{student.class}</p>
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
          student={selectedStudent} 
          onSave={handleCreateOrUpdate} 
          onClose={() => setSelectedStudent(null)} 
        />
      )}
    </div>
  );
};

export default TeacherStudentList;
