import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://tesodtechnologyfinal.onrender.com/blog/get"
        );
        const apiPosts = response.data.map((post, index) => ({
          id: post._id || index,
          title: post.title,
          image: post.image,
          description: post.description,
          author: post.author || "Unknown",
          authorAvatar: "https://i.pravatar.cc/150?img=" + ((index % 70) + 1), // random avatar
          date: new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          category: "General", // API doesn't provide category, defaulting
          readTime: "5 min read", // default value
        }));
        setPosts(apiPosts);
      } catch (error) {
        console.error("Failed to fetch blog posts", error);
      }
    };

    fetchPosts();
  }, []);

  const categories = ["All", ...new Set(posts.map((post) => post.category))];

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-purple-800 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl">
            Insights, tutorials, and the latest trends in technology
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 mt-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full h-56 object-cover transition-transform duration-500 ${
                    hoveredCard === post.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                      <img
                        src={post.authorAvatar}
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {post.author}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{post.readTime}</div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors transform hover:-translate-y-1 duration-300 flex items-center">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
