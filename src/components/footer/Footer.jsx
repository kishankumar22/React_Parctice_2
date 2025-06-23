import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo/logo.jpg"; // Replace with your logo
import { FaChevronRight, FaEnvelope, FaMobileAlt, FaPhone } from "react-icons/fa";
import axiosInstance from "../../config";

const Footer = () => {
  const [links, setLinks] = useState([]);

  // Fetch links when the component mounts
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axiosInstance.get(`/important-links/all`);
        // Filter links where IsVisible is true, then take only the first 5
        const visibleLinks = response.data
          .filter(link => link.IsVisible)
          .slice(0, 5);
        setLinks(visibleLinks);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };
    fetchLinks();
  }, []);

  return (
    <footer className="bg-[#283c65] text-white text-xs">
      <div className="container mx-auto px-6 py-10">
        {/* Footer Layout - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-[auto,1fr,1fr,1fr,1fr] lg:grid-rows-1 gap-4 md:gap-8 items-start">
          {/* Logo (Fixed Size) - Hidden on Tablet */}
          <div className="flex justify-center md:justify-start w-full md:w-24 hidden md:block">
            <a href="/">
              <img src={logo1} alt="University Logo" className="w-24 h-24 object-fill rounded-full" />
            </a>
          </div>

          {/* Institute Info */}
          <div>
            <h2 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              JK INSTITUTE OF PHARMACY
            </h2>
            <p className="leading-normal text-[13px]">
              JK Institute Of Pharmacy is a non-profit, quality-conscious and trend-setting institute with a focus on providing equal opportunities for all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              QUICK LINKS
            </h1>
            <ul>
              {[
                { name: "Registration", path: "/registration" },
                { name: "About Us", path: "/aboutus" },
                { name: "Gallery", path: "/campus/gallaryPage" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, index) => (
                <li key={index} className="flex items-center p-2 text-[13px] hover:text-gray-300 transition duration-200">
                  <FaChevronRight className="mr-1 text-yellow-400 text-xs" />
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
   <div className="md:col-span-1 md:col-start-2 lg:col-start-4">
  <h1 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
    CONTACT INFORMATION
  </h1>
  <p className="leading-snug text-[13px]">
    10 Km Stone Bulandshahr – Khurja G.T. Road NH-91, Village Agwal Near Railway Crossing, Khurja Distt. Bulandshahr, (U.P.), 203131
  </p>
  <p className="mt-2">
    <span className="flex items-center"><FaPhone className="mr-1 text-yellow-400 text-xs" /><strong>Phone:</strong> +91-5738-244213</span><br />
    <span className="flex items-center"><FaMobileAlt className="mr-1 text-yellow-400 text-xs" /><strong>Mobile:</strong> +91-07351220007</span><br />
    <span className="flex items-center"><FaEnvelope className="mr-1 text-yellow-400 text-xs" /><strong>Email:</strong> info@jkiop.org</span>
  </p>
</div>

          {/* Important Links */}
          <div className="md:col-span-1 md:col-start-3 lg:col-start-5">
            <h1 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              IMPORTANT LINKS
            </h1>
            <ul>
              {links.map((item, index) => (
                <li key={index} className="flex items-center p-2 text-[13px] hover:text-gray-300 transition duration-200">
                  <FaChevronRight className="mr-1 text-yellow-400 text-xs" />
                  <a href={item.linksUrl} target="_blank" rel="noopener noreferrer">
                    {item.logoName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-b from-gray-100 to-gray-300 text-gray-700 px-4 md:px-10 py-2 text-xs shadow-inner">
        <p className="text-[13px]">
          <span className="font-semibold text-gray-600">Copyright © 2025</span> - 
          <span className="font-bold text-gray-800 ml-1">JK Institute Of Pharmacy</span>. All rights reserved.
        </p>
        <p className="text-[13px] mt-1 md:mt-0">
          <span className="font-semibold">Developed by</span> <a href="https://www.mezzex.com/" target="_blank" className="text-blue-600 font-bold hover:underline">Mezzex</a>
        </p>
      </div>

      {/* Inline CSS for Tablet Layout */}
      <style>
        {`
          @media (min-width: 768px) and (max-width: 1024px) {
            .grid {
              grid-template-columns: 1fr 1fr !important; /* Two equal columns */
              grid-template-rows: auto auto !important; /* Two rows */
            }
            .flex.justify-center.md\\:justify-start.w-full.md\\:w-24 {
              display: none !important; /* Hide logo on tablet */
            }
            /* Adjust column spans for tablet */
            div:nth-child(2) { grid-column: 1 / 2; }
            div:nth-child(3) { grid-column: 2 / 3; }
            div:nth-child(4) { grid-column: 1 / 2; grid-row: 2 / 3; }
            div:nth-child(5) { grid-column: 2 / 3; grid-row: 2 / 3; }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;