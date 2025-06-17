
import React from 'react';
import { Card } from "@/components/ui/card";
import { Ship, Anchor, Package, Container, MapPin, Settings, FileText, Scale } from "lucide-react";

const ServiceTypes = () => {
  const services = [
    { icon: <Ship className="h-8 w-8 text-ocean-DEFAULT" />, title: "Shipping Line Agency" },
    { icon: <Anchor className="h-8 w-8 text-ocean-DEFAULT" />, title: "Vessel Agency" },
    { icon: <Package className="h-8 w-8 text-ocean-DEFAULT" />, title: "NVOCC Services" },
    { icon: <Container className="h-8 w-8 text-ocean-DEFAULT" />, title: "Marine Transport (FCL, LCL, bulk, reefer, dangerous goods)" },
    { icon: <MapPin className="h-8 w-8 text-ocean-DEFAULT" />, title: "Port Services" },
    { icon: <Container className="h-8 w-8 text-ocean-DEFAULT" />, title: "Container Supply and Leasing" },
    { icon: <Package className="h-8 w-8 text-ocean-DEFAULT" />, title: "Cargo Handling" },
    { icon: <FileText className="h-8 w-8 text-ocean-DEFAULT" />, title: "Administrative & Formality Services" },
    { icon: <Scale className="h-8 w-8 text-ocean-DEFAULT" />, title: "Legal & Contractual Representation" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Types of Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics and maritime services tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 transition-all hover:shadow-lg hover:-translate-y-1 border-b-2 border-ocean-light">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTypes;
