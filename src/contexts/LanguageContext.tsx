import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.products': 'Products',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    
    // Brand
    'brand.name': 'NILEOVO',
    'brand.arabic': 'نيليوفو',
    'brand.full': 'نيليوفو | NILEOVO',
    
    // Hero Section
    'hero.title': 'Advanced Water Treatment Solutions',
    'hero.subtitle': 'Professional RO & UV Water Purification Systems for Residential & Commercial Applications',
    'hero.description': 'Serving Port Sudan, Khartoum & Atbara with cutting-edge water treatment technology',
    'hero.cta.quote': 'Get Quote',
    'hero.cta.products': 'Our Products',
    
    // Services Section
    'services.title': 'خدماتنا | Our Services',
    'services.design.title': 'System Design & Engineering',
    'services.design.desc': 'Custom water treatment solutions tailored to your specific needs and water quality requirements',
    'services.installation.title': 'Professional Installation',
    'services.installation.desc': 'Expert installation by certified technicians with quality assurance and testing',
    'services.maintenance.title': 'Maintenance & Support',
    'services.maintenance.desc': 'Comprehensive maintenance programs and 24/7 technical support services',
    
    // About Section
    'about.title': 'من نحن | About Us',
    'about.description': 'NILEOVO is a leading water treatment company specializing in advanced Reverse Osmosis (RO) and Ultraviolet (UV) purification technologies. We provide comprehensive solutions for residential and commercial sectors across Sudan.',
    'about.expertise': 'Our scientific approach and high-level expertise ensure optimal water quality for your health and business needs.',
    
    // Stats
    'stats.title': 'Our Excellence',
    'stats.experience': '15+',
    'stats.experience.label': 'Years of Excellence',
    'stats.systems': '2000+',
    'stats.systems.label': 'Systems Installed',
    'stats.cities': '3',
    'stats.cities.label': 'Major Cities',
    'stats.satisfaction': '99.9%',
    'stats.satisfaction.label': 'Customer Satisfaction',
    
    // Technology Section
    'tech.title': 'Advanced Technologies',
    'tech.ro.title': 'RO Systems',
    'tech.ro.desc': 'Advanced Reverse Osmosis technology for complete water purification',
    'tech.uv.title': 'UV Sterilization',
    'tech.uv.desc': 'Ultraviolet disinfection for microbiologically safe water',
    'tech.commercial.title': 'Commercial Solutions',
    'tech.commercial.desc': 'Large-scale water treatment for businesses and institutions',
    
    // CTA Section
    'cta.title': 'Ready for Pure Water?',
    'cta.description': 'Contact us today for a free consultation and customized water treatment solution',
    'cta.quote': 'Get Free Quote',
    'cta.call': 'Call Now',
    
    // Contact
    'contact.title': 'اتصل بنا | Contact Us',
    'contact.description': 'Get in touch with our water treatment experts',
    'contact.whatsapp': 'WhatsApp Assistant',
    'contact.whatsapp.desc': 'Chat with our automated assistant for quick answers',
    'contact.locations': 'Service Areas',
    'contact.port-sudan': 'Port Sudan',
    'contact.khartoum': 'Khartoum',
    'contact.atbara': 'Atbara',
    
    // Footer
    'footer.company': 'NILEOVO Water Treatment Systems',
    'footer.tagline': 'Pure Water. Advanced Technology. Trusted Service.',
    'footer.rights': 'All rights reserved',
    
    // Common
    'common.learn-more': 'Learn More',
    'common.loading': 'Loading...',
    'common.error': 'Error occurred',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    
    // Brand
    'brand.name': 'نيليوفو',
    'brand.arabic': 'نيليوفو',
    'brand.full': 'نيليوفو | NILEOVO',
    
    // Hero Section
    'hero.title': 'حلول متقدمة لمعالجة المياه',
    'hero.subtitle': 'أنظمة تنقية المياه المتخصصة RO و UV للتطبيقات السكنية والتجارية',
    'hero.description': 'نخدم بورتسودان والخرطوم وعطبرة بأحدث تقنيات معالجة المياه',
    'hero.cta.quote': 'احصل على عرض',
    'hero.cta.products': 'منتجاتنا',
    
    // Services Section
    'services.title': 'خدماتنا | Our Services',
    'services.design.title': 'تصميم وهندسة الأنظمة',
    'services.design.desc': 'حلول معالجة المياه المخصصة حسب احتياجاتك ومتطلبات جودة المياه الخاصة بك',
    'services.installation.title': 'التركيب المهني',
    'services.installation.desc': 'تركيب احترافي بواسطة فنيين معتمدين مع ضمان الجودة والاختبار',
    'services.maintenance.title': 'الصيانة والدعم',
    'services.maintenance.desc': 'برامج صيانة شاملة وخدمات دعم فني على مدار الساعة',
    
    // About Section
    'about.title': 'من نحن | About Us',
    'about.description': 'نيليوفو هي شركة رائدة في معالجة المياه متخصصة في تقنيات التنقية المتقدمة للتناضح العكسي (RO) والأشعة فوق البنفسجية (UV). نحن نقدم حلولاً شاملة للقطاعات السكنية والتجارية في جميع أنحاء السودان.',
    'about.expertise': 'نهجنا العلمي وخبرتنا عالية المستوى يضمنان جودة مياه مثلى لصحتك واحتياجات عملك.',
    
    // Stats
    'stats.title': 'تميزنا',
    'stats.experience': '+15',
    'stats.experience.label': 'سنة من التميز',
    'stats.systems': '+2000',
    'stats.systems.label': 'نظام مركب',
    'stats.cities': '3',
    'stats.cities.label': 'مدن رئيسية',
    'stats.satisfaction': '%99.9',
    'stats.satisfaction.label': 'رضا العملاء',
    
    // Technology Section
    'tech.title': 'التقنيات المتقدمة',
    'tech.ro.title': 'أنظمة التناضح العكسي',
    'tech.ro.desc': 'تقنية التناضح العكسي المتقدمة لتنقية المياه الكاملة',
    'tech.uv.title': 'التعقيم بالأشعة فوق البنفسجية',
    'tech.uv.desc': 'التطهير بالأشعة فوق البنفسجية للمياه الآمنة ميكروبيولوجياً',
    'tech.commercial.title': 'الحلول التجارية',
    'tech.commercial.desc': 'معالجة المياه واسعة النطاق للشركات والمؤسسات',
    
    // CTA Section
    'cta.title': 'مستعد للمياه النقية؟',
    'cta.description': 'اتصل بنا اليوم للحصول على استشارة مجانية وحل معالجة مياه مخصص',
    'cta.quote': 'احصل على عرض مجاني',
    'cta.call': 'اتصل الآن',
    
    // Contact
    'contact.title': 'اتصل بنا | Contact Us',
    'contact.description': 'تواصل مع خبراء معالجة المياه لدينا',
    'contact.whatsapp': 'مساعد واتساب',
    'contact.whatsapp.desc': 'تحدث مع مساعدنا الآلي للحصول على إجابات سريعة',
    'contact.locations': 'مناطق الخدمة',
    'contact.port-sudan': 'بورتسودان',
    'contact.khartoum': 'الخرطوم',
    'contact.atbara': 'عطبرة',
    
    // Footer
    'footer.company': 'نيليوفو لأنظمة معالجة المياه',
    'footer.tagline': 'مياه نقية. تقنية متقدمة. خدمة موثوقة.',
    'footer.rights': 'جميع الحقوق محفوظة',
    
    // Common
    'common.learn-more': 'اعرف أكثر',
    'common.loading': 'جار التحميل...',
    'common.error': 'حدث خطأ',
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'font-arabic' : 'font-english'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};