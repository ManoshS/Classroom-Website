
import React, { useState, useEffect } from 'react';

import axiosInstance from '../authComponent/axiosInstance';

const ClassroomStudents = ({ classId }) => {


    const [students, setStudents] = useState([]);
    const [classroom_id, setClassroom_id] = useState(1);
    
    useEffect(() => {
        axiosInstance.get(`/classStudent/classroom-students/${classroom_id}`)
            .then(response => { setStudents(response.data[0]); console.log(response) })
            .catch(error => console.error('Error fetching students:', error));
    }, []);



    const handleChange = (e) => {
        setClassroom_id(e.target.value);
    };

    const handleSubmit = () => {
        axiosInstance.get(`/classStudent/classroom-students/${classroom_id}`)
            .then(response => {
                setStudents(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching Students:', error);
                setStudents([]);
                alert("No Student found")
            });
    };

  


 

    return (
        <div>
            <h2 className="text-2xl mb-4">Classroom Student</h2>
           

            <div>
                Enter Classroom Id to get Students
                <input type="text" value={classroom_id} onChange={handleChange} className="border p-2 mr-2" />
                <button onClick={handleSubmit} className="bg-blue-500 text-white py-1 px-3 rounded">
                    Submit
                </button>
            </div>



            <ul className="space-y-2">
                {(students.length === 0) ? <h3>No Students Found </h3> : <br />}
                {students.map(student => (
                    <li key={student.id} className="p-4 bg-white shadow rounded flex justify-between">
                        <div>
                            <h3 className="font-bold">Name : {student.username}</h3>
                            <h3 className="font-bold">ID : {student.id}</h3>

                        </div>
                       

                    </li>
                ))}
            </ul>

            
        </div>
    )
};

export default ClassroomStudents;