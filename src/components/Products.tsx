import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import tinhchecaocap from "@/assets/TCCC.jpg";
import soupImage from "@/assets/bird-nest-soup.jpg";
import yentinhche from "@/assets/tinhcheloai1.jpg";
import yenvienbaby from "@/assets/vienbaby.jpg";
import thoVIP from "@/assets/Tho-VIP.jpg";
import yenchungtuoidongtrung from "@/assets/Dong-Trung.jpg";
import yenchungtuoigung from "@/assets/gung.png";
import chungtuoihatchia from "@/assets/hatchia.png";
import chungtuoilongnhan from "@/assets/longnhan.png";
//import thoVIP from "@/assets/Tho-VIP.jpg";

const Products = () => {
  const { t } = useLanguage();
  const [selectedVariants, setSelectedVariants] = useState<{[key: number]: string}>({});

  const products = [
    {
      id: 1,
      nameKey: "products.tinhchecaocap.name",
      descKey: "products.tinhchecaocap.desc",
      image: tinhchecaocap,
      variants: [
        { name: "50g", price: 2500000, originalPrice: 3000000 },
        { name: "100g", price: 4800000, originalPrice: 5500000 },
        { name: "200g", price: 9200000, originalPrice: 10500000 }
      ],
    },
    {
      id: 2,
      nameKey: "products.soup.name",
      descKey: "products.soup.desc",
      image: thoVIP,
      variants: [
        { name: "10g", price: 850000, originalPrice: 1000000 },
        { name: "20g", price: 1600000, originalPrice: 1900000 },
        { name: "50g", price: 3800000, originalPrice: 4500000 }
      ],
    },
    {
      id: 3,
      nameKey: "products.yentinhche.name",
      descKey: "products.yentinhche.desc",
      image: yentinhche,
      variants: [
        { name: "30g", price: 1800000, originalPrice: 2200000 },
        { name: "50g", price: 2900000, originalPrice: 3500000 },
        { name: "100g", price: 5600000, originalPrice: 6800000 }
      ],
    },
    {
      id: 4,
      nameKey: "products.yenvienbaby.name",
      descKey: "products.yenvienbaby.desc",
      image: yenvienbaby,
      variants: [
        { name: "10g", price: 1200000, originalPrice: 1500000 },
        { name: "50g", price: 2300000, originalPrice: 2800000 },
        { name: "100g", price: 4400000, originalPrice: 5200000 }
      ],
    },
    // Duplicate 4 more for 8 total products
    {
      id: 5,
      nameKey: "products.yenchungtuoidongtrung.name",
      descKey: "products.yenchungtuoidongtrung.desc",
      image: yenchungtuoidongtrung,
      variants: [
        { name: "50g", price: 2500000, originalPrice: 3000000 },
        { name: "100g", price: 4800000, originalPrice: 5500000 },
        { name: "200g", price: 9200000, originalPrice: 10500000 }
      ],
    },
    {
      id: 6,
      nameKey: "products.yenchungtuoigung.name",
      descKey: "products.yenchungtuoigung.desc",
      image: yenchungtuoigung,
      variants: [
        { name: "10g", price: 850000, originalPrice: 1000000 },
        { name: "20g", price: 1600000, originalPrice: 1900000 },
        { name: "50g", price: 3800000, originalPrice: 4500000 }
      ],
    },
    {
      id: 7,
      nameKey: "products.chungtuoihatchia.name",
      descKey: "products.chungtuoihatchia.desc",
      image: chungtuoihatchia,
      variants: [
        { name: "30g", price: 1800000, originalPrice: 2200000 },
        { name: "50g", price: 2900000, originalPrice: 3500000 },
        { name: "100g", price: 5600000, originalPrice: 6800000 }
      ],
    },
    {
      id: 8,
      nameKey: "products.chungtuoilongnhan.name",
      descKey: "products.chungtuoilongnhan.desc",
      image: chungtuoilongnhan,
      variants: [
        { name: "6 hũ", price: 1200000, originalPrice: 1500000 },
        { name: "12 hũ", price: 2300000, originalPrice: 2800000 },
        { name: "24 hũ", price: 4400000, originalPrice: 5200000 }
      ],
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                    {t('products.bestseller')}
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

                <div className="mb-4">
                  <Select 
                    value={selectedVariants[product.id] || product.variants[0].name}
                    onValueChange={(value) => setSelectedVariants({...selectedVariants, [product.id]: value})}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t('products.variant')} />
                    </SelectTrigger>
                    <SelectContent>
                      {product.variants.map((variant) => (
                        <SelectItem key={variant.name} value={variant.name}>
                          {variant.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-brown-700">
                    {(() => {
                      const selectedVariant = product.variants.find(v => v.name === (selectedVariants[product.id] || product.variants[0].name));
                      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedVariant?.price || 0);
                    })()}
                  </span>
                  <span className="text-lg text-brown-400 line-through">
                    {(() => {
                      const selectedVariant = product.variants.find(v => v.name === (selectedVariants[product.id] || product.variants[0].name));
                      return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedVariant?.originalPrice || 0);
                    })()}
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