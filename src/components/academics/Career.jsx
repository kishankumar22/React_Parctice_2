import React from 'react';
import Career1 from '../../assets/images/career.jpg';
import Layout from '../layout/Layout';
import LatestPost from './LatestPost';

const Career = () => {
  return (
    <Layout>
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2">
          <div className='bg-gray-200 h-8 mx-48  flex items-center justify-center shadow-md'>
              <h1 className="text-xl text-center font-bold uppercase text-white bg-blue-900 rounded-lg p-2 shadow-lg">
                Career
              </h1>
            </div>
            <img src={Career1} alt="Career" className="w-full object-fill p-8 mt-4" />
          </div>

          {/* Right Column (col-4) */}
          <div className="md:w-4/12 p-2">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <LatestPost />
              {/* Add more content here as needed */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;