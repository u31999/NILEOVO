import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
// add this to add navigation item product { name: t('nav.products'), href: '/products' },
  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/logo.jpg" 
                alt="NILOVO" 
                className="h-16" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <Menu className="w-4 h-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side={language === 'ar' ? 'left' : 'right'}>
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-sm font-medium transition-colors hover:text-primary ${
                          isActive(item.href)
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Floating Chatbot */}
      <div className="chatbot-float">
        <Button
          size="lg"
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => alert(t('contact.chatbot.greeting'))}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">{t('common.company')}</h3>
              <p className="text-primary-foreground/80 mb-4">
                {language === 'en' 
                  ? 'Professional water purification solutions with scientific precision for Sudan.'
                  : 'حلول احترافية لتنقية المياه بدقة علمية للسودان.'
                }
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Services' : 'الخدمات'}
              </h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>{language === 'en' ? 'System Design' : 'تصميم الأنظمة'}</li>
                <li>{language === 'en' ? 'Installation' : 'التركيب'}</li>
                <li>{language === 'en' ? 'Maintenance' : 'الصيانة'}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {language === 'en' ? 'Locations' : 'المواقع'}
              </h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>{language === 'en' ? 'Port Sudan' : 'بورتسودان'}</li>
                <li>{language === 'en' ? 'Khartoum' : 'الخرطوم'}</li>
                <li>{language === 'en' ? 'Atbara' : 'عطبرة'}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 {t('common.company')}. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;