import React from 'react'
import pic1 from "../../assets/images/DSC_14.jpeg"
import pic2 from "../../assets/images/DSC_101.jpg"

const ProfileSection = () => {
  return (
    <div className='flex  flex-wrap justify-center text-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-black'>Profile</h1>
        <div className='flex  flex-col m-1  items-center border-2 border-gray-400 p-2' >
            <img className='w-28 h-28 rounded-full object-fill' src={pic2} alt="" srcset="" />
            <h1 className='text-red-700 font-bold'>Smt. Anandiben Patel</h1>
            <p className=''>Honourable Chancellor</p>
            <p className='m-1'>Deen Dayal Upadhayaya Gorakhpur University</p>
            <button className='w-full bg-kesariya text-white p-1 m-1'>PROFILE</button>
        </div>
        <div className='flex w-64 flex-col flex-1 items-center border-2 border-gray-400 m-1 p-2' >
            <img className='w-28 h-28 rounded-full object-fill' src={pic1} alt="" srcset="" />
            <h1 className='text-red-700 font-bold'>Prof. Poonam Tandon</h1>
            <p className=''>Vice Chancellor</p>
            <p className='p-1 '>Deen Dayal Upadhayaya Gorakhpur University</p>
            <button className='w-full bg-kesariya text-white p-1 m-1'>PROFILE</button>
        </div>
        
    </div>



 
  )
}

export default ProfileSection