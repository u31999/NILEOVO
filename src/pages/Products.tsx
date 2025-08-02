import React from 'react';
import { ArrowRight, Home, Building, Zap, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import homeRoImage from '@/assets/product-home-ro.jpg';
import commercialRoImage from '@/assets/product-commercial-ro.jpg';
import uvImage from '@/assets/product-uv.jpg';
import filtersImage from '@/assets/product-filters.jpg';

const Products: React.FC = () => {
  const { language, t } = useLanguage();

  const products = [
    {
      id: 1,
      title: t('products.home-ro.title'),
      description: t('products.home-ro.desc'),
      image: homeRoImage,
      icon: Home,
      features: language === 'en' ? [
        'Removes 99.9% of contaminants',
        'Easy installation and maintenance',
        'Compact design for homes',
        '5-stage filtration process'
      ] : [
        'يزيل 99.9% من الملوثات',
        'تركيب وصيانة سهلة',
        'تصميم مدمج للمنازل',
        'عملية تنقية من 5 مراحل'
      ],
      applications: language === 'en' ? [
        'Residential homes',
        'Small apartments',
        'Kitchen installation'
      ] : [
        'المنازل السكنية',
        'الشقق الصغيرة',
        'تركيب المطابخ'
      ]
    },
    {
      id: 2,
      title: t('products.commercial-ro.title'),
      description: t('products.commercial-ro.desc'),
      image: commercialRoImage,
      icon: Building,
      features: language === 'en' ? [
        'High-capacity water production',
        'Industrial-grade components',
        'Automated monitoring systems',
        'Scalable design options'
      ] : [
        'إنتاج مياه عالي السعة',
        'مكونات صناعية عالية الجودة',
        'أنظمة مراقبة آلية',
        'خيارات تصميم قابلة للتوسيع'
      ],
      applications: language === 'en' ? [
        'Manufacturing facilities',
        'Hotels and restaurants',
        'Schools and hospitals'
      ] : [
        'المصانع والمنشآت',
        'الفنادق والمطاعم',
        'المدارس والمستشفيات'
      ]
    },
    {
      id: 3,
      title: t('products.uv.title'),
      description: t('products.uv.desc'),
      image: uvImage,
      icon: Zap,
      features: language === 'en' ? [
        'UV-C light sterilization',
        'No chemical additives',
        'Low maintenance operation',
        'Instant water disinfection'
      ] : [
        'تعقيم بأشعة UV-C',
        'بدون إضافات كيميائية',
        'تشغيل منخفض الصيانة',
        'تطهير فوري للمياه'
      ],
      applications: language === 'en' ? [
        'Well water treatment',
        'Backup disinfection',
        'Point-of-use systems'
      ] : [
        'معالجة مياه الآبار',
        'تطهير احتياطي',
        'أنظمة نقطة الاستخدام'
      ]
    },
    {
      id: 4,
      title: t('products.filters.title'),
      description: t('products.filters.desc'),
      image: filtersImage,
      icon: Filter,
      features: language === 'en' ? [
        'Multi-stage filtration',
        'Sediment and carbon filters',
        'Long-lasting filter media',
        'Clear housing for monitoring'
      ] : [
        'تنقية متعددة المراحل',
        'فلاتر الرواسب والكربون',
        'وسائط ترشيح طويلة الأمد',
        'هيكل شفاف للمراقبة'
      ],
      applications: language === 'en' ? [
        'Pre-treatment systems',
        'Whole house filtration',
        'Commercial applications'
      ] : [
        'أنظمة المعالجة المسبقة',
        'تنقية المنزل كاملاً',
        'التطبيقات التجارية'
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('products.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Advanced water purification systems engineered for reliability, efficiency, and superior water quality across all applications.'
              : 'أنظمة تنقية المياه المتطورة المصممة للموثوقية والكفاءة وجودة المياه الفائقة عبر جميع التطبيقات.'
            }
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-card">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white p-3 rounded-full">
                    <product.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {product.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">
                    {language === 'en' ? 'Key Features:' : 'الميزات الرئيسية:'}
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">
                    {language === 'en' ? 'Applications:' : 'التطبيقات:'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, appIndex) => (
                      <span key={appIndex} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3">
                    {t('products.cta')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Section */}
        <div className="mt-20 bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {language === 'en' ? 'Our Technology' : 'تقنياتنا'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'We utilize the latest advancements in water purification technology to ensure the highest quality and reliability.'
                : 'نستخدم أحدث التطورات في تكنولوجيا تنقية المياه لضمان أعلى جودة وموثوقية.'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-primary" />
                  <span>{language === 'en' ? 'Reverse Osmosis (RO)' : 'التناضح العكسي (RO)'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Advanced membrane technology that removes dissolved solids, chemicals, and contaminants at the molecular level for ultra-pure water.'
                    : 'تقنية الأغشية المتطورة التي تزيل المواد الصلبة الذائبة والمواد الكيميائية والملوثات على المستوى الجزيئي للحصول على مياه فائقة النقاء.'
                  }
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="w-6 h-6 text-primary" />
                  <span>{language === 'en' ? 'Ultraviolet (UV) Disinfection' : 'التطهير بالأشعة فوق البنفسجية (UV)'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Chemical-free disinfection using UV-C light to eliminate bacteria, viruses, and other microorganisms without altering water taste or odor.'
                    : 'تطهير خالي من المواد الكيميائية باستخدام الأشعة فوق البنفسجية UV-C للقضاء على البكتيريا والفيروسات والكائنات الدقيقة الأخرى دون تغيير طعم أو رائحة المياه.'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Find Your Perfect Water Solution' : 'اعثر على حل المياه المثالي لك'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'en' 
              ? 'Not sure which system is right for you? Our experts will help you choose the perfect solution.'
              : 'غير متأكد من النظام المناسب لك؟ سيساعدك خبراؤنا في اختيار الحل المثالي.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg">
                {language === 'en' ? 'Get Expert Consultation' : 'احصل على استشارة خبير'}
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                {language === 'en' ? 'View Services' : 'عرض الخدمات'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;