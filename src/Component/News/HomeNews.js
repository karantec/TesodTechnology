import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsSection = () => {
  const [news, setNews] = useState([]); // Ensure initial state is an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get("http://localhost:3001/api/news/News");
        setNews(response.data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  // Ensure news is an array before calling slice
  const currentItems = Array.isArray(news) ? news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(news.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="container mx-auto mt-32 px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">विदेश</h2>

          {/* News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
            {currentItems.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={item.thumbnailUrl || item.newImage?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  <a href={`/${item._id}`} className="text-orange-500 hover:underline font-semibold">
                    और पढ़ें
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <ul className="flex space-x-4">
              {pageNumbers.map((number) => (
                <li key={number}>
                  <button
                    onClick={() => setCurrentPage(number)}
                    className={`px-4 py-2 rounded-lg border-2 ${
                      currentPage === number ? "bg-blue-500 text-white" : "bg-white text-blue-500"
                    } border-blue-500 hover:bg-blue-500 hover:text-white transition`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </>
  );
};

export default NewsSection;
