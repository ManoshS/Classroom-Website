// src/components/ModalForm.jsx
import React, { useState, useEffect } from 'react';

const ModalForm = ({ entity, onSave, onClose, type }) => {
    const [formData, setFormData] = useState({ ...entity });

    useEffect(() => {
        setFormData({ ...entity });
    }, [entity]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl mb-4">{entity.id ? `Edit ${type}` : `Add ${type}`}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    {(type === 'Student' || type === 'Teacher' || type === 'Principal') ? (

                        <div>

                            <label className="block text-gray-700">{type} Name</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username || ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                                required
                            />


                        </div>
                    ) : null}
                    {(type === 'classroomStudents') ? (
                    <div>
                    <label className="block text-gray-700">ClassRoom Id</label>
                    <input
                        type="text"
                        name="classroom_id"
                        value={formData.classroom_id || ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                        required
                            />
                            
                        <label className="block text-gray-700">Student Id</label>
                    <input
                        type="text"
                        name="student_id"
                        value={formData.student_id || ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                        required
                    />
                    </div>
                        
                        
                        
                    ): null}
                    {type === 'Classroom' ? (
                        <div>
                            <label className="block text-gray-700">Teacher Id</label>
                            <input
                                type="text"
                                name="teacher_id"
                                value={formData.teacher_id || ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                                required
                            />
                        </div>
                    ) : null}
                    {type === 'Classroom' ? (<div>
                        <div>
                            <label className="block text-gray-700">{type}  Name</label>
                            <input
                                type="text"
                                name="class_name"
                                value={formData.class_name || ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                                required
                            />
                        </div>
                        <label className="block text-gray-700">Start Time</label>
                        <input
                            type="time"
                            name="start_time"
                            value={formData.start_time || "00:00:00"}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"

                        />
                        <label className="block text-gray-700">End Time</label>
                        <input
                            type="time"
                            name="end_time"
                            value={formData.end_time || "00:00:00"}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-2"

                        />
                    </div>) : null}
                    {type === 'Timetable' ? (
                        <>


                            ClassRoom ID : -
                            <input
                                type="text"
                                name="classroom_id"
                                value={formData.classroom_id || ''}
                                onChange={handleChange}
                                className=" p-2 border border-gray-300 rounded mt-2"
                                required
                            />
                            <br />

                            <label className=" text-gray-700">Day : -</label>
                            <input
                                type="text"
                                name="day_of_week"
                                value={formData.day_of_week || ''}
                                onChange={handleChange}
                                className=" p-2 border border-gray-300 rounded mt-2"
                                required
                            />
                            <br />
                            <label className=" text-gray-700">Class1 Start Time - Class1 End Time</label>
                            <input
                                type="time"
                                name="class1_start_time"
                                value={formData.class1_start_time || ''}
                                onChange={handleChange}
                                className=" p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                            {/* <label className="block text-gray-700"></label> */}-to-
                            <input
                                type="time"
                                name="class1_end_time"
                                value={formData.class1_end_time || ''}
                                onChange={handleChange}
                                className=" p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                            {/* <label className="block text-gray-700">Subject1 Name</label> */}
                            <br />
                            Subject1 Name :-
                            <input
                                type="text"
                                name="sub1"
                                value={formData.sub1 || ''}
                                onChange={handleChange}
                                className=" p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                            <label className="block text-gray-700">Class2 Start Time - Class2 End Time</label>
                            <input
                                type="time"
                                name="class2_start_time"
                                value={formData.class2_start_time || ''}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                            {/* <label className="block text-gray-700">Class2 End Time</label> */}-to-
                            <input
                                type="time"
                                name="class2_end_time"
                                value={formData.class2_end_time || ''}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                            {/* <label className="block text-gray-700">Subject2 Name</label> */}<br />
                            Subject2 Name :-
                            <input
                                type="text"
                                name="sub2"
                                value={formData.sub2 || ''}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                            <label className="block text-gray-700">Class3 Start Time - Class3 End Time</label>
                            <input
                                type="time"
                                name="class3_start_time"
                                value={formData.class3_start_time || ''}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                            {/* <label className="block text-gray-700">Class3 End Time</label> */}-to-
                            <input
                                type="time"
                                name="class3_end_time"
                                value={formData.class3_end_time || ''}
                                onChange={handleChange}
                                className="p-2 border border-gray-300 rounded mt-2"
                                required
                            />
                            <br />
                            {/* <label className=" text-gray-700">Subject3 Name</label> */}
                            Subject3 Name :-
                            <input
                                type="text"
                                name="sub3"
                                value={formData.sub3 || ''}
                                onChange={handleChange}
                                className=" p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                            <label className="block text-gray-700">Class4 Start Time - Class4 Start Time</label>
                            <input
                                type="time"
                                name="class4_start_time"
                                value={formData.class4_start_time || ''}
                                onChange={handleChange}
                                className=" p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                            {/* <label className="block text-gray-700">Class4 End Time</label> */}-to-
                            <input
                                type="time"
                                name="class4_end_time"
                                value={formData.class4_end_time || ''}
                                onChange={handleChange}
                                className=" p-2 border border-gray-300 rounded mt-2"
                                required
                            />
                            <br></br>
                            <label className=" text-gray-700">Subject4 Name :-</label>
                            <input
                                type="text"
                                name="sub4"
                                value={formData.sub4 || ''}
                                onChange={handleChange}
                                className=" p-2 border border-gray-300 rounded mt-2"
                                required
                            />

                        </>
                    ) : null}
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white py-1 px-3 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-1 px-3 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
