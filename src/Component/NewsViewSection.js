import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const NewsSectionView = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState({});

  useEffect(() => {
    async function fetchPodcasts() {
      try {
        const data = await axios.get(
          `https://bbc-newsbackend-2yyf.onrender.com/api/news/News/${id}`
        );
        if(data){
            setPodcast(data.data.data);
        }
        else{
            setPodcast({})
        }

      } catch (error) {
        setPodcast({})
        console.log(error);
      }
    }
    fetchPodcasts();
  }, [id]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto p-6">
          {/* News Title */}
          <h1 className="text-3xl font-bold text-gray-800">{podcast.title}</h1>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(podcast.publishedDate).toLocaleDateString("hi-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Thumbnail Image */}
          <img
            src={podcast.thumbnailUrl}
            alt={podcast.title}
            className="w-full h-64 object-cover rounded-lg my-4 shadow-lg"
          />

          {/* Category & Tags */}
          <div className="flex items-center gap-4">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {podcast.category}
            </span>
            <div className="flex gap-2">
              {podcast.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <p className="text-lg mt-4 leading-relaxed">{podcast.content}</p>

          {/* Additional Images */}
          {podcast.newImage?.length > 0 && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold">Related Images</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {podcast.newImage.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Related News"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Back to News
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsSectionView;
