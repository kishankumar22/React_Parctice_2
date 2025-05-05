import React from "react";
import { Link } from "react-router-dom";
import "../socialLinks/social_icons.css"; // Ensure this file is correctly styled

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "youtube",
      url: "https://www.youtube.com",
      iconClass: "bi bi-youtube",
    },
    {
      name: "facebook",
      url: "https://www.facebook.com",
      iconClass: "bi bi-facebook",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com",
      iconClass: "bi bi-instagram",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com",
      iconClass: "bi bi-linkedin",
    },
    {
      name: "twitter",
      url: "https://www.twitter.com",
      iconClass: "bi bi-twitter",
    },
  ];

  return (
    <div className="social-links flex space-x-4">
      {socialLinks.map((link, index) =>
        link.url.startsWith("http") ? (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-icon ${link.name} text-2xl text-gray-600 hover:text-blue-500 transition-colors`}
          >
            <i className={link.iconClass}></i>
          </a>
        ) : (
          <Link
            key={index}
            to={link.url}
            className={`social-icon ${link.name} text-2xl text-gray-600 hover:text-blue-500 transition-colors`}
          >
            <i className={link.iconClass}></i>
          </Link>
        )
      )}
    </div>
  );
};

export default SocialLinks;