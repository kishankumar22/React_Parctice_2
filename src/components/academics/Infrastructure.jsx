import React from 'react';
import Layout from '../layout/Layout';
import { FaLaptop, FaLeaf, FaChalkboardTeacher, FaTheaterMasks, FaFutbol, FaBook } from 'react-icons/fa';
import LatestPost from './LatestPost';

const Infrastructure = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2">
          <div className="mb-4 mt-2  mx-4 lg:mx-12  sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[0.8rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    Insfrastructure
  </h1>
</div>

            <div className='px-4 m-4'>
              <ul className='list-none'>
                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaLaptop className='text-blue-900 mr-2' />
                  <b>Computer Center</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>The institute has a well-equipped computer lab with round-the-clock Wi-Fi facilities. It immensely helps the students to gain practical experience of working on computers and exposure to Information Technology.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaLeaf className='text-blue-900 mr-2' />
                  <b>Medicinal Plant Garden</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>The garden functions as an educational display of medicinal plants, herbs, and spices, and also as a conservatory source of standard specimens. The brick pathways provide easy access for visitors to examine the labeled plants.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaChalkboardTeacher className='text-blue-900 mr-2' />
                  <b>Seminar Hall</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>The institute has a well-furnished seminar hall equipped with state-of-the-art audio-visual equipment like slide and film projectors, along with cordless microphones. It helps students gain firsthand information, knowledge, experience, and exposure to functional areas of the corporate sector, including organizational skills and etiquette. Personality development and communication skills workshops are organized regularly as we believe in the overall development of our candidates.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaTheaterMasks className='text-blue-900 mr-2' />
                  <b>Auditorium</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>The institute has an auditorium for conducting seminars and cultural events.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaFutbol className='text-blue-900 mr-2' />
                  <b>Sports</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>The campus has facilities for indoor and outdoor games.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaChalkboardTeacher className='text-blue-900 mr-2' />
                  <b>Lecture Halls</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>The lecture halls are designed to accommodate classes of 75 students, each equipped with a stage and teaching podium.</p>

                <li className='flex items-center font-medium p-2 text-sm group hover:opacity-50'>
                  <FaBook className='text-blue-900 mr-2' />
                  <b>Library</b>
                </li>
                <p className='ml-7 text-sm font-medium mb-4'>The institute has a central library which is open for students and staff members from 9:30 a.m. to 4:00 p.m. on all working days. The library has a rich collection of textbooks, reference books, national and international periodicals, journals, and magazines, along with CDs and video cassettes in all branches of Pharmacy. Books and editions are upgraded on a regular basis.</p>
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
};

export default Infrastructure;