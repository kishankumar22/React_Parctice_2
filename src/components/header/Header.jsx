import React from "react";
import "./header.css";
import logo1 from "../../assets/logo/logo.jpg"; // Replace with your logo
import logo2 from "../../assets/logo/aicte-logo.jpg"; // Replace with your logo
import logo3 from "../../assets/logo/bte up.jpg"; // Replace with your logo
import logo4 from "../../assets/logo/pci logo.jpg"; // Replace with your logo
import SocialLinks from "../socialLinks/SocialLinks";

const Header = () => {
  return (
        <>
      <header className="flex items-center justify-between  h-28 p-4  shadow-md">
      {/* Left Side: Image */}
      <div className="h-24 w-24 flex-shrink-0">
        <img
          src={logo1} // Replace with your image URL
          alt="Institute Logo"
          className="my-1  object-contain rounded-full"
        />
      </div>

      {/* Center: Title */}
      <div className="flex-1">
        <h1 className=" lg:text-5xl ml-2 md:text-3xl font-bold text-[#395183]">
        <a href="/"> JK Institute Of Pharmacy</a>
        </h1>
      </div>

      {/* Right Side: Logos */}
      <div className="flex  flex-shrink-0 space-x-2">
      <a href="https://www.aicte-india.org/" target="_blank">
        <img
          src={logo2} // Replace with your logo URL
          alt="Aicte"
          className="h-24 w-24 object-cover my-2"
        />
      </a>
      <a href="https://pci.nic.in/" target="_blank">
        <img
          src={logo4} // Replace with your logo URL
          alt="Pharmacy Council of India"
          className="h-24 w-24 object-cover my-2"
        />

      </a>
       <a href="https://bteup.ac.in/" target="_blank">
        <img
          src={logo3} // Replace with your logo URL
          alt="BOARD OF TECHNICAL EDUCATION"
          className="h-24 w-24 object-fit my-2"
        />
       </a>
      </div>
    </header>
    </>
  );
};

export default Header;
