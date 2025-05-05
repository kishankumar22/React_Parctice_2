import React, { useEffect, useState } from 'react';
import Slider from '../components/header/Slider';
import Section from '../components/section/Section';
import LogoSlider from '../components/slider/LogoSlider';
import Layout from '../components/layout/Layout';
import Gallery from '../components/home/Gallery';
import { RingLoader } from 'react-spinners';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Show modal after loader disappears
      setShowModal(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Registration submitted!');
    closeModal();
  };
  
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-blue-400">
          <RingLoader size={120} color="#ffffff" />
        </div>
      ) : (
        <>
          <Layout disableLoader={true}>
            <div>
              <Slider />
              <Section />
              <Gallery />
              <LogoSlider />
            </div>
          </Layout>
          
          {/* Registration Modal */}
       {showModal && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-black via-gray-800 to-black bg-opacity-80">
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
      {/* Close icon */}
      <button 
        onClick={closeModal} 
        className="absolute top-4 right-4  text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] rounded-full p-1"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-2" style={{ color: 'rgb(57, 81, 131)' }}>
          Registrations are open for these courses..
        </h2>
        <p className="font-semibold text-blue-600">B.Pharma & D. Pharma</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Full Name*" 
          className="w-full px-4 py-3 border hover:bg-blue-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] bg-gray-50"
          required
        />
        <input 
          type="tel" 
          placeholder="MOBILE NUMBER*" 
          className="w-full px-4 py-3 border hover:bg-blue-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] bg-gray-50"
          required
        />
        <input 
          type="email" 
          placeholder="EMAIL*" 
          className="w-full px-4 py-3 border hover:bg-blue-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] bg-gray-50"
          required
        />
        <div className="relative">
          <select 
            className="w-full px-4 py-3 border hover:bg-blue-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] bg-gray-50 appearance-none text-gray-500"
            required
          >
            <option value="" disabled selected>Select your course</option>
            <option value="mpharma">M. Pharma</option>
            <option value="dpharma">D. Pharma</option>
         
          </select>
          {/* Custom select arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>
        </div>

        <div className="flex justify-center space-x-4 pt-4">
          <button 
            type="button" 
            onClick={closeModal}
            className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            style={{ backgroundColor: 'rgb(57, 81, 131)' }}
            className="px-6 py-3 text-white font-semibold rounded-lg hover:bg-[#2c406b] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] shadow-md"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  </div>
)}

        </>
      )}
    </>
  );
};

export default HomePage;