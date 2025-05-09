import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa"; // Importing icons

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
      <div className="container mx-auto p-8">
      <div className="mb-4 mt-2  mx-4 lg:mx-32  sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[0.8rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    Contact Details
  </h1>
</div>
        <div className="flex flex-col md:flex-row">
          {/* Left Column (col-7) - Feedback Form */}
          <div className="md:w-7/12 p-2  flex flex-col">
            <p className="pt-4 text-sm">
              Our customer support and account management team provide the best service. We are passionate about our service as well as our customers, and it shows in the level of service that we provide. We're always happy to help find the solution for your needs. If a solution does not already exist, we'll create a new solution that resolves your issue.
            </p>
            <div className="w-full flex-grow">
              <form onSubmit={handleSubmit} className="pt-4">
                <div className="grid p-2 grid-cols-1 md:grid-cols-2 gap-x-8">
                  {/* Left Column */}
                  <div className="flex flex-col ">
                    <label htmlFor="name" className="text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-semibold mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col ">
                    <label htmlFor="address" className="text-sm font-semibold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Your Address"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="city" className="text-sm font-semibold mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Your City"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="country" className="text-sm font-semibold mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Your Country"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="col-span-2 flex flex-col">
                    <label htmlFor="message" className="text-sm font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="p-3 border w-full border-gray-300 rounded-md text-sm"
                      placeholder="Your Message"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-span-2 flex justify-center mt-6">
                    <button
                      type="submit"
                      className="w-64 h-10 bg-blue-800 text-white rounded-md font-semibold hover:bg-blue-600"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column (col-5) - Contact Details */}
          <div className="md:w-5/12 p-4 flex flex-col">
            <div className=" p-4 rounded-lg shadow-md flex-grow">
              <h2 className="text-lg font-semibold bg-blue-900 text-center text-white rounded">Address Info</h2>
              <p className="mt-2 flex items-center">
                <FaMapMarkerAlt className="text-blue-500 mr-2" />
                <strong>Address:</strong>
              </p>
              <p className="ml-6">
                10 Km Stone Bulandshahr<br />
                Khurja G.T. Road NH-91<br />
                Village Agwal Near Railway Crossing<br />
                Khurja Distt.<br />
                Bulandshahr (U.P.)<br />
                203131
              </p>
              <p className="mt-2 flex items-center">
                <FaPhone className="text-blue-500 mr-2" />
                <strong>Phone No:</strong>
              </p>
              <p className="ml-6">
                +91-5738-244213<br />
                +91-07351220007
              </p>
              <p className="mt-2 flex items-center">
                <FaEnvelope className="text-blue-500 mr-2" />
                <strong>Email Id:</strong>
              </p>
              <p className="ml-6">
                <a href="mailto:info@jkiop.org" className="text-blue-500 text-sm">info@jkiop.org</a>
              </p>
              <p className="mt-2 flex items-center">
                <FaGlobe className="text-blue-500 mr-2" />
                <strong>Website:</strong>
              </p>
              <p className="ml-6">
                <a href="http://www.jkiop.org" className="text-blue-500 text-sm">www.jkiop.org</a>
              </p>
            </div>
          </div>
        </div>
        {/* Google Maps iframe */}
        <div className=" mt-6">
        <div className="mb-4 mt-2  mx-8 lg:mx-32  sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[0.81rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
  Map of JK Institute Of Pharmacy
  </h1>
</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509198!2d77.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c123456789abc%3A0x1234567890abcdef!2sJK%20Institute%20Of%20Pharmacy!5e0!3m2!1sen!2sin!4v1234567890123"
            width="100%"
            height="450"
            className="mt-8"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;