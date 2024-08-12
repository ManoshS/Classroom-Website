// src/components/TeacherList.jsx
import React, { useState, useEffect } from 'react';


import axiosInstance from '../authComponent/axiosInstance';

const TeacherListComponent = () => {
  const [teachers, setTeachers] = useState([]);


  useEffect(() => {
    axiosInstance.get('/users/list-teachers')
      .then(response => { setTeachers(response.data[0]); console.log(response) })
      .catch(error => console.error('Error fetching Teachers:', error));
  }, []);


  return (
    <div>
      <h2 className="text-2xl mb-4">Teacher List</h2>

      <ul className="space-y-2">
        {teachers.map(teacher => (
          <li key={teacher.id} className="p-4 bg-white shadow rounded flex justify-between">
            <div>
              <h3 className="font-bold">Name :{teacher.username}</h3>
              <h3 className="font-bold">Id :{teacher.id}</h3>

            </div>

          </li>
        ))}
      </ul>

    </div>
  );
};

export default TeacherListComponent;
