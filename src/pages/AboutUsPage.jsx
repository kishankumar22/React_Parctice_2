import React, { useState } from 'react';
// import pic1 from "../assets/images/ddugate.jpg";
// import pic2 from "../assets/images/intro3.jpg";
// import pic3 from "../assets/images/intro1.jpg";
// import pic4 from "../assets/images/intro2.jpg";
// import pic5 from "../assets/images/pddu.jpg";
// import pic6 from "../assets/images/intro4.jpg";
// import pic7 from "../assets/images/intro5.jpg";
// import pic8 from "../assets/images/intro6.jpg";
import Layout from '../components/layout/Layout';
import LatestPost from '../components/academics/LatestPost';
import Gallery from '../components/home/Gallery';

const AboutUsPage = () => {


  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2">
          <div className="mb-2 mx-4 lg:mx-44 md:mx-28  sm:mx-24 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[1rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    ABout Us
  </h1>
</div>

            {/* <img src={Career1} alt="Career" className="w-full object-fill p-8 mt-4" /> */}
            <div className='p-4   text-gray-800'>
              <p className='mb-4  text-sm font-roboto font-medium leading-relaxed text-gray-700  transition duration-300'>
                J K Institute of Pharmacy is the LushGreen campus located at Bulandshahr-Khurja NH 91. The college started working on 2017 with the generosity of Shri J K Singh a visionary and a legend.
              </p>
              <p className='mb-4 text-sm font-roboto font-medium e leading-relaxed text-gray-700  transition duration-300'>
                The institute is approved by All India Council for Technical Education (AICTE), the Pharmacy Council of India (PCI), New Delhi and Board of Technical Education (BTE), Govt. of Uttar Pradesh. The institute has state-of-the-art infrastructure and instrumental facilities and provides a serene atmosphere for academic excellence.
              </p>
              <p className='text-sm font-roboto   leading-relaxed text-gray-700  transition duration-300'>
                The institute houses a voluminous library, classrooms with multimedia facilities, well-equipped laboratories, modern Computer and Language labs, canteens, playground, auditorium, and seminar halls.
              </p>
            </div>
          </div>

          {/* Right Column (col-4) */}
          <div className="md:w-4/12 ">
            <div className="">
              <LatestPost />
              {/* Add more content here as needed */}
            </div>
          </div>
        </div>
        {/* <Gallery/> */}
      </div>
    </Layout>
  );
}

export default AboutUsPage;