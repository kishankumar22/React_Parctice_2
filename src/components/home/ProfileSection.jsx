import React from 'react';
import pic1 from "../../assets/images/11-05-2022_094435.jpeg";
import pic2 from "../../assets/images/12-04-2017_180215.jpg";
import { Link } from "react-router-dom";

const ProfileSection = () => {
  return (
    <div className='flex flex-col h-heightsec w-full '>
        <div className="flex items-center h-10 w-full bg-white">
        <h2 className="text-sm p-1 sm:text-lg md:text-[1.25rem] flex h-8 w-96 mb-2 font-bold bg-blue-200">
          Profile
        </h2>
        <div className="justify-start border-t-4 w-full border-blue-800 mb-2"></div>
      </div>


      <div className='flex flex-col items-center w-full pt-1 border-2 border-gray-200 mb-2'>
        <img className='h-28 w-28 rounded-full object-cover m-1.5' src={pic2} alt="Smt. Anandiben Patel" />
        <h1 className='text-blue-700 font-semibold text-sm'>Shri JK SINGH</h1>
        <p className='font-normal m-1 text-xs'>Chairman</p>
        <p className='font-normal mb-1 text-xs text-center'>JK Institute Of Pharmacy</p>
        <div className='w-full'>
          <button className='w-full bg-blue-900 text-white text-xs py-1'>
            <Link to="principal">PROFILE</Link>
          </button>
        </div>
      </div>

      <div className='flex flex-col items-center w-full pt-1  border-2 border-gray-200'>
        <img className='h-28 w-28 rounded-full object-cover' src={pic1} alt="Prof. Poonam Tandon" />
        <h1 className='text-blue-700 font-semibold text-sm'>Atul Garg</h1>
        <p className='font-normal m-1 text-xs'>Principal</p>
        <p className='font-normal text-xs text-center'>JK Institute Of Pharmacy</p>
        <div className='w-full'>
          <button className='w-full bg-blue-900 text-white text-xs py-1'>
            <Link to="chairman ">PROFILE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;