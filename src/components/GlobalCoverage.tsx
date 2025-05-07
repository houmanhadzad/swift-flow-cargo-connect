
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const GlobalCoverage = () => {
  const { t } = useLanguage();
  
  return (
    <div id="coverage" className="py-20 bg-ocean-DEFAULT text-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/lovable-uploads/df7f61e3-5551-47a0-9bea-455a98cddc71.png" 
                alt={t('coverage.mapAlt')} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">{t('coverage.title')}</h2>
            <p className="text-lg mb-8 text-black">
              {t('coverage.subtitle')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-black">{t('coverage.asia')}</h3>
                <ul className="space-y-2 text-black">
                  <li>• {t('coverage.asiaCountries.india')}</li>
                  <li>• {t('coverage.asiaCountries.china')}</li>
                  <li>• {t('coverage.asiaCountries.japan')}</li>
                  <li>• {t('coverage.asiaCountries.singapore')}</li>
                  <li>• {t('coverage.asiaCountries.korea')}</li>
                  <li>• {t('coverage.asiaCountries.malaysia')}</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-black">{t('coverage.europe')}</h3>
                <ul className="space-y-2 text-black">
                  <li>• {t('coverage.europeCountries.uk')}</li>
                  <li>• {t('coverage.europeCountries.germany')}</li>
                  <li>• {t('coverage.europeCountries.netherlands')}</li>
                  <li>• {t('coverage.europeCountries.france')}</li>
                  <li>• {t('coverage.europeCountries.italy')}</li>
                  <li>• {t('coverage.europeCountries.spain')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCoverage;
