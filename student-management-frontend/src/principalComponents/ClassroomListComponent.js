// src/components/ClassroomList.jsx
import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import axiosInstance from '../authComponent/axiosInstance';

const ClassroomListComponent = () => {

    const [classrooms, setClassrooms] = useState([]);

    const [selectedClassroom, setSelectedClassroom] = useState(null);

    useEffect(() => {
        axiosInstance.get('/class/classrooms')
            .then(response => { setClassrooms(response.data); console.log(response) })

            .catch(error => console.error('Error fetching Classroom:', error));
    }, []);

    const handleCreateOrUpdate = (classroom) => {
       
        if (classroom.classroom_id) {
            setClassrooms(classrooms.map(c => (c.classroom_id === classroom.classroom_id ? classroom : c)));
            axiosInstance.put(`/class/classrooms/${classroom.classroom_id}`, classroom)
                .then(response => console.log(response))
                .catch(error => console.error('Error fetching Classroom:', error));
        } else {

            const classr = axiosInstance.post(`/class/classrooms`, classroom)
                .then(response => console.log("Inserted"))
                .catch(error => console.error('Error fetching Classroom:', error));
            setClassrooms([...classrooms, { ...classr }]);
        }
    };

    const handleDelete = (id) => {
        setClassrooms(classrooms.filter(classroom => classroom.classroom_id !== id));
        axiosInstance.delete(`/class/classrooms/${id}`)
            .then(response => console.log("Deleted"))
            .catch(error => console.error('Error fetching Classroom:', error));
    };

    return (
        <div>
            <h2 className="text-2xl mb-4">Classroom List</h2>
            <button onClick={() => setSelectedClassroom({})} className="bg-green-500 text-white py-1 px-3 rounded mb-4">
                Add Classroom
            </button>
            <ul className="space-y-2">
                {classrooms.map(classroom => (
                    <li key={classroom.id} className="p-4 bg-white shadow rounded flex justify-between">
                        <div>
                            <h3 className="font-bold">{classroom.class_name}</h3>
                            <h4>ClassRoom Id: {classroom.classroom_id}</h4>
                            <p>Teacher Id: {classroom.teacher_id}</p>
                            <p>Duration :{classroom.start_time}-{classroom.end_time} Daily      </p>
                        </div>
                        <div className="space-x-2">
                            <button onClick={() => setSelectedClassroom(classroom)} className="bg-yellow-500 text-white py-1 px-3 rounded">Edit</button>
                            <button onClick={() => handleDelete(classroom.classroom_id)} className="bg-red-500 text-white py-1 px-3 rounded">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedClassroom && (
                <ModalForm
                    entity={selectedClassroom}
                    onSave={handleCreateOrUpdate}
                    onClose={() => setSelectedClassroom(null)}
                    type="Classroom"
                />
            )}
        </div>
    );
};

export default ClassroomListComponent;