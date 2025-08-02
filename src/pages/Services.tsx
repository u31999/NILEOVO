import React from 'react';
import { Wrench, Droplet, Shield, Clock, MapPin, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { language, t } = useLanguage();

  const services = [
    {
      icon: Wrench,
      title: t('services.design.title'),
      description: t('services.design.desc'),
      features: language === 'en' ? [
        'Water quality analysis',
        'Custom system specifications',
        'Capacity planning',
        'Cost-effective solutions'
      ] : [
        'تحليل جودة المياه',
        'مواصفات نظام مخصصة',
        'تخطيط السعة',
        'حلول اقتصادية'
      ]
    },
    {
      icon: Shield,
      title: t('services.installation.title'),
      description: t('services.installation.desc'),
      features: language === 'en' ? [
        'Certified engineers',
        'Quality components',
        'Professional standards',
        'Safety protocols'
      ] : [
        'مهندسون معتمدون',
        'مكونات عالية الجودة',
        'معايير مهنية',
        'بروتوكولات الأمان'
      ]
    },
    {
      icon: Clock,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      features: language === 'en' ? [
        'Regular maintenance',
        'Emergency repairs',
        'Replacement parts',
        '24/7 support'
      ] : [
        'صيانة دورية',
        'إصلاحات طارئة',
        'قطع غيار',
        'دعم على مدار الساعة'
      ]
    }
  ];

  const locations = [
    {
      city: language === 'en' ? 'Port Sudan' : 'بورتسودان',
      region: language === 'en' ? 'Red Sea State' : 'ولاية البحر الأحمر',
      description: language === 'en' ? 'Complete water treatment solutions for coastal communities' : 'حلول شاملة لمعالجة المياه للمجتمعات الساحلية'
    },
    {
      city: language === 'en' ? 'Khartoum' : 'الخرطوم',
      region: language === 'en' ? 'Capital Region' : 'المنطقة العاصمة',
      description: language === 'en' ? 'Advanced purification systems for urban and industrial use' : 'أنظمة تنقية متطورة للاستخدام الحضري والصناعي'
    },
    {
      city: language === 'en' ? 'Atbara' : 'عطبرة',
      region: language === 'en' ? 'River Nile State' : 'ولاية نهر النيل',
      description: language === 'en' ? 'Reliable water treatment for residential and commercial needs' : 'معالجة مياه موثوقة للاحتياجات السكنية والتجارية'
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Comprehensive water treatment services from design to maintenance, backed by scientific expertise and professional excellence.'
              : 'خدمات شاملة لمعالجة المياه من التصميم إلى الصيانة، مدعومة بالخبرة العلمية والتميز المهني.'
            }
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="card-elegant h-full">
              <CardHeader className="text-center">
                <service.icon className="w-16 h-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 mb-20 text-center">
          <Award className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary mb-4">
            {language === 'en' ? 'Our Scientific Commitment' : 'التزامنا العلمي'}
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            {t('services.commitment')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Purification Efficiency' : 'كفاءة التنقية'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Emergency Response' : 'الاستجابة الطارئة'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">
                {language === 'en' ? 'Satisfied Clients' : 'عميل راضي'}
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {language === 'en' ? 'Our Service Areas' : 'مناطق خدماتنا'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{location.city}</CardTitle>
                  <p className="text-muted-foreground">{location.region}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    {location.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Ready to Get Started?' : 'مستعد للبدء؟'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'en' 
              ? 'Contact our team for a professional consultation and custom solution.'
              : 'اتصل بفريقنا للحصول على استشارة مهنية وحل مخصص.'
            }
          </p>
          <Link to="/contact">
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
              {language === 'en' ? 'Get Free Consultation' : 'احصل على استشارة مجانية'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;