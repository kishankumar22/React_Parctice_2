import React from 'react';
import pic1 from "../../assets/images/DSC_14.jpeg";
import pic2 from "../../assets/images/DSC_101.jpg";

const ProfileSection = () => {
  return (
    <div className='h-heightsec flex-wrap justify-center text-center'>
      <div className="w-full flex  h-10 items-center ">
        <h2 className="text-2xl flex h-8 w-28  font-bold bg-gray-200">Profile</h2>
        <div className="justify-start border-t-4 w-full border-yellow"></div> {/* Vertical line */}
      </div>
      <div className='flex flex-col h-56 pt-2 items-center border-2 border-gray-200'>
        <img className='h-28 rounded-full object-fill' src={pic2} alt="" />
        <h1 className='text-red-700 font-semibold text-sm'>Smt. Anandiben Patel</h1>
        <p className='font-normal m-1 text-xs'>Honourable Chancellor</p>
        <p className='font-normal mb-1 text-xs text-center'>Deen Dayal Upadhayaya Gorakhpur University</p>
        <div className='mt-auto w-full'>
          <button className='w-full bg-kesariya text-white text-xs py-1'>PROFILE</button>
        </div>
      </div>
      <div className='flex h-48 flex-col pt-1  items-center mt-1 border-2 border-gray-200'>
        <img className='h-28 rounded-full object-fill' src={pic1} alt="" />
        <h1 className='text-red-700 font-semibold text-sm'>Prof. Poonam Tandon</h1>
        <p className='font-normal m-1 text-xs'>Vice Chancellor</p>
        <p className='font-normal text-xs mb-1 text-center'>Deen Dayal Upadhayaya Gorakhpur University</p>
        <div className='mt-auto  w-full'>
          <button className='w-full bg-kesariya text-white text-xs py-1'>PROFILE</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
