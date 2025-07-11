import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-ocean-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <img 
              src="/lovable-uploads/8a2bbc67-d6b3-4432-b156-002ed754d252.png" 
              alt="Kara Logistics Logo" 
              className="h-20 mb-4 object-contain"
            />
            <p className="mb-4 text-white">
              Kara Logistics began its operations in early 2024 with a clear vision and a strong passion for the logistics, shipping, and air cargo industry. The company was formed as a collective effort by industry leaders who bring over three decades of experience in global trade, freight forwarding, and supply chain management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.refrigerated')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.global')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.cargo')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.cost')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.services.support')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.company.about')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.company.why')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.company.testimonials')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.company.blog')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.company.careers')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t('footer.support.title')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.support.contact')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.support.faq')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.support.track')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.support.quote')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.support.terms')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6 bg-[#071d34]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">{t('footer.copyright')}</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.privacy')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.terms')}</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('footer.cookies')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
