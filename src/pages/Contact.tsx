import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: language === 'en' ? 'Message Sent!' : 'تم إرسال الرسالة!',
      description: language === 'en' 
        ? 'We will contact you within 24 hours.' 
        : 'سنتواصل معك خلال 24 ساعة.',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'en' ? 'Phone' : 'الهاتف',
      details: ['+249 123 456 789', '+249 987 654 321'],
      action: language === 'en' ? 'Call Now' : 'اتصل الآن'
    },
    {
      icon: Mail,
      title: language === 'en' ? 'Email' : 'البريد الإلكتروني',
      details: ['info@nilevo.com', 'support@nilevo.com'],
      action: language === 'en' ? 'Send Email' : 'إرسال إيميل'
    },
    {
      icon: MessageCircle,
      title: language === 'en' ? 'WhatsApp' : 'واتساب',
      details: ['+249 123 456 789'],
      action: language === 'en' ? 'Chat Now' : 'ابدأ المحادثة'
    }
  ];

  const offices = [
    {
      city: language === 'en' ? 'Khartoum Office' : 'مكتب الخرطوم',
      address: language === 'en' 
        ? 'Al-Riyadh District, Khartoum, Sudan'
        : 'حي الرياض، الخرطوم، السودان',
      hours: language === 'en' ? 'Sun-Thu: 8AM-6PM' : 'الأحد-الخميس: 8ص-6م'
    },
    {
      city: language === 'en' ? 'Port Sudan Office' : 'مكتب بورتسودان',
      address: language === 'en' 
        ? 'Commercial District, Port Sudan, Sudan'
        : 'الحي التجاري، بورتسودان، السودان',
      hours: language === 'en' ? 'Sun-Thu: 8AM-6PM' : 'الأحد-الخميس: 8ص-6م'
    },
    {
      city: language === 'en' ? 'Atbara Office' : 'مكتب عطبرة',
      address: language === 'en' 
        ? 'Central District, Atbara, Sudan'
        : 'الحي المركزي، عطبرة، السودان',
      hours: language === 'en' ? 'Sun-Thu: 8AM-6PM' : 'الأحد-الخميس: 8ص-6م'
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Get in touch with our water treatment experts. We\'re here to help you find the perfect solution for your needs.'
              : 'تواصل مع خبراء معالجة المياه لدينا. نحن هنا لمساعدتك في العثور على الحل المثالي لاحتياجاتك.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Send className="w-6 h-6 text-primary" />
                <span>{language === 'en' ? 'Send Us a Message' : 'أرسل لنا رسالة'}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('contact.form.name')}</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder={language === 'en' ? 'Your full name' : 'اسمك الكامل'}
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t('contact.form.email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder={language === 'en' ? 'your@email.com' : 'your@email.com'}
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 min-h-[120px]"
                    placeholder={language === 'en' ? 'Tell us about your water treatment needs...' : 'أخبرنا عن احتياجاتك لمعالجة المياه...'}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    language === 'en' ? 'Sending...' : 'جارٍ الإرسال...'
                  ) : (
                    <>
                      {t('contact.form.submit')}
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <info.icon className="w-6 h-6 text-primary" />
                    <span>{info.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onClick={() => {
                      toast({
                        title: language === 'en' ? 'Contact Info' : 'معلومات الاتصال',
                        description: language === 'en' 
                          ? 'Click to copy or use your preferred app' 
                          : 'انقر للنسخ أو استخدم التطبيق المفضل لديك',
                      });
                    }}
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
            {/* 
        Office Locations 
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            {language === 'en' ? 'Our Offices' : 'مكاتبنا'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="card-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{office.address}</p>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{office.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
          */}
        {/* Map Section 
        <div className="mt-20">
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {language === 'en' ? 'Find Us on the Map' : 'اعثر علينا على الخريطة'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    {language === 'en' 
                      ? 'Interactive map integration coming soon'
                      : 'تكامل الخريطة التفاعلية قريباً'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
          */}
        {/* Emergency Contact 
        <div className="mt-20 bg-primary text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' ? 'Emergency Water Service' : 'خدمة المياه الطارئة'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'en' 
              ? 'Need immediate assistance? Our emergency team is available 24/7'
              : 'تحتاج مساعدة فورية؟ فريق الطوارئ لدينا متاح على مدار الساعة'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
              onClick={() => {
                toast({
                  title: language === 'en' ? 'Emergency Hotline' : 'خط الطوارئ',
                  description: language === 'en' 
                    ? 'Call +249 123 456 789 for immediate assistance' 
                    : 'اتصل على +249 123 456 789 للمساعدة الفورية',
                });
              }}
            >
              {language === 'en' ? 'Call Emergency Line' : 'اتصل بخط الطوارئ'}
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
              onClick={() => {
                toast({
                  title: language === 'en' ? 'WhatsApp Emergency' : 'طوارئ واتساب',
                  description: language === 'en' 
                    ? 'Message us on WhatsApp for urgent support' 
                    : 'راسلنا على واتساب للدعم العاجل',
                });
              }}
            >
              {language === 'en' ? 'WhatsApp Emergency' : 'واتساب طوارئ'}
            </Button>
          </div>
        </div>
        */}
       
      </div>
    </div>
  );
};

export default Contact;