
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import GlobalCoverage from '@/components/GlobalCoverage';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Services />
        <Testimonials />
        <GlobalCoverage />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
