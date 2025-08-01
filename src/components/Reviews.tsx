import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Reviews = () => {
  const { t } = useLanguage();
  
  const reviews = [
    {
      id: 1,
      nameKey: "reviews.customer1",
      locationKey: "reviews.location1",
      contentKey: "reviews.review1",
      rating: 5,
      avatar: "LA"
    },
    {
      id: 2,
      nameKey: "reviews.customer2",
      locationKey: "reviews.location2",
      contentKey: "reviews.review2",
      rating: 5,
      avatar: "MT"
    },
    {
      id: 3,
      nameKey: "reviews.customer3",
      locationKey: "reviews.location3",
      contentKey: "reviews.review3",
      rating: 5,
      avatar: "TH"
    }
  ];

  return (
    <section className="py-20 bg-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            {t('reviews.title')}
          </h2>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="bg-white border-brown-200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex mb-6 justify-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Review Content */}
                <blockquote className="text-brown-700 text-center leading-relaxed mb-6 italic">
                  "{t(review.contentKey)}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-brown-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {review.avatar}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-brown-800">
                      {t(review.nameKey)}
                    </div>
                    <div className="text-brown-500 text-sm">
                      {t(review.locationKey)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;