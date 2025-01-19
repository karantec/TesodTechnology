import React, { useState } from "react";
import BlogSection from "./BlogSection";

const ProductForen= () => {
  const podcasts = [
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5d8f/live/6675cd30-d352-11ef-8ee5-5100e9033936.jpg.webp",
      title: "बुद्ध की जन्मस्थली लुंबिनी यूनेस्को की संकटग्रस्त धरोहरों की सूची में क्यों जा सकती है",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    }, {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },

  ];

  // State to handle current page and the number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = podcasts.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(podcasts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
    <section className="py-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto mt-32 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          विदेश
        </h2>
        
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-orange-500 hover:underline font-semibold"
                >
                  और पढ़ें
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <ul className="flex space-x-4">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-blue-500"
                  } px-4 py-2 rounded-lg border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    <BlogSection/>
    </>
  );
};

export default ProductForen;
