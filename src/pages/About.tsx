import React from 'react';
import { Award, Users, MapPin, Clock, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { language, t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: language === 'en' ? 'Scientific Excellence' : 'التميز العلمي',
      description: language === 'en' 
        ? 'Every solution is backed by rigorous scientific analysis and testing'
        : 'كل حل مدعوم بتحليل واختبار علمي دقيق'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Professional Service' : 'خدمة مهنية',
      description: language === 'en' 
        ? 'Our certified team delivers excellence in every project'
        : 'فريقنا المعتمد يقدم التميز في كل مشروع'
    },
    {
      icon: Clock,
      title: language === 'en' ? 'Reliable Support' : 'دعم موثوق',
      description: language === 'en' 
        ? '24/7 maintenance and emergency response for peace of mind'
        : 'صيانة ودعم طارئ على مدار الساعة لطمأنة البال'
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Innovation' : 'الابتكار',
      description: language === 'en' 
        ? 'Cutting-edge technology for superior water treatment solutions'
        : 'تكنولوجيا متطورة لحلول معالجة المياه الفائقة'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: language === 'en' ? 'Company Founded' : 'تأسيس الشركة',
      description: language === 'en' 
        ? 'NILEVO established with a vision for pure water solutions'
        : 'تأسست نيليفو برؤية لحلول المياه النقية'
    },
    {
      year: '2019',
      title: language === 'en' ? 'Port Sudan Expansion' : 'التوسع في بورتسودان',
      description: language === 'en' 
        ? 'Opened first regional office serving Red Sea State'
        : 'افتتاح أول مكتب إقليمي يخدم ولاية البحر الأحمر'
    },
    {
      year: '2021',
      title: language === 'en' ? 'Commercial Division' : 'القسم التجاري',
      description: language === 'en' 
        ? 'Launched commercial and industrial water treatment services'
        : 'إطلاق خدمات معالجة المياه التجارية والصناعية'
    },
    {
      year: '2023',
      title: language === 'en' ? 'Technology Upgrade' : 'تطوير التكنولوجيا',
      description: language === 'en' 
        ? 'Integrated latest RO and UV technologies for enhanced efficiency'
        : 'دمج أحدث تقنيات RO و UV لتحسين الكفاءة'
    },
    {
      year: '2024',
      title: language === 'en' ? 'Service Excellence' : 'التميز في الخدمة',
      description: language === 'en' 
        ? 'Achieved 99% customer satisfaction across all service areas'
        : 'تحقيق رضا العملاء بنسبة 99% في جميع مناطق الخدمة'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: language === 'en' ? 'Projects Completed' : 'مشروع مكتمل'
    },
    {
      number: '6',
      label: language === 'en' ? 'Years Experience' : 'سنوات خبرة'
    },
    {
      number: '3',
      label: language === 'en' ? 'Cities Served' : 'مدن نخدمها'
    },
    {
      number: '24/7',
      label: language === 'en' ? 'Support Available' : 'دعم متاح'
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('about.desc')}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {language === 'en' ? 'Our Core Values' : 'قيمنا الأساسية'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center h-full">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section 
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {language === 'en' ? 'Our Journey' : 'رحلتنا'}
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <div className="text-2xl font-bold text-primary">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-6 relative">
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 w-0.5 h-16 bg-primary/30 transform -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
*/}
        {/* Location Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {language === 'en' ? 'Where We Serve' : 'أين نخدم'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elegant text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>{language === 'en' ? 'Port Sudan' : 'بورتسودان'}</CardTitle>
                <p className="text-muted-foreground">
                  {language === 'en' ? 'Red Sea State' : 'ولاية البحر الأحمر'}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Serving coastal communities with specialized desalination and purification systems'
                    : 'خدمة المجتمعات الساحلية بأنظمة تحلية وتنقية متخصصة'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>{language === 'en' ? 'Khartoum' : 'الخرطوم'}</CardTitle>
                <p className="text-muted-foreground">
                  {language === 'en' ? 'Capital Region' : 'المنطقة العاصمة'}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Advanced urban and industrial water treatment solutions for the capital'
                    : 'حلول متطورة لمعالجة المياه الحضرية والصناعية للعاصمة'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>{language === 'en' ? 'Atbara' : 'عطبرة'}</CardTitle>
                <p className="text-muted-foreground">
                  {language === 'en' ? 'River Nile State' : 'ولاية نهر النيل'}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Comprehensive water treatment for residential and commercial applications'
                    : 'معالجة شاملة للمياه للتطبيقات السكنية والتجارية'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-secondary/50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === 'en' ? 'Our Expert Team' : 'فريق الخبراء لدينا'}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Our certified engineers and technicians bring years of experience and scientific expertise to every project, ensuring the highest standards of water treatment excellence.'
                : 'يجلب مهندسونا وفنيونا المعتمدون سنوات من الخبرة والخبرة العلمية لكل مشروع، مما يضمن أعلى معايير التميز في معالجة المياه.'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">
                  {language === 'en' ? 'Certified Engineers' : 'مهندسون معتمدون'}
                </div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">
                  {language === 'en' ? 'Quality Assurance' : 'ضمان الجودة'}
                </div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">
                  {language === 'en' ? 'Continuous Training' : 'تدريب مستمر'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Ready to Work With Us?' : 'مستعد للعمل معنا؟'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'en' 
              ? 'Join hundreds of satisfied customers who trust NILEVO for their water treatment needs.'
              : 'انضم إلى مئات العملاء الراضين الذين يثقون في نيليفو لاحتياجات معالجة المياه.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
                {language === 'en' ? 'Start Your Project' : 'ابدأ مشروعك'}
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white text-primary hover:bg-white hover:text-primary px-8 py-4 text-lg">
                {language === 'en' ? 'Our Services' : 'خدماتنا'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;