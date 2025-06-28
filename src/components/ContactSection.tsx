
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log('Form submitted:', formData);
      
      toast.success(t('contact.successMessage'));
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error(t('contact.errorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-black text-center">{t('contact.getInTouch')}</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">{t('contact.name')}</label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.name')} 
                  className="w-full text-black" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">{t('contact.email')}</label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  className="w-full text-black" 
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black mb-1">{t('contact.subject')}</label>
              <Input 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder={t('contact.subject')} 
                className="w-full text-black" 
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-1">{t('contact.message')}</label>
              <Textarea 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.message')} 
                className="w-full min-h-[150px] text-black" 
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="bg-sky-600 hover:bg-sky-700 text-white w-full md:w-auto px-8 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                t('contact.sending')
              ) : (
                <>
                  {t('contact.send')}
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
