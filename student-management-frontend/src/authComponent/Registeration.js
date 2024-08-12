// src/components/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
const Register = ({ role }) => {
    let roleName = ""
    if (role === "1")
        roleName = "student"
    else if (role === "2")
        roleName = "teacher"
    else if (role === "3") roleName = "principal"
    const [formData, setFormData] = useState({ username: '', password: '', role_name: roleName });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        axiosInstance.post(`/auth/register`, formData)
            .then(response => console.log("Created "))
            .catch(error => console.error('Error Creating User:', error));

        console.log(formData);
        navigate('/');
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

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Register
                </button>
                <br></br>
                <Link className='block bg-green-500  text-white py-2 rounded' to="../">Go to Dashboard</Link>
            </form>

        </div>
    );
};

export default Register;
