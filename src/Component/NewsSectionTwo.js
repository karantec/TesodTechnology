import React, { useState, useEffect } from "react";
import axios from "axios";

function NewsSectionTwo() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get("http://localhost:3001/api/news/News");
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
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
            >
              <img
                src={news[0].thumbnailUrl}
                alt="Thumbnail"
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  {news[0].title}
                </h3>
                <span className="text-xs dark:text-gray-600">
                  {new Date(news[0].publishedDate).toLocaleDateString()}
                </span>
                <p>{news[0].content}</p>
              </div>
            </a>
          )}

          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.slice(1, news.length - 2).map((ele, index) => (
              <a
                key={ele._id}
                rel="noopener noreferrer"
                href={`/newsview/${ele._id}`}
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={ele.thumbnailUrl}
                  alt={ele.title}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    {ele.title}
                  </h3>
                  <span className="text-xs dark:text-gray-600">
                    {new Date(ele.publishedDate).toLocaleDateString()}
                  </span>
                  <p>{ele.content.substring(0, 100)}...</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsSectionTwo;
