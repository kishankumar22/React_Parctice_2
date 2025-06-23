import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axiosInstance from '../../config';
import pic1 from "../../assets/images/12-04-2017_180215.jpg";

const ProfileSection = () => {
  const [faculties, setFaculties] = useState([]);

  const fetchFaculties = async () => {
    try {
      const res = await axiosInstance.get("/faculty");
      const visibleFaculties = res.data.filter(faculty => faculty.IsVisible === true);
      const principalFaculty = visibleFaculties.find(faculty => faculty.designation === "Principal");
      if (principalFaculty) {
        setFaculties([principalFaculty]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  return (
    <div className='flex flex-col h-heightsec w-full'>
      <div className="flex items-center h-10 w-full bg-white">
        <h2 className="text-sm p-1 sm:text-lg md:text-[1.25rem] flex h-8 w-96 mb-2 font-bold bg-blue-200">
          Profile
        </h2>
        <div className="justify-start border-t-4 w-full border-blue-800 mb-2"></div>
      </div>
      <div className='flex flex-col items-center w-full pt-1 border-2 border-gray-200 mb-2'>
        <img className='h-32 w-32 rounded-full object-cover m-1.5' src={pic1} alt="Shri JK Singh" />
        <h1 className='text-blue-700 font-semibold text-md'>Shri JK SINGH</h1>
        <p className='font-normal m-1 text-xs'>Chairman</p>
        <p className='font-normal mb-1 text-xs text-center'>JK Institute Of Pharmacy</p>
      </div>
      {faculties.map((faculty) => (
        <div key={faculty.id} className='flex flex-col items-center w-full pt-1 border-2  border-gray-200'>
          <img className='h-32 w-32  rounded-full object-cover' src={faculty.profilePicUrl} alt={faculty.faculty_name} />
          <h1 className='text-blue-700 font-semibold text-md'>{faculty.faculty_name}</h1>
          <p className='font-normal m-1 text-xs'>{faculty.qualification}</p>
          <p className='font- text-xs text-center mb-2'>JK Institute Of Pharmacy</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileSection;