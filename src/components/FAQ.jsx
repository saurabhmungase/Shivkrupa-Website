import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiHelpCircle, FiMessageSquare, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What types of plastic materials do you work with?",
      answer: "We work with a wide range of engineering-grade plastics including ABS, Polycarbonate, Polypropylene, Nylon, POM, PEEK, and specialty compounds. All materials meet industry standards and are sourced from certified suppliers.",
      category: "Materials"
    },
    {
      question: "What is your typical production lead time?",
      answer: "Standard lead times are 4-6 weeks for new projects and 2-3 weeks for repeat orders. Rush services are available for urgent requirements. Lead time depends on project complexity, tooling requirements, and order quantity.",
      category: "Production"
    },
  
    {
      question: "What quality certifications do you hold?",
      answer: "We are IATF 16949:2016 and ISO 9001:2015 certified. Our quality management system ensures consistent quality across all production stages with rigorous testing and inspection protocols.",
      category: "Quality"
    },
    {
      question: "What is your minimum order quantity?",
      answer: "MOQ varies based on project complexity. For standard components, we can accommodate orders from 1,000 pieces. For custom projects, we work with clients to find feasible quantities that meet both quality and cost requirements.",
      category: "Orders"
    },

    {
      question: "What industries do you primarily serve?",
      answer: "We serve automotive, medical devices, consumer electronics, industrial equipment, and packaging industries. Our expertise spans across various sectors requiring precision plastic components.",
      category: "Industries"
    },
    {
      question: "Do you provide assembly and secondary operations?",
      answer: "Yes, we offer complete assembly services . We also provide secondary operations like painting, printing, and packaging.",
      category: "Services"
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
          
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-sm font-semibold tracking-wider text-red-600 uppercase mb-3"
          >
            Frequently Asked Questions
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Find Quick <span className="text-red-600">Answers</span>
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-red-600 mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Get answers to common questions about our manufacturing processes, capabilities, and services.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-200 hover:border-red-200 transition-all duration-300 overflow-hidden group"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-xl"
                whileHover={{ backgroundColor: "rgba(254, 226, 226, 0.1)" }}
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex items-start space-x-4">
                  {/* Category Badge */}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200 flex-shrink-0 mt-1">
                    {faq.category}
                  </span>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <FiMinus className="w-4 h-4 text-red-600" />
                  ) : (
                    <FiPlus className="w-4 h-4 text-red-600" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-12 h-1 bg-red-100 rounded-full mb-4"></div>
                      <p className="text-gray-600 leading-relaxed pl-4 border-l-2 border-red-200">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6"
            >
              <FiMessageSquare className="w-8 h-8 text-red-600" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help with any specific questions about your project requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/50"
              >
                <FiMail className="w-5 h-5 mr-2" />
                Contact Our Team
              </motion.button>
              </Link>
             
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-sm text-gray-500 mt-6"
            >
              Typically respond within 2 hours during business days
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;