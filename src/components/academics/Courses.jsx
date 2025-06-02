import React from 'react';
import Layout from '../layout/Layout';
import LatestPost from './LatestPost';

const Courses = () => {
  return (
    <Layout>
      <div className="container  mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2 mb-8">
          <div className="mb-2  mx-4 lg:mx-44  sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[1rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    Courses
  </h1>
</div>
            <h2 className="text-sm mt-12 font-semibold">D. PHARMACY (60 Seats)</h2>
            <p className="mt-2 text-gray-700">
              Here you can find detailed information about the D. Pharmacy program, including curriculum, admission requirements, and more.
            </p>
          </div>
          {/* Right Column (col-4) */}
          <div className="md:w-4/12 pb-2">
            <LatestPost/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;