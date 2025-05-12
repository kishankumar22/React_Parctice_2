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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-100 bg-opacity-40 backdrop-blur-sm p-4 sm:p-0">
      <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md relative">
        <button 
          onClick={closeModal} 
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] rounded-full p-1"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{ color: 'rgb(57, 81, 131)' }}>
              Registrations are open for these courses..
            </h2>
            <p className="font-semibold text-blue-600 text-sm sm:text-base">B.Pharma & D. Pharma</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-black">
            {/* Full Name with Dynamic Legend Label */}
            <div className="relative">
              <input 
                type="text" 
                id="fullName"
                name="fullName"
                className="peer w-full px-3 py-3 sm:py-4 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm sm:text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)]"
                placeholder="Full Name*"
                required
              />
              <label 
                htmlFor="fullName" 
                className="absolute text-sm text-gray-600 font-medium duration-300 transform scale-75 -translate-y-4 z-10 origin-[0] bg-blue-100 px-1 peer-placeholder-shown:px-0 peer-placeholder-shown:bg-transparent left-2 top-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:bg-blue-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1"
              >
                Full Name*
              </label>
            </div>
            
            {/* Mobile Number with Dynamic Legend Label */}
            <div className="relative">
              <input 
                type="number" 
                id="mobileNumber"
                name="mobileNumber"
                className="peer w-full px-3 py-3 sm:py-4 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm sm:text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)]"
                placeholder="Mobile Number*"
                required
                maxLength={10}
                onInput={(e) => {
                  if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10);
                  }
                }}
              />
              <label 
                htmlFor="mobileNumber" 
                className="absolute text-sm text-gray-600 font-medium duration-300 transform scale-75 -translate-y-4 z-10 origin-[0] bg-blue-100 px-1 peer-placeholder-shown:px-0 peer-placeholder-shown:bg-transparent left-2 top-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:bg-blue-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1"
              >
                Mobile Number*
              </label>
            </div>
            
            {/* Email with Dynamic Legend Label */}
            <div className="relative">
              <input 
                type="email" 
                id="email"
                name="email"
                className="peer w-full px-3 py-3 sm:py-4 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm sm:text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)]"
                placeholder="Email*"
                required
              />
              <label 
                htmlFor="email" 
                className="absolute text-sm text-gray-600 font-medium duration-300 transform scale-75 -translate-y-4 z-10 origin-[0] bg-blue-100 px-1 peer-placeholder-shown:px-0 peer-placeholder-shown:bg-transparent left-2 top-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:bg-blue-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1"
              >
                Email*
              </label>
            </div>
            
            {/* Course Selection with Dynamic Legend Label */}
            <div className="relative">
              <select 
                id="course"
                name="course"
                className="peer w-full px-3 py-3 sm:py-4 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm sm:text-base appearance-none focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)]"
                onChange={handleCourseChange}
                value={selectedCourse}
                required
              >
                <option value="" disabled>Select your course</option>
                <option value="M. Pharma">M. Pharma</option>
                <option value="D. Pharma">D. Pharma</option>
                <option value="B. Pharma">B. Pharma</option>
              </select>
              <label 
                htmlFor="course" 
                className="absolute text-sm text-gray-600 font-medium duration-300 transform scale-75 -translate-y-4 z-10 origin-[0] bg-blue-100 px-1 left-2 top-0"
              >
                Select Course*
              </label>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg className="fill-current h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>

            {/* CAPTCHA field with Dynamic Legend Label and Animated Validation */}
            {selectedCourse && (
              <div className="space-y-2">
                <p className="text-red-500 font-semibold text-sm sm:text-base">
                  CAPTCHA: What is {captchaNum1} + {captchaNum2}?
                </p>
                <div className="relative">
                  <input
                    type="number"
                    id="captcha"
                    value={captchaAnswer}
                    onChange={(e) => {
                      setCaptchaAnswer(e.target.value);
                      // We'll add validation immediately for instant feedback
                      const answer = parseInt(e.target.value);
                      if (!isNaN(answer)) {
                        // Check if answer is correct when it's a valid number
                        const isCorrect = answer === (captchaNum1 + captchaNum2);
                        // You can add state to track this if needed, or use CSS techniques
                        // For this example, we'll use a data attribute to show validation
                        e.target.setAttribute('data-valid', isCorrect ? 'true' : 'false');
                      } else {
                        // If not a valid number, don't show validation state
                        e.target.removeAttribute('data-valid');
                      }
                    }}
                    className="peer w-full px-3 py-3 sm:py-4 pr-10 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm sm:text-base placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] focus:border-[rgb(57,81,131)] data-[valid=true]:border-green-500 data-[valid=true]:focus:ring-green-500 data-[valid=true]:focus:border-green-500 data-[valid=false]:border-red-500 data-[valid=false]:focus:ring-red-500 data-[valid=false]:focus:border-red-500"
                    placeholder="Answer*"
                    required
                  />
                  <label 
                    htmlFor="captcha" 
                    className="absolute text-sm text-gray-600 font-medium duration-300 transform scale-75 -translate-y-4 z-10 origin-[0] bg-blue-100 px-1 peer-placeholder-shown:px-0 peer-placeholder-shown:bg-transparent left-2 top-0 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-3 peer-focus:bg-blue-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 peer-data-[valid=true]:text-green-600 peer-data-[valid=false]:text-red-600"
                  >
                    Answer*
                  </label>
                  
                  {/* Checkmark for correct answer - shown conditionally */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden peer-data-[valid=true]:block animate-fadeIn">
                    <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  {/* X mark for incorrect answer - shown conditionally */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden peer-data-[valid=false]:block animate-fadeIn">
                    <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center space-x-4 pt-4">
              <button 
                type="button" 
                onClick={closeModal}
                className="px-6 py-2.5 bg-red-500 text-white font-medium sm:font-semibold rounded-lg hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 text-sm sm:text-base"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                style={{ backgroundColor: 'rgb(57, 81, 131)' }}
                className="px-6 py-2.5 text-white font-medium sm:font-semibold rounded-lg hover:bg-[#2c406b] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[rgb(57,81,131)] shadow-md text-sm sm:text-base"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )}

  {/* Add this CSS to your global styles or within a style tag */}
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