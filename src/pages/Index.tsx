import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO meta tags
    document.title = "Yến Sào Hương Liên - Thượng phẩm thiên nhiên, Sức khỏe vẹn toàn";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Chuyên cung cấp sản phẩm yến sào cao cấp, chất lượng tại Việt Nam. Yến sào nguyên chất, tinh chất yến sào, súp yến sào truyền thống với giá tốt nhất.');
    }

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'yến sào, bird nest, yến sào cao cấp, tinh chất yến sào, súp yến sào, sức khỏe, dinh dưỡng, Yến Sào Hương Liên';
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
        <Products />
        <Reviews />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
