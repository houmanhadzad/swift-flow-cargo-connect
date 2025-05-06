
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/8a2bbc67-d6b3-4432-b156-002ed754d252.png" 
            alt="Kara Logistics Logo" 
            className="h-14 object-contain"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-gray-700 hover:text-ocean-DEFAULT font-medium transition">{t('nav.services')}</a>
          <a href="#testimonials" className="text-gray-700 hover:text-ocean-DEFAULT font-medium transition">{t('nav.testimonials')}</a>
          <a href="#coverage" className="text-gray-700 hover:text-ocean-DEFAULT font-medium transition">{t('nav.globalCoverage')}</a>
          <a href="#contact" className="text-gray-700 hover:text-ocean-DEFAULT font-medium transition">{t('nav.contact')}</a>
          <LanguageSelector />
          <Button className="bg-sky-600 hover:bg-sky-700 text-white">
            {t('nav.getQuote')} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4">
          <div className="flex flex-col space-y-3">
            <a 
              href="#services" 
              className="text-gray-700 py-2 hover:text-ocean-DEFAULT font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.services')}
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 py-2 hover:text-ocean-DEFAULT font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.testimonials')}
            </a>
            <a 
              href="#coverage" 
              className="text-gray-700 py-2 hover:text-ocean-DEFAULT font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.globalCoverage')}
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 py-2 hover:text-ocean-DEFAULT font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white w-full">
              {t('nav.getQuote')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
