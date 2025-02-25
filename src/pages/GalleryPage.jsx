import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import Gallery from '../components/home/Gallery';
import { RingLoader } from 'react-spinners'; // Import the loader

const GalleryPage = () => {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 800); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <Layout>
      {loading ? ( // Show loader while loading
        <div className="flex justify-center items-center h-screen" >
          <RingLoader size={120} color="blue" /> {/* Loader color can be adjusted */}
        </div>
      ) : (
        <Gallery />
      )}
    </Layout>
  );
};

export default GalleryPage;