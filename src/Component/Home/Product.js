import React, { useEffect, useState } from "react";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetching the product data from the API
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://backend.tesodtechnology.com/product"
        );
        const data = await response.json();

        // If your API doesn't support pagination, we can handle it client-side
        setProducts(data);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, itemsPerPage]);

  // Get current products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Open modal with product details
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle image error - fallback to placeholder
  const handleImageError = (e) => {
    e.target.src =
      "https://via.placeholder.com/400x320/6366f1/ffffff?text=Product+Image";
  };

  // WhatsApp enquiry function
  const handleWhatsAppEnquiry = (productName) => {
    const phoneNumber = "919876543210"; // Replace with your actual WhatsApp number
    const message = `Hi! I'm interested in your product "${productName}". Could you please provide more details and pricing information?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="product-page bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Enhanced Animated Gradient */}
      <header className="relative py-32 overflow-hidden bg-gradient-to-r from-purple-700 via-blue-700 to-indigo-800">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-white/10 -top-20 -left-20 blur-3xl"></div>
          <div className="absolute w-96 h-96 rounded-full bg-indigo-500/10 bottom-0 right-0 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight text-white tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200">
                Products
              </span>
            </h1>
            <p className="text-2xl text-purple-100 font-light">
              Innovative solutions crafted with precision and excellence
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Container with elevated card effect */}
      <div className="container mx-auto px-6 relative">
        {/* Products Section - Elevated */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-24 transform -mt-24 relative z-20 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="mr-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Products
            </h2>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <div
                      key={product._id || product.id || Math.random()}
                      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105 border border-gray-100"
                    >
                      <div className="h-48 w-full bg-gray-200 overflow-hidden">
                        <img
                          src={
                            product.image ||
                            "https://via.placeholder.com/400x320/6366f1/ffffff?text=Product+Image"
                          }
                          alt={product.name || product.title || "Product"}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          onError={handleImageError}
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                          {product.name || product.title || "Product Name"}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {product.description || "No description available"}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                            {product.category || "General"}
                          </span>
                          {product.price && (
                            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                              ₹{product.price}
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <button
                            onClick={() => openModal(product)}
                            className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 text-sm font-medium"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() =>
                              handleWhatsAppEnquiry(
                                product.name || product.title
                              )
                            }
                            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm font-medium flex items-center justify-center gap-1"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                            </svg>
                            Enquiry
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex justify-center items-center h-64 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 text-gray-400 mx-auto mb-4"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v12z"></path>
                      </svg>
                      <p className="text-gray-500 text-lg">
                        No products available.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Pagination controls */}
              {products.length > 0 && (
                <div className="flex justify-center items-center mt-6">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={goToPreviousPage}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed bg-gray-100"
                          : "text-purple-600 hover:bg-purple-100 bg-white border border-purple-200"
                      }`}
                    >
                      Previous
                    </button>

                    <div className="flex items-center space-x-1">
                      {[...Array(totalPages).keys()].map((number) => (
                        <button
                          key={number + 1}
                          onClick={() => paginate(number + 1)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                            currentPage === number + 1
                              ? "bg-purple-600 text-white shadow-md"
                              : "text-purple-600 hover:bg-purple-100 bg-white border border-purple-200"
                          }`}
                        >
                          {number + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed bg-gray-100"
                          : "text-purple-600 hover:bg-purple-100 bg-white border border-purple-200"
                      }`}
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Product Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedProduct.name ||
                  selectedProduct.title ||
                  "Product Details"}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      src={
                        selectedProduct.image ||
                        "https://via.placeholder.com/500x500/6366f1/ffffff?text=Product+Image"
                      }
                      alt={
                        selectedProduct.name ||
                        selectedProduct.title ||
                        "Product"
                      }
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                  </div>
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.description ||
                        "No detailed description available for this product."}
                    </p>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-2 bg-purple-100 text-purple-800 font-medium rounded-full">
                        Category: {selectedProduct.category || "General"}
                      </span>
                      {selectedProduct.price && (
                        <span className="px-4 py-2 bg-green-100 text-green-800 font-bold rounded-full text-lg">
                          ₹{selectedProduct.price}
                        </span>
                      )}
                    </div>

                    {/* Additional product details if available */}
                    {selectedProduct.features && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Features:
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {selectedProduct.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedProduct.specifications && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Specifications:
                        </h4>
                        <div className="text-gray-600">
                          {Object.entries(selectedProduct.specifications).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="flex justify-between py-1 border-b border-gray-100 last:border-b-0"
                              >
                                <span className="font-medium capitalize">
                                  {key}:
                                </span>
                                <span>{value}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => {
                        handleWhatsAppEnquiry(
                          selectedProduct.name || selectedProduct.title
                        );
                        closeModal();
                      }}
                      className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                      </svg>
                      WhatsApp Enquiry
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-colors duration-300 font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
