import React from "react";

const ProductIndia = () => {
  const podcasts = [
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/1aed/live/2d7ec1a0-d634-11ef-9fd6-0be88a764111.jpg.webp",
      title: "अमेरिका में टिकटॉक प्रतिबंध से पहले हुआ बंद, क्या भारत में पाबंदी के पीछे भी यही वजह थी",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/vivo/live/images/2025/1/19/838c1834-b063-4bd5-a586-8e248896fd35.jpg.webp",
      title: "सैफ़ अली ख़ान पर हमला मामला: अभियुक्त को 5 दिन की पुलिस कस्टडी में भेजा गया",
      // description: "विज्ञान की नई खोजों और नवाचारों पर विशेष चर्चा।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/1aed/live/2d7ec1a0-d634-11ef-9fd6-0be88a764111.jpg.webp",
      title: "अमेरिका में टिकटॉक प्रतिबंध से पहले हुआ बंद, क्या भारत में पाबंदी के पीछे भी यही वजह थी",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/vivo/live/images/2025/1/19/838c1834-b063-4bd5-a586-8e248896fd35.jpg.webp",
      title: "सैफ़ अली ख़ान पर हमला मामला: अभियुक्त को 5 दिन की पुलिस कस्टडी में भेजा गया",
      // description: "विज्ञान की नई खोजों और नवाचारों पर विशेष चर्चा।",
      link: "/detail",
    },
    {
      image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/1aed/live/2d7ec1a0-d634-11ef-9fd6-0be88a764111.jpg.webp",
      title: "अमेरिका में टिकटॉक प्रतिबंध से पहले हुआ बंद, क्या भारत में पाबंदी के पीछे भी यही वजह थी",
      // description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "/detail",
    },
    
  
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        भारत
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

export default ProductIndia;
