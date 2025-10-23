import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaBriefcase, 
  FaBalanceScale,
  FaHandsHelping
} from 'react-icons/fa';
import { GiBroom } from 'react-icons/gi';

const CORE_PRINCIPLES = [
  {
    icon: <FaShieldAlt className="text-4xl text-red-500" aria-hidden="true" />,
    title: "Safety",
    description: "We prioritize the safety of our employees, customers, and partners above all else, implementing rigorous safety protocols across all operations."
  },
  {
    icon: <GiBroom className="text-4xl text-red-500" aria-hidden="true" />,
    title: "Clean & Healthy Work Environment",
    description: "Maintaining a pristine and healthy workplace is fundamental to our operations and employee well-being."
  },
  {
    icon: <FaBriefcase className="text-4xl text-red-500" aria-hidden="true" />,
    title: "Professional Approach",
    description: "We conduct all business with the highest level of professionalism, integrity, and expertise."
  },
  {
    icon: <FaBalanceScale className="text-4xl text-red-500" aria-hidden="true" />,
    title: "Business Ethics",
    description: "Ethical business practices guide every decision we make, ensuring fairness and transparency."
  },
  {
    icon: <FaHandsHelping className="text-4xl text-red-500" aria-hidden="true" />,
    title: "Client Support",
    description: "We provide exceptional support to both internal teams and external clients, building lasting relationships."
  }
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const CorePrinciplesSection = () => {
  return (
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Our <span className="text-red-500">Core Principles</span>
      </h2>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {CORE_PRINCIPLES.map((principle, index) => (
            <motion.div 
              key={index}
              className="p-8 flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ 
                backgroundColor: "#f9fafb",
                transition: { duration: 0.3 }
              }}
              aria-labelledby={`principle-${index}-heading`}
            >
              <div className="mb-4" aria-hidden="true">{principle.icon}</div>
              <h3 id={`principle-${index}-heading`} className="text-xl font-bold text-gray-800 mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CorePrinciplesSection;
