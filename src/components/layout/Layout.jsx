import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import LatestNews from '../header/LatestNews';
import { RingLoader } from 'react-spinners';

const Layout = ({ children, disableLoader = false }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (disableLoader) {
      setLoading(false); // Skip loader if disabled
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [disableLoader]);

  return (
    <div>
      <LatestNews />
      <Header />
      <Navbar />

      {!disableLoader && loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <RingLoader color="#3700ff" size={120} />
        </div>
      ) : (
        <div className="content">{children}</div>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
