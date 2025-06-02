import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight, FaPlay, FaPause } from "react-icons/fa";
import axiosInstance from "../../config";

const NotificationCircular = () => {
  const [isScrolling, setIsScrolling] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const scrollRef = useRef(null);
  const scrollSpeed = 1;

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance.get('/notifications/all-notification');
        setNotifications([...response.data, ...response.data, ...response.data]);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      if (isScrolling && scrollRef.current) {
        scrollRef.current.scrollTop += scrollSpeed;
        if (scrollRef.current.scrollTop >= scrollRef.current.scrollHeight / 2) {
          scrollRef.current.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isScrolling]);

  const handlePause = () => setIsScrolling(false);
  const handlePlay = () => setIsScrolling(true);

  return (
    <div className="bg-white h-heightsec flex flex-col">
      {/* Header */}
      <div className="flex items-center h-10 w-full bg-white flex-shrink-0">
        <h2 className="text-sm p-1 sm:text-lg md:text-xl flex h-8 w-full mb-2 font-bold bg-blue-200">
          Notices & Circulars
        </h2>
        <div className="justify-start border-t-4 w-full border-blue-800 mb-2"></div>
      </div>

      {/* Notification Slider */}
      <div
        className="relative flex-1 overflow-y-auto"
        ref={scrollRef}
        onMouseEnter={handlePause}
        onMouseLeave={handlePlay}
      >
        <div>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="border-yellow-500 rounded bg-white mb-2 p-2"
            >
              <div className="text-sky-500 pb-0.5 text-xs sm:text-sm">
                <b className="font-normal ml-6 md:ml-8 text-black">Date uploaded:</b>{" "}
                {new Date(notification.created_on).toLocaleDateString('en-GB')}
              </div>
              <div className="flex items-start">
                <FaRegArrowAltCircleRight className="w-4 h-4 sm:w-6 sm:h-6 text-red-700 mr-2" />
                <div className="flex-1">
                  <h1 className="text-xs font-bold sm:text-sm lg:text-base text-black">
                    <a
                      className="font-normal flex items-center hover:text-blue-400"
                      href={notification.notification_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="block overflow-hidden text-ellipsis whitespace-normal">
                        {notification.notification_message}
                      </span>
                    </a>
                  </h1>
                </div>
              </div>
              <hr className="border-b-1 border-black mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-blue-900 p-2 flex justify-between items-center flex-shrink-0">
        <button className="text-white border-2 border-white text-xs sm:text-sm py-1 px-2 sm:px-4 shadow-md hover:bg-blue-200 hover:border-blue-200 hover:text-black">
          <Link to="/notificationlist">View All Notices / Circulars</Link>
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