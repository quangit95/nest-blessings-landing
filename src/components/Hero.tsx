import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-background.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-brown-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-100">
            "{t('hero.slogan')}"
          </p>
          <p className="text-lg md:text-xl text-brown-100 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="premium" size="xl" className="text-lg px-8">
            {t('hero.explore')}
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="text-lg px-8 border-white text-white hover:bg-white hover:text-brown-800"
          >
            {t('hero.learn')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;