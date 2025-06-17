
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TransitPaths = () => {
  const transitData = [
    { country: "🇰🇿 Kazakhstan", cities: "Almaty, Chymkent, Aktau, Atyrau", transport: "Road / Sea" },
    { country: "🇷🇺 Russia", cities: "Moscow, Podolsk, St. Petersburg, Astrakhan", transport: "Road / Sea" },
    { country: "🇦🇫 Afghanistan", cities: "Herat, Islamqala, Kabul", transport: "Road" },
    { country: "🇬🇪 Georgia", cities: "Tbilisi", transport: "Road" },
    { country: "🇹🇲 Turkmenistan", cities: "Ashgabat, Yolotan", transport: "Road" },
    { country: "🇰🇬 Kyrgyzstan", cities: "Bishkek, Osh", transport: "Road" },
    { country: "🇦🇿 Azerbaijan", cities: "Baku", transport: "Road / Sea" },
    { country: "🇺🇿 Uzbekistan", cities: "Tashkent, Jizzak, Namangan, Fergana, Samarkand, Andijan, Urgench, Bukhara", transport: "Road" },
    { country: "🇹🇯 Tajikistan", cities: "Dushanbe, Khujand", transport: "Road" },
    { country: "🇦🇲 Armenia", cities: "Yerevan", transport: "Road" }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Strategic Transit Network
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We collaborate with top-tier international carriers to offer integrated logistics services from Bandar Abbas to key CIS destinations. Our clients benefit from high-quality service, cost efficiency, and long-term partnerships across the region.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Transit Paths from Bandar Abbas</h3>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-ocean-DEFAULT">
                <TableHead className="text-white font-semibold">Country</TableHead>
                <TableHead className="text-white font-semibold">Cities</TableHead>
                <TableHead className="text-white font-semibold">Transport Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transitData.map((row, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{row.country}</TableCell>
                  <TableCell>{row.cities}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-ocean-light text-ocean-dark">
                      {row.transport}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default TransitPaths;
