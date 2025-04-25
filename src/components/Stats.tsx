
import React from 'react';
import { Card } from "@/components/ui/card";

const Stats = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're proud of our track record and the trust placed in us by our customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            number="1000+" 
            title="Satisfied Companies" 
            description="Trusted by businesses across industries"
          />
          <StatsCard 
            number="15+" 
            title="Years Experience" 
            description="Expertise in global shipping logistics"
          />
          <StatsCard 
            number="2" 
            title="Continents Covered" 
            description="Seamless operations across Asia & Europe"
          />
          <StatsCard 
            number="24/7" 
            title="Customer Support" 
            description="Always available to assist you"
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
