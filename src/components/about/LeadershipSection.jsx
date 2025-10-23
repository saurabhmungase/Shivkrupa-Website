import React from 'react';
import { motion } from 'framer-motion';
import ceophoto from '../../assets/CeoPhoto.png';

const LeadershipSection = () => {
  return (
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Leadership <span className="text-red-500">Team</span>
      </h2>
      
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* CEO Photo */}
          <div className="md:w-1/2 relative min-h-[300px]">
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={ceophoto} 
                alt="Mr. Anna Arote, Founder and CEO of Shivkrupa Techno-Plast" 
                className="w-full h-full object-cover"
                loading="lazy"
                width={400}
                height={500}
              />
              <div className="absolute inset-0  to-transparent" />
            </motion.div>
          </div>
          
          {/* CEO Info */}
          <div className="md:w-2/2 p-6 sm:p-8 md:p-10">
            <div className="flex flex-col h-full justify-center">
              <div className="mb-6">
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Founder & CEO
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Mr. Anna Arote
                </h3>
                
                <p className="text-red-500 font-medium mb-4">
                  Visionary Leader | Industry Expert
                </p>
              </div>
              
              <div className="prose text-gray-600 mb-6">
                <p className="mb-4">
                  With over <strong>15+ years of experience</strong> in the plastic manufacturing industry, Mr. Arote has built Shivkrupa Techno-Plast from the ground up into a respected industry leader.
                </p>
                <p className="mb-4">
                  His expertise spans <strong>business strategy, operational excellence, and technological innovation</strong>, driving the company's continuous growth and success.
                </p>
                <p>
                  Under his leadership, Shivkrupa has established long-term partnerships with major automotive and industrial clients across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default LeadershipSection;
