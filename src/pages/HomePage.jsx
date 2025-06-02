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
  const [selectedCourse, setSelectedCourse] = useState('');
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  useEffect(() => {
    // Check if modal has already been shown in this session
    const hasModalBeenShown = sessionStorage.getItem('modalShown');

    const timer = setTimeout(() => {
      setLoading(false);
      // Show modal only if it hasn't been shown yet
      if (!hasModalBeenShown) {
        setShowModal(true);
        // Mark modal as shown in sessionStorage
        sessionStorage.setItem('modalShown', 'true');
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Generate new CAPTCHA numbers when the modal opens or course changes
  useEffect(() => {
    if (showModal && selectedCourse) {
      setCaptchaNum1(Math.floor(Math.random() * 100));
      setCaptchaNum2(Math.floor(Math.random() * 100));
      setCaptchaAnswer('');
    }
  }, [showModal, selectedCourse]);

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse('');
    setCaptchaAnswer('');
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
        // Handle unexpected status codes (e.g., 400, 500) that might not be caught in the try block
        console.log('Frontend: Registration failed with status:', response.status);
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Frontend: Error during registration:', error.response?.data || error.message);
      // Check if the error response contains a message from the backend
      if (error.response && error.response.data && error.response.data.message) {
        // Display specific backend error messages like "Email or mobile number already registered"
        alert(error.response.data.message);
      } else {
        // Fallback for generic errors (e.g., network issues)
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen ">
          <RingLoader size={120} color="blue" />
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
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 backdrop-blur-sm p-2">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md relative">
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] rounded-full p-1 z-10"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Modal Body */}
                <div className="pt-10 pb-4 px-4 sm:px-6">
                  <div className="text-center mb-4 mt-1">
                    <h2
                      className="text-lg font-bold mb-1"
                      style={{ color: 'rgb(57, 81, 131)' }}
                    >
                      Registrations are open for these courses..
                    </h2>
                    <p className="font-semibold text-blue-600 text-sm">
                      B.Pharma & D. Pharma
                    </p>
                  </div>

                  {/* Form Start */}
                  <form onSubmit={handleSubmit} className="space-y-3 text-black">
                    {/* Full Name */}
                    <div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)]"
                        placeholder="Full Name*"
                        required
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <input
                        type="number"
                        id="mobileNumber"
                        name="mobileNumber"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)]"
                        placeholder="Mobile Number*"
                        required
                        maxLength={10}
                        onInput={(e) => {
                          if (e.target.value.length > 10) {
                            e.target.value = e.target.value.slice(0, 10);
                          }
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)]"
                        placeholder="Email*"
                        required
                      />
                    </div>

                    {/* Course Selection */}
                    <div className="relative">
                      <select
                        id="course"
                        name="course"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)]"
                        onChange={handleCourseChange}
                        value={selectedCourse}
                        required
                      >
                        <option value="" disabled>
                          Select Course*
                        </option>
                        <option value="D. Pharma">D. Pharma</option>
                        <option value="B. Pharma">B. Pharma</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center px-2 text-gray-500">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* CAPTCHA */}
                    {selectedCourse && (
                      <div className="space-y-2">
                        <p className="text-red-500 font-semibold text-sm">
                          CAPTCHA: What is {captchaNum1} + {captchaNum2}?
                        </p>
                        <div className="relative">
                          <input
                            type="number"
                            id="captcha"
                            value={captchaAnswer}
                            onChange={(e) => {
                              setCaptchaAnswer(e.target.value);
                              const answer = parseInt(e.target.value);
                              if (!isNaN(answer)) {
                                const isCorrect = answer === (captchaNum1 + captchaNum2);
                                e.target.setAttribute('data-valid', isCorrect ? 'true' : 'false');
                              } else {
                                e.target.removeAttribute('data-valid');
                              }
                            }}
                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] data-[valid=true]:border-green-500 data-[valid=true]:focus:ring-green-500 data-[valid=false]:border-red-500 data-[valid=false]:focus:ring-red-500"
                            placeholder="Answer*"
                            required
                          />

                          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden data-[valid=true]:block animate-fadeIn">
                            <svg
                              className="h-5 w-5 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>

                          <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden data-[valid=false]:block animate-fadeIn">
                            <svg
                              className="h-5 w-5 text-red-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex justify-center space-x-3 pt-3">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        style={{ backgroundColor: 'rgb(57, 81, 131)' }}
                        className="px-4 py-2 text-white font-medium rounded-lg hover:bg-[#2c406b] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] shadow-md text-sm"
                      >
                        Register Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          <style jsx>{`
            @keyframes fadeIn {
              0% { opacity: 0; transform: translateY(-50%) scale(0.8); }
              100% { opacity: 1; transform: translateY(-50%) scale(1); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-in-out;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default HomePage;