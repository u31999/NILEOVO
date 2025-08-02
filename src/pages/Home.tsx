import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Shield, Zap, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-water-system.jpg';

const Home: React.FC = () => {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Droplet,
      title: language === 'en' ? 'Pure Water' : 'مياه نقية',
      description: language === 'en' ? 'Advanced RO & UV technology' : 'تقنيات RO و UV المتطورة'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Certified Quality' : 'جودة معتمدة',
      description: language === 'en' ? 'Scientific precision & safety' : 'دقة علمية وأمان'
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Fast Installation' : 'تركيب سريع',
      description: language === 'en' ? 'Professional certified engineers' : 'مهندسون محترفون معتمدون'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Expert Support' : 'دعم الخبراء',
      description: language === 'en' ? '24/7 maintenance & service' : 'صيانة وخدمة على مدار الساعة'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/lovable-uploads/dba89903-7b20-4b12-93b0-5bb9ec5375f4.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero text-lg px-8 py-4">
                  {t('hero.cta.quote')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
         
              <Link to="/products">
                <Button className="btn-secondary-hero text-lg px-8 py-4">
                  {t('hero.cta.products')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'en' ? 'Why Choose NILEVO?' : 'لماذا نيليفو؟'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Scientific expertise meets professional service for the purest water solutions'
                : 'الخبرة العلمية تلتقي بالخدمة المهنية لأنقى حلول المياه'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant text-center p-6 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            {language === 'en' ? 'Why Choose NILEVO?' : 'لماذا تختار NILEVO؟'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="fade-in" style={{ animationDelay: '0.1s' }}>
              <p className="text-4xl font-extrabold text-accent">15+</p>
              <p className="mt-2 text-white/90">
                {language === 'en' ? 'Years of Experience' : 'سنة من الخبرة'}
              </p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-4xl font-extrabold text-accent">300+</p>
              <p className="mt-2 text-white/90">
                {language === 'en' ? 'RO Systems Installed' : 'أنظمة RO تم تركيبها'}
              </p>
            </div>
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-4xl font-extrabold text-accent">3</p>
              <p className="mt-2 text-white/90">
                {language === 'en' ? 'Cities Served' : 'مدن مخدومة'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {t('services.title')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('services.design.title')}</h3>
                    <p className="text-muted-foreground">{t('services.design.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('services.installation.title')}</h3>
                    <p className="text-muted-foreground">{t('services.installation.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('services.maintenance.title')}</h3>
                    <p className="text-muted-foreground">{t('services.maintenance.desc')}</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/services">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
                    {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {language === 'en' ? 'Scientific Commitment' : 'الالتزام العلمي'}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {t('services.commitment')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'en' ? 'Ready for Pure Water?' : 'مستعد للمياه النقية؟'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'en' 
              ? 'Contact us today for a free consultation and quote'
              : 'اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
                {t('hero.cta.quote')}
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                {t('hero.cta.products')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;