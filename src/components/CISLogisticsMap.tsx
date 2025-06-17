
import React from 'react';

const CISLogisticsMap = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Logistics Routes from Bandar Abbas to CIS Countries
          </h2>
        </div>
        
        <div className="w-full">
          <img 
            src="/lovable-uploads/09f2305b-fcb2-478d-b899-f95680ddbbad.png" 
            alt="CIS Logistics Routes Map showing transport paths from Bandar Abbas"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Engineering and Consulting Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Transport Engineering: Assessing optimal methods for cargo securing</li>
            <li>• Cost estimation and choosing the best transportation method</li>
            <li>• Route planning</li>
            <li>• Partnering with international carriers for CIS transit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CISLogisticsMap;
