import React from 'react';
import factoryImage from '../../assets/m3.webp';

const AboutSection = ({ stats }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-sm font-semibold tracking-wider text-red-600 uppercase">
                About Our Company
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Shivkrupa Techno-Plast: <span className="text-red-600">Precision</span> Plastic Solutions
              </h1>
              <div className="h-1 w-20 bg-red-600"></div>
            </div>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                As a leading manufacturer of high-quality plastic components, we specialize in advanced injection molding solutions for diverse industries. Our expertise combines cutting-edge technology with skilled craftsmanship to deliver superior products.
              </p>
              <p className="text-lg leading-relaxed">
                We're committed to providing cost-effective, precision-engineered plastic solutions while maintaining the highest standards of quality, safety, and environmental responsibility.
              </p>
            </div>
            
            <Certifications />
            
          
          </div>
          
          <FactoryImage />
        </div>
      </div>
    </section>
  );
};

const Certifications = () => (
  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Certifications & Standards</h2>
    <div className="flex flex-wrap gap-3">
      <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full font-medium text-sm border border-red-300">
        IATF 16949:2016 Certified
      </span>
      <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full font-medium text-sm border border-red-300">
        ISO 9001:2015 Certified
      </span>
    </div>
  </div>
);

const StatCard = ({ stat }) => (
  <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-red-300 transition-colors shadow-sm hover:shadow-md">
    <h3 className="font-medium text-gray-600 mb-1">{stat.label}</h3>
    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
  </div>
);

const FactoryImage = () => (
  <div className="relative rounded-xl overflow-hidden shadow-xl group h-full min-h-[400px]">
    <img 
      src={factoryImage} 
      alt="Shivkrupa Techno-Plast manufacturing facility with modern injection molding machines" 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      width="800"
      height="600"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 text-white">
      <h2 className="text-2xl font-bold mb-3">Our Manufacturing Facility</h2>
      <p className="text-gray-200 max-w-md">
        Equipped with modern injection molding machines and advanced quality control systems to ensure precision manufacturing.
      </p>
    </div>
  </div>
);

export default AboutSection;