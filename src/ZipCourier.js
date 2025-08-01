import React, { useEffect, useState } from "react";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(6);
  const [downloadLoading, setDownloadLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://backend.tesodtechnology.com/product"
        );
        const data = await response.json();

        // Extract products array safely
        const productList = Array.isArray(data) ? data : data.products || [];
        setProducts(productList);
        setTotalPages(Math.ceil(productList.length / itemsPerPage));
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, itemsPerPage]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = Array.isArray(products)
    ? products.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Handle downloading all products as a ZIP
  const handleDownload = async () => {
    setDownloadLoading(true);

    try {
      // Trigger the download from the backend API
      const response = await fetch(
        "https://backend.tesodtechnology.com/products/download-zip",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response is successful
      if (response.ok) {
        const blob = await response.blob(); // Get the ZIP file as a Blob
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "products.zip"; // Set the name of the downloaded file
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        throw new Error("Failed to download ZIP file");
      }
    } catch (error) {
      console.error("Error downloading file:", error);
    } finally {
      setDownloadLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <div
              key={product.id || Math.random()}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105"
            >
              {product.image && (
                <div className="h-48 w-full bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {product.category}
                  </span>
                  {product.price && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      ${product.price}
                    </span>
                  )}
                </div>

                <div className="mt-4 mb-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-600 font-medium">
                        Free Download
                      </p>
                      <p className="text-gray-500 text-sm">ZIP Archive</p>
                    </div>
                    <button
                      onClick={handleDownload}
                      disabled={downloadLoading}
                      className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                        downloadLoading
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700 text-white"
                      }`}
                    >
                      {downloadLoading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-gray-500 border-t-white rounded-full animate-spin"></span>
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <span>Download All Products</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                    ♥
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-64 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500 text-lg">No products available.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {products.length > 0 && (
        <div className="flex justify-center items-center mt-6 mb-8">
          <nav className="flex items-center space-x-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-md ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-100"
              }`}
            >
              Previous
            </button>

            <div className="flex items-center space-x-1">
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === number + 1
                      ? "bg-blue-600 text-white"
                      : "text-blue-600 hover:bg-blue-100"
                  }`}
                >
                  {number + 1}
                </button>
              ))}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-100"
              }`}
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProductCards;
