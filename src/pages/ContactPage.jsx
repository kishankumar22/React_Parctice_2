import React, { useState } from "react";
import Layout from"../components/layout/Layout"
import ddu from "../assets/images/DDU_Campus.png";

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
  };
  return (
    <Layout>
    <div className="border border-gray-200 m-6 rounded-md shadow-md shadow-gray-400 ">
      <div className="flex ">
         {/* Left Side: Contact Form */}
      <div className="w-1/2  flex p-4 ">
      <div className="w-full ml-3  h-96 border-2 border-gray-300 rounded-md ">
      <iframe
    title="University Location"
    src="https://www.google.com/maps/embed/v1/place?q=Deen%20Dayal%20Upadhyaya%20Gorakhpur%20University%2C%20Civil%20Lines%2C%20Gorakhpur%20(U.P.)%20-%20273009%20%5B%20INDIA%20%5D&key=AIzaSyBEIqDhk4kpJH8s0RmyaZ7jW1wmDr00bdU"
    width="100%"
    height="100%"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
></iframe>
      </div>
      </div>

      {/* Right Side: Contact Details */}
      <div className="w-1/2 p-4">
      <p className="text-2xl font-bold w-full text-gray-700 mb-4">
        <strong className="text-kesariya font-bold w-full border-kesariya border-b-2 pb-2">Deen Dayal Upadhyaya Gorakhpur University</strong>
       </p> 
       <div className="w-32 h-1 ml-0 bg-kesariya -m-2.5"></div>
       <p className="mt-4"> Civil Lines, Gorakhpur (U.P.) - 273009 [ INDIA ]
        </p>
      

      {/* Phone Numbers */}
      <div className="mt-3">
            <i className="fas fa-phone-alt text-black mr-2"></i>
        <strong className="text-sm font-normal">Phone Number(s):</strong>
        <ul className="mt-2">
          <li className="flex items-center">
            <strong>Vice Chancellor:</strong> +91-551-2201577 (O), 2340458 (R)
          </li>
          <li className="flex items-center ">
            <strong>Registrar:</strong> +91-551-2340363 (O)
          </li>
          <li className="flex items-center">
            <strong>Inquiry Telephone Number:</strong> 0551-2203098
          </li>
        </ul>
      </div>

      {/* Fax Numbers */}
      <div className="mt-3">
        <strong className="text-sm font-normal"> 
          <i className="fas fa-fax text-gray-600  mr-2"></i>Fax Number(s):</strong>
        <ul className="mt-2">
          <li className="flex items-center">
            <strong>V.C. Office:</strong> +91-551-2330767
          </li>
          <li className="flex items-center">
            <strong>Registrar Office:</strong> +91-551-2340363
          </li>
        </ul>
      </div>

      {/* Email Address */}
      <div className="mt-3">
        <strong className="text-sm font-normal">  <i className="fas fa-envelope text-black mr-2"></i>E-Mail Address:</strong>
        <div className="flex items-center">
        
          <p className="text-blue-500 font-light">registrarddugu@gmail.com</p>
        </div>
      </div>
    </div> 

      </div>
      {/* end here  */}
      <div className="mt-3 p-2">
        <img src={ddu} alt="" srcset="" />
      </div>
      <div>

      <div className="w-full p-4   ">
      <h2 className="text-3xl font-normal text-kesariya pb-2 mb-6 border-b-2 border-black border-dashed">Feedback Form</h2>
      <form onSubmit={handleSubmit}className="p-4">
        <div className="grid p-2 grid-cols-1 md:grid-cols-2 gap-x-32">
          {/* Left Column */}
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-lg font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="p-2 border  border-gray-300 rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-lg font-semibold mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Phone Number"
              required
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-lg font-semibold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your Address"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="text-lg font-semibold mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-md"
              placeholder="Your City"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="text-lg font-semibold mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-md"
              placeholder="Your Country"
              required
            />
          </div>

          {/* Message Field */}
          <div className="col-span-2 flex flex-col">
            <label htmlFor="message" className="text-lg font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="p-3 border w-2/4 border-gray-300 rounded-md"
              placeholder="Your Message"
              rows="5"
              cols="40"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-">
            <button
              type="submit"
              className="w-64 h-10   bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
      </div>
     

    
     </div>
     </Layout>
  );
};

export default ContactPage;
