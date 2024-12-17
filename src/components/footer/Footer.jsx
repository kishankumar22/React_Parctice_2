import React from 'react'
import logo1 from "../../assets/images/logo3.png"; // Replace with your logo
import { FaChevronRight } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className='md:flex-col flex-wrap'>
        <div className="flex row  justify-center bg-black h-48">
          <div className="col-sm-12 pr-2">
            <img src={logo1} alt="" srcset=""  className='w-24 h-24 pt-3 rounded-full'/>
          </div>
          <div className="col-sm-4 m-3 p-2 leading-4 font-bold text-white">
            <p className='text-xl  font-normal leading-relaxed'>दीनदयाल उपाध्याय गोरखपुर विश्‍वविद्यालय</p>
            <p className='text-sm leading-8'>Deen Dayal Upadhyaya Gorakhpur University</p>
            <p className='font-medium leading-8'>सिविल लाइंस, गोरखपुर - 273009, उत्तर प्रदेश (भारत)</p>
            <p className='text-sm font-medium leading-8'>Civil Lines, Gorakhpur - 273009, Uttar Pradesh (INDIA)</p>
          </div>
        {/* Quick Links */}
        <div className="w-full p-2 md:w-1/5 text-white mb-6 md:mb-0">
            <h1 className="font-bold border-b-2 pb-2 mb-2">Quick Links</h1>
            <ul>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" /> Result
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" /> Tenders
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" /> Contact Us
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" /> RTI
              </li>
            </ul>
          </div>

          {/* Co-Curricular */}
          <div className="w-full p-2 md:w-1/5 text-white mb-6 md:mb-0">
            <h1 className="font-bold border-b-2 pb-2 mb-2">Co-Curricular</h1>
            <ul>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" /> Sports
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" /> Tenders
              </li>
              <li className="flex items-center p-1">
                <FaChevronRight className="mr-2" /> NCC
              </li>
              
            </ul>
          </div>

          {/* Important Links */}
          <div className="w-full p-2 md:w-1/5 text-white mb-6 md:mb-0">
            <h1 className="font-bold border-b-2 pb-2 mb-2">Important Links</h1>
            <ul>
              <li className="flex items-center p-1 hover:text-gray-300">
                <FaChevronRight className="mr-2" /> MHRD
              </li>
              <li className="flex items-center p-1 hover:text-gray-300">
                <FaChevronRight className="mr-2" /> AIU
              </li>
              <li className="flex items-center p-1 hover:text-gray-300 ">
                <FaChevronRight className="mr-2" /> NCTE
              </li>
              
            </ul>
          </div>
        </div>
        <div className='flex justify-between bg-black text-yellow p-3'>
          <p><a href="#">Copyright © Deen Dayal Upadhyaya Gorakhpur University.</a></p>
          <p><a href="#">Your Visitor Number : Web Analytics</a></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
