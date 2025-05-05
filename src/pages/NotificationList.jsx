import React, { useState, useEffect } from "react";
import axiosInstance from "../config";
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaBell, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import Layout from "../components/layout/Layout";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications from the API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosInstance.get('/notifications/all-notification');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <>
    <Layout>
   
    <div className="bg-gray-100 min-h-screen p-3">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between bg-white p-2 rounded-lg shadow-md">
        <h2 className="text-base font-semibold text-gray-800 flex items-center">
          <FaBell className="mr-2 text-yellow-500" /> Notices & Circulars
        </h2>
        {/* <span className="h-1 w-20 bg-blue-600 rounded"></span> */}
        <button className="bg-blue-300 p-1 rounded">
        <Link to="/">Go To Home Page</Link>
        </button>

      </div>
       

      {/* Centered Notification Table */}
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-3xl">
          <table className="w-full text-xs text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-2 px-3 font-semibold">#</th>
                <th className="py-2 px-3 font-semibold">Date</th>
                <th className="py-2 px-3 font-semibold">Message</th>
                <th className="py-2 px-3 font-semibold">Link</th>
              </tr>
            </thead>
            <tbody>
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <tr
                    key={notification.id}
                    className="border-b border-gray-200 hover:bg-gray-100 transition duration-150"
                  >
                    <td className="py-2 px-3 text-gray-700">{index + 1}</td>
                    <td className="py-2 px-3 text-gray-700 flex items-center">
                      <FaCalendarAlt className="mr-1 text-gray-500" />
                      {new Date(notification.created_on).toLocaleDateString('en-GB')}
                    </td>
                    <td className="py-2 px-3 text-gray-800 truncate max-w-[200px]">
                      {notification.notification_message}
                    </td>
                    <td className="py-2 px-3">
                      {notification.notification_url ? (
                        <a
                          href={notification.notification_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 flex items-center"
                        >
                          <FaExternalLinkAlt className="mr-1" /> Open
                        </a>
                      ) : (
                        <span className="text-gray-500">N/A</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-3 px-3 text-center text-gray-600">
                    No notifications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </Layout>
    </>
  );
};

export default NotificationList;