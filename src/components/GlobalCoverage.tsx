
import React from 'react';

const GlobalCoverage = () => {
  return (
    <div id="coverage" className="py-20 bg-ocean-DEFAULT text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Global shipping map" 
                    className="w-full h-auto"
                  />
                  
                  {/* Asia Marker */}
                  <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-4 w-4 bg-cargo-DEFAULT rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Europe Marker */}
                  <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="h-4 w-4 bg-cargo-DEFAULT rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Connection Line */}
                  <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
                    <path 
                      d="M30,25 Q50,40 75,33" 
                      stroke="#f97316" 
                      strokeWidth="0.5" 
                      fill="none" 
                      strokeDasharray="2,2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Coverage</h2>
            <p className="text-lg mb-8 opacity-90">
              Our extensive shipping network spans across Sub Continental Asia and Europe, providing seamless logistics solutions for businesses of all sizes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Asia Coverage</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• India</li>
                  <li>• China</li>
                  <li>• Japan</li>
                  <li>• Singapore</li>
                  <li>• South Korea</li>
                  <li>• Malaysia</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Europe Coverage</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• United Kingdom</li>
                  <li>• Germany</li>
                  <li>• Netherlands</li>
                  <li>• France</li>
                  <li>• Italy</li>
                  <li>• Spain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCoverage;
