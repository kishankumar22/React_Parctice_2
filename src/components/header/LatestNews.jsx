import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";

const LatestNews = () => {
  return (
    <>
      <div className=" bg-black flex flex-col md:flex-row h-auto md:h-8">
        {/* Latest News Header */}
        <h1 className="bg-blue-900 block  min-w-28   h-8 md:w-48 p-2 md:p-1 text-white text-center font-medium">
          Latest News
        </h1>

        {/* Scrolling News */}
        <div className="h-10 w-full md:h-8">
          <Marquee
            behavior=""
            direction="left"
            pauseOnHover
            className="bg-black h-full"
          >
            <ul className="flex gap-6 md:gap-10 text-white text-sm md:text-base">
              <li>
                <a href="">Enquiry open for admission in session 2022-23.</a>
              </li>
              <li>
                <a href="">Enquiry open for admission in session 2022-23.</a>
              </li>
              <li>
                <a href="">Enquiry open for admission in session 2022-23.</a>
              </li>
              <li>
                <a href="">Enquiry open for admission in session 2022-23.</a>
              </li>
            </ul>
          </Marquee>
        </div>

        {/* Social Media Links */}
        <div className="flex  justify-center md:justify-end  mt-2 md:mt-0">
          <ul className="flex  ">
            {/* Facebook */}
            <li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-500">
                <FaFacebookF size={20} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white transition-transform duration-500 group-hover:translate-y-0 -translate-y-full">
                <FaFacebookF size={20} />
              </div>
            </li>

            {/* Twitter */}
            <li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-300">
                <FaTwitter size={20} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white transition-transform duration-300 group-hover:translate-y-0 -translate-y-full">
                <FaTwitter size={20} />
              </div>
            </li>

            {/* Instagram */}
            <li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-300">
                <FaInstagram size={20} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-pink-600 text-white transition-transform duration-300 group-hover:translate-y-0 -translate-y-full">
                <FaInstagram size={20} />
              </div>
            </li>

            {/* Pinterest */}
            <li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-300">
                <FaPinterestP size={20} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-600 text-white transition-transform duration-300 group-hover:translate-y-0 -translate-y-full">
                <FaPinterestP size={20} />
              </div>
            </li>

            {/* Google Plus */}
            <li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-300">
                <FaGooglePlusG size={20} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-600 text-white transition-transform duration-300 group-hover:translate-y-0 -translate-y-full">
                <FaGooglePlusG size={20} />
              </div>
            </li>

            {/* YouTube */}
            <li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-300">
                <FaYoutube size={20} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-red-700 text-white transition-transform duration-300 group-hover:translate-y-0 -translate-y-full">
                <FaYoutube size={20} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
