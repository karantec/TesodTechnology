import React, { useState, useEffect } from "react";
import axios from "axios";

const PodcastSection1 = () => {
  const [podcast, setPodcast] = useState([]);

  useEffect(() => {
    async function fetchPodcasts() {
      try {
        const data = await axios.get("https://bbc-newsbackend.onrender.com/api/podcast/getallpodcast");
        console.log(data.data.message);
        setPodcast(data.data.message.slice(0, 4)); // Only take the first 4 podcasts
      } catch (error) {
        console.log(error);
      }
    }
    fetchPodcasts();
  }, []);

  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayClick = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto mt-8 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">हमारे पॉडकास्ट सुनें</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {podcast.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="relative">
                  {/* Show Play Button or iframe */}
                  {!activeVideo && (
                    <div
                      className="w-full h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <button
                        onClick={() => handlePlayClick(item.videoUrl)}
                        className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-70"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-16 w-16"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* Display iframe if video is active */}
                  {activeVideo && activeVideo === item.videoUrl && (
                    <iframe
                      width="560"
                      height="315"
                      src={item.videoUrl}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-auto"
                    ></iframe>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                        href={`/podcast/${item._id}`}
                        className="text-orange-500 hover:underline font-semibold mt-auto"
                      >
                        पूरा ब्लॉग पढ़ें
                      </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PodcastSection1;
