import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import premiumImage from "@/assets/TCCC.jpg";
import soupImage from "@/assets/bird-nest-soup.jpg";
import driedImage from "@/assets/bird-nest-dried.jpg";
import essenceImage from "@/assets/bird-nest-essence.jpg";
import thoVIP from "@/assets/Tho-VIP.jpg";
//import premiumImage from "@/assets/TCCC.jpg";
//import soupImage from "@/assets/bird-nest-soup.jpg";
//import driedImage from "@/assets/bird-nest-dried.jpg";
//import essenceImage from "@/assets/bird-nest-essence.jpg";
//import thoVIP from "@/assets/Tho-VIP.jpg";

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      nameKey: "products.premium.name",
      descKey: "products.premium.desc",
      image: premiumImage,
      price: 2500000,
      originalPrice: 3000000,
    },
    {
      id: 2,
      nameKey: "products.soup.name",
      descKey: "products.soup.desc",
      image: thoVIP,
      price: 850000,
      originalPrice: 1000000,
    },
    {
      id: 3,
      nameKey: "products.dried.name",
      descKey: "products.dried.desc",
      image: driedImage,
      price: 1800000,
      originalPrice: 2200000,
    },
    {
      id: 4,
      nameKey: "products.essence.name",
      descKey: "products.essence.desc",
      image: essenceImage,
      price: 1200000,
      originalPrice: 1500000,
    },
    // Duplicate 4 more for 8 total products
    {
      id: 5,
      nameKey: "products.premium.name",
      descKey: "products.premium.desc",
      image: premiumImage,
      price: 2500000,
      originalPrice: 3000000,
    },
    {
      id: 6,
      nameKey: "products.soup.name",
      descKey: "products.soup.desc",
      image: soupImage,
      price: 850000,
      originalPrice: 1000000,
    },
    {
      id: 7,
      nameKey: "products.dried.name",
      descKey: "products.dried.desc",
      image: driedImage,
      price: 1800000,
      originalPrice: 2200000,
    },
    {
      id: 8,
      nameKey: "products.essence.name",
      descKey: "products.essence.desc",
      image: essenceImage,
      price: 1200000,
      originalPrice: 1500000,
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            {t('products.title')}
          </h2>
          <p className="text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="bg-card border-brown-200 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg aspect-[4/3]">
                  <img
                    src={product.image}
                    alt={t(product.nameKey)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t('products.bestseller', 'Bán chạy')}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-brown-800 mb-3">
                  {t(product.nameKey)}
                </CardTitle>
                <CardDescription className="text-brown-600 mb-4 leading-relaxed">
                  {t(product.descKey)}
                </CardDescription>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-brown-700">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                  </span>
                  <span className="text-lg text-brown-400 line-through">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.originalPrice)}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button variant="buy" className="w-full" size="lg">
                  {t('products.buynow')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;