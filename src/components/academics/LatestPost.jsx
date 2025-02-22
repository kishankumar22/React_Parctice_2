import React, { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const LatestPost = () => {
  const posts = [
    { id: 1, title: "Post 1: Introduction to Pharmacy" },
    { id: 2, title: "Post 2: Latest Trends in Pharmacy" },
    { id: 3, title: "Post 3: Career Opportunities in Pharmacy" },
    { id: 4, title: "Post 4: Importance of Pharmacovigilance" },
    { id: 5, title: "Post 5: Innovations in Drug Development" },
  ];

  const [isPlaying, setIsPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);
  const marqueeRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = isPlaying ? "running" : "paused";
    }
  }, [isPlaying]);

  return (
    <>
      {/* Header */}
      <div className="mb-4 mt-2 bg-gray-200 h-8 flex items-center justify-center shadow-md">
  <h1 className="text-lg sm:text-sm md:text-xl text-center font-bold uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    Latest Post
  </h1>
</div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden h-96">
        <div
          ref={marqueeRef}
          className="absolute inset-0 flex flex-col animate-marquee"
          onMouseEnter={() => {
            marqueeRef.current.style.animationPlayState = "paused";
            setHovering(true);
          }}
          onMouseLeave={() => {
            if (isPlaying) {
              marqueeRef.current.style.animationPlayState = "running";
            }
            setHovering(false);
          }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-2 text-center bg-white  transition-all duration-300 transform hover:scale-105 hover:border-b-2 hover:text-blue-600 cursor-pointer"
            >
              <a href="/">{post.title}</a>
              
            </div>
          ))}
        </div>
      </div>

      {/* Play/Pause Button */}
      <div className="p-1 text-center flex justify-between absolute top-64">
        <button
          onClick={togglePlayPause}
          className="p-2 bg-blue-600  text-white rounded-full hover:bg-blue-500 transition-all duration-300"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </>
  );
};

export default LatestPost;
