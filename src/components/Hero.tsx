
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Package2 } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-gradient-to-r from-ocean-dark to-ocean-DEFAULT text-white">
      {/* Abstract Wave Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,170.7C96,149,192,107,288,122.7C384,139,480,213,576,218.7C672,224,768,160,864,138.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8 max-w-lg opacity-90">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-cargo-DEFAULT hover:bg-cargo-dark text-white px-8 py-6 text-lg">
                {t('nav.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white px-8 py-6 text-lg">
                {t('hero.services')}
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 mt-10">
              <div className="flex items-center">
                <Clock className="mr-2 text-cargo-light h-5 w-5" />
                <span>{t('hero.support')}</span>
              </div>
              <div className="flex items-center">
                <Package2 className="mr-2 text-cargo-light h-5 w-5" />
                <span>{t('hero.shipping')}</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-float">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt={t('hero.imageAlt')} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-dark/80 to-transparent p-6">
                <div className="text-white text-center">
                  <span className="font-bold text-xl">{t('hero.imageCaption')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
