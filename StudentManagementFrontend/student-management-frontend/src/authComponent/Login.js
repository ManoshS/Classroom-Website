
import React, { useState } from 'react';
import { setToken } from './auth';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axiosInstance.post('/auth/login', { username, password })
      .then(response => {
        setToken(response.data.token);  // Store JWT token
        console.log(response.data.token);
        axiosInstance.get(`/users/roles/${response.data.id}`)
          .then(response => {
            const roleName = response.data.role;
            console.log(roleName)
            if (roleName === "student")
              navigate('/student')
            else if (roleName === "teacher")
              navigate('/teacher')
            else navigate('/')

          })
          .catch(error => {
            console.error('Role error:', error);
            alert("Role")
          });


        // Redirect to a protected route
      })
      .catch(error => {
        console.error('Login error:', error);
        alert("Invalid Username or Password");
      });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username or Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
