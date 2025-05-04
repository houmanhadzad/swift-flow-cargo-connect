
import React from 'react';
import { Card } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('stats.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            number={t('stats.companies.number')}
            title={t('stats.companies.title')}
            description={t('stats.companies.description')}
          />
          <StatsCard 
            number={t('stats.experience.number')}
            title={t('stats.experience.title')}
            description={t('stats.experience.description')}
          />
          <StatsCard 
            number={t('stats.continents.number')}
            title={t('stats.continents.title')}
            description={t('stats.continents.description')}
          />
          <StatsCard 
            number={t('stats.support.number')}
            title={t('stats.support.title')}
            description={t('stats.support.description')}
          />
        </div>
      </div>
    </div>
  );
};

const StatsCard = ({ number, title, description }: { number: string, title: string, description: string }) => {
  return (
    <Card className="p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-ocean-DEFAULT">
      <div className="text-4xl font-bold text-ocean-DEFAULT mb-2">{number}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default Stats;
