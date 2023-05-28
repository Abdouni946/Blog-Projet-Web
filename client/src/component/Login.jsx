
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    setAuthenticated(localStorage.getItem('token') !== null);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    axios
      .post('http://localhost:3001/auth/login', userData)
      .then((response) => {
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setAuthenticated(true);
        const userId = response.data.user.id;
        window.location.href = `/Profil/${userId}`; // Redirect to home page or any other desired location
      })
      .catch((error) => {
        console.error('Login error:', error);
        setErrorMessage('Incorrect password. Please try again.'); // Set the error message
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuthenticated(false);
    window.location.href = '/'; 
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-green-800 to-green-200 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">BlogyBee</h1>
          <p className="text-white mt-1"> Read our latest Blogs NOW using the link below </p>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form onSubmit={handleSubmit} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input className="pl-2 outline-none border-none" type="email" value={email} onChange={handleEmailChange} required placeholder="Email Address" />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd" />
            </svg>
            <input className="pl-2 outline-none border-none" type="password" value={password} onChange={handlePasswordChange} required placeholder="Password" />
          </div>
          <button type="submit" className="block w-full bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
          <span className="text-sm ml-2 hover:green-500 cursor-pointer"> <Link to="/Signup">Register ?</Link></span>
        </form>
      </div>
    </div>
  );
}

export default App;
