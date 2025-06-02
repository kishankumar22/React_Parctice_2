import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import LatestPost from './LatestPost';
import axiosInstance from '../../config';

const Faculty = () => {
  const [faculties, setFaculties] = useState([]);

  const fetchFaculties = async () => {
    try {
      const res = await axiosInstance.get("/faculty"); // Adjust the URL based on your API
      // Filter faculties where IsVisible is true
      const visibleFaculties = res.data.filter(faculty => faculty.IsVisible === true);
      setFaculties(visibleFaculties);
    } catch (error) {
      console.error(error);
      // Uncomment the line below if you have react-toastify set up
      // toast.error("Error fetching faculties");
    }
  };

  useEffect(() => {
    fetchFaculties(); // Fetch faculties
  }, []);

  return (
    <Layout>
      <div className="container h-auto mx-auto p-6">
        <div className="flex flex-col md:flex-row ">
          {/* Left Column (col-8) */}
          <div className="md:w-8/12 p-2 ">
            <div className="mb-4 mx-2 md:mx-32 bg-gray-300 h-6 flex items-center justify-center shadow-md">
              <h1 className="text-[1.125rem] sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
                Faculty
              </h1>
            </div>
            <div className='px-2 md:px-4'>
              <div className="overflow-x-auto pt-4">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-xs md:text-xs leading-normal">
                      <th className="py-1 px-2 md:px-3 text-left text-xs">S.NO.</th>
                      <th className="py-1 px-2 md:px-3 text-left text-xs">Profile Picture</th>
                      <th className="py-1 px-2 md:px-3 text-left text-xs">Name Of Faculty</th>
                      <th className="py-1 px-2 md:px-3 text-left text-xs">Qualification</th>
                      <th className="py-1 px-2 md:px-3 text-left text-xs">Designation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-xs md:text-xs font-light">
                    {faculties.map((faculty, index) => (
                      <tr key={faculty.id} className="border-b border-gray-300 hover:bg-gray-100">
                        <td className="py-1 px-2 md:px-3 text-xs">{index + 1}</td>
                        <td className="py-1 px-2 md:px-3 text-xs">
                          <img
                            src={faculty.profilePicUrl || 'https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png'}
                            alt={faculty.faculty_name}
                            className="w-12 h-12 md:w-12 md:h-12 object-cover rounded-full"
                          />
                        </td>
                        <td className="py-1 px-2 md:px-3 text-xs capitalize">{faculty.faculty_name}</td>
                        <td className="py-1 px-2 md:px-3 text-xs uppercase">{faculty.qualification}</td>
                        <td className="py-1 px-2 md:px-3 text-xs uppercase">{faculty.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column (col-4) */}
          <div className="md:w-4/12 ">
            {/* LatestPost component */}
            <div className="mt-4 md:mt-0">
              <LatestPost />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faculty;