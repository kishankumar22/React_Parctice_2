import React, { useState, useEffect } from 'react';
import pic1 from "../../assets/images/pic1.png";
import pic2 from "../../assets/images/pic2.png";
import pic3 from "../../assets/images/pic3.png";
import pic4 from "../../assets/images/pic4.png";
import pic5 from "../../assets/images/pic5.png";

const Slider = () => {
  // Array of images and corresponding messages
  const slides = [
    { image: pic1, message: "This is the first slide message." },
    { image: pic2, message: "This is the second slide message." },
    { image: pic3, message: "This is the third slide message." },
    { image: pic4, message: "This is the fourth slide message." },
    { image: pic5, message: "This is the fifth slide message." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide images
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Next image handler
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Previous image handler
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-1000 ease-out delay-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full text-center"
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[464px] object-cover rounded-lg"
            />
            {/* Slide Message */}
            <div className="bg-red-800 p-3 shadow-md text-center">
              <p className="text-white">{slide.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black rounded-full p-2 opacity-50 hover:opacity-100 transition-opacity "
      >
        &lt;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black rounded-full p-2 opacity-50 hover:opacity-100 transition-opacity"
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;