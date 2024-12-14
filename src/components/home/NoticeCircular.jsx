import React, { useState, useRef, useEffect } from "react";
import { FaRegArrowAltCircleRight, FaPlay, FaPause } from "react-icons/fa";

const NotificationCircular = () => {
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const notificationsJSX = [];

  const notifications = [
    {
      title:
        "विश्वविद्यालय एवं सम्बद्ध पूरित करने हेतु तिथि को 13/12/2024 तक विस्तारित किये जाने के सम्बन्ध में।",
      size: "149 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "29-Nov-2024",
    },
    {
      title: "बी0ए0जे0एम0सी0 पंचम सेमेस्टर की परीक्षाओं हेतु समय-सारणी। ",
      size: "288 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "29-Nov-2024",
    },
    {
      title:
        "शैक्षणिक सत्र 2024-25 हेतु विश्वविद्यालय ",
      size: "288 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "29-Nov-2024",
    },
  ];

  notifications.forEach((notification, index) => {
    notificationsJSX.push(
      <div
        key={index}
        className="bg-yellow shadow-lg border-yellow-500 hover:shadow-xl transition-shadow rounded-md mb-4"
      >
        <div className="text-gray-600 px-11 text-sm sm:text-base font-medium mb-1">
          Date uploaded: {notification.dateUploaded}
        </div>

        <div className="flex items-start px-4 ">
          <FaRegArrowAltCircleRight className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-800 mr-2" />
          <h6 className="text-sm sm:text-base lg:text-lg font-semibold text-red-600">
            {notification.title}
          </h6>
        </div>

        <ul className="text-xs px-12 mt-2 sm:text-sm text-gray-700 flex flex-wrap gap-2 pb-2">
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

        <hr className="border-b-2 border-gray-400 my-4" />
      </div>
    );
  });

  useEffect(() => {
    if (isScrolling && scrollRef.current) {
      const scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop += 1;
          if (scrollRef.current.scrollTop >= scrollRef.current.scrollHeight) {
            scrollRef.current.scrollTop = 0;
          }
        }
      }, 30);

      return () => clearInterval(scrollInterval);
    }
  }, [isScrolling]);

  const handlePause = () => {
    setIsScrolling(false);
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollTop);
    }
  };

  const handlePlay = () => {
    setIsScrolling(true);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollPosition;
    }
  };

  return (
    <div className="h-5/6">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-red-600">
        Notices & Circulars
      </h2>

      <div className="relative h-heightsec overflow-hidden bg-yellow-50" ref={scrollRef}>
        <div className={`absolute w-full ${isScrolling ? "animate-marquee" : ""} space-y-4`}>
          {notificationsJSX}
        </div>
      </div>

      <div className="bg-kesariya p-2 flex justify-between items-center mt-4">
        <button className="text-white border-2 border-white text-sm sm:text-base py-1 px-4 shadow-md hover:bg-amber-400 hover:border-yellow">
          View All Notices / Circulars
        </button>
        <button
          className="bg-yellow-600 text-white border-2 border-white p-2 shadow-md hover:bg-yellow-700"
          onClick={() => (isScrolling ? handlePause() : handlePlay())}
        >
          {isScrolling ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default NotificationCircular;
