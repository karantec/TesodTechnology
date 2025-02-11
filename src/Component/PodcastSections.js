import React, { useState, useEffect } from "react";
import BlogSection from "./BlogSection";
import axios from "axios";

const PodcastSection = () => {
  const [podcast, setPodcast] = useState([]);
  const [podcastNumber, setPodcastNumber] = useState(7);
  useEffect(() => {
    async function fetchPodcasts() {
      try {
        const data = await axios.get(
          "https://bbc-newsbackend-2yyf.onrender.com/api/podcast/getallpodcast"
        );
        setPodcast(data.data.message);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPodcasts();
  }, []);

  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto  mt-8 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            हमारे पॉडकास्ट सुनें
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {podcast.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.thumbnail}
                    alt="Thumbnail"
                    className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={`/podcastview/${item._id}`}
                    className="text-orange-500 hover:underline font-semibold mt-auto"
                  >
                    पूरा ब्लॉग पढ़ें
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            {podcastNumber === podcastNumber.length ? (
              <button
                className="bg-blue-500 px-4 py-2 w-1/2 text-center text-white"
                onClick={() => setPodcastNumber(7)}
              >
                Read less
              </button>
            ) : (
              <button
                className="bg-blue-500 px-4 py-2 w-1/2 text-center text-white"
                onClick={() => setPodcastNumber(podcast.length - 5)}
              >
                Read More
              </button>
            )}
          </div>
        </div>
      </section>
      <BlogSection />
    </>
  );
};

export default PodcastSection;
