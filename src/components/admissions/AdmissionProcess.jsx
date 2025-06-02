import React from 'react';
import Layout from '../layout/Layout';
import { FaPhone, FaClipboardList, FaCheckCircle } from 'react-icons/fa'; // Importing icons
import logo1 from "../../assets/logo/logo.jpg"; // Replace with your logo

import logo3 from "../../assets/logo/bte up.jpg"; // Replace with your logo
import logo4 from "../../assets/logo/pci logo.jpg";
import LatestPost from '../academics/LatestPost';

const AdmissionProcess = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2 mb-4">
                      <div className="mb-2  mx-4 lg:mx-44  sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
              <h1 className="text-[1rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
                Admission
              </h1>
              </div>
            <div className=" mt-4">
             <div>
  <h2 className="font-semibold text-2xl text-red-600">Approval of College:</h2>
  <ul className="list-inside mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* PCI */}
    <li className="flex flex-col items-center mb-4 hover:opacity-80 transition-opacity duration-300">
      <img src={logo4} alt="PCI Logo" className="h-20 w-20" />
      <p className="text-sm mt-3 text-center">
        <b>1.</b> PCI (Pharmacy Council of India)
      </p>
      <p className="mt-1 text-center text-base font-medium text-gray-700">
        <span className="text-blue-800 font-semibold">College Code:</span> 3134
      </p>
    </li>

    {/* BTE */}
    <li className="flex flex-col items-center mb-4 hover:opacity-80 transition-opacity duration-300">
      <img src={logo3} alt="BTE Logo" className="h-20 w-20" />
      <p className="text-sm mt-3 text-center">
        <b>2.</b> B.T.E (Board of Technical Education)
      </p>
      <p className="mt-1 text-center text-base font-medium text-gray-700">
        <span className="text-blue-800 font-semibold">College Code:</span> 1680
      </p>
    </li>

  </ul>
</div>

              
              <div className="mt-4 px-2 sm:px-2">
                      {/* Course Offered */}
                     <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2 mb-4">
                  <span className="text-lg lg:text-xl font-bold text-red-600 whitespace-nowrap">Course Offered:</span>
                   <span className="text-lg lg:text-xl font-bold text-blue-800 ml-0 lg:ml-2">Diploma in Pharmacy</span>
  </div>

  {/* Eligibility Criteria */}
  <h3 className="font-semibold mt-4 flex items-center text-base lg:text-lg">
    <FaCheckCircle className="text-green-600 mr-2" />
    Eligibility Criteria:
  </h3>
  <ul className="list-disc list-inside mt-2 ml-6 text-sm lg:text-base">
    <li className="hover:opacity-50 transition-opacity duration-300">
      Candidates who have passed intermediate with 50% marks in (Physics + Chemistry + Maths/Bio).
    </li>
  </ul>

  {/* Admission Process */}
  <h3 className="font-semibold mt-4 flex items-center text-base lg:text-lg">
    <FaClipboardList className="text-blue-600 mr-2" />
    Admission Process:
  </h3>
  <ul className="list-disc list-inside mt-2 ml-6 text-sm lg:text-base">
    <li className="hover:opacity-50 transition-opacity duration-300">
      Admission is done through an Entrance test conducted by the Board of Technical Education.
    </li>
    <li className="hover:opacity-50 transition-opacity duration-300">
      Direct management quota.
    </li>
    <li className="hover:opacity-50 transition-opacity duration-300">
      For obtaining prospectus and application form, contact at the college campus.
    </li>
  </ul>

  {/* Contact Details */}
  <h3 className="font-semibold mt-4 flex items-center text-base lg:text-lg">
    <FaPhone className="text-yellow-600 mr-2" />
    Contact Details for Admission:
  </h3>
  <ul className="list-disc list-inside ml-6 mt-2 text-sm lg:text-base">
    <li className="hover:opacity-50 transition-opacity duration-300">07409036444</li>
    <li className="hover:opacity-50 transition-opacity duration-300">09058781736</li>
    <li className="hover:opacity-50 transition-opacity duration-300">07351220007</li>
  </ul>
</div>

            </div>
          </div>

          {/* Right Column (col-4) */}
          <div className="md:w-4/12  ">
            <LatestPost />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdmissionProcess;