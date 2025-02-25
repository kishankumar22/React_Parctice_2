import React, { useEffect, useState } from 'react';
import Slider from '../components/header/Slider';
import NewsHead from '../components/home/NewsHead';
import Section from '../components/section/Section';
import LogoSlider from '../components/slider/LogoSlider';
import Layout from '../components/layout/Layout';
import Gallery from '../components/home/Gallery';
import { RingLoader } from 'react-spinners'; // Import the loader

const HomePage = () => {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 800); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {loading ? ( // Show loader while loading
        <div className="flex justify-center items-center h-screen">
          <RingLoader size={120} color="#3700ff" /> {/* Loader color can be adjusted */}
        </div>
      ) : (
        <Layout>
          <div>
            <Slider />
            {/* <NewsHead /> */}
            <Section />
            <Gallery />
            <LogoSlider />
          </div>
        </Layout>
      )}
    </>
  );
};

export default HomePage;