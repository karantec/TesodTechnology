import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogCarousel = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://backend.tesodtechnology.com/blog/get"
        );
        const apiPosts = response.data.map((post, index) => ({
          id: post._id || index,
          title: post.title,
          image: post.image,
          description: post.description,
          author: post.author || "Unknown",
          authorAvatar: "https://i.pravatar.cc/150?img=" + ((index % 70) + 1),
          date: new Date(post.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          category: "General", // Default category
          readTime: "5 min read", // Default read time
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

  const goToPrev = () => {
    if (isTransitioning || filteredPosts.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? filteredPosts.length - 1 : prev - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning || filteredPosts.length === 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === filteredPosts.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Latest Blog Posts
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest trends and insights in web development,
          design, and technology.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentIndex(0);
            }}
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

      {filteredPosts.length > 0 ? (
        <div className="relative">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="relative h-full overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <div
              className="flex w-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredPosts.map((post) => (
                <div key={post.id} className="min-w-full">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Image Section */}
                    <div className="md:w-1/2 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-6">{post.description}</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                              <img
                                src={post.authorAvatar}
                                alt={post.author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <span className="block text-sm font-medium text-gray-700">
                                {post.author}
                              </span>
                              <span className="block text-xs text-gray-500">
                                {post.date}
                              </span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            {post.readTime}
                          </div>
                        </div>

                        <button
                          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                          onClick={() => navigate(`/blog/${post.id}`)}
                        >
                          Read Full Article
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-2"
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
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {filteredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl shadow">
          <p className="text-gray-600">No posts found in this category.</p>
        </div>
      )}

      {/* View All Posts Button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => navigate("/blog")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          View All Posts
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;
