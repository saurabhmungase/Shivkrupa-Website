import React from 'react';
import { motion } from 'framer-motion';
import Product from './Product';
import InjectionMoldingMachines from './InjectionMoldingMachines';
import InfrastructureHero from './infrastructure/InfrastructureHero';
import FactoryGallery from './infrastructure/FactoryGallery';
import FacilityFeatures from './infrastructure/FacilityFeatures';
import MachineryList from './infrastructure/MachineryList';
import MachineryGallery from './infrastructure/MachineryGallery';
import SupportInfrastructure from './infrastructure/SupportInfrastructure';
import CtaSection from './CtaSection';
import SEOHead from './SEO/SEOHead';
import { seoData } from './SEO/seoData';

const InfrastructureMachinery = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-50 pt-16 md:pt-20 overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SEOHead 
        title={seoData.infrastructure.title}
        description={seoData.infrastructure.description}
        keywords={seoData.infrastructure.keywords}
        canonicalUrl={seoData.infrastructure.canonicalUrl}
        structuredData={seoData.infrastructure.structuredData}
      />
      
      <div className="max-w-full mx-auto overflow-x-hidden">
        {/* Hero Section */}
        <InfrastructureHero />

        {/* Factory Gallery Carousel */}
        <FactoryGallery />

        {/* Key Features */}
        <FacilityFeatures />

        {/* Machinery Section */}
        <MachineryList />
        

        {/* Machinery Image Showcase */}
        <MachineryGallery />

        {/* Auxiliary Equipment */}
        <SupportInfrastructure />

       <CtaSection></CtaSection>
      </div>
    </motion.div>
  );
};

export default InfrastructureMachinery;