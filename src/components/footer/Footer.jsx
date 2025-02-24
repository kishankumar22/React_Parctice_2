// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo/logo.jpg"; // Replace with your logo
import { FaChevronRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#283c65] text-white text-xs">
      <div className="container mx-auto px-6 py-10">
        {/* Footer Layout - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,1fr,1fr,1fr] gap-4 md:gap-6 items-start">
          {/* Logo (Fixed Size) */}
          <div className="flex justify-center md:justify-start w-full md:w-24">
            <a href="/">
            <img src={logo1} alt="University Logo" className="w-24 h-24 object-fill rounded-full" />

            </a>
          </div>

          {/* Institute Info */}
          <div>
            <h2 className="font-semibold font-roboto  border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              JK INSTITUTES OF PHARMACY
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
          <div>
            <h1 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              CONTACT INFORMATION
            </h1>
            <p className="leading-snug text-[13px]">
              10 Km Stone Bulandshahr –Khurja G.T. Road NH-91, Village Agwal Near Railway Crossing, Khurja Distt. Bulandshahr, (U.P.), 203131
            </p>
            <p className="mt-2">
              <strong>Phone:</strong> +91-5738-244213 <br />
              <strong>Mobile:</strong> +91-07351220007 <br />
              <strong>Email:</strong> info@jkiop.org
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h1 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              IMPORTANT LINKS
            </h1>
            <ul>
              {[
                { name: "AICTE", url: "https://www.aicte-india.org/" },
                { name: "PCI", url: "https://pci.nic.in/" },
                { name: "BTE", url: "https://bteup.ac.in/" },
              ].map((item, index) => (
                <li key={index} className="flex items-center p-2 text-[13px] hover:text-gray-300 transition duration-200">
                  <FaChevronRight className="mr-1 text-yellow-400 text-xs" />
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
      </div>
        <div className="flex flex-col md:flex-row justify-between bg-gray-900 text-yellow-400 px-6 md:px-10 py-3 mt-4 text-xs text-center md:text-left">
          <p>
            <a href="https://jkiop.org/" className="hover:text-gray-300">
              Copyright © 2022 JK Institute Of Pharmacy
            </a>
          </p>
          <p>
            <a href="https://www.mezzex.com/" target="_blank" className="hover:text-gray-300">
              Developed by Mezzex
            </a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
