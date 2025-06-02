import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config';

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [currentMedia, setCurrentMedia] = useState(null); // Current Image/Video
  const [currentIndex, setCurrentIndex] = useState(0); // Track Current Index
  const [isOpen, setIsOpen] = useState(false); // Modal Open/Close

  // Fetch Galleries Data and filter by IsVisible
  const fetchGalleries = async () => {
    try {
      const res = await axiosInstance.get('/gallery');
      // Filter galleries where IsVisible is true
      const visibleGalleries = res.data.filter(gallery => gallery.IsVisible === true);
      setGalleries(visibleGalleries);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, []);

  // Open Modal
  const openModal = (index) => {
    setCurrentMedia(galleries[index]);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsOpen(false);
    setCurrentMedia(null);
  };

  // Navigate Next
  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % galleries.length;
    setCurrentIndex(nextIndex);
    setCurrentMedia(galleries[nextIndex]);
  };

  // Navigate Previous
  const prevMedia = () => {
    const prevIndex = (currentIndex - 1 + galleries.length) % galleries.length;
    setCurrentIndex(prevIndex);
    setCurrentMedia(galleries[prevIndex]);
  };

  return (
    <>
      <div className='bg-gray-100 p-2'>
        <div className="mb-4 mt-2 mx-4 lg:mx-12 sm:mx-44 md:mx-20 bg-gray-300 h-6 flex items-center justify-center shadow-md">
          <h1 className="text-[1rem] sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
            Gallery
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-2 my-4 mx-2">
          {galleries.map((gallery, index) => (
            <div key={gallery.id} className="text-center">
              {gallery.type === 'video' ? (
                <video
                  src={gallery.galleryUrl}
                  className="w-full h-44 object-cover rounded-md cursor-pointer"
                  onClick={() => openModal(index)}
                  title={gallery.galleryName}

                />
              ) : (
                <img
                  src={gallery.galleryUrl}
                  alt={gallery.galleryName}
                  className="w-full h-44 object-cover rounded-md cursor-pointer"
                  onClick={() => openModal(index)}
                  title={gallery.galleryName}

                />
              )}
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {isOpen && currentMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 backdrop-blur-sm">
            {/* Close button - modern circular style */}
            <button
              className="absolute top-4 right-6 p-2 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 hover:scale-110 transition-all duration-200 flex items-center justify-center w-10 h-10"
              onClick={closeModal}
              aria-label="Close"
            >
              <span className="text-2xl font-light">✖</span>
            </button>

            {/* Previous button - modern circular style */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 hover:scale-110 transition-all duration-200 flex items-center justify-center w-12 h-12"
              onClick={prevMedia}
              aria-label="Previous"
            >
              <span className="text-2xl">◀</span>
            </button>

            {/* Next button - modern circular style */}
                  <button
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 hover:scale-110 transition-all duration-200 flex items-center justify-center w-12 h-12"
                    onClick={nextMedia}
                    aria-label="Next"
                  >
              <span className="text-2xl">▶</span>
            </button>

            {/* Media container with improved sizing */}
            <div className="w-full max-w-screen-lg mx-auto px-4 max-h-[90vh] flex items-center justify-center">
              {currentMedia.type === 'video' ? (
                <video
                  src={currentMedia.galleryUrl}
                  controls
                  className="w-[80%] h-[80%] object-contain rounded-lg shadow-2xl"
                  title={currentMedia.galleryName}

                />
              ) : (
                <img
                  src={currentMedia.galleryUrl}
                  alt={currentMedia.galleryName}
                  className="w-[80%] h-[80%] object-contain rounded-lg shadow-2xl"
                  title={currentMedia.galleryName}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;