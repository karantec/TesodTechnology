// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/swiper-bundle.css";
// import { useState } from "react";
// const galleryItems = [
//   {
//     title: "Corona Awareness Campaign",
//     image: "image1.jpg",
//     description:
//       "A campaign to spread awareness about coronavirus and its prevention.",
//   },
//   {
//     title: "CodesGesture 2.0 Opening",
//     image: "image2.jpg",
//     description:
//       "The grand opening of CodesGesture 2.0 with various dignitaries.",
//   },
//   {
//     title: "Latest Gadgets",
//     image: "image3.jpg",
//     description: "Explore the latest tech gadgets available in the market.",
//   },
//   {
//     title: "Branding",
//     image: "image4.jpg",
//     description: "Creative branding ideas and inspirations for your business.",
//   },
//   {
//     title: "5 Best Audio Players for your Android Device",
//     image: "image5.jpg",
//     description:
//       "A curated list of top audio players to enhance your music experience.",
//   },
//   {
//     title: "Facebook Creatives",
//     image: "image6.jpg",
//     description:
//       "Innovative and eye-catching Facebook creatives for marketing.",
//   },
//   {
//     title: "Digital Udaan",
//     image: "image7.jpg",
//     description: "A digital initiative for empowerment and innovation.",
//   },
//   {
//     title: "Premium Websites Collection",
//     image: "image8.jpg",
//     description: "A showcase of premium website designs and templates.",
//   },
// ];

// const Gallery = () => {
//   const itemsPerPage = 4; // Number of items per page
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the index of the first item on the current page
//   const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
//   const currentItems = galleryItems.slice(
//     indexOfFirstItem,
//     indexOfFirstItem + itemsPerPage
//   );

//   // Handle page changes
//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       {/* Desktop View */}
//       <div className="hidden md:block">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
//           {currentItems.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">{item.description}</p>
//                 <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transform transition-transform duration-200 hover:scale-105">
//                   Visit Gallery
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-6">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage * itemsPerPage >= galleryItems.length}
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="md:hidden">
//         <Swiper
//           spaceBetween={10}
//           slidesPerView={1}
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           loop
//           autoplay={{
//             delay: 3000, // Changed to 3 seconds for better user experience
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 3,
//             },
//             768: {
//               slidesPerView: 4,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="swiper-container"
//         >
//           {galleryItems.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {item.description}
//                   </p>
//                   <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transform transition-transform duration-200 hover:scale-105">
//                     Visit Gallery
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

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

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const currentItems = galleryItems.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-8">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transform transition-transform duration-200 hover:scale-105">
                  Visit Gallery
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage * itemsPerPage >= galleryItems.length}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transform transition-transform duration-200 hover:scale-105">
                    Visit Gallery
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
