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
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <RingLoader size={120} color="#3700ff" />
        </div>
      ) : (
        <Layout disableLoader={true}>  {/* Pass prop to disable Layout's loader */}
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
