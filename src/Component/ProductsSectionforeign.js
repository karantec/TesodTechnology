import React from "react";

const ProductForeign = () => {
  const podcasts = [
    {
      image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
      title: "टेक्नोलॉजी पर चर्चा",
      description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
      title: "विज्ञान और नवाचार",
      description: "विज्ञान की नई खोजों और नवाचारों पर विशेष चर्चा।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
      title: "बिजनेस और स्टार्टअप",
      description: "बिजनेस और स्टार्टअप की दुनिया के ताजे समाचार सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
      title: "स्वास्थ्य और जीवनशैली",
      description: "स्वास्थ्य और जीवनशैली पर विशेषज्ञों से सुनिए।",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        विदेश
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {podcasts.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "md:col-span-2 md:row-span-2 bg-white  rounded-md overflow-hidden"
                  : "bg-white shadow-sm rounded-lg overflow-hidden"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`${
                  index === 0 ? "w-full h-96 object-cover" : "w-full h-48 object-cover"
                }`}
              />
              <div className="p-4">
                <h3
                  className={`${
                    index === 0 ? "text-2xl" : "text-xl"
                  } font-bold text-gray-800 mb-2`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.link}
                  className="text-orange-500 hover:underline font-semibold"
                >
                  और पढ़ें 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductForeign;
