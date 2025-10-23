import React from 'react';
import specification from "../assets/specification.png";

const InjectionMoldingMachines = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold w-full text-center text-gray-800 mb-6">Injection Molding Machines Specifications</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <p className="text-gray-600 mb-4">
            Below you'll find the detailed specifications for our injection molding machines.
          </p>
        </div>
        
        <div className="flex justify-center">
          <img 
            src={specification} 
            alt="Detailed specifications table for injection molding machines including model numbers, clamping force, shot capacity, and other technical parameters" 
            className="max-w-full h-auto border border-gray-200 rounded-lg"
          />
        </div>
        
        
      </div>
    </div>
  );
};

export default InjectionMoldingMachines;