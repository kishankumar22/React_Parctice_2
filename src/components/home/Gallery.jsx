import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config';

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [currentMedia, setCurrentMedia] = useState(null); // Current Image/Video
  const [currentIndex, setCurrentIndex] = useState(0); // Track Current Index
  const [isOpen, setIsOpen] = useState(false); // Modal Open/Close

  // Fetch Galleries Data
  const fetchGalleries = async () => {
    try {
      const res = await axiosInstance.get('/gallery');
      setGalleries(res.data);
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
      <div className="mb-4 mt-2  mx-40 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[1.125rem] sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
  gallery
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
                />
              ) : (
                <img
                  src={gallery.galleryUrl}
                  alt={gallery.galleryName}
                  className="w-full h-44 object-cover rounded-md cursor-pointer"
                  onClick={() => openModal(index)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {isOpen && currentMedia && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              className="absolute top-4 right-6 text-white text-3xl"
              onClick={closeModal}
            >
              ✖
            </button>
            <button
              className="absolute left-6 text-white text-3xl"
              onClick={prevMedia}
            >
              ◀
            </button>
            <button
              className="absolute right-6 text-white text-3xl"
              onClick={nextMedia}
            >
              ▶
            </button>

            <div className="max-w-screen-lg mx-auto">
              {currentMedia.type === 'video' ? (
                <video
                  src={currentMedia.galleryUrl}
                  controls
                  className="w-full max-h-[90vh] rounded-md"
                />
              ) : (
                <img
                  src={currentMedia.galleryUrl}
                  alt={currentMedia.galleryName}
                  className="w-full h-full object-contain rounded-md"
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