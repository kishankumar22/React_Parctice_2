import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axiosInstance from '../../config';
import Marquee from "react-fast-marquee";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaGooglePlusG, FaYoutube, FaBell } from "react-icons/fa";

const LatestNews = () => {
  const [notifications, setNotifications] = useState([]); // State to hold notifications
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance.get('/notifications/all-notification');
        setNotifications(response.data); // Assuming the response data is an array of notifications
        // console.log(response.data); // Log notifications to the console
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleNotificationClick = (url) => {
    if (url.endsWith('.pdf')) {
      // If the URL is a PDF, navigate to the PdfPage
      navigate('/pdfpage', { state: { pdfUrl: url } });
    } else {
      // Otherwise, open the URL in a new tab
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div className="bg-black flex justify-center flex-row md:flex-row h-auto md:h-8">
        {/* Latest News Header */}
        <h1 className="bg-blue-900 block min-w-28 h-8 w-32 md:w-28 md:text-center p-1 md:p-1 text-white text-left font-medium">
  Latest News
</h1>

        {/* Scrolling News */}
        <div className="h-8 w-full bg-[#39515a] md:h-8 overflow-hidden">
          <Marquee
            behavior=""
            direction="left"
            pauseOnHover
            className="bg-[#39515a] h-full"
            style={{ overflow: 'hidden' }}
          >
            {/* Display Notifications Section */}
            <ul className="flex items-center gap-6 md:gap-10 text-white text-sm md:text-base">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className="p-2 block border-b text-black-2 border-gray-200 hover:b-gray-800 transition-all duration-300 ease-in-out"
                  style={{
                    padding: "10px 15px",
                    backgroundColor: "#39515a",
                    borderRadius: "5px",
                    marginRight: "20px",
                    whiteSpace: 'nowrap',
                  }}
                >
                  <a 
                    className="text-white font-medium flex items-center hover:text-blue-400" 
                    onClick={() => handleNotificationClick(notification.notification_url)} // Use onClick instead of href
                  >
                    <FaBell className="text-blue-600 mr-2" />
                    {notification.notification_message}
                  </a>
                </li>
              ))}
            </ul>
            {/* Display Notifications Section End */}
          </Marquee>
        </div>

        {/* Social Media Links */}
        <div className="hidden md:flex justify-center md:justify-end mt-2 md:mt-0">
        <ul className="flex">
  {/* Social Media Icons */}
  <li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-500">
        <FaFacebookF size={20} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white transition-transform duration-500 group-hover:translate-y-0 -translate-y-full">
        <FaFacebookF size={20} />
      </div>
    </a>
  </li>
  <li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
    <a href="https://www.in.com" target="_blank" rel="noopener noreferrer">
      <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-500">
        <FaTwitter size={20} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white transition-transform duration-500 group-hover:translate-y-0 -translate-y-full">
        <FaTwitter size={20} />
      </div>
    </a>
  </li>
<li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-500">
      <FaInstagram size={20} />
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-pink-600 text-white transition-transform duration-500 group-hover:translate-y-0 -translate-y-full">
      <FaInstagram size={20} />
    </div>
  </a>
</li>
 
  <li className="relative w-8 h-8 overflow-hidden group border border-gray-200">
    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
      <div className="absolute inset-0 flex items-center justify-center bg-white text-black group-hover:translate-y-full transition-transform duration-500">
        <FaPinterestP size={20} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-blue-600 text-white transition-transform duration-500 group-hover:translate-y-0 -translate-y-full">
        <FaPinterestP size={20} />
      </div>
    </a>
  </li>
  {/* Add other social media icons similarly */}
</ul>
        </div>
      </div>
   
    </>
  );
};

export default LatestNews;  