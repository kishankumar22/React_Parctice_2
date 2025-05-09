import React, { useEffect, useState } from 'react';
import Slider from '../components/header/Slider';
import Section from '../components/section/Section';
import LogoSlider from '../components/slider/LogoSlider';
import Layout from '../components/layout/Layout';
import Gallery from '../components/home/Gallery';
import { RingLoader } from 'react-spinners';
import axiosInstance from '../config';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(''); // Track selected course
  const [captchaNum1, setCaptchaNum1] = useState(0); // First CAPTCHA number
  const [captchaNum2, setCaptchaNum2] = useState(0); // Second CAPTCHA number
  const [captchaAnswer, setCaptchaAnswer] = useState(''); // User's CAPTCHA answer
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Generate new CAPTCHA numbers when the modal opens or course changes
  useEffect(() => {
    if (showModal && selectedCourse) {
      setCaptchaNum1(Math.floor(Math.random() * 10)); // Random number between 0 and 9
      setCaptchaNum2(Math.floor(Math.random() * 10)); // Random number between 0 and 9
      setCaptchaAnswer(''); // Reset CAPTCHA answer
    }
  }, [showModal, selectedCourse]);
  
  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(''); // Reset course selection
    setCaptchaAnswer(''); // Reset CAPTCHA answer
  };
  
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      mobileNumber: formData.get('mobileNumber'),
      email: formData.get('email'),
      course: formData.get('course'),
    };

    // Validate CAPTCHA
    const correctAnswer = captchaNum1 + captchaNum2;
    if (parseInt(captchaAnswer) !== correctAnswer) {
      alert('Incorrect CAPTCHA. Please try again.');
      // Generate new CAPTCHA numbers
      setCaptchaNum1(Math.floor(Math.random() * 10));
      setCaptchaNum2(Math.floor(Math.random() * 10));
      setCaptchaAnswer('');
      return;
    }

    try {
      const response = await axiosInstance.post('/register', data);
      console.log('Frontend: Registration response:', response.data);
      if (response.status === 201) {
        alert('Thanks for contacting us');
        closeModal();
      } else {
        console.log('Frontend: Registration failed with status:', response.status);
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Frontend: Error during registration:', error.response?.data || error.message);
      alert('An error occurred. Please try again.');
    }
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
          
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50  bg-blue-100 bg-opacity-40 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg shadow-lg p-8 w-full max-w-md relative">
                <button 
                  onClick={closeModal} 
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] rounded-full p-1"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-xl font-bold  mb-2" style={{ color: 'rgb(57, 81, 131)' }}>
                    Registrations are open for these courses..
                  </h2>
                  <p className="font-semibold text-blue-600">B.Pharma & D. Pharma</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name*" 
                    className="w-full placeholder:text-gray-600 px-4 py-3 border hover:bg-blue-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] bg-gray-50"
                    required
                  />
                  <input 
                    type="number" 
                    name="mobileNumber"
                    placeholder="MOBILE NUMBER*" 
                    className="w-full placeholder:text-gray-600 px-4 py-3 border hover:bg-blue-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] bg-gray-50"
                    required
                     maxLength={10}
                     onInput={(e) => {
                      if (e.target.value.length > 10) {
                        e.target.value = e.target.value.slice(0, 10);
                      }
                    }}
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="EMAIL*" 
                    className="w-full px-4 py-3 border placeholder:text-gray-600 hover:bg-blue-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] bg-gray-50"
                    required
                  /> 
                  <div className="relative">
                    <select 
                      name="course"
                      className="w-full px-4 py-3 border placeholder:text-gray-600 hover:bg-blue-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] bg-gray-50 appearance-none text-gray-500"
                      onChange={handleCourseChange}
                      value={selectedCourse}
                      required
                    >
                      <option value="" disabled>Select your course</option>
                      <option value="M. Pharma">M. Pharma</option>
                      <option value="D. Pharma">D. Pharma</option>
                      <option value="B. Pharma">B. Pharma</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                      <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>

                  {/* CAPTCHA field (shown only after a course is selected) */}
                  {selectedCourse && (
                    <div className="space-y-2">
                      <label className="block text-red-500 font-semibold">
                        CAPTCHA: What is {captchaNum1} + {captchaNum2}?
                      </label>
                      <input
                        type="number"
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        placeholder="Enter your answer"
                        className="w-full px-4 py-3 border hover:bg-blue-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] bg-gray-50"
                        required
                      />
                    </div>
                  )}

                  <div className="flex justify-center space-x-4 pt-4">
                    <button 
                      type="button" 
                      onClick={closeModal}
                      className="px-6 py-3 bg-red-500 text-gray-800 font-semibold rounded-lg border border-gray-300 hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-red-400"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      style={{ backgroundColor: 'rgb(57, 81, 131)' }}
                      className="px-6 py-3 text-white font-semibold rounded-lg hover:bg-[#2c406b] transition duration-300 focus:outline-none focus:ring-4 focus:ring-[rgb(57,81,131)] shadow-md"
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