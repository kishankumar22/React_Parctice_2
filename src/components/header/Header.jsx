import React from "react";
import logo1 from "../../assets/logo/logo.jpg"; // Replace with your logo
import logo2 from "../../assets/logo/aicte-logo.jpg"; // Replace with your logo
import logo3 from "../../assets/logo/bte up.jpg"; // Replace with your logo
import logo4 from "../../assets/logo/pci logo.jpg"; // Replace with your logo
import SocialLinks from "../socialLinks/SocialLinks";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between h-auto p-2 shadow-md flex-wrap">
        {/* Left Side: Image */}
        <div className="flex-shrink-0 h-12 w-12 md:h-24 md:w-24">
          <img
            src={logo1} // Replace with your image URL
            alt="Institute Logo"
            className="my-1 object-contain rounded-full h-full w-full"
          />
        </div>

        {/* Center: Title */}
        <div className="flex-1 text-center  md:text-left">
          <h1 className="text-[0.678rem] md:text-3xl lg:text-5xl px-3 font-bold text-[#395183]">
            <a href="/">JK Institute Of Pharmacy </a>
          </h1>
        </div>

        {/* Right Side: Logos */}
        <div className="flex flex-shrink-0 space-x-2">
          <a href="https://www.aicte-india.org/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo2} // Replace with your logo URL
              alt="Aicte"
              className="h-12 w-12 md:h-20 md:w-20 object-cover my-2"
            />
          </a>
          <a href="https://pci.nic.in/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo4} // Replace with your logo URL
              alt="Pharmacy Council of India"
              className="h-12 w-12 md:h-20 md:w-20 object-cover my-2"
            />
          </a>
          <a href="https://bteup.ac.in/" target="_blank" rel="noopener noreferrer">
            <img
              src={logo3} // Replace with your logo URL
              alt="BOARD OF TECHNICAL EDUCATION"
              className="h-12 w-12 md:h-20 md:w-20 object-cover my-2"
            />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;