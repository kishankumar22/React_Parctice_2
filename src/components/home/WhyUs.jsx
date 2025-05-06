import React from 'react'
import whyus from"../../assets/images/why us.jpg"
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <div className='h-heightsec '>
         <div className="flex items-center h-10 w-full bg-white">
     <h2 className="text-sm p-1 sm:text-lg md:text-[1.25rem] flex h-8 w-96 mb-2 font-bold bg-blue-200">
      Why  Us   
     </h2>
     <div className="justify-start  border-t-4 w-full border-blue-800 mb-2"></div>
     </div>
      <div className='p-2  border border-gray-200 shadow-xl '>
        <div className=' w-full'><img src={whyus} alt="" className='w-full h-64' /></div>
        <div>
          <p className="text-lg font-medium mt-3 text-gray-800">
            J K Institute of Pharmacy: A Lush Green Campus in Bulandshahr
          </p>
          <p className="text-base font-normal text-gray-600">
            Located at Bulandshahr-Khurja NH 91, J K Institute of Pharmacy offers a vibrant and green campus for students.
          </p>
          <Link to="/aboutus" className="inline-block text-black bg-blue-400 p-2.5 rounded text-sm mt-2 hover:underline">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  )
}

export default WhyUs