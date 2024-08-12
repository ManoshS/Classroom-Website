// src/components/TeacherList.jsx
import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../authComponent/axiosInstance';

const TeacherListComponent = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.get('/users/list-teachers')
      .then(response => { setTeachers(response.data[0]); console.log(response) })
      .catch(error => console.error('Error fetching Teachers:', error));
  }, []);

  const handleCreateOrUpdate = (teacher) => {
    if (teacher.id) {
      if (teacher.id) {
        axiosInstance.put(`/users/teachers/${teacher.id}`, teacher)
          .then(response => console.log("Updated"))
          .catch(error => console.error('Error fetching   :', error));
        setTeachers(teachers.map(s => (s.id === teacher.id ? teacher : s)));
      }
      setTeachers(teachers.map(t => (t.id === teacher.id ? teacher : t)));
    }
  };

  const handleDelete = (id) => {
    setTeachers(teachers.filter(teacher => teacher.id !== id));
    axiosInstance.delete(`/users/teachers/${id}`)
      .then(response => console.log("Deleted"))
      .catch(error => console.error('Error fetching   :', error));
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Teacher List</h2>
      <button onClick={() => {
        alert("You will create New User")
        navigate("/registerTeacher")
      }} className="bg-green-500 text-white py-1 px-3 rounded mb-4">
        Add Teacher
      </button>
      <ul className="space-y-2">
        {teachers.map(teacher => (
          <li key={teacher.id} className="p-4 bg-white shadow rounded flex justify-between">
            <div>
              <h3 className="font-bold">Name : {teacher.username}</h3>
              <h3 className="font-bold">ID : {teacher.id}</h3>
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
