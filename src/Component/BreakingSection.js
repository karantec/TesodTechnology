import axios from "axios";
import { useState, useEffect } from "react";
const BreakingNews = () => {
  const [breakingnews, setBreakingNews] = useState([]);
  useEffect(() => {
    async function fetchBreakingNews() {
      try {
        const data = await axios.get(
          "https://bbc-newsbackend-2yyf.onrender.com/api/breakingnews/getbreakingnews"
        );
        setBreakingNews(data.data.data);
      } catch (error) {
        setBreakingNews([]);
        console.log(error);
      }
    }
    fetchBreakingNews();
  }, []);
  return (
    <div className="bg-red-600   flex items-center w-full  h-20 z-50 py-2 mt-20">
      {" "}
      {/* Add margin-top to avoid overlap */}
      {/* Breaking Label */}
      <div className="bg-red-500 text-white font-bold px-2 py-1">BREAKING</div>
      {/* Marquee Section */}
      <div className="flex overflow-hidden whitespace-nowrap w-full">
        {breakingnews?.map((ele, index) => {
          return (
            <>
              <div
                className="text-white text-2xl font-bold animate-scroll"
                key={index}
              >
                {ele.title}
              </div>
            </>
          );
        })}
        {/* <div className="text-white text-2xl font-bold animate-scroll">
          Pakistan: Ex-Prime Minister Imran Khan convicted of graft
        </div>
        <div className="text-white text-2xl font-bold animate-scroll">
          Pakistan: Ex-Prime Minister Imran Khan convicted of graft
        </div>
        <div className="text-white text-2xl font-bold animate-scroll">
          Pakistan: Ex-Prime Minister Imran Khan convicted of graft
        </div>
        <div className="text-white text-2xl font-bold animate-scroll">
          Pakistan: Ex-Prime Minister Imran Khan convicted of graft
        </div>
        <div className="text-white text-2xl font-bold animate-scroll">
          Pakistan: Ex-Prime Minister Imran Khan convicted of graft
        </div> */}
      </div>
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            display: inline-block;
            white-space: nowrap;
            animation: scroll 10s linear infinite;
            min-width: 100%;
          }
        `}
      </style>
    </div>
  );
};
export default BreakingNews;
