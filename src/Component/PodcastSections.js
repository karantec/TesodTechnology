import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import BreakingNews from "./BreakingSection";

const PodcastSections = () => {
  const podcasts = [
    {
      image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
      title: "टेक्नोलॉजी पर चर्चा",
      description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
      title: "टेक्नोलॉजी पर चर्चा",
      description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
      title: "टेक्नोलॉजी पर चर्चा",
      description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
    {
      image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
      title: "टेक्नोलॉजी पर चर्चा",
      description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
      link: "#",
    },
      {
        image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
        title: "टेक्नोलॉजी पर चर्चा",
        description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
        link: "#",
      },
      {
        image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
        title: "टेक्नोलॉजी पर चर्चा",
        description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
        link: "#",
      },
      {
        image: "https://ichef.bbci.co.uk/news/1024/branded_hindi/E310/production/_110582185_aa5d0d33-b318-4afe-825c-b04290458c38.jpg",
        title: "टेक्नोलॉजी पर चर्चा",
        description: "तकनीक और भविष्य के बारे में हमारी नई पॉडकास्ट सुनें।",
        link: "#",
      },
  ];

  return ( 
    <>
    <Navbar/>
    <HeroSection/>
    <BreakingNews/>
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          हमारे पॉडकास्ट सुनें
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
            {podcasts.map((item, index) => (
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
                      पॉडकास्ट सुनें
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default PodcastSections;
