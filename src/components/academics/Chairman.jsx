import React from 'react';
import Layout from '../layout/Layout';
import LatestPost from './LatestPost';
import pic1 from "../../assets/images/11-05-2022_094435.jpeg";
import pic2 from "../../assets/images/12-04-2017_180215.jpg";

const Chairman = () => {
  return (
    <>
      <Layout>
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row">
            {/* Left Column (col-8) */}
            <div className="md:w-8/12 p-2">
            <div className="mb-4 mt-2  mx-4 lg:mx-32  sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[1rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    ChairMan
  </h1>
</div>
              <img src={pic2} className='mx-auto rounded-lg shadow-lg' alt="Chairman" />
              <p className='text-xs md:text-sm font-roboto p-4 text-gray-800 leading-relaxed'>
                J K Institute of Pharmacy is the Lush Green campus located at Bulandshahr-Khurja NH 91. The college started working in 2017 with the generosity of Shri J K Singh, a visionary and a legend. The Pharmacy Council of India (PCI), New Delhi, and the Board of Technical Education, Govt. of Uttar Pradesh. The institute has state-of-the-art infrastructure and instrumental facilities and provides a serene atmosphere for academic excellence. The institute houses a voluminous library, classrooms with multimedia facilities, well-equipped laboratories, modern Computer and Language labs, canteens, playground, auditorium, and seminar halls.
              </p>
            </div>
            {/* Right Column (col-4) */}
            <div className="md:w-4/12 p-2">
              <LatestPost />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Chairman;