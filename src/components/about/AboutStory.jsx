import React from 'react';
import { motion } from 'framer-motion';
import { GiFactory } from 'react-icons/gi';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import factoryExterior from '../../assets/factory4.png';

const AboutStory = () => {
  return (
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Introduction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Our <span className="text-red-500">Story</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>Shivkrupa Techno-Plast Pvt. Ltd.</strong>, we are dedicated to delivering <strong>high-quality injection-molded plastic components and assemblies</strong> that meet the evolving demands of diverse industries.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a strong commitment to <strong>precision, innovation, and customer satisfaction</strong>, we have emerged as a trusted name in the plastic manufacturing sector.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded in 2019, we've grown from a small workshop to a state-of-the-art manufacturing facility serving clients across multiple industries.
            </p>
          </div>
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
          >
            <img 
              src={factoryExterior} 
              alt="Our modern manufacturing facility with state-of-the-art injection molding machines" 
              className="w-full h-auto object-cover rounded-xl"
              loading="lazy"
              width={800}
              height={450}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <div className="text-white">
                <GiFactory className="text-4xl mb-2" aria-hidden="true" />
                <h3 className="text-xl font-semibold">Modern Manufacturing Facility</h3>
                <p className="text-gray-200">
                  Equipped with state-of-the-art injection molding machines
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            whileHover={{ y: -5 }}
            aria-labelledby="mission-heading"
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-2 rounded-lg mr-4">
                <MdOutlinePrecisionManufacturing className="text-3xl text-red-500" aria-hidden="true" />
              </div>
              <h3 id="mission-heading" className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We strive to manufacture <strong>superior plastic components</strong> that exceed customer expectations in terms of <strong>quality, reliability, and cost-efficiency</strong>. Our solutions are designed to enhance performance across industries while adhering to <strong>strict regulatory and statutory standards</strong>.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
            whileHover={{ y: -5 }}
            aria-labelledby="vision-heading"
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-100 p-2 rounded-lg mr-4">
                <RiTeamFill className="text-3xl text-red-500" aria-hidden="true" />
              </div>
              <h3 id="vision-heading" className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our goal is to be a <strong>leading force in the plastic injection molding industry</strong> by embracing <strong>cutting-edge technology, sustainable practices, and continuous improvement</strong>. We aim to drive innovation while contributing to a more efficient and eco-friendly manufacturing landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutStory;
