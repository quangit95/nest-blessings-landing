import { Building2, ShieldCheck, Cog, Package, Tag, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Introduction = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Building2,
      titleKey: 'intro.natural.title',
      descKey: 'intro.natural.desc'
    },
    {
      icon: ShieldCheck,
      titleKey: 'intro.materials.title',
      descKey: 'intro.materials.desc'
    },
    {
      icon: Cog,
      titleKey: 'intro.processing.title',
      descKey: 'intro.processing.desc'
    },
    {
      icon: Package,
      titleKey: 'intro.variety.title',
      descKey: 'intro.variety.desc'
    },
    {
      icon: Tag,
      titleKey: 'intro.price.title',
      descKey: 'intro.price.desc'
    }
  ];

  return (
    <section id="introduction" className="py-20 bg-gradient-to-b from-background to-brown-50/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">
            {t('intro.title')}
          </h2>
          <p className="text-lg md:text-xl text-brown-600 max-w-4xl mx-auto leading-relaxed">
            {t('intro.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brown-100 hover:border-brown-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-brown-600 to-brown-700 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-800 mb-3">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-brown-600 leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Experience Badge */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 rounded-2xl shadow-lg text-center text-brown-900 lg:col-span-1">
            <Star className="w-12 h-12 mx-auto mb-4 text-brown-800" />
            <div className="text-3xl font-bold mb-2">14</div>
            <div className="text-lg font-semibold">Năm Kinh Nghiệm</div>
            <div className="text-sm mt-2">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;