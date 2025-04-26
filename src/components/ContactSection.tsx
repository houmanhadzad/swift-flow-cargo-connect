
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LifeBuoy, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ContactSection = () => {
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
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      toast.success("Message sent successfully!");
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team is available 24/7 to assist you with your shipping needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    className="w-full" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    className="w-full" 
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  className="w-full" 
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your shipping needs" 
                  className="w-full min-h-[150px]" 
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-ocean-DEFAULT hover:bg-ocean-dark text-white w-full md:w-auto px-8"
                disabled={isLoading}
              >
                {isLoading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="bg-ocean-DEFAULT text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-cargo-light flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="mt-1 opacity-80">123 Logistics Way, Port City, Country</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 text-cargo-light flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="mt-1 opacity-80">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 text-cargo-light flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="mt-1 opacity-80">info@swiftflow.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <LifeBuoy className="h-6 w-6 mr-3 text-cargo-light flex-shrink-0" />
                <div>
                  <h4 className="font-medium">24/7 Support</h4>
                  <p className="mt-1 opacity-80">Always available to assist you with your logistics needs</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm6.604 6.633c.01.133.01.267.01.4 0 4.067-3.096 8.754-8.754 8.754-1.739 0-3.357-.503-4.714-1.376.245.029.483.038.732.038 1.428 0 2.741-.486 3.789-1.312-1.337-.026-2.464-.89-2.855-2.079.188.029.376.046.573.046.274 0 .548-.037.805-.105-1.395-.28-2.446-1.515-2.446-3.001 0-.014 0-.027.001-.04.41.229.883.367 1.383.382-.82-.547-1.359-1.486-1.359-2.544 0-.56.151-1.085.414-1.536 1.502 1.845 3.752 3.055 6.283 3.188-.052-.228-.079-.464-.079-.706 0-1.712 1.388-3.1 3.1-3.1.894 0 1.7.376 2.267.979.706-.137 1.371-.397 1.971-.753-.231.726-.724 1.333-1.365 1.716.627-.072 1.227-.238 1.783-.481-.417.624-.942 1.17-1.548 1.61z" />
                  </svg>
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm-1.232 16.748V13.69H8.96v-2.032h1.808V9.592c0-1.813 1.073-2.808 2.665-2.808.753 0 1.399.06 1.587.084v1.918h-1.09c-.853 0-1.018.42-1.018 1.045v1.357h2.038l-.267 2.032H12.92v5.128h-2.152z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
