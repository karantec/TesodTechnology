import React from "react";

const NewsDetail = () => {
  const shareUrl = window.location.href;

  return (
    <div className="container mx-auto mt-32">
      {/* Title of the news (displayed above the image) */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold mb-4">Breaking News Title Goes Here</h1>
      </div>

      {/* News Image */}
      <div className="flex justify-center mb-6">
        <img
          src="https://www.krrda.in/wp-content/uploads/2024/10/today-breaking-news.webp" // Placeholder image path
          alt="News Image"
          className="w-full max-w-2xl h-auto rounded-lg"
        />
      </div>

      {/* News Description */}
      <div className="flex justify-center">
        <p className="text-lg text-gray-700 max-w-3xl text-justify">
          This is the detailed description of the news article. This placeholder text is just
          an example of how the content will be displayed. The news content will go here in
          its entirety, providing all the details the reader needs to know about the event or topic.
        </p>
      </div>

      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Back to News
        </button>
      </div>

      {/* Social Media Sharing */}
      <div className="text-center mt-8">
        <p className="text-lg font-semibold mb-4">Share this news:</p>
        <div className="flex justify-center space-x-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
