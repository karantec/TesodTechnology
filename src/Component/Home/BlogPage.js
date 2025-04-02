import React, { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    image: "blog1.jpg",
    description: "How artificial intelligence is shaping the future of web development and user experience.",
    author: "John Doe",
    authorAvatar: "avatar1.jpg",
    date: "March 28, 2025",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Understanding Tailwind CSS: A Utility-First Approach",
    image: "blog2.jpg",
    description: "A deep dive into Tailwind CSS and how it simplifies frontend styling.",
    author: "Jane Smith",
    authorAvatar: "avatar2.jpg",
    date: "March 20, 2025",
    category: "Design",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Top 10 JavaScript Frameworks to Learn in 2025",
    image: "blog3.jpg",
    description: "An overview of the most popular JavaScript frameworks and their use cases.",
    author: "Alice Johnson",
    authorAvatar: "avatar3.jpg",
    date: "March 15, 2025",
    category: "Development",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Responsive Design Strategies for Modern Websites",
    image: "blog4.jpg",
    description: "Best practices and techniques for creating responsive websites that work on all devices.",
    author: "Robert Chen",
    authorAvatar: "avatar4.jpg",
    date: "March 10, 2025",
    category: "Design",
    readTime: "7 min read"
  }
];

const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Latest Blog Posts</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest trends and insights in web development, design, and technology.
        </p>
      </div>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
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
              
              <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{post.author}</span>
                </div>
                <div className="text-xs text-gray-500">{post.readTime}</div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.date}</span>
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors transform hover:-translate-y-1 duration-300 flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Newsletter Subscription */}
      
    </div>
  );
};

export default BlogPage;