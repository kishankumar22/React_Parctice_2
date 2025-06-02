import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import axiosInstance from "../../config";


const LatestPost = () => {
  const [posts, setPosts] = useState([]); // Initialize posts state
  const [isPlaying, setIsPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);
  const marqueeRef = useRef(null);

  

  const fetchPosts = async () => {
    try {
      const response = await axiosInstance.get('/all-posts');
      setPosts(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Error fetching posts');
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts on component mount
  }, []);

  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = isPlaying ? "running" : "paused";
    }
  }, [isPlaying]);

  return (
    <>
    <div className="h-96">
      {/* Header */}
      <div className="mb-4 mt-2 mx-8 sm:mx-44 md:mx-6 bg-gray-300 h-6 flex items-center justify-center shadow-md">
  <h1 className="text-[0.8rem]  sm:text-xs md:text-sm lg:text-[1.125rem] text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-2 shadow-lg">
    Latest post
  </h1>
</div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden  h-72 text-justify">
        <div
          ref={marqueeRef}
          className="absolute inset-0  h-64 flex flex-col animate-marquee"
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
          {posts.filter(post => post.isVisible).map((post) => ( // Filter for visible posts
            <div
              key={post.post_id} // Use post_id as the key
              className="p-2 mx-4 text-justify bg-white transition-all duration-300 transform hover:scale-105 hover:border-b-2 hover:text-blue-600 cursor-pointer"
            >
              <Link to={`/post/${post.post_slug}`}>{post.post_title}</Link>
            </div>
          ))}
        </div>
      </div>

    </div>
    </>
  );
};

export default LatestPost;