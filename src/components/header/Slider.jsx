import React, { useState, useEffect } from 'react';

// Dynamically import images using Vite's import.meta.glob
const imageFiles = import.meta.glob('../../assets/images/*.{jpg,png}'); // Adjust to your image folder path

// Create an array to store the image paths
const loadImages = async () => {
  const images = [];
  // Loop through all the keys of the imported files
  for (const key in imageFiles) {
    const image = await imageFiles[key](); // Call the function to get the image URL
    images.push(image.default); // Push only the image URLs into the array
  }
  return images;
};

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [messages, setMessages] = useState([
    "Welcome to our website!",
    "Explore our new collection!",
    "Special discounts on selected items!",
    "Limited time offer!",
    "Join our community today!",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); // Track transition status

  // Load images after the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      const images = await loadImages(); // Get images dynamically
      setSlides([...images, images[0]]); // Add the first image at the end for seamless transition
    };
    fetchImages();
  }, []);

  // Automatically slide images
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex, slides]);

  // Next image handler (infinite linear transition)
  const nextImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Reset slider position after the last slide
  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Instantly move back to the first image (no animation)
      }, 1000); // Wait for the animation to finish
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, slides.length]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Slider Container */}
      <div
        className="flex transition-transform ease-linear duration-1000" 
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
        }}
      >
        {/* Render slides */}
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full text-center">
            {/* Image */}
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-[464px] object-cover rounded-lg"
            />
            {/* Slide Message */}
            <div className="bg-blue-800 p-3 shadow-md text-center">
              <p className="text-white">{messages[index % messages.length]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : slides.length - 2))}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black rounded-full p-2 opacity-50 hover:opacity-100 transition-opacity"
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
