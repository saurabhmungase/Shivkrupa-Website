import React from 'react';
import { motion } from 'framer-motion';
import ContactHero from './contact/ContactHero';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import SEOHead from './SEO/SEOHead';
import { seoData } from './SEO/seoData';

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.7
      }
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-b from-gray-50 to-gray-100 pt-12 md:pt-16 lg:pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SEOHead 
        title={seoData.contact.title}
        description={seoData.contact.description}
        keywords={seoData.contact.keywords}
        canonicalUrl={seoData.contact.canonicalUrl}
        structuredData={seoData.contact.structuredData}
      />
      
      {/* Hero Section */}
      <ContactHero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className='mb-6'>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
          Get in <span className="text-red-500">Touch</span>
        </h2>
        <motion.div 
          className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4 sm:mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <p className="text-gray-600 text-sm sm:text-base">
          We're here to help with your plastic moulding needs in Nashik. Contact Shivkrupa Technoplast for plastic injection molding services, custom plastic mould manufacturing, and precision plastic components. Reach out through any of these channels.
        </p>
      </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <ContactInfo />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;