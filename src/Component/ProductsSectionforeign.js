import React from "react";

const ProductForeign = () => {
  const podcasts = [
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5d8f/live/6675cd30-d352-11ef-8ee5-5100e9033936.jpg.webp",
      title: "बुद्ध की जन्मस्थली लुंबिनी यूनेस्को की संकटग्रस्त धरोहरों की सूची में क्यों जा सकती है",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "/detail",
    }, {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/70e3/live/d54466e0-d5c8-11ef-ae89-45e6722c9041.jpg.webp",
      title: "पुतिन को चुनौती देने वाले एलेक्सी नवेलनी को ज़हर दिए जाने की कहानी - विवेचना",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "/detail",
    },

   
 
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center underline mb-8 text-gray-800">
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
<div className="text-right mt-6">
  <a
    href="/india-news"
    className="text-blue-600 hover:underline font-semibold text-lg"
  >
    विदेश से जुड़ी ख़बरें पढ़ें
  </a>
        </div>
      </div>
    </section>
  );
};

export default ProductForeign;
