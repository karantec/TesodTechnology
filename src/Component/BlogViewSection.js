import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogViewSection() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await axios.get(
          `https://bbc-newsbackend-2yyf.onrender.com/api/blog/blogs/${id}`
        );
        
        setBlog(data.data.message);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlogs();
  }, [id]);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <img
          src={blog.thumbnailUrl}
          alt={blog.title}
          className="w-full max-w-4xl h-80 object-cover rounded-lg shadow-lg mb-6"
        />
        <p className="text-gray-600 text-lg mb-2 max-w-2xl text-center">
          {blog.content}
        </p>
        <p className="text-gray-500 text-sm mb-2">By {blog.author}</p>
        <p className="text-gray-500 text-sm mb-4">Category: {blog.category}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags?.length > 0  &&  blog.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          { blog.BlogImages?.length > 0 && blog.BlogImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`blog ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-6">
          Published on: {new Date(blog.publishedDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default BlogViewSection;
