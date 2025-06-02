// src/components/LogoSlider.tsx
import React, { useState, useEffect } from "react";
import axiosInstance from '../../config'; // Adjust the import path as necessary

const LogoSlider = () => {
  const [links, setLinks] = useState([]); // Adjust the type as necessary

  // Fetch links when the component mounts
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axiosInstance.get(`/important-links/all`);
        setLinks(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };
    fetchLinks();
  }, []);

  return (
    <div className="flex flex-col p-4 justify-center w-full bg-gray-100">
      {/* Slider Title */}
      <div className="mb-4 mt-2 mx-24 lg:mx-60 md:mx-44 sm:mx-24 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[1.125rem] sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
  LINKS
  </h1>
</div>

      {/* Logo Slider */}
      <div className="flex justify-evenly overflow-x-auto p-2 rounded-sm w-full space-x-4">
        {links
          .filter(link => link.IsVisible) // Filter links where IsVisible is true
          .map((link, index) => (
            <a
              href={link.linksUrl} // Use linksUrl from the API response
              key={index}
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security best practice
              className="flex-none w-24 md:w-32 lg:w-40 border-2 border-gray-300 rounded-sm transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={link.LOGOUrl} // Assuming each link object has a 'logoUrl' property
                alt={`Logo ${index + 1}`}
                className="h-24 w-full bg-white object-contain p-2"
                title={link.logoName}
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default LogoSlider;