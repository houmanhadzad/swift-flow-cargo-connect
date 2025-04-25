
import React from 'react';
import { Card } from "@/components/ui/card";
import { Container, Package2, Clock, LifeBuoy, World, BadgePercent } from "lucide-react";

const Services = () => {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Swift, timely, and efficient solutions tailored to your cargo transportation needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Container className="h-10 w-10 text-ocean-DEFAULT" />}
            title="Refrigerated Containers" 
            description="Specialized temperature-controlled containers perfect for perishable goods, food products, and chemical API transportation."
          />
          
          <ServiceCard 
            icon={<World className="h-10 w-10 text-ocean-DEFAULT" />}
            title="Global Shipping" 
            description="Seamless logistics services connecting Sub Continental Asia and Europe with reliable transportation networks."
          />
          
          <ServiceCard 
            icon={<Clock className="h-10 w-10 text-ocean-DEFAULT" />}
            title="Timely Deliveries" 
            description="Punctual and efficient deliveries ensuring your cargo reaches its destination exactly when expected."
          />
          
          <ServiceCard 
            icon={<Package2 className="h-10 w-10 text-ocean-DEFAULT" />}
            title="Cargo Transportation" 
            description="Full-service cargo handling from pickup to delivery with careful attention to your specific requirements."
          />
          
          <ServiceCard 
            icon={<BadgePercent className="h-10 w-10 text-ocean-DEFAULT" />}
            title="Cost-Effective Plans" 
            description="Streamlined shipping solutions designed to maximize efficiency while reducing your overall logistics costs."
          />
          
          <ServiceCard 
            icon={<LifeBuoy className="h-10 w-10 text-ocean-DEFAULT" />}
            title="24/7 Customer Support" 
            description="Round-the-clock assistance from our dedicated team to address any questions or concerns about your shipments."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <Card className="p-6 transition-all hover:shadow-lg hover:-translate-y-1 border-b-2 border-ocean-light">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

export default Services;
