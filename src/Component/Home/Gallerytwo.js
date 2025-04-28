import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Gallerytwo = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const itemsPerPage = 8; // Increased to show more items in the masonry layout
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axios.get("https://tesodtechnologyfinal.onrender.com/gallery/Gallery");
        setGalleryItems(response.data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };
    fetchGalleryData();
  }, []);

  const displayedItems = galleryItems.slice(0, itemsPerPage);

  // Function to determine card size class based on index for varied sizes
  const getCardSizeClass = (index) => {
    // Create a pattern of different sized cards
    const pattern = index % 8;
    switch (pattern) {
      case 0:
        return "row-span-2 col-span-1"; // Tall card
      case 3:
        return "row-span-1 col-span-2"; // Wide card
      case 7:
        return "row-span-2 col-span-2"; // Large card
      default:
        return "row-span-1 col-span-1"; // Standard card
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Gallery Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Latest Gallery
      </h2>

      {/* Desktop View - Masonry Grid Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 auto-rows-[200px] gap-4">
          {displayedItems.map((item, index) => (
            <div
              key={index}
              className={`${getCardSizeClass(index)} group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay with title on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="h-0.5 w-0 bg-white group-hover:w-16 transition-all duration-500"></div>
              </div>
              
              {/* Click overlay for the entire card */}
              <div 
                onClick={() => navigate(`/gallery/${item.id || index}`)} 
                className="absolute inset-0 cursor-pointer"
                aria-label={`View ${item.title} details`}
              />
            </div>
          ))}
        </div>

        {/* View More Button */}
        {galleryItems.length > itemsPerPage && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate("/Gallery")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
            >
              View All Gallery
            </button>
          </div>
        )}
      </div>

      {/* Mobile View - Enhanced Swiper */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides={true}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="pb-12" // Add padding for pagination bullets
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div 
                className="relative group overflow-hidden rounded-xl shadow-lg aspect-[4/5]"
                onClick={() => navigate(`/gallery/${item.id || index}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay with title on hover/tap */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-0 bg-white group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Mobile View More Button */}
        {galleryItems.length > 4 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate("/Gallery")}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-full font-medium shadow-md"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallerytwo;