import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PodcastSectionView = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState({});

  useEffect(() => {
    async function fetchPodcasts() {
      try {
        const data = await axios.get(
          `http://localhost:3001/api/podcast/podcast/${id}`
        );
        console.log(data);
        setPodcast(data.data.message); // Only take the first 4 podcasts
      } catch (error) {
        console.log(error);
      }
    }
    fetchPodcasts();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {podcast.title}
        </h1>
        <img src={podcast.thumbnail} alt="podacast thumbnail" className="w-full max-w-4xl h-80 object-cover rounded-lg shadow-lg mb-6"/>
        <p className="text-gray-600 text-lg mb-4 max-w-2xl text-center">
          {podcast.description}
        </p>
        <p className="text-gray-500 text-sm mb-2">By {podcast.author}</p>
        <video controls className="w-full max-w-4xl rounded-lg shadow-lg">
          <source src={podcast.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <a
          href={podcast.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Watch on External Link
        </a>
      </div>
    </>
  );
};

export default PodcastSectionView;
