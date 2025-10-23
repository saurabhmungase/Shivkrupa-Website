import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaCertificate, FaInfoCircle } from 'react-icons/fa';
import certificates from '../../assets/Shivkrupa Techno-Plast Pvt. Ltd. ISO & IATF Certificate-1.png';
import certificates2 from '../../assets/Shivkrupa Techno-Plast Pvt. Ltd. ISO & IATF Certificate-2.png';

const CERTIFICATIONS = [
  {
    image: certificates2,
    title: "IATF 16949:2016 Certification",
    alt: "IATF 16949:2016 Quality Management System Certification",
    items: [
      "IATF 16949:2016 Certified - The gold standard for automotive quality management",
      "Demonstrates our commitment to defect prevention and continuous improvement",
      "Ensures reduction of waste and variation in the automotive supply chain",
      "Certified by an independent third-party auditor",
      "Annual surveillance audits to maintain certification status"
    ],
    description: "Our IATF 16949 certification reflects our dedication to meeting the stringent requirements of the global automotive industry. This certification builds upon ISO 9001 with additional automotive-specific requirements, ensuring we deliver consistently high-quality products to our automotive clients."
  },
  {
    image: certificates,
    title: "ISO 9001:2015 & ISO 14001:2015 Certification",
    alt: "ISO 9001 Quality Management and ISO 14001 Environmental Management Certifications",
    items: [
      "ISO 9001:2015 Certified - International standard for quality management systems",
      "ISO 14001:2015 Certified - Environmental management system certification",
      "Customer-focused approach to quality assurance",
      "Sustainable environmental practices in our operations",
      "Regular internal audits and management reviews"
    ],
    description: "Our dual ISO certifications demonstrate our commitment to both quality excellence and environmental responsibility. These internationally recognized standards ensure we have robust processes in place to consistently meet customer and regulatory requirements while minimizing our environmental impact."
  }
];

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3 }
  }
};

const CertificatesSection = () => {
  return (
    <motion.section 
      className="py-16 bg-gray-50" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our <span className="text-red-600">Quality Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We hold internationally recognized certifications that demonstrate our commitment to quality, 
            continuous improvement, and environmental responsibility.
          </p>
        </div>

        <div className="space-y-16">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index} 
              className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <motion.div 
                className="rounded-xl overflow-hidden shadow-2xl border-4 border-white"
                variants={imageVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src={cert.image} 
                  alt={cert.alt} 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={600}
                  height={400}
                />
              </motion.div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-full mr-4">
                    <FaCertificate className="text-red-600 text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{cert.title}</h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {cert.description}
                </p>
                
                <ul className="space-y-3">
                  {cert.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <FaCheck className="text-green-600 text-sm" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                {index === 0 && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <FaInfoCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-blue-800 text-sm">
                        <strong>Note:</strong> IATF 16949 certification is required by most major automotive OEMs 
                        and demonstrates our capability to meet the highest automotive quality standards.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CertificatesSection;
