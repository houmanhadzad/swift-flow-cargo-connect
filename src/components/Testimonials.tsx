
import React from 'react';
import { Card } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: t('testimonials.person1.name'),
      company: t('testimonials.person1.company'),
      quote: t('testimonials.person1.quote'),
      image: "/placeholder.svg"
    },
    {
      name: t('testimonials.person2.name'),
      company: t('testimonials.person2.company'),
      quote: t('testimonials.person2.quote'),
      image: "/placeholder.svg"
    },
    {
      name: t('testimonials.person3.name'),
      company: t('testimonials.person3.company'),
      quote: t('testimonials.person3.quote'),
      image: "/placeholder.svg"
    }
  ];

  return (
    <div id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              quote={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 text-lg font-semibold">{t('testimonials.clientLogos')}</div>
            <div className="text-gray-400 text-lg font-semibold">{t('testimonials.clientLogos')}</div>
            <div className="text-gray-400 text-lg font-semibold">{t('testimonials.clientLogos')}</div>
            <div className="text-gray-400 text-lg font-semibold">{t('testimonials.clientLogos')}</div>
            <div className="text-gray-400 text-lg font-semibold">{t('testimonials.clientLogos')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, company, quote, image }: { name: string, company: string, quote: string, image: string }) => {
  return (
    <Card className="p-6 transition-all hover:shadow-lg bg-white">
      <div className="flex flex-col h-full">
        <div className="mb-4 text-cargo-DEFAULT">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.606.724-1.027 1.225-1.27l.536-.28V6.95l-.606.328c-1.356.734-2.3 1.691-2.83 2.87-.53 1.17-.554 2.36-.07 3.57.485 1.21 1.4 2 2.75 2.36.48.12.95.18 1.41.18 1.757-.005 3.1-.663 3.1-2.5zm11.53 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.15-.95.1-1.626.41-2.223.315-.606.725-1.027 1.23-1.27l.526-.28V6.95l-.61.328c-1.35.734-2.3 1.691-2.83 2.87-.53 1.17-.554 2.36-.07 3.57.485 1.21 1.4 2 2.75 2.36.48.12.95.18 1.41.18 1.757-.005 3.096-.663 3.096-2.5z" />
          </svg>
        </div>
        
        <p className="text-gray-700 mb-6 flex-grow">{quote}</p>
        
        <div className="flex items-center mt-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Testimonials;
