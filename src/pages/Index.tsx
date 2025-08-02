import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Wrench, 
  Shield, 
  Microscope, 
  Building2, 
  Home, 
  MessageCircle, 
  Phone,
  MapPin,
  Award,
  Users,
  CheckCircle
} from 'lucide-react';

const Index = () => {
  const { language, t } = useLanguage();

  const services = [
    {
      icon: <Microscope className="w-8 h-8 text-brand-cyan" />,
      title: t('services.design.title'),
      description: t('services.design.desc')
    },
    {
      icon: <Wrench className="w-8 h-8 text-brand-cyan" />,
      title: t('services.installation.title'),
      description: t('services.installation.desc')
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-cyan" />,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc')
    }
  ];

  const technologies = [
    {
      icon: <Droplets className="w-12 h-12 text-brand-blue" />,
      title: t('tech.ro.title'),
      description: t('tech.ro.desc')
    },
    {
      icon: <Shield className="w-12 h-12 text-brand-cyan" />,
      title: t('tech.uv.title'),
      description: t('tech.uv.desc')
    },
    {
      icon: <Building2 className="w-12 h-12 text-brand-steel" />,
      title: t('tech.commercial.title'),
      description: t('tech.commercial.desc')
    }
  ];

  const stats = [
    { number: t('stats.experience'), label: t('stats.experience.label'), icon: <Award className="w-6 h-6" /> },
    { number: t('stats.systems'), label: t('stats.systems.label'), icon: <CheckCircle className="w-6 h-6" /> },
    { number: t('stats.cities'), label: t('stats.cities.label'), icon: <MapPin className="w-6 h-6" /> },
    { number: t('stats.satisfaction'), label: t('stats.satisfaction.label'), icon: <Users className="w-6 h-6" /> }
  ];

  const locations = [
    t('contact.port-sudan'),
    t('contact.khartoum'),
    t('contact.atbara')
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-background min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto fade-in">
            {/* Brand Name */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {t('brand.full')}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue mx-auto"></div>
            </div>
            
            {/* Hero Content */}
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-4 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <p className="text-brand-cyan font-medium mb-8">
              {t('hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero px-8 py-4 text-lg">
                  {t('hero.cta.quote')}
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" className="btn-secondary-hero px-8 py-4 text-lg">
                  {t('hero.cta.products')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-background to-brand-blue-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-steel-dark mb-4">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-steel-dark mb-4">
                    {service.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 metallic-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-steel-dark mb-8">
              {t('about.title')}
            </h2>
            <p className="text-lg text-brand-gray mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-brand-steel font-medium">
              {t('about.expertise')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-cyan">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('stats.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-brand-silver-light to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-steel-dark mb-4">
              {t('tech.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="card-metallic hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-steel-dark mb-4">
                    {tech.title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed">
                    {tech.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-background">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              {t('cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero px-8 py-4 text-lg">
                  {t('cta.quote')}
                </Button>
              </Link>
              <Button variant="outline" className="btn-secondary-hero px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                {t('cta.call')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-background to-brand-blue-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-steel-dark mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-brand-gray text-lg">
              {t('contact.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* WhatsApp Section */}
            <Card className="card-elegant">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-brand-steel-dark mb-4">
                  {t('contact.whatsapp')}
                </h3>
                <p className="text-brand-gray mb-6">
                  {t('contact.whatsapp.desc')}
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Chat
                </Button>
              </CardContent>
            </Card>
            
            {/* Locations */}
            <Card className="card-elegant">
              <CardContent className="p-8">
                <MapPin className="w-16 h-16 text-brand-cyan mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-brand-steel-dark mb-4 text-center">
                  {t('contact.locations')}
                </h3>
                <div className="space-y-3">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 text-brand-gray">
                      <MapPin className="w-4 h-4 text-brand-cyan" />
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="chatbot-float">
        <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white p-4">
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>

      {/* Floating Quote Button */}
      <div className="fixed bottom-2 left-2 rtl:left-auto rtl:right-2 z-50">
        <Link to="/contact">
          <Button className="btn-hero rounded-full px-6 py-3 shadow-glow">
            <Phone className="w-5 h-5 mr-2" />
            {t('hero.cta.quote')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;