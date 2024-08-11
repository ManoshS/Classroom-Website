// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">Welcome to User Management</h1>
                <div className="space-x-4">

                    <Link to="/register" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Register
                    </Link>
                    <Link to="/login" className="bg-green-500 text-white py-2 px-4 rounded">
                        Login to
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Home;
