// About.js
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg mb-4">
          Welcome to our IO project
        </p>
        <p className="text-gray-600 text-lg">
          Our mission is to get a distinction certificate so that our parents dont think we wasted our money on this course.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
