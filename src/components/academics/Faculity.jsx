import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import LatestPost from './LatestPost';
import axiosInstance from '../../config';
 // Ensure you have react-toastify installed

const Faculty = () => {
  const [faculties, setFaculties] = useState([]);

  const fetchFaculties = async () => {
    try {
      const res = await axiosInstance.get("/faculty"); // Adjust the URL based on your API
      setFaculties(res.data);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching faculties");
    }
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  return (
    <Layout>
      <div className="container h-auto mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2">
            <div className='bg-gray-200 h-8 mx-48 flex items-center justify-center shadow-md'>
              <h1 className="text-xl text-center font-bold uppercase text-white bg-blue-900 rounded-lg p-2 shadow-lg">
                Faculty
              </h1>
            </div>
            <div className='px-4 m-4 overflow-x-auto'>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-2 px-4 text-left">S.NO.</th>
                    <th className="py-2 px-4 text-left">Profile Picture</th>
                    <th className="py-2 px-4 text-left">Name Of Faculty</th>
                    <th className="py-2 px-4 text-left">Qualification</th>
                    <th className="py-2 px-4 text-left">Designation</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {faculties.map((faculty, index) => (
                    <tr key={faculty.id} className="border-b border-gray-300 hover:bg-gray-100">
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="py-2 px-4">
                        <img
                          src={faculty.profilePicUrl}
                          alt={faculty.faculty_name}
                          className="w-20 h-20 object-cover rounded-full" // Changed to rounded-full for circular shape
                        />
                      </td>
                      <td className="py-2 px-4 capitalize">{faculty.faculty_name}</td>
                      <td className="py-2 px-4 uppercase">{faculty.qualification}</td>
                      <td className="py-2 px-4 uppercase">{faculty.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column (col-4) */}
          <div className="md:w-4/12 ">
            <LatestPost />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faculty;