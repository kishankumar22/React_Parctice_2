import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight, FaPlay, FaPause } from "react-icons/fa";

const NotificationCircular = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const scrollRef = useRef(null);
  const notificationsJSX = [];

  const notifications = [
    {
      title: "विकसित भारत युवा नेता संवाद (क्विज चैलेंज) में अधिक से अधिक युवाओं को सहभागिता कराए जाने के सम्बंध में।",
      size: "155 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "19-Nov-2024",
    },
    {
      title: "विकसित भारत युवा नेता संवाद (क्विज चैलेंज) में अधिक से अधिक युवाओं को सहभागिता कराए जाने के सम्बंध में।",
      size: "139 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "22-Nov-2024",
    },
    {
      title: "एल-एल0बी0, बी0ए0एल-एल0बी0 विषम सेमेस्टर के अर्ह छात्रों की परीक्षाओं हेतु समय-सारणी",
      size: "288 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "29-Nov-2024",
    },
    {
      title: "एल-एल0बी0, बी0ए0एल-एल0बी0 विषम सेमेस्टर के अर्ह छात्रों की परीक्षाओं हेतु समय-सारणीबी0टेक0 -सारणी।",
      size: "288 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "29-Nov-2024",
    },
    {
      title: "विश्वविद्यालय एवं सम्बद्ध महाविद्यालयों के सत्र 2024-25 के विषम सेमेस्टर स्नातक/ स्नातकोत्तर कक्षाओं ध में।",
      size: "288 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "29-Nov-2024",
    },
    {
      title: "Notification 6",
      size: "288 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "29-Nov-2024",
    },
    {
      title: "एल-एल0बी0, बी0ए0एल-एल0बी0 विषम सेमेस्टर के अर्ह छात्रों की परीक्षाओं हेतु समय-सारणी",
      size: "288 KB",
      language: "Hindi",
      type: "General",
      dateUploaded: "29-Nov-2024",
    },
  ];

  // Create JSX for the notifications to render
  notifications.forEach((notification, index) => {
    notificationsJSX.push(
      <div key={index} className="border-yellow-500 transition-shadow rounded mb-4 p-2">
        <div className="text-black px-12 text-sm sm:text-xs font-medium">
          Date uploaded: {notification.dateUploaded}
        </div>
        <div className="flex items-start px-4 -mb-2 ">
          <FaRegArrowAltCircleRight className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-2" />
          <h1 className="text-sm font-bold sm:text-xs lg:text-sm text-kesariya">{notification.title}</h1>
        </div>
        <ul className="text-xs px-12 mt-2 sm:text-xs text-gray-500 flex flex-wrap gap-2 pb-1">
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
    );
  });

  useEffect(() => {
    // Start scrolling after 3 seconds delay
    const timeoutId = setTimeout(() => {
      setIsScrolling(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (isScrolling) {
      const intervalId = setInterval(() => {
        setCurrentNotificationIndex((prevIndex) => {
          // Move to the next notification
          const nextIndex = prevIndex + 1;
          // If we reach the end, loop back to the start
          return nextIndex >= notifications.length ? 0 : nextIndex;
        });
      }, 2000); // Change notification every 3 seconds

      return () => clearInterval(intervalId);
    }
  }, [isScrolling]);

  // Function to handle pause
  const handlePause = () => {
    setIsScrolling(false);
  };

  // Function to handle play
  const handlePlay = () => {
    setIsScrolling(true);
  };

  return (
    <div className="bg-yellow h-heightsec">
      <div className="flex items-center h-10 w-full bg-white">
        <h2 className="text-2xl flex h-8 w-96 mb-2 font-bold bg-gray-200">Notices & Circulars</h2>
        <div className="justify-start border-t-4 w-full border-yellow"></div>
      </div>

      {/* notification slide here */}
      <div className="relative h-96 overflow-hidden" ref={scrollRef}>
        <div
          className="absolute w-full space-y-4"
          style={{
            transform: `translateY(-${currentNotificationIndex * 26}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {notificationsJSX.slice(currentNotificationIndex, currentNotificationIndex + 4)}
        </div>
      </div>
      {/* notification slide end */}

      {/* button section start here */}
      <div className="bg-kesariya p-2 flex justify-between items-center ">
        <button className="text-white border-2 border-white text-sm sm:text-base py-1 px-4 shadow-md hover:bg-amber-400 hover:border-amber-400">
          <Link to ="/allnotification">View All Notices / Circulars
          </Link> 
        </button>
        <button
          className="bg-yellow-600 text-white border-2 border-white p-2 shadow-md hover:bg-amber-400 hover:border-amber-400"
          onClick={() => (isScrolling ? handlePause() : handlePlay())}
        >
          {isScrolling ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      {/* button section end here */}
    </div>
  );
};

export default NotificationCircular;
