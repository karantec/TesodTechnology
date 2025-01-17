import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NewsSection = () => {
  const news = [
    {
      image: "https://via.placeholder.com/300x200",
      title: "भारत में नई शिक्षा नीति लागू",
      description: "सरकार ने नई शिक्षा नीति को लागू किया है, जिससे छात्रों को मिलेगा लाभ।",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "खेल जगत में भारत का दबदबा",
      description: "भारतीय खिलाड़ियों ने ओलंपिक में शानदार प्रदर्शन किया।",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "मौसम विभाग ने दी चेतावनी",
      description: "अगले सप्ताह भारी बारिश की संभावना, सतर्क रहने की सलाह।",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "तकनीकी क्षेत्र में नई खोज",
      description: "भारतीय वैज्ञानिकों ने तकनीकी क्षेत्र में नई खोज की।",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "मौसम विभाग ने दी चेतावनी",
      description: "अगले सप्ताह भारी बारिश की संभावना, सतर्क रहने की सलाह।",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "तकनीकी क्षेत्र में नई खोज",
      description: "भारतीय वैज्ञानिकों ने तकनीकी क्षेत्र में नई खोज की।",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "मौसम विभाग ने दी चेतावनी",
      description: "अगले सप्ताह भारी बारिश की संभावना, सतर्क रहने की सलाह।",
      link: "#",
    },
    {
      image: "https://via.placeholder.com/300x200",
      title: "तकनीकी क्षेत्र में नई खोज",
      description: "भारतीय वैज्ञानिकों ने तकनीकी क्षेत्र में नई खोज की।",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          हमारी पहली श्रेणी की खबरें
        </h2>
        <div className="px-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-14"
          >
            {news.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                      पूरी खबर पढ़ें
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
