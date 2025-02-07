import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardsPage = () => {
  const { category } = useParams(); // Get the category from the URL, if any
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`https://bbc-newsbackend-2yyf.onrender.com/api/news/Newscategory/${category}`);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();
        setCards(data.data)
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [category]);

  if (loading) return <div className="container mx-auto p-4">Loading...</div>;
  if (error) return <div className="container mx-auto p-4 text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-4 mt-24">
      <h1 className="text-3xl font-bold text-center mb-8">
        {category ? `${category} News` : "All News"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.slice(0, 6).map((card) => (
          <div
            key={card._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <a href={`/newsview/${card._id}`}>
            <img
              src={card.thumbnailUrl || card.newImage?.[0] || "https://via.placeholder.com/400x300?text=No+Image"}
              alt={card.title}
              className="w-full h-48 object-cover"
              />
              </a>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.content}</p>
              <p className="text-gray-400 text-sm mt-2">{new Date(card.publishedDate).toLocaleDateString()}</p>
              <div className="mt-4">
                <span className="text-sm text-blue-600">{card.category}</span>
                <ul className="flex space-x-2 mt-2">
                  {card.tags?.map((tag, index) => (
                    <li key={index} className="text-xs text-gray-500">{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsPage;
