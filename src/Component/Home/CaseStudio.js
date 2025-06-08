import React, { useState } from "react";

const portfolioItems = [
  {
    title: "Scrap Express",
    image: "scrap_express.jpg",
    link: "#",
    description:
      "A recycling platform offering pickup services for scrap materials.",
  },
  {
    title: "Aliza Beauty Parlour",
    image: "aliza_beauty_parlour.jpg",
    link: "#",
    description:
      "A local beauty parlour with professional styling and makeup services.",
  },
  {
    title: "Paintacle",
    image: "paintacle.jpg",
    link: "#",
    description:
      "An online platform to book painters and get home decor consultations.",
  },
  {
    title: "Aarsy Productions",
    image: "aarsy_productions.jpg",
    link: "#",
    description:
      "A production house that creates wedding films, short films, and ads.",
  },
  {
    title: "Moments Album",
    image: "moments_album.jpg",
    link: "#",
    description:
      "A photo album and memory book design service for special occasions.",
  },
  {
    title: "Elite Cleaners",
    image: "elite_cleaners.jpg",
    link: "#",
    description:
      "A premium dry-cleaning and laundry service with door-to-door delivery.",
  },
  {
    title: "Fit Fuel",
    image: "fit_fuel.jpg",
    link: "#",
    description:
      "A health meal delivery startup offering nutrition-packed dishes.",
  },
];

// Number of cards per page
const ITEMS_PER_PAGE = 3;

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = portfolioItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(portfolioItems.length / ITEMS_PER_PAGE);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* Hero Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Our Portfolio
        </h1>
        <p style={{ color: "#666" }}>
          Explore the work we've done with passion and dedication.
        </p>
      </div>

      {/* Portfolio Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {currentItems.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "1rem",
              width: "280px",
              transition: "transform 0.3s",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                borderRadius: "12px",
                height: "170px",
                objectFit: "cover",
              }}
            />
            <h3 style={{ marginTop: "1rem", color: "#333" }}>{item.title}</h3>
            <button
              onClick={() => openModal(item)}
              style={{
                marginTop: "1rem",
                padding: "0.6rem 1.2rem",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Know More
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border:
                currentPage === i + 1 ? "2px solid #007bff" : "1px solid #ccc",
              backgroundColor: currentPage === i + 1 ? "#e6f0ff" : "#fff",
              color: "#007bff",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedItem && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "16px",
              maxWidth: "500px",
              width: "90%",
            }}
          >
            <h2>{selectedItem.title}</h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={{ width: "100%", borderRadius: "10px", marginTop: "1rem" }}
            />
            <p style={{ marginTop: "1rem", color: "#333" }}>
              {selectedItem.description}
            </p>
            <button
              onClick={closeModal}
              style={{
                marginTop: "1.5rem",
                padding: "0.5rem 1rem",
                border: "none",
                backgroundColor: "#dc3545",
                color: "#fff",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
