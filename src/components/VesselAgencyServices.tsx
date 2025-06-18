import React from 'react';
import { Ship, Anchor, FileCheck, Phone, MapPin, Mail, Building2 } from "lucide-react";

const VesselAgencyServices = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Port Operations
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
            
            <div className="space-y-6">
              {/* Head Office */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Building2 className="h-5 w-5 text-ocean-DEFAULT" />
                  <h4 className="font-bold text-gray-800">📍 Head Office – Kara Logistics</h4>
                </div>
                <div className="space-y-2 ml-7">
                  <p className="text-sm text-gray-600">
                    <strong>Company:</strong> Kara Logistics – Shipping & Air Cargo Services
                  </p>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-ocean-DEFAULT mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Unit 9, 5th Floor, No. 13, Noor Alley, Nelson Mandela Blvd., Tehran, Iran</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-ocean-DEFAULT" />
                    <p className="text-sm text-gray-600">+9821 9101 1477 Ext: 210</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-ocean-DEFAULT" />
                    <p className="text-sm text-gray-600">Mobile: +98 9301214117</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-ocean-DEFAULT" />
                    <p className="text-sm text-gray-600">mgmt@karashipping.com</p>
                  </div>
                </div>
              </div>

              {/* Branch Office */}
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Building2 className="h-5 w-5 text-ocean-DEFAULT" />
                  <h4 className="font-bold text-gray-800">🏢 Branch Office – Bandar Abbas</h4>
                </div>
                <div className="space-y-2 ml-7">
                  <p className="text-sm text-gray-600">
                    <strong>Company:</strong> Kara Logistics Iranian Co. LTD
                  </p>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-ocean-DEFAULT mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">Khazar Qeshm Terminal at Shahid Rajaei Special Economic Zone, Bandar Abbas, Iran</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-ocean-DEFAULT" />
                    <p className="text-sm text-gray-600">+98 76 33514191 (Ext 27106)</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-ocean-DEFAULT" />
                    <p className="text-sm text-gray-600">Fax: +98 76 33514193</p>
                  </div>
                </div>
              </div>

              {/* Department Contacts */}
              <div>
                <h4 className="font-bold text-gray-800 mb-3">📦 Department Contacts</h4>
                <div className="space-y-3 ml-4">
                  <div>
                    <p className="font-semibold text-gray-700">IMPORT</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Mail className="h-4 w-4 text-ocean-DEFAULT" />
                      <p className="text-sm text-gray-600">import1@karashipping.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-ocean-DEFAULT" />
                      <p className="text-sm text-gray-600">+9821 9101 1477 Ext: 250</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700">EXPORT</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Mail className="h-4 w-4 text-ocean-DEFAULT" />
                      <p className="text-sm text-gray-600">export1@karashipping.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-ocean-DEFAULT" />
                      <p className="text-sm text-gray-600">+9821 9101 1477 Ext: 270</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-gray-700">OPERATION</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Mail className="h-4 w-4 text-ocean-DEFAULT" />
                      <p className="text-sm text-gray-600">operation@karashipping.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-ocean-DEFAULT" />
                      <p className="text-sm text-gray-600">+9821 9101 1477 Ext: 240</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-center">
                  <strong>Website:</strong> 
                  <a href="https://www.karashipping.com" className="text-ocean-DEFAULT hover:underline ml-2">
                    www.karashipping.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VesselAgencyServices;
