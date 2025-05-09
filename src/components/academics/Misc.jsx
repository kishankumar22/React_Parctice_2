import React from 'react';
import Layout from '../layout/Layout';
import { FaBriefcase, FaShieldAlt, FaUserShield, FaBookOpen } from 'react-icons/fa'; // Importing relevant icons
import LatestPost from './LatestPost';

const Misc = () => {
  return (
    <Layout>
      <div className="container h-auto mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 pt-2">
          <div className="mb-2  mx-4 lg:mx-44  sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[1rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    MISC
  </h1>
</div>
            <div className='px-4 m-4'>
              <ul className='list-none'>
                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaBriefcase className='text-blue-900 mr-2' />
                  <b>Placement and Career Guidance Cell</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>This cell provides support and guidance for students seeking placements and career opportunities.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaShieldAlt className='text-blue-900 mr-2' />
                  <b>Anti Ragging Committee</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>The committee works to prevent ragging and ensure a safe environment for all students.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaUserShield className='text-blue-900 mr-2' />
                  <b>Anti Discrimination Cell</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>This cell addresses issues of discrimination and promotes equality among students.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaBookOpen className='text-blue-900 mr-2' />
                  <b>D. Pharma Syllabus</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>The syllabus outlines the curriculum and subjects covered in the D. Pharma program.</p>
              </ul>
            </div>
          </div>

          {/* Right Column (col-4) */}
          <div className="md:w-4/12 ">
            <LatestPost />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Misc;