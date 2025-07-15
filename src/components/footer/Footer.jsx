import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo1 from "../../assets/logo/logo.jpg"; // Replace with your logo
import { FaChevronRight, FaEnvelope, FaMobileAlt, FaPhone } from "react-icons/fa";
import axiosInstance from "../../config";
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const [links, setLinks] = useState([]);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger when footer is in view, with a 100px margin

  // Fetch links when the component mounts
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axiosInstance.get(`/important-links/all`);
        const visibleLinks = response.data
          .filter(link => link.IsVisible)
          .slice(0, 5);
        setLinks(visibleLinks);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };
    fetchLinks();
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-[#283c65] text-white text-xs" ref={ref}>
      <div className="container mx-auto px-6 py-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-[auto,1fr,1fr,1fr,1fr] lg:grid-rows-1 gap-4 md:gap-8 items-start"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          {/* Logo (Fixed Size) - Hidden on Tablet */}
          <motion.div
            className="flex justify-center md:justify-start w-full md:w-24 hidden md:block"
            variants={itemVariants}
          >
            <a href="/">
              <img src={logo1} alt="University Logo" className="w-24 h-24 object-fill rounded-full" />
            </a>
          </motion.div>

          {/* Institute Info */}
          <motion.div variants={itemVariants}>
            <h2 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              JK INSTITUTE OF PHARMACY
            </h2>
            <p className="leading-normal text-[13px]">
              JK Institute Of Pharmacy is a non-profit, quality-conscious and trend-setting institute with a focus on providing equal opportunities for all.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h1 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              QUICK LINKS
            </h1>
            <ul>
              {[
                { name: "Registration", path: "/registration" },
                { name: "About Us", path: "/aboutus" },
                { name: "Gallery", path: "/campus/gallaryPage" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center p-2 text-[13px] hover:text-gray-300 transition duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  whileHover={{ scale: 1.05, color: '#d4af37' }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronRight className="mr-1 text-yellow-400 text-xs" />
                  <Link to={item.path}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="md:col-span-1 md:col-start-2 lg:col-start-4" variants={itemVariants}>
            <h1 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              CONTACT INFORMATION
            </h1>
            <p className="leading-snug text-[13px]">
              10 Km Stone Bulandshahr – Khurja G.T. Road NH-91, Village Agwal Near Railway Crossing, Khurja Distt. Bulandshahr, (U.P.), 203131
            </p>
            <p className="mt-2">
              <span className="flex items-center"><FaPhone className="mr-1 text-yellow-400 text-xs" /><strong>Phone:</strong> +91-5738-244213</span><br />
              <span className="flex items-center"><FaMobileAlt className="mr-1 text-yellow-400 text-xs" /><strong>Mobile:</strong> +91-07351220007</span><br />
              <span className="flex items-center"><FaEnvelope className="mr-1 text-yellow-400 text-xs" /><strong>Email:</strong> info@jkiop.org</span>
            </p>
          </motion.div>

          {/* Important Links */}
          <motion.div className="md:col-span-1 md:col-start-3 lg:col-start-5" variants={itemVariants}>
            <h1 className="font-semibold font-roboto border-gray-400 border-b-4 pb-1 mb-2 text-sm">
              IMPORTANT LINKS
            </h1>
            <ul>
              {links.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center p-2 text-[13px] hover:text-gray-300 transition duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  whileHover={{ scale: 1.05, color: '#d4af37' }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronRight className="mr-1 text-yellow-400 text-xs" />
                  <a href={item.linksUrl} target="_blank" rel="noopener noreferrer">
                    {item.logoName}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 text-gray-700 px-4 md:px-10 py-4 text-xs shadow-inner"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <motion.p variants={itemVariants} className="text-center text-[14px] text-gray-600">
          © <span className="font-semibold">2025</span> — 
          <span className="font-bold text-gray-800 ml-1">JK Institute Of Pharmacy</span>. All rights reserved.
        </motion.p>

        <motion.p variants={itemVariants} className="text-center text-[14px] text-gray-600 mt-2 md:mt-0">
          Developed by <a href="https://www.mezzex.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">Mezzex</a>
        </motion.p>
      </motion.div>

      {/* Inline CSS for Tablet Layout */}
      <style>
        {`
          @media (min-width: 768px) and (max-width: 1024px) {
            .grid {
              grid-template-columns: 1fr 1fr !important;
              grid-template-rows: auto auto !important;
            }
            .flex.justify-center.md\\:justify-start.w-full.md\\:w-24 {
              display: none !important;
            }
            div:nth-child(2) { grid-column: 1 / 2; }
            div:nth-child(3) { grid-column: 2 / 3; }
            div:nth-child(4) { grid-column: 1 / 2; grid-row: 2 / 3; }
            div:nth-child(5) { grid-column: 2 / 3; grid-row: 2 / 3; }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;