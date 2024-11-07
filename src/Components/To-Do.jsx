// ToDo.js
import React from 'react';
import { Link } from 'react-router-dom';

const ToDo = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">To-Do List</h1>

      <div className="space-y-4">
        {/* Links to navigate to each day's To-Do List */}
        <Link to="/monday" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center w-full">
          <h2 className="text-2xl font-bold text-gray-700">Monday</h2>
        </Link>
        <Link to="/tuesday" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center w-full">
          <h2 className="text-2xl font-bold text-gray-700">Tuesday</h2>
        </Link>
        <Link to="/wednesday" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center w-full">
          <h2 className="text-2xl font-bold text-gray-700">Wednesday</h2>
        </Link>
        <Link to="/thursday" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center w-full">
          <h2 className="text-2xl font-bold text-gray-700">Thursday</h2>
        </Link>
        <Link to="/friday" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center w-full">
          <h2 className="text-2xl font-bold text-gray-700">Friday</h2>
        </Link>
        <Link to="/saturday" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center w-full">
          <h2 className="text-2xl font-bold text-gray-700">Saturday</h2>
        </Link>
        <Link to="/sunday" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 text-center w-full">
          <h2 className="text-2xl font-bold text-gray-700">Sunday</h2>
        </Link>
      </div>
    </div>
  );
};

export default ToDo;
