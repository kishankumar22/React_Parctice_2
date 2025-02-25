import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white animate-bounce">404</h1>
        <p className="mt-4 text-2xl text-white">Oops! Page Not Found</p>
        <p className="mt-2 text-lg text-white">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;