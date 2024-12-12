import React from 'react';
import "../socialLinks/social_icons.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
      <i class="bi bi-youtube"></i>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
      <i class="bi bi-facebook"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
      <i class="bi bi-instagram"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
      <i class="bi bi-linkedin"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
      <i class="bi bi-twitter-x"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
