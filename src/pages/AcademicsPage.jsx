import { useState, useEffect } from 'react';
import axiosInstance from '../config';
import Marquee from "react-fast-marquee";
import { FaBell } from "react-icons/fa";

const LatestNews = () => {
  const [notifications, setNotifications] = useState([]); // State to hold notifications

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance.get('/notifications/all-notification');
        setNotifications(response.data); // Assuming the response data is an array of notifications
        console.log(response.data); // Log notifications to the console
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <div className="h-full w-full overflow-hidden">
        <Marquee
          behavior=""
          direction="up"
          pauseOnHover
          className="bg-white text-center flex flex-row w-full h-full"
          style={{ overflow: 'hidden' }}
        >
          {/* Display Notifications Section */}
          <ul className="flex flex-col items-start gap-2 text-sm md:text-base w-full">
            {notifications.map((notification) => (
              <li
                key={notification.id} // Use notification.id instead of notifications.id
                className="flex flex-col p-4 border border-gray-700 rounded-md hover:bg-gray-800 transition-all duration-300 ease-in-out w-full"
                style={{
                  backgroundColor: "#1e293b",
                  whiteSpace: 'nowrap',  // Prevent text overflow
                }}
              >
                <a 
                  className="text-white font-medium flex items-center hover:text-blue-400" 
                  href={notification.notification_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaBell className="text-yellow-400 mr-2" /> {/* Notification Icon */}
                  {notification.notification_message}
                </a>
                <span className="text-gray-400 text-xs mt-1 font-light">
                  <b>Date: </b>{new Date(notification.created_on).toLocaleDateString('en-GB')}
                </span> {/* Display Date Below Message */}
              </li>
            ))}
          </ul>
          {/* Display Notifications Section End */}
        </Marquee>
      </div>
    </>
  );
};

export default LatestNews;