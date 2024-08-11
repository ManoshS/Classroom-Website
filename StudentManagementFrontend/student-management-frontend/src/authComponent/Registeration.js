// src/components/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '', role: 'student' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Register</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={formData.username}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Role</label>
                    <select
                        name="role"
                        onChange={handleChange}
                        value={formData.role}
                        className="w-full p-2 border border-gray-300 rounded mt-2"
                    >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option value="principal">Principal</option>
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
