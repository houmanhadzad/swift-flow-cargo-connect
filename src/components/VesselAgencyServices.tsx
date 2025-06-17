
import React from 'react';
import { Ship, Anchor, FileCheck } from "lucide-react";

const VesselAgencyServices = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Port Operations
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Ship className="h-8 w-8 text-ocean-DEFAULT flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Vessel Agency Services</h3>
                <p className="text-gray-600">
                  Kara Logistics Iranian Co. specializes in complete vessel agency services including vessel arrival, berthing, cargo operations, and departure across major Iranian and UAE ports.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Anchor className="h-8 w-8 text-ocean-DEFAULT flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Maritime Expertise</h3>
                <p className="text-gray-600">
                  Our experienced operations team maintains strong ties with key maritime stakeholders and regulatory bodies. We ensure smooth, compliant port operations for shipowners, operators, shipping lines, and cargo interests.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FileCheck className="h-8 w-8 text-ocean-DEFAULT flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Seamless Operations</h3>
                <p className="text-gray-600">
                  We operate independently with structured relationships across terminals, customs, stevedoring firms, and government authorities — delivering seamless execution and international-standard service.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <img 
              src="/lovable-uploads/142aa699-c748-48e6-8d9e-f71f293060f4.png" 
              alt="Kara Logistics office and contact information"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VesselAgencyServices;
