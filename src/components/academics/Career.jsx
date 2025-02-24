import React from 'react';
import Career1 from '../../assets/images/career.jpg';
import Layout from '../layout/Layout';
import LatestPost from './LatestPost';

const Career = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2">
          <div className="mb-4  mx-32 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[1.125rem] sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    career
  </h1>
</div>
            <img src={Career1} alt="Career" className="w-full object-fill p-8 mt-4" />
          </div>

          {/* Right Column (col-4) */}
          <div className="md:w-4/12 ">
            <div className="">
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