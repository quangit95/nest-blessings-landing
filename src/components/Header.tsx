import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Trang Chủ", href: "#home" },
    { name: "Giới Thiệu", href: "#introduction" },
    { name: "Sản Phẩm", href: "#products" },
    { name: "Liên Hệ", href: "#contact" }
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
            <span className="text-xl font-bold text-brown-800">Yến Nest</span>
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

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="premium" size="lg">
              Đặt Hàng Ngay
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
              <Button variant="premium" size="lg" className="mt-4">
                Đặt Hàng Ngay
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;