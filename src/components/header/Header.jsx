import React from "react";
import "./header.css";
import logo1 from "../../assets/images/logo.jpg"; // Replace with your logo
import logo2 from "../../assets/images/aicte-logo.jpg"; // Replace with your logo
import logo3 from "../../assets/images/bte up.jpg"; // Replace with your logo
import logo4 from "../../assets/images/pci logo.jpg"; // Replace with your logo
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
        <h1 className=" lg:text-5xl ml-2 md:text-3xl font-bold text-blue-900">
          JK Institute Of Pharmacy
        </h1>
      </div>

      {/* Right Side: Logos */}
      <div className="flex  flex-shrink-0 space-x-2">
        <img
          src={logo2} // Replace with your logo URL
          alt="Logo 1"
          className="h-24 w-24 object-cover my-2"
        />
        <img
          src={logo4} // Replace with your logo URL
          alt="Logo 2"
          className="h-24 w-24 object-cover my-2"
        />
        <img
          src={logo1} // Replace with your logo URL
          alt="Logo 3"
          className="h-24 w-24 object-cover my-2"
        />
      </div>
    </header>
    </>
  );
};

export default Header;
