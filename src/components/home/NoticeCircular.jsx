import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight, FaPlay, FaPause } from "react-icons/fa";
import axiosInstance from "../../config";

const NotificationCircular = () => {
  const [isScrolling, setIsScrolling] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const scrollRef = useRef(null);
  const scrollSpeed = 1; // Adjust this value for faster/slower scrolling

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance.get('/notifications/all-notification');
        setNotifications([...response.data, ...response.data, ...response.data]); // Duplicate array for smoother infinite scrolling
        console.log(response.data);
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

        // Reset to top when scrolled past the end of the list
        if (scrollRef.current.scrollTop >= scrollRef.current.scrollHeight / 2) {
          scrollRef.current.scrollTop = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll(); // Start scrolling

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, [isScrolling]);

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
      <div className="relative h-96 overflow-hidden" ref={scrollRef}>
        <div>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="h-16 border-yellow-500 rounded bg-white"
            > 
              <div className="text-sky-500 px-12 pb-0.5 text-sm sm:text-xs">
                <b className="font-semibold text-black">Date uploaded:</b> {new Date(notification.created_on).toLocaleDateString('en-GB')}
              </div>
              <div className="flex items-start mb-2 px-4">
                <FaRegArrowAltCircleRight className="w-2 h-2 sm:w-6 sm:h-6 text-red-700 mr-2" />
                <h1 className="text-sm font-bold sm:text-xs lg:text-sm text-black">
                  <a 
                    className="font-semibold flex items-center hover:text-blue-400" 
                    href={notification.notification_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {notification.notification_message}
                  </a>
                </h1>
              </div>
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