import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import premiumImage from "@/assets/bird-nest-premium.jpg";
import soupImage from "@/assets/bird-nest-soup.jpg";
import driedImage from "@/assets/bird-nest-dried.jpg";
import essenceImage from "@/assets/bird-nest-essence.jpg";

const Products = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      id: 1,
      nameKey: "products.premium.name",
      descKey: "products.premium.desc",
      image: premiumImage,
      price: "2.500.000 VNĐ",
      originalPrice: "3.000.000 VNĐ"
    },
    {
      id: 2,
      nameKey: "products.soup.name",
      descKey: "products.soup.desc",
      image: soupImage,
      price: "850.000 VNĐ",
      originalPrice: "1.000.000 VNĐ"
    },
    {
      id: 3,
      nameKey: "products.dried.name",
      descKey: "products.dried.desc",
      image: driedImage,
      price: "1.800.000 VNĐ",
      originalPrice: "2.200.000 VNĐ"
    },
    {
      id: 4,
      nameKey: "products.essence.name",
      descKey: "products.essence.desc",
      image: essenceImage,
      price: "1.200.000 VNĐ",
      originalPrice: "1.500.000 VNĐ"
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
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={t(product.nameKey)}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-brown-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t('Bestseller') || 'Bán Chạy'}
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
                    {product.price}
                  </span>
                  <span className="text-lg text-brown-400 line-through">
                    {product.originalPrice}
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