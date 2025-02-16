import axios from "axios";
import { useState, useEffect } from "react";

const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    async function fetchBreakingNews() {
      try {
        const response = await axios.get(
          "https://bbc-newsbackend-2yyf.onrender.com/api/breakingnews/getbreakingnews"
        );
        setBreakingNews(response.data.data);
      } catch (error) {
        setBreakingNews([]);
        console.error(error);
      }
    }
    fetchBreakingNews();
  }, []);

  return (
    <div className="bg-red-600 flex items-center w-full h-20 z-50 py-2 mt-20 overflow-hidden">
      {/* Breaking Label */}
      <div className="bg-red-500 text-white font-bold px-2 py-1">BREAKING</div>
      
      {/* Marquee Wrapper */}
      <div className="w-full overflow-hidden relative">
        <div className="marquee flex whitespace-nowrap">
          {[...breakingNews, ...breakingNews].map((ele, index) => (
            <div className="text-white text-2xl font-bold mx-6" key={index}>
              {ele.title}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .marquee {
            display: flex;
            min-width: 200%;
            animation: scroll 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default BreakingNews;
