import React from 'react'
import whyus from"../../assets/images/why us.jpg"
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <div className='h-heightsec'>
         <div className="flex items-center h-10 w-full bg-white">
  <h2 className="text-sm p-1 sm:text-lg md:text-[1.25rem] flex h-8 w-96 mb-2 font-bold bg-blue-200">
      Why  Us   
  </h2>
  <div className="justify-start border-t-4 w-full border-blue-800 mb-2"></div>
</div>
      <div className='p-2  border border-gray-200 shadow-2xl '>
        <div className=''><img src={whyus} alt="" /></div>
        <div>
            <p className='text-xl font-normal mt-2'>J K Institute of Pharmacy is the LushGreen campus located at Bulands</p>
            <p className='text-sm font-ligh mt-3'>J K Institute of Pharmacy is the LushGreen campus located at Bulandshahr-Khurja NH 91. The college</p>
            <Link to="/aboutus" className='text-blue-800 text-sm pt-2'>Read more...</Link>
        </div>
      </div>
    </div>
  )
}

export default WhyUs