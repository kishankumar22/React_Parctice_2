import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import axiosInstance from "../../config";
import LatestPost from "./LatestPost";

const LatestPostPage = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState(null);

  const fetchPost = async (slug) => {
    try {
      const response = await axiosInstance.get(`/post/${slug}`); // Use the slug in the endpoint
      setPost(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
      toast.error('Error fetching post');
    }
  };

  useEffect(() => {
    fetchPost(slug); // Fetch the specific post on component mount
  }, [slug]);

  return (
    <Layout>
      <div className="w-full flex flex-row">
        <div className="w-8/12"> {/* Post content */}
          {post ? (
            <div className="p-4">
              <div className="mb-4 mt-2 bg-gray-300 mx-32 h-6 flex items-center justify-center shadow-md">
                <h1 className="text-sm sm:text-xs md:text-sm lg:text-base text-center font-sans font-medium uppercase text-white bg-blue-900 rounded-md p-1 shadow-lg">
                  {post.post_title}
                </h1>
              </div>
              <div className="mt-4">
                <div dangerouslySetInnerHTML={{ __html: post.post_content }} />
              </div>
            </div>
          ) : (
            <div class="flex items-center justify-center h-full bg-gray-100">
  <div class="bg-white shadow-md rounded-lg p-6 text-center">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Oops!</h2>
    <p class="text-gray-600 mb-4">It seems that the latest post you are looking for does not exist.</p>
    <p class="text-gray-500 mb-6">Please check the URL or return to the homepage.</p>
    <a href="/" class="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
      Go to Homepage
    </a>
  </div>
</div>
          )}
        </div>
        <div className="w-4/12 p-4"> {/* Latest Post */}
          <LatestPost />
        </div>
      </div>
    </Layout>
  );
};

export default LatestPostPage;