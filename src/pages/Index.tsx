import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO meta tags
    document.title = "Yến Sào Hương Liên - Thượng phẩm thiên nhiên, Sức khỏe vẹn toàn";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Yến Sào Hương Liên – Chuyên cung cấp yến sào nguyên chất, cao cấp, chất lượng từ thiên nhiên. Giao hàng toàn quốc, cam kết uy tín & an toàn.');
    }

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'yến sào Hương Liên, yến sào Nha Trang, yến tinh chế, tổ yến nguyên chất, yến sào cao cấp, yến sào cho bà bầu, yến sào cho người già, mua yến sào uy tín, yến sào thiên nhiên, yến sào Khánh Hòa, yến thật 100%, yến sào quà biếu, yến sào chất lượng, tổ yến Hương Liên, yến sào giá tốt, yến chưng sẵn, yến sào nguyên tổ, yến Hương Liên Nha Trang, yến sào chính hãng'

    document.head.appendChild(metaKeywords);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.setAttribute('property', 'og:title');
    metaOgTitle.content = 'Yến Sào Hương Liên - Thượng phẩm thiên nhiên, Sức khỏe vẹn toàn';
    document.head.appendChild(metaOgTitle);

    return () => {
      document.head.removeChild(metaKeywords);
      document.head.removeChild(metaOgTitle);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Introduction />
        <Products />
        <Reviews />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
