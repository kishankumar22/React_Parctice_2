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
            <div>Loading...</div>
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