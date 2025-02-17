import React, { useState, useEffect } from "react";
import axios from "axios";

function NewsSectionTwo() {
  const [news, setNews] = useState([]);
  const [newNumber, setNewNumber] = useState(7);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          "https://bbc-newsbackend-2yyf.onrender.com/api/news/News"
        );
        setNews(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-center text-6xl mt-8">Latest News</h1>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {news.length > 0 && (
            <a
              rel="noopener noreferrer"
              href={`/newsview/${news[0]._id}`}
              className="block w-full mx-auto group hover:no-underline focus:no-underline bg-white shadow-md rounded-lg lg:grid lg:grid-cols-12 dark:bg-gray-50"
            >
              <div className="lg:col-span-5">
                <img
                  src={news[0].thumbnailUrl}
                  alt="Thumbnail"
                  className="object-cover w-full h-full rounded-l-lg"
                />
              </div>
              <div className="p-2 space-y-2 lg:col-span-7 ">
                <h3 className="text-2xl font-bold text-blue-700 group-hover:underline group-focus:underline">
                  {news[0].title}
                </h3>
                <p className="text-black">{news[0].content}</p>
                <span className="text-xs text-gray-500 block mt-2">
                  {new Date(news[0].publishedDate).toLocaleDateString()}
                  <span className="ml-4 font-bold text-black">{news[0].category}</span>
                </span>
              </div>
            </a>
          )}

          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {news.slice(1, newNumber).map((ele) => (
              <a
                key={ele._id}
                rel="noopener noreferrer"
                href={`/newsview/${ele._id}`}
                className="w-full mx-auto group hover:no-underline focus:no-underline bg-white shadow-md rounded-lg lg:grid lg:grid-cols-12 dark:bg-gray-50"
              >
                <div className="lg:col-span-5">
                  <img
                    className="object-cover w-full h-44 rounded-l-lg"
                    src={ele.thumbnailUrl}
                    alt={ele.title}
                  />
                </div>
                <div className="p-2 space-y-2 lg:col-span-7 ">
                  <h3 className="text-xl font-bold text-blue-700">
                    {ele.title}
                  </h3>
                  <p className="text-black">
                    {ele.content.substring(0, 100)}...
                  </p>
                  <span className="text-xs text-gray-500 block mt-2">
                    {new Date(ele.publishedDate).toLocaleDateString()}
                     <span className="ml-4 font-bold text-black">{ele.category}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center">
            {newNumber === news.length ? (
              <button
                className="bg-blue-500 px-4 py-2 w-1/2 text-center text-white rounded-md"
                onClick={() => setNewNumber(7)}
              >
                Read less
              </button>
            ) : (
              <button
                className="bg-blue-500 px-4 py-2 w-1/2 text-center text-white rounded-md"
                onClick={() => setNewNumber(news.length - 5)}
              >
                Read More
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsSectionTwo;
