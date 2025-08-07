import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                <span className="text-white font-bold text-xl" >
                  <div className="flex items-center space-x-2">
                    <img src="/data-uploads/logo_hl.png" alt="Yến Sào Hương Liên" className="h-20 w-auto" />
                  </div>
                  </span>
              </div>
              
              <span className="text-2xl font-bold">Yến Sào Hương Liên</span>
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
                <span className="text-brown-200">0783 409 011</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brown-300" />
                <span className="text-brown-200">yensaohuongliennhatrang@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t('footer.quicklinks')}</h3>
             {/* Google Maps */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.1974202596434!2d109.16703007588039!3d12.234908130599727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705d071238448b%3A0xa7dbe14ba4cc5975!2zWeG6v24gU8OgbyBIxrDGoW5nIExpw6pu!5e0!3m2!1svi!2sus!4v1754377509139!5m2!1svi!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
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
                href="https://www.facebook.com/Yensaohuonglien.Official" 
                className="text-brown-300 hover:text-white transition-colors p-2 rounded-full hover:bg-brown-700"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@huonglien.official" 
                className="text-brown-300 hover:text-white transition-colors p-2 rounded-full hover:bg-brown-700"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="tel:0783409011" 
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