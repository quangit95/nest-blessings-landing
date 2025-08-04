import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-background.jpg";
import birdNestSoup from "@/assets/bird-nest-soup.jpg";
import birdNestEssence from "@/assets/bird-nest-essence.jpg";
import birdNestPremium from "@/assets/bird-nest-premium.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  // Slideshow data
  const slides = [
    {
      image: heroImage,
      title: 'hero.title',
      slogan: 'hero.slogan',
      description: 'hero.description'
    },
    {
      image: birdNestSoup,
      title: 'Súp Yến Sào Thượng Hạng',
      slogan: 'Dinh dưỡng cho sức khỏe vàng',
      description: 'Súp yến sào chế biến từ tổ yến nguyên chất, giữ nguyên hương vị và dinh dưỡng tự nhiên'
    },
    {
      image: birdNestEssence,
      title: 'Tinh Chất Yến Sào',
      slogan: 'Tinh túy thiên nhiên, sức khỏe bền vững',
      description: 'Tinh chất yến sào cô đặc, dễ hấp thụ, phù hợp cho mọi lứa tuổi'
    },
    {
      image: birdNestPremium,
      title: 'Yến Sào Cao Cấp',
      slogan: 'Thượng phẩm từ tự nhiên',
      description: 'Tổ yến nguyên chất, khai thác từ nhà yến tự nhiên, đảm bảo chất lượng cao nhất'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Transition */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-brown-900/40"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {currentSlideData.title.startsWith('hero.') ? t(currentSlideData.title) : currentSlideData.title}
        </h1>
        
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-100">
            "{currentSlideData.slogan.startsWith('hero.') ? t(currentSlideData.slogan) : currentSlideData.slogan}"
          </p>
          <p className="text-lg md:text-xl text-brown-100 max-w-2xl mx-auto leading-relaxed">
            {currentSlideData.description.startsWith('hero.') ? t(currentSlideData.description) : currentSlideData.description}
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