import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Chị Mai Lan",
      location: "TP. Hồ Chí Minh",
      rating: 5,
      content: "Sản phẩm yến sào chất lượng tuyệt vời! Tôi đã sử dụng được 3 tháng và thấy sức khỏe cải thiện rõ rệt. Da dẻ mịn màng hơn và ngủ ngon hơn nhiều.",
      avatar: "ML"
    },
    {
      id: 2,
      name: "Anh Tuấn Minh",
      location: "Hà Nội",
      rating: 5,
      content: "Mua yến sào cho mẹ già sử dụng, mẹ rất hài lòng. Đóng gói cẩn thận, giao hàng nhanh chóng. Sẽ tiếp tục ủng hộ cửa hàng!",
      avatar: "TM"
    },
    {
      id: 3,
      name: "Cô Phương Anh",
      location: "Đà Nẵng",
      rating: 5,
      content: "Tinh chất yến sào rất tiện lợi, dễ sử dụng. Con nhỏ ốm dậy rất nhanh kể từ khi uống. Giá cả hợp lý so với chất lượng nhận được.",
      avatar: "PA"
    }
  ];

  return (
    <section className="py-20 bg-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            Khách Hàng Nói Gì
          </h2>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto">
            Hàng nghìn khách hàng đã tin tựa và lựa chọn sản phẩm của chúng tôi
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
                  "{review.content}"
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
                      {review.name}
                    </div>
                    <div className="text-brown-500 text-sm">
                      {review.location}
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