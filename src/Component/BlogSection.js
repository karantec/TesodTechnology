import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/0b09/live/de578450-d542-11ef-9fd6-0be88a764111.jpg.webp",
      title: "ईरान और रूस के बीच ऐसा कौन सा समझौता हुआ जो बढ़ा सकता है पश्चिमी देशों की परेशानी",
      description: "जानें कि कैसे अपने जीवन को स्वस्थ और खुशहाल बना सकते हैं।",
      link: "/detail",
    },
  ];

  return (
    <section className="py-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-8">
          हमारे ब्लॉग पढ़ें
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-orange-500 hover:underline font-semibold"
                >
                  पूरा ब्लॉग पढ़ें
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
