import React, { useState, useEffect } from 'react';
import axiosInstance from '../../config';
import Layout from'../layout/Layout'

const Gallery = () => {

  const [galleries, setGalleries] = useState([]);

  const fetchGalleries = async () => {
    try {
      const res = await axiosInstance.get('/gallery');
      setGalleries(res.data);
    } catch (error) {
      console.error(error);
      toast.error('Error fetching galleries');
    }
  };

      const clickGallery=()=>{
        alert("thanks forn viewing")
      }
    
      useEffect(() => {
        fetchGalleries();
      }, []);
  return (
    <>
    <Layout>    
    <h1 className=' p-2 bg-gray-200 text-4xl text-center'>Gallery</h1>
    <div className="grid grid-cols-5 ">
  {galleries.map((gallery) => (
    <div key={gallery.id} className="text-center p-4">
      {/* Image */}
      <img
        src={gallery.galleryUrl}
        alt={gallery.galleryName}
        className="w-64 h-44 object-fit rounded-md" // Use object-cover for better image fitting
        onClick={clickGallery}
      />
    </div>
  ))}
</div></Layout>
    </>
  )
}

export default Gallery
