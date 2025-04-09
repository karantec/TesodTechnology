import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://tesodtechnologyfinal.onrender.com/product/Product")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([data]); // Wrap single product in array if needed
        }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleDownload = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "product_file.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  if (!products.length)
    return <div className="text-center p-6">Loading products...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-60 object-cover w-full"
            />
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <p className="text-gray-700 flex-1">{product.description}</p>
              <button
                onClick={() => handleDownload(product.file)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Download HTML File
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
