
import React from 'react';
import { Ship, Anchor, FileCheck, Phone, MapPin, Mail } from "lucide-react";

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
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
              <p className="text-gray-600">Get in touch with our expert team</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ocean-DEFAULT" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+9821 9101 1477 Ext:210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ocean-DEFAULT" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">info@karalogistics.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-ocean-DEFAULT mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Office Address</p>
                  <p className="text-gray-600">Tehran, Iran</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Our Services Include:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vessel arrival and departure coordination</li>
                <li>• Port documentation and clearance</li>
                <li>• Cargo handling supervision</li>
                <li>• Customs and regulatory compliance</li>
                <li>• Supply and provisioning services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VesselAgencyServices;
