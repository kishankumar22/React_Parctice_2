// src/components/NotificationCircular.jsx

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight, FaPlay, FaPause } from "react-icons/fa";
import { fetchNotifications } from "./NotificationDataLoader";

const NotificationCircular = () => {
  const [isScrolling, setIsScrolling] = useState(true); // Auto-scroll state
  const [notifications, setNotifications] = useState([]); // Notifications array
  const scrollRef = useRef(null); // Ref for scrolling container

  useEffect(() => {
    const loadNotifications = async () => {
      const data = await fetchNotifications();
      setNotifications([...data, ...data]); // Duplicate array for infinite scrolling
    };
    loadNotifications();
  }, []);

  useEffect(() => {
    let scrollInterval;

    if (isScrolling && scrollRef.current) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop += 1; // Slowly increase scrollTop
          
          // Reset to top when scrolled past halfway point
          if (
            scrollRef.current.scrollTop >=
            scrollRef.current.scrollHeight / 2
          ) {
            scrollRef.current.scrollTop = 0;
          }
        }
      }, 50); // Slow upward movement
    }

    return () => clearInterval(scrollInterval);
  }, [isScrolling, notifications.length]);

  const handlePause = () => setIsScrolling(false);
  const handlePlay = () => setIsScrolling(true);

  return (
    <div className="bg-white h-heightsec ">
      {/* Header */}
      <div className="flex items-center h-10 w-full bg-white">
        <h2 className="text-sm p-1 sm:text-lg md:text-[1.25rem] flex h-8 w-96 mb-2 font-bold bg-blue-200">
          Notices & Circulars
        </h2>
        <div className="justify-start border-t-4 w-full border-blue-800 mb-2"></div>
      </div>

      {/* Notification Slider */}
      <div
        className="relative h-96 overflow-hidden"
        ref={scrollRef}
       
      >
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="h-24 border-yellow-500 rounded mb-4 p-2 bg-white"
            >
              <div className="text-sky-500 font-bold px-12 py-2 text-sm sm:text-xs">
                Date uploaded: {notification.dateUploaded}
              </div>
              <div className="flex items-start px-4 -mb-2  ">
                <FaRegArrowAltCircleRight className="w-5 h-5 sm:w-6 sm:h-6 text-red-700 mr-2" />
                <h1 className="text-sm font-bold sm:text-xs lg:text-sm text-black">
                  {notification.title}
                </h1>
              </div>
              <ul className="text-xs px-12 mt-2 sm:text-xs text-sky-800 flex flex-wrap  pb-2 ">
                <li>
                  <b>Size:</b> {notification.size} |
                </li>
                <li>
                  <b>Language:</b> {notification.language} |
                </li>
                <li>
                  <b>Type:</b> {notification.type}
                </li>
              </ul>
              <hr className="border-b-1 border-black" />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-blue-900 p-2 flex justify-between items-center">
        <button className="text-white border-2 border-white text-sm sm:text-base py-1 px-4 shadow-md hover:bg-blue-200 hover:border-blue-200 hover:text-black">
          <Link to="/allnotification">View All Notices / Circulars</Link>
        </button>
        <button
          className="bg-yellow-600 text-white border-2 border-white p-2 shadow-md hover:bg-blue-200 hover:border-blue-200 hover:text-black"
          onClick={() => (isScrolling ? handlePause() : handlePlay())}
        >
          {isScrolling ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default NotificationCircular;
