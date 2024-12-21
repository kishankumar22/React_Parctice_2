import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Dynamically import all images from the folder
const logoImages = import.meta.glob("../../assets/logoslider/*.{jpg,png}");

// Async function to load images
const loadLogos = async () => {
  const images = [];
  for (const path in logoImages) {
    const image = await logoImages[path]();
    images.push({ src: image.default, path: "/page" + (images.length + 1) });
  }
  return images;
};

const LogoSlider = () => {
  const [logos, setLogos] = useState([]);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const logosPerGroup = 6;

  useEffect(() => {
    const fetchLogos = async () => {
      const loadedLogos = await loadLogos();
      setLogos(loadedLogos);
    };
    fetchLogos();
  }, []);

  const maxVisibleIndex = Math.max(logos.length - logosPerGroup, 0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) =>
        prevIndex < maxVisibleIndex ? prevIndex + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [maxVisibleIndex]);

  // Handle dot click
  const handleDotClick = (dotIndex) => {
    const targetIndex = dotIndex * logosPerGroup;
    setCurrentLogoIndex(
      targetIndex <= maxVisibleIndex ? targetIndex : maxVisibleIndex
    );
  };

  // Calculate the offset for sliding
  const offset = -currentLogoIndex * (100 / logosPerGroup);

  // Calculate active dot index
  const activeDotIndex = Math.min(
    Math.floor(currentLogoIndex / logosPerGroup),
    Math.ceil(logos.length / logosPerGroup) - 1
  );

  return (
    <div className="flex flex-col p-2 justify-center w-full bg-white">
      {/* Slider Title */}
      <h1 className="text-center text-2xl font-bold">LINKS</h1>

      {/* Logo Slider */}
      <div className="overflow-hidden p-2 rounded-sm w-full">
        <div
          className="flex h-28 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${offset}%)` }}
        >
          {logos.map((logo, index) => (
            <Link
              to={logo.path}
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
        {Array.from({ length: Math.ceil(logos.length / logosPerGroup) }).map(
          (_, dotIndex) => (
            <div
              key={dotIndex}
              onClick={() => handleDotClick(dotIndex)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeDotIndex === dotIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default LogoSlider;
