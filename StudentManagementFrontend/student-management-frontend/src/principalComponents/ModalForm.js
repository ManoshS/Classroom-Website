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

                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password || ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                                required
                            />
                        </div>
                    ) : null}
                    {type === 'Classroom' || type === 'Timetable' ? (
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
                            <div>
                                <label className="block text-gray-700">Day</label>
                                <input
                                    type="text"
                                    name="day"
                                    value={formData.day || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Time</label>
                                <input
                                    type="text"
                                    name="time"
                                    value={formData.time || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700">Classroom</label>
                                <input
                                    type="text"
                                    name="classroom"
                                    value={formData.classroom || ''}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
                                    required
                                />
                            </div>
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
