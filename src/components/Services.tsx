
import React from 'react';
import { Card } from "@/components/ui/card";
import { Container, Package2, Clock, LifeBuoy, Globe, BadgePercent } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <div id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Container className="h-10 w-10 text-ocean-DEFAULT" />}
            title={t('services.containers.title')}
            description={t('services.containers.description')}
          />
          
          <ServiceCard 
            icon={<Globe className="h-10 w-10 text-ocean-DEFAULT" />}
            title={t('services.global.title')}
            description={t('services.global.description')}
          />
          
          <ServiceCard 
            icon={<Clock className="h-10 w-10 text-ocean-DEFAULT" />}
            title={t('services.timely.title')}
            description={t('services.timely.description')}
          />
          
          <ServiceCard 
            icon={<Package2 className="h-10 w-10 text-ocean-DEFAULT" />}
            title={t('services.cargo.title')}
            description={t('services.cargo.description')}
          />
          
          <ServiceCard 
            icon={<BadgePercent className="h-10 w-10 text-ocean-DEFAULT" />}
            title={t('services.cost.title')}
            description={t('services.cost.description')}
          />
          
          <ServiceCard 
            icon={<LifeBuoy className="h-10 w-10 text-ocean-DEFAULT" />}
            title={t('services.customerSupport.title')}
            description={t('services.customerSupport.description')}
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="p-6 transition-all hover:shadow-lg hover:-translate-y-1 border-b-2 border-ocean-light">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default Services;
