import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config';

const Slider = () => {
  const [banners, setBanners] = useState([]); // Array of banners
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); // Track transition status

  // Fetch banners from backend
  const fetchBanners = async () => {
    try {
      const res = await axiosInstance.get('/banners'); // Fetch banners from API
      // Filter banners to only include those that are visible
      const visibleBanners = res.data.filter((banner) => banner.IsVisible);
      setBanners(visibleBanners);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // Automatically slide images
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex, banners]);

  // Next image handler (infinite linear transition)
  const nextImage = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length); // Loop back to the first image
  };

  // Reset slider position after the last slide
  useEffect(() => {
    if (currentIndex === banners.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0); // Instantly move back to the first image (no animation)
      }, 1000); // Wait for the animation to finish
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, banners.length]);

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
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full text-center">
            {/* Image */}
            <img
              src={banner.bannerUrl} 
              alt={banner.bannerName} 
              className="w-full h-[464px] object-fit "
            />
            {/* Slide Message */}
            <div className="bg-blue-800 p-3 shadow-md text-center">
              <p className="text-white">{banner.bannerName}</p> {/* Display banner name */}
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : banners.length - 1))}
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