import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    // Header
    'nav.home': 'Trang Chủ',
    'nav.introduction': 'Giới Thiệu',
    'nav.products': 'Sản Phẩm',
    'nav.contact': 'Liên Hệ',
    'nav.cta': 'Liên Hệ Ngay',
    
    // Hero
    'hero.title': 'Yến Nest',
    'hero.slogan': 'Thượng phẩm thiên nhiên – Sức khỏe vẹn toàn',
    'hero.description': 'Khám phá bộ sưu tập yến sào cao cấp được chế biến từ những tổ yến tự nhiên chất lượng nhất. Mang đến cho bạn nguồn dinh dưỡng quý giá cho sức khỏe và sắc đẹp.',
    'hero.explore': 'Khám Phá Sản Phẩm',
    'hero.learn': 'Tìm Hiểu Thêm',
    
    // Products
    'products.title': 'Sản Phẩm Yến Sào Cao Cấp',
    'products.subtitle': 'Chúng tôi tự hào mang đến những sản phẩm yến sào chất lượng cao, được chế biến theo quy trình khép kín và đảm bảo an toàn thực phẩm.',
    'products.buynow': 'Mua Ngay',
    'products.premium.name': 'Yến Sào Cao Cấp',
    'products.premium.desc': 'Tổ yến nguyên chất 100%, được thu hoạch từ những hang động tự nhiên, giàu protein và collagen.',
    'products.soup.name': 'Súp Yến Sào Truyền Thống',
    'products.soup.desc': 'Súp yến sào nấu sẵn với công thức truyền thống, tiện lợi và giữ nguyên hương vị tự nhiên.',
    'products.dried.name': 'Yến Sào Khô Nguyên Tổ',
    'products.dried.desc': 'Yến sào khô nguyên tổ, bảo quản tự nhiên, phù hợp để tự chế biến theo sở thích.',
    'products.essence.name': 'Tinh Chất Yến Sào',
    'products.essence.desc': 'Tinh chất yến sào cô đặc, dễ hấp thụ, thích hợp cho người bận rộn.',
    
    // Reviews
    'reviews.title': 'Khách Hàng Nói Gì',
    'reviews.subtitle': 'Những phản hồi chân thực từ khách hàng đã tin tưởng và sử dụng sản phẩm của chúng tôi',
    'reviews.review1': 'Sản phẩm yến sào ở đây thật sự chất lượng! Tôi đã sử dụng được 3 tháng và cảm thấy da dẻ khỏe mạnh hơn rất nhiều. Sẽ tiếp tục ủng hộ.',
    'reviews.review2': 'Súp yến sào của shop rất ngon và tiện lợi. Đóng gói cẩn thận, giao hàng nhanh. Cả nhà tôi đều rất thích.',
    'reviews.review3': 'Lần đầu mua yến sào và được tư vấn rất nhiệt tình. Sản phẩm đúng như mô tả, chất lượng tuyệt vời.',
    'reviews.customer1': 'Chị Lan Anh',
    'reviews.customer2': 'Anh Minh Tuấn',
    'reviews.customer3': 'Chị Thu Hà',
    'reviews.location1': 'Hà Nội',
    'reviews.location2': 'TP. Hồ Chí Minh',
    'reviews.location3': 'Đà Nẵng',
    
    // Footer
    'footer.description': 'Chuyên cung cấp các sản phẩm yến sào cao cấp, chất lượng nhất tại Việt Nam. Cam kết mang đến những sản phẩm tự nhiên, an toàn cho sức khỏe.',
    'footer.address': '123 Đường ABC, Quận 1, TP. Hồ Chí Minh',
    'footer.quicklinks': 'Liên Kết Nhanh',
    'footer.support': 'Hỗ Trợ',
    'footer.warranty': 'Chính Sách Bảo Hành',
    'footer.guide': 'Hướng Dẫn Sử Dụng',
    'footer.return': 'Chính Sách Đổi Trả',
    'footer.faq': 'Câu Hỏi Thường Gặp',
    'footer.social': 'Theo Dõi Chúng Tôi',
    'footer.copyright': '© 2024 Yến Nest. Tất cả quyền được bảo lưu.',
    'footer.dev': 'Website được phát triển bởi Lovable'
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.introduction': 'About',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact Now',
    
    // Hero
    'hero.title': 'Bird Nest',
    'hero.slogan': 'Nature\'s Premium Gift – Complete Health',
    'hero.description': 'Discover our premium bird\'s nest collection processed from the highest quality natural nests. Bringing you precious nutrition for health and beauty.',
    'hero.explore': 'Explore Products',
    'hero.learn': 'Learn More',
    
    // Products
    'products.title': 'Premium Bird\'s Nest Products',
    'products.subtitle': 'We pride ourselves on providing high-quality bird\'s nest products, processed through a closed process and ensuring food safety.',
    'products.buynow': 'Buy Now',
    'products.premium.name': 'Premium Bird\'s Nest',
    'products.premium.desc': '100% pure bird\'s nest, harvested from natural caves, rich in protein and collagen.',
    'products.soup.name': 'Traditional Bird\'s Nest Soup',
    'products.soup.desc': 'Ready-made bird\'s nest soup with traditional recipe, convenient and preserves natural flavor.',
    'products.dried.name': 'Whole Dried Bird\'s Nest',
    'products.dried.desc': 'Whole dried bird\'s nest, naturally preserved, suitable for cooking according to preference.',
    'products.essence.name': 'Bird\'s Nest Essence',
    'products.essence.desc': 'Concentrated bird\'s nest essence, easy to absorb, suitable for busy people.',
    
    // Reviews
    'reviews.title': 'What Customers Say',
    'reviews.subtitle': 'Authentic feedback from customers who have trusted and used our products',
    'reviews.review1': 'The bird\'s nest products here are truly quality! I have been using it for 3 months and feel my skin is much healthier. Will continue to support.',
    'reviews.review2': 'The shop\'s bird\'s nest soup is very delicious and convenient. Carefully packaged, fast delivery. My whole family loves it.',
    'reviews.review3': 'First time buying bird\'s nest and received very enthusiastic advice. Product is as described, excellent quality.',
    'reviews.customer1': 'Ms. Lan Anh',
    'reviews.customer2': 'Mr. Minh Tuan',
    'reviews.customer3': 'Ms. Thu Ha',
    'reviews.location1': 'Hanoi',
    'reviews.location2': 'Ho Chi Minh City',
    'reviews.location3': 'Da Nang',
    
    // Footer
    'footer.description': 'Specializing in providing premium, highest quality bird\'s nest products in Vietnam. Committed to bringing natural, health-safe products.',
    'footer.address': '123 ABC Street, District 1, Ho Chi Minh City',
    'footer.quicklinks': 'Quick Links',
    'footer.support': 'Support',
    'footer.warranty': 'Warranty Policy',
    'footer.guide': 'Usage Guide',
    'footer.return': 'Return Policy',
    'footer.faq': 'FAQ',
    'footer.social': 'Follow Us',
    'footer.copyright': '© 2024 Bird Nest. All rights reserved.',
    'footer.dev': 'Website developed by Lovable'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};