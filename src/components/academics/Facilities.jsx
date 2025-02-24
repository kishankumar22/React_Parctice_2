import React from 'react';
import Layout from '../layout/Layout';
import { FaBus, FaUtensils, FaChalkboardTeacher } from 'react-icons/fa'; // Importing icons
import LatestPost from './LatestPost';

const Facilities = () => {
  return (
    <Layout>
      <div className="container h-auto mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2">
          <div className="mb-4  mx-32 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[1.125rem] sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    Facilities
  </h1>
</div>
            <div className='px-4 m-4'>
              <ul className='list-none'>
                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaBus className='text-blue-900 mr-2' />
                  <b>Transport System</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>Transport system from various locations of Bulandshahr and Khurja.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaUtensils className='text-blue-900 mr-2' />
                  <b>Cafeteria</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>A well-equipped cafeteria providing healthy meals and snacks.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaChalkboardTeacher className='text-blue-900 mr-2' />
                  <b>Training and Placement Cell</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>Dedicated cell for training and placement assistance for students.</p>
              </ul>
            </div>
          </div>

          {/* Right Column (col-4) */}
          <div className="md:w-4/12">
           <LatestPost/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Facilities;