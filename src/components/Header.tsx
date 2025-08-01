import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.introduction'), href: "#introduction" },
    { name: t('nav.products'), href: "#products" },
    { name: t('nav.contact'), href: "#contact" }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-brown-200 sticky top-0 z-50 shadow-[var(--shadow-soft)]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brown-500 to-brown-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">YN</span>
            </div>
            <span className="text-xl font-bold text-brown-800">Yến Sào Hương Liên</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-brown-700 hover:text-brown-800 font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="premium" size="lg">
              {t('nav.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brown-700 hover:text-brown-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-brown-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-brown-700 hover:text-brown-800 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              <Button variant="premium" size="lg" className="mt-4">
                {t('nav.cta')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;