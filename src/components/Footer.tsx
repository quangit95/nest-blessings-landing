import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="bg-brown-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brown-400 to-brown-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">YN</span>
              </div>
              <span className="text-2xl font-bold">Yến Nest</span>
            </div>
            
            <p className="text-brown-200 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brown-300" />
                <span className="text-brown-200">{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brown-300" />
                <span className="text-brown-200">0901 234 567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brown-300" />
                <span className="text-brown-200">info@yennest.vn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.quicklinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-brown-200 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#introduction" className="text-brown-200 hover:text-white transition-colors">
                  {t('nav.introduction')}
                </a>
              </li>
              <li>
                <a href="#products" className="text-brown-200 hover:text-white transition-colors">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-brown-200 hover:text-white transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.support')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-brown-200 hover:text-white transition-colors">
                  {t('footer.warranty')}
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-200 hover:text-white transition-colors">
                  {t('footer.guide')}
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-200 hover:text-white transition-colors">
                  {t('footer.return')}
                </a>
              </li>
              <li>
                <a href="#" className="text-brown-200 hover:text-white transition-colors">
                  {t('footer.faq')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-brown-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a 
                href="#" 
                className="text-brown-300 hover:text-white transition-colors p-2 rounded-full hover:bg-brown-700"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-brown-300 hover:text-white transition-colors p-2 rounded-full hover:bg-brown-700"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-brown-300 hover:text-white transition-colors p-2 rounded-full hover:bg-brown-700"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>

            <div className="text-brown-300 text-center md:text-right">
              <p>{t('footer.copyright')}</p>
              <p className="text-sm mt-1">
                {t('footer.dev')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;