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
    'hero.title': 'Yến Sào Hương Liên',
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
    
    // Introduction
    'intro.title': 'Về Yến Sào Hương Liên',
    'intro.subtitle': '14 năm kinh nghiệm, sản phẩm yến sào đa dạng, 100% nguyên chất, khai thác từ nhà yến uy tín, chế biến hiện đại, giữ nguyên dinh dưỡng. Giá cả hợp lý, dịch vụ chu đáo. Yến Sào Hương Liên - Lựa chọn cho sức khỏe vàng!',
    'intro.natural.title': 'Nhà Yến Hoàn Toàn Tự Nhiên',
    'intro.natural.desc': 'Nhà yến là những ngôi nhà được xây dựng hoặc cải tạo để thu hút chim yến làm tổ. Chim yến là loài chim nhỏ, có bộ lông màu nâu xám, thường sinh sống ở các đảo, hang động ven biển.',
    'intro.materials.title': 'Nguyên Liệu Cao Cấp',
    'intro.materials.desc': '100% tổ yến nguyên chất, khai thác từ nhà yến uy tín tại Khánh Hòa. Tổ yến được chọn lọc kỹ lưỡng, đảm bảo chất lượng cao nhất. Không sử dụng chất bảo quản, hóa chất độc hại.',
    'intro.processing.title': 'Chế Biến Hiện Đại',
    'intro.processing.desc': 'Quy trình chế biến khép kín, đảm bảo vệ sinh an toàn thực phẩm. Sản phẩm được kiểm nghiệm chất lượng nghiêm ngặt trước khi xuất xưởng.',
    'intro.variety.title': 'Đa Dạng Sản Phẩm',
    'intro.variety.desc': 'Cung cấp đầy đủ các loại yến sào như: yến sào nguyên tổ, yến sào tinh chế, yến sào rút lông, yến sào vụn, yến sào chưng sẵn,...',
    'intro.price.title': 'Giá Cả Hợp Lý',
    'intro.price.desc': 'Giá cả cạnh tranh so với các sản phẩm yến sào trên thị trường. Cung cấp nhiều chương trình khuyến mãi hấp dẫn cho khách hàng.',

    // Footer
    'footer.description': 'Chuyên cung cấp các sản phẩm yến sào cao cấp, chất lượng nhất tại Việt Nam. Cam kết mang đến những sản phẩm tự nhiên, an toàn cho sức khỏe.',
    'footer.address': 'Lô 7LK39, Đ. Số 2 Đường Phong Châu, KĐT Mỹ Gia, Phường Nam Nha Trang, Khánh Hòa',
    'footer.quicklinks': 'Liên Kết Nhanh',
    'footer.support': 'Hỗ Trợ',
    'footer.warranty': 'Chính Sách Bảo Hành',
    'footer.guide': 'Hướng Dẫn Sử Dụng',
    'footer.return': 'Chính Sách Đổi Trả',
    'footer.faq': 'Câu Hỏi Thường Gặp',
    'footer.social': 'Theo Dõi Chúng Tôi',
    'footer.copyright': '© 2024 Yến Sào Hương Liên. Tất cả quyền được bảo lưu.',
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
    
    // Introduction
    'intro.title': 'About Yen Sao Huong Lien',
    'intro.subtitle': '14 years of experience, diverse bird\'s nest products, 100% pure, sourced from reputable swiftlet houses, modern processing, preserving nutrition. Reasonable prices, thoughtful service. Yen Sao Huong Lien - The golden choice for health!',
    'intro.natural.title': 'Completely Natural Swiftlet Houses',
    'intro.natural.desc': 'Swiftlet houses are buildings constructed or modified to attract swiftlets to build nests. Swiftlets are small birds with brown-gray feathers, typically living on islands and coastal caves.',
    'intro.materials.title': 'Premium Ingredients',
    'intro.materials.desc': '100% pure bird\'s nest, sourced from reputable swiftlet houses in Khanh Hoa. Bird\'s nests are carefully selected to ensure the highest quality. No preservatives or harmful chemicals used.',
    'intro.processing.title': 'Modern Processing',
    'intro.processing.desc': 'Closed processing system ensuring food safety and hygiene. Products undergo strict quality testing before leaving the factory.',
    'intro.variety.title': 'Diverse Products',
    'intro.variety.desc': 'We provide a full range of bird\'s nest products including: whole bird\'s nest, refined bird\'s nest, cleaned bird\'s nest, bird\'s nest fragments, ready-to-eat bird\'s nest...',
    'intro.price.title': 'Reasonable Prices',
    'intro.price.desc': 'Competitive prices compared to other bird\'s nest products in the market. We offer many attractive promotional programs for customers.',

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
    'footer.address': 'Lô 7LK39, Đ. Số 2 Đường Phong Châu, KĐT Mỹ Gia, Phường Nam Nha Trang, Khánh Hòa',
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