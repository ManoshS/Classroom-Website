import { removeToken } from './auth';
export default function logout() {
  // Remove the token from local storage
  removeToken();
  localStorage.removeItem('authToken');

  // Optionally, you can also remove other user-related data from local storage
  localStorage.removeItem('userRole');

  // Redirect to the login page
  window.location.href = '/login'; // or use history.push('/login') if you are using react-router-dom
}