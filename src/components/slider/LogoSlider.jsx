import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

// Import logos
import Logo1 from "../../assets/images/1.jpg";
import Logo2 from "../../assets/images/2.jpg";
import Logo3 from "../../assets/images/3.jpg";
import Logo5 from "../../assets/images/5.png";
import Logo6 from "../../assets/images/6.png";
import Logo7 from "../../assets/images/7.jpg";
import Logo8 from "../../assets/images/8.jpg";
import Logo9 from "../../assets/images/9.jpg";
import Logo11 from "../../assets/images/11.jpg";
import Logo12 from "../../assets/images/12.jpg";
import Logo13 from "../../assets/images/13.jpg";
import Logo14 from "../../assets/images/14.jpg";
import Logo15 from "../../assets/images/15.jpg";
import Logo16 from "../../assets/images/16.jpg";
import Logo17 from "../../assets/images/17.jpg";
import Logo18 from "../../assets/images/18.jpg";
import Logo19 from "../../assets/images/19.png";

const LogoSlider = () => {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  // Array of imported logos and corresponding routes
  const logos = [
    { src: Logo1, path: "/page1" },
    { src: Logo2, path: "/page2" },
    { src: Logo3, path: "/page3" },
    { src: Logo5, path: "/page4" },
    { src: Logo6, path: "/page5" },
    { src: Logo7, path: "/page6" },
    { src: Logo6, path: "/page7" },
    { src: Logo8, path: "/page8" },
    { src: Logo9, path: "/page9" },
    { src: Logo11, path: "/page10" },
    { src: Logo12, path: "/page11" },
    { src: Logo13, path: "/page12" },
    { src: Logo14, path: "/page13" },
    { src: Logo15, path: "/page14" },
    { src: Logo16, path: "/page15" },
    { src: Logo17, path: "/page16" },
    { src: Logo18, path: "/page17" },
    { src: Logo19, path: "/page18" },
  ];
  const logosPerGroup = 6;

  const maxVisibleIndex = logos.length - logosPerGroup; // Prevent blank space

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) =>
        prevIndex < maxVisibleIndex ? prevIndex + 1 : prevIndex
      );
    }, 3000); // Change logo every 3 seconds

    return () => clearInterval(interval);
  }, [maxVisibleIndex]);

  // Handle dot click
  const handleDotClick = (dotIndex) => {
    const targetIndex = dotIndex * logosPerGroup;
    setCurrentLogoIndex(targetIndex <= maxVisibleIndex ? targetIndex : maxVisibleIndex);
  };

  // Calculate the offset for the sliding effect
  const offset = -currentLogoIndex * (320 / logos.length);

  // Calculate the active dot index
  const activeDotIndex = Math.min(
    Math.floor(currentLogoIndex / logosPerGroup),
    Math.ceil(logos.length / logosPerGroup) - 1
  );

  return (
    <div className="flex flex-col p-2 justify-center w-full bg-white">
      {/* Logo Slider */}
      <div>
        <h1 className="text-center text-2xl font-bold">LINKS</h1>
      </div>
      <div className="overflow-hidden p-2 rounded-sm w-full">
        <div
          className="flex h-28 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${offset}%)` }}
        >
          {logos.map((logo, index) => (
            <Link
              to={logo.path} // Set the proper route here
              key={index}
              className="flex-none w-1/6 border-2 mr-2 border-gray-300 p-2 rounded-sm"
            >
              <img
                src={logo.src}
                alt={`Logo ${index + 1}`}
                className="h-24 w-full bg-white object-fill"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(logos.length / logosPerGroup) }).map((_, dotIndex) => (
          <div
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              activeDotIndex === dotIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
