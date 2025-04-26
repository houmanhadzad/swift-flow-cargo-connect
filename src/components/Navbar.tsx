import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a href="#services" className="text-gray-700 hover:text-ocean-DEFAULT font-medium transition">Services</a>
          <a href="#testimonials" className="text-gray-700 hover:text-ocean-DEFAULT font-medium transition">Testimonials</a>
          <a href="#coverage" className="text-gray-700 hover:text-ocean-DEFAULT font-medium transition">Global Coverage</a>
          <a href="#contact" className="text-gray-700 hover:text-ocean-DEFAULT font-medium transition">Contact</a>
          <Button className="bg-ocean-DEFAULT hover:bg-ocean-dark text-white">
            Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 py-2 hover:text-ocean-DEFAULT font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#coverage" 
              className="text-gray-700 py-2 hover:text-ocean-DEFAULT font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Global Coverage
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 py-2 hover:text-ocean-DEFAULT font-medium transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-ocean-DEFAULT hover:bg-ocean-dark text-white w-full">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
