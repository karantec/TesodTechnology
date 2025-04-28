import { useEffect, useState } from "react";
import axios from "axios";

const PremiumGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://tesodtechnologyfinal.onrender.com/gallery/Gallery");
        setGalleryItems(response.data);
        setFilteredItems(response.data);
        
        // Extract unique categories from data
        const uniqueCategories = ["All", ...new Set(response.data.map(item => item.category).filter(Boolean))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        setError("Failed to load gallery items. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchGalleryData();
  }, []);

  // Filter gallery items by category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(galleryItems);
    } else {
      const filtered = galleryItems.filter(item => item.category === activeCategory);
      setFilteredItems(filtered);
    }
  }, [activeCategory, galleryItems]);

  // Toggle full-screen preview
  const togglePreview = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  // Define size classes for different gallery items
  const getSizeClass = (index) => {
    // Create a pattern of different sized items
    const pattern = index % 10;
    
    switch (pattern) {
      case 0: // Featured large item (spans 2 rows and 2 columns)
        return "row-span-2 col-span-2";
      case 3:
      case 7: // Tall items (span 2 rows)
        return "row-span-2";
      case 2:
      case 8: // Wide items (span 2 columns)
        return "col-span-2";
      default: // Regular sized items
        return "";
    }
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-50 rounded-2xl">
      {/* Gallery Heading with subtle design elements */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 inline-block relative">
          Curated Collection
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-3"></div>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          A premium selection of our finest visual experiences
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
        </div>
      ) : error ? (
        <div className="text-center py-16">
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-xl font-medium text-gray-800">{error}</p>
          <button 
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-xl font-medium text-gray-800">No items found in this category</p>
          <button 
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={() => setActiveCategory("All")}
          >
            View All Items
          </button>
        </div>
      ) : (
        <>
          {/* Classic Masonry Gallery Grid with animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
            {filteredItems.map((item, index) => (
              <div 
                key={item._id || index}
                className={`relative overflow-hidden rounded-lg transform transition-all duration-500 hover:shadow-xl ${getSizeClass(index)} group cursor-pointer animate-fadeIn`}
                onClick={() => togglePreview(item)}
                style={{animationDelay: `${index * 0.05}s`}}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover overlay with title and category */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-xl md:text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  
                  <div className="w-12 h-0.5 bg-white mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  {item.category && (
                    <span className="inline-block mt-2 px-3 py-1 bg-black/40 rounded-full text-white text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {item.category}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Full-screen preview modal with improved UI */}
          {selectedItem && (
            <div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn" 
              onClick={() => setSelectedItem(null)}
            >
              <div 
                className="relative max-w-5xl w-full max-h-full bg-black/30 rounded-xl backdrop-blur-sm p-2" 
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="max-h-[85vh] max-w-full object-contain rounded-lg mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
                  <h3 className="text-white text-2xl font-semibold">{selectedItem.title}</h3>
                  {selectedItem.category && (
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                      {selectedItem.category}
                    </span>
                  )}
                  {selectedItem.description && (
                    <p className="text-white/80 mt-2">{selectedItem.description}</p>
                  )}
                </div>
                <button 
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition-colors"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Close preview"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Navigation buttons */}
                <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 pointer-events-none">
                  <button 
                    className="bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition-colors pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = filteredItems.findIndex(item => item === selectedItem);
                      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                      setSelectedItem(filteredItems[prevIndex]);
                    }}
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    className="bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition-colors pointer-events-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = filteredItems.findIndex(item => item === selectedItem);
                      const nextIndex = (currentIndex + 1) % filteredItems.length;
                      setSelectedItem(filteredItems[nextIndex]);
                    }}
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Stats with improved design */}
          <div className="mt-16 flex justify-center flex-wrap gap-6 md:gap-12 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{filteredItems.length}</p>
              <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">Items Displayed</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{categories.length - 1}</p>
              <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">Categories</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
              <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">2025</p>
              <p className="text-gray-500 text-sm uppercase tracking-wider mt-1">Latest Collection</p>
            </div>
          </div>
        </>
      )}
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PremiumGallery;