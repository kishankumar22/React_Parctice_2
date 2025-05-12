import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to a server)
    console.log(formData);
    // Reset form data to initial state
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      message: "",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Header - Contact Details - Original Style */}
        <div className="mb-8 mt-2 mx-auto bg-gray-300 h-6 flex items-center justify-center shadow-md">
          <h1 className="text-xs sm:text-sm md:text-base lg:text-lg text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
            CONTACT DETAILS
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-8xl mx-auto">
          {/* Left Column - Feedback Form */}
          <div className="w-full lg:w-7/12 flex flex-col bg-purple-50 border rounded-lg shadow-md p-6">
            <p className="text-sm sm:text-base text-gray-700 mb-6">
              Our customer support and account management team provide the best service. We are passionate about our service as well as our customers, and it shows in the level of service that we provide. We're always happy to help find the solution for your needs. If a solution does not already exist, we'll create a new solution that resolves your issue.
            </p>
            <div className="w-full flex-grow">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Form Fields - First Column */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>

                  {/* Form Fields - Second Column */}
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="address" className="text-sm font-semibold text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Address"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="city" className="text-sm font-semibold text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your City"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="country" className="text-sm font-semibold text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Country"
                      required
                    />
                  </div>

                  {/* Message Field - Full Width */}
                  <div className="col-span-1 sm:col-span-2 flex flex-col space-y-1">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="p-3 border border-gray-300 rounded-md text-sm min-h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Message"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
                    <button
                      type="submit"
                      className="w-full sm:w-64 h-10 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Details */}
          <div className="w-full lg:w-5/12 mt-6 lg:mt-0">
      <div className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-xl shadow-lg h-full border border-blue-100">
        {/* Header with modern gradient */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg opacity-90"></div>
          <h2 className="relative text-lg font-bold text-center text-white py-3 px-4 rounded-lg">
            Address Information
          </h2>
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
        </div>
        
        <div className="space-y-6 text-gray-700">
          {/* Address Block */}
          <div className="p-3 rounded-lg hover:bg-blue-50 transition duration-300">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <h3 className="text-blue-800 font-semibold text-sm sm:text-base">Location Address</h3>
            </div>
            <div className="ml-13 pl-2 border-l-2 border-blue-200">
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                10 Km Stone Bulandshahr<br />
                Khurja G.T. Road NH-91<br />
                Village Agwal Near Railway Crossing<br />
                Khurja Distt.<br />
                Bulandshahr (U.P.)<br />
                <span className="font-medium">203131</span>
              </p>
            </div>
          </div>
          
          {/* Phone Block */}
          <div className="p-3 rounded-lg hover:bg-blue-50 transition duration-300">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                <FaPhone className="w-4 h-4" />
              </div>
              <h3 className="text-blue-800 font-semibold text-sm sm:text-base">Contact Numbers</h3>
            </div>
            <div className="ml-13 pl-2 border-l-2 border-blue-200">
              <div className="space-y-1 text-sm sm:text-base">
                <a 
                  href="tel:+915738244213" 
                  className="block text-gray-600 hover:text-blue-700 transition duration-300 hover:translate-x-1"
                >
                  +91-5738-244213
                </a>
                <a 
                  href="tel:+917351220007" 
                  className="block text-gray-600 hover:text-blue-700 transition duration-300 hover:translate-x-1"
                >
                  +91-07351220007
                </a>
              </div>
            </div>
          </div>
          
          {/* Email Block */}
          <div className="p-3 rounded-lg hover:bg-blue-50 transition duration-300">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                <FaEnvelope className="w-4 h-4" />
              </div>
              <h3 className="text-blue-800 font-semibold text-sm sm:text-base">Email Address</h3>
            </div>
            <div className="ml-13 pl-2 border-l-2 border-blue-200">
              <a 
                href="mailto:info@jkiop.org" 
                className="text-blue-600 hover:text-blue-800 font-medium transition duration-300 hover:underline text-sm sm:text-base"
              >
                info@jkiop.org
              </a>
            </div>
          </div>
          
          {/* Website Block */}
          <div className="p-3 rounded-lg hover:bg-blue-50 transition duration-300">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">
                <FaGlobe className="w-4 h-4" />
              </div>
              <h3 className="text-blue-800 font-semibold text-sm sm:text-base">Official Website</h3>
            </div>
            <div className="ml-13 pl-2 border-l-2 border-blue-200">
              <a 
                href="http://www.jkiop.org" 
                className="text-blue-600 hover:text-blue-800 font-medium transition duration-300 hover:underline text-sm sm:text-base"
              >
                www.jkiop.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        
        {/* Google Maps Section - Original Style */}
        <div className="mt-8">
          <div className="mb-4 mt-2 mx-auto bg-gray-300 h-6 flex items-center justify-center shadow-md">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
              MAP OF JK INSTITUTE OF PHARMACY
            </h1>
          </div>
          
          <div className="w-full h-80 sm:h-96 md:h-[450px] mt-4 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d77.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c123456789abc%3A0x1234567890abcdef!2sJK%20Institute%20Of%20Pharmacy!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;