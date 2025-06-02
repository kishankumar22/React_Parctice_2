import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config';

const Slider = () => {
  const [banners, setBanners] = useState([]); // Array of banners
  const [currentIndex, setCurrentIndex] = useState(1); // Start from second slide (since first is duplicated)
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Fetch banners from backend
  const fetchBanners = async () => {
    try {
      const res = await axiosInstance.get('/banners'); // Fetch banners from API
      const visibleBanners = res.data.filter((banner) => banner.IsVisible);
      
      if (visibleBanners.length > 0) {
        // Add first and last slides at the ends to create a seamless loop
        const loopedBanners = [
          visibleBanners[visibleBanners.length - 1], // Duplicate last at the start
          ...visibleBanners,
          visibleBanners[0], // Duplicate first at the end
        ];
        setBanners(loopedBanners);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex, banners]);

  const nextImage = () => {
    if (banners.length < 3) return; // Avoid issues with small arrays

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (currentIndex === banners.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Instantly move back to first real slide (skip animation)
      }, 1000);
    }
  }, [currentIndex, banners.length]);

  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(banners.length - 2); // Instantly move back to last real slide
      }, 1000);
    }
  }, [currentIndex, banners.length]);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-linear duration-1000"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
        }}
      >
        {banners.map((banner, index) => (
          <div key={index} className="min-w-full text-center">
            <img
              src={banner.bannerUrl}
              alt={banner.bannerName}
              className="w-full  max-h-[650px] object-fill"
            />
            <div className="bg-gray-transparent w-60 text-center -mt-24 ml-12 p-3 shadow-md absolute">
              <p className="text-white text-sm md:text-lg">{banner.bannerName}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
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
