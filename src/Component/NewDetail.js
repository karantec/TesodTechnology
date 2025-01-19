import React from "react";
import BlogSection from "./BlogSection";
import PodcastSection from "./PodcastSection";
import ProductIndia from "./ProductsSectionIndia";
import { Link } from "react-router-dom";

const NewsDetail = () => {
  const shareUrl = window.location.href;

  return (
    <>
      <div className="container mx-auto mt-32 px-4">
        {/* Title of the news (displayed above the image) */}
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            बुद्ध की जन्मस्थली लुंबिनी यूनेस्को  <br />की संकटग्रस्त धरोहरों की सूची में क्यों जा सकती है
          </h3>
        </div>

        {/* News Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/5d8f/live/6675cd30-d352-11ef-8ee5-5100e9033936.jpg.webp" // Placeholder image path
            alt="News Image"
            className="w-full max-w-2xl h-auto rounded-lg"
          />
        </div>

        {/* News Description */}
        <div className="flex justify-center">
          <p className="text-lg text-gray-700 max-w-3xl text-justify">
            नेपाल की तराई में बसा लुंबिनी वह ऐतिहासिक स्थान है, जहां बुद्ध का जन्म हुआ था. लुंबिनी को साल 1997 में संयुक्त राष्ट्र संघ की संस्था यूनेस्को ने विश्व धरोहर स्थल के तौर पर मान्यता दी.

            लेकिन अब यूनेस्को जल्द ही लुंबिनी को संकटग्रस्त विश्व धरोहर स्थल की सूची में शामिल कर सकता है.

            माया देवी मंदिर इस तीर्थ स्थान का एक प्रमुख केंद्र है. जहां एक चट्टान उस जगह के बारे में बताती है, जिसके बारे में बौद्धों का मानना है कि जहां लगभग 2,600 साल पहले बुद्ध का जन्म हुआ था.

            इसके चारों ओर 14 बौद्ध विहार हैं जिन्हें फ़्रांस और कोरिया सहित अलग-अलग देशों के बौद्धों ने बनवाया है. यह बौद्ध धर्म के व्यापक प्रभाव का प्रमाण भी है.
            लेकिन वह कहते हैं कि गर्मियों में माया देवी मंदिर में आना चुनौती भरा हो सकता है.

            खेनपो फुरपा शेरपा ने बताया, "कोई भी थोड़ी देर से ज़्यादा मंदिर में नहीं रुक सकता, क्योंकि यहां बहुत ज़्यादा गर्मी और उमस हो जाती है, लोगों का दम घुटने लगता है."

            मंदिर के अंदर के इन हालात के कारण ही यूनेस्को ने लुंबिनी को संकटग्रस्त विश्व धरोहर की सूची में रखने जैसा कदम उठाया है. यूनेस्को का कहना है कि मंदिर की विशेषताओं का धीरे-धीरे ख़त्म होना यह बताता है कि मंदिर को संरक्षण की कितनी ज़रूरत है.

            यूनेस्को के अनुसार, "वायु प्रदूषण, दुकानों और बाज़ारों का खुलना, औद्योगिक इलाके और कुप्रबंधन लुंबिनी के लिए सबसे बड़े ख़तरे हैं."

            लेकिन यूनेस्को ने इस प्रसिद्ध स्थान के जीर्णोद्धार के लिए नेपाल को और समय देने का फ़ैसला किया है. इसे सहेजने के लिए जो ज़रूरी काम हैं, उन्हें एक फ़रवरी तक पूरा करने के लिए कहा गया है.
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
           <Link to="/"><button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Back to News
          </button></Link>
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
      
      <ProductIndia />
      <BlogSection />
    </>
  );
};

export default NewsDetail;
