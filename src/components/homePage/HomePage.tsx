import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Capabilities from '../Capabilities';

import Customers from './Customers';
import MergeImage from '../MergeImage';

import { differentiators, stats, customers } from './homePageData';
import SEOHead from '../SEO/SEOHead';
import { seoData } from '../SEO/seoData';
import Differentiators from './Differentiators';
import CtaSection from '../CtaSection';
import ServicesInfo from '../Services/ServicesInfo';

const HomePage = () => {
  return (
    <div className="mb-36">
      <SEOHead 
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        canonicalUrl={seoData.home.canonicalUrl}
        structuredData={seoData.home.structuredData}
      />
      
      <HeroSection />
      <AboutSection stats={stats} />
      <ServicesInfo></ServicesInfo>
      <Capabilities />
      <Differentiators differentiators={differentiators} />
      <Customers customers={customers} />
      <CtaSection />
    </div>
  );
};

export default HomePage;