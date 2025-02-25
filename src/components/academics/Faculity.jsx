import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import LatestPost from './LatestPost';
import axiosInstance from '../../config';
import { RingLoader } from 'react-spinners'; // Import the loader

const Faculty = () => {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  const fetchFaculties = async () => {
    try {
      const res = await axiosInstance.get("/faculty"); // Adjust the URL based on your API
      setFaculties(res.data);
    } catch (error) {
      console.error(error);
      // Uncomment the line below if you have react-toastify set up
      // toast.error("Error fetching faculties");
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFaculties(); // Fetch faculties
      setTimeout(() => {
        setLoading(false); // Set loading to false after 2 seconds
      }, 400); // 2000 milliseconds = 2 seconds
    };

    loadData();
  }, []);

  return (
    <Layout>
      <div className="container h-auto mx-auto p-6">
        {loading ? ( // Show loader while loading
          <div className="flex justify-center items-center h-80">
            <RingLoader size={100} color="blue" /> {/* Adjust size and color as needed */}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* Left Column (col-8) */}
            <div className="md:w-8/12 p-2">
              <div className="mb-4 mx-2 md:mx-32 bg-gray-300 h-6 flex items-center justify-center shadow-md">
                <h1 className="text-[1.125rem] sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
                  Faculty
                </h1>
              </div>
              <div className='px-2 md:px-4 m-4'>
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
                      <th className="py-2 px-2 md:px-4 text-left">S.NO.</th>
                      <th className="py-2 px-2 md:px-4 text-left">Profile Picture</th>
                      <th className="py-2 px-2 md:px-4 text-left">Name Of Faculty</th>
                      <th className="py-2 px-2 md:px-4 text-left">Qualification</th>
                      <th className="py-2 px-2 md:px-4 text-left">Designation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-xs md:text-sm font-light">
                    {faculties.map((faculty, index) => (
                      <tr key={faculty.id} className="border-b border-gray-300 hover:bg-gray-100">
                        <td className="py-2 px-2 md:px-4">{index + 1}</td>
                        <td className="py-2 px-2 md:px-4">
                          <img
                            src={faculty.profilePicUrl}
                            alt={faculty.faculty_name}
                            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full"
                          />
                        </td>
                        <td className="py-2 px-2 md:px-4 capitalize">{faculty.faculty_name}</td>
                        <td className="py-2 px-2 md:px-4 uppercase">{faculty.qualification}</td>
                        <td className="py-2 px-2 md:px-4 uppercase">{faculty.designation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column (col-4) */}
            <div className="md:w-4/12 p-2">
              <LatestPost />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Faculty;