import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaCheck, 
  FaHandsHelping, 
  FaShieldAlt, 
  FaBriefcase, 
  FaBalanceScale,
  FaLinkedin, 
  FaCertificate,
  FaInfoCircle,
  FaDownload
} from 'react-icons/fa';
import { IoIosCall } from "react-icons/io";
import { GiFactory, GiBroom } from 'react-icons/gi';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import Customers from './Customers';
import AboutHero from './about/AboutHero';
import AboutStory from './about/AboutStory';
import LeadershipSection from './about/LeadershipSection';
import CorePrinciplesSection from './about/CorePrinciplesSection';
import CertificatesSection from './about/CertificatesSection';
import CtaSection from './CtaSection';
import SEOHead from './SEO/SEOHead';
import { seoData } from './SEO/seoData';

const FEATURES = [
  {
    icon: <FaCheck className="text-2xl" aria-hidden="true" />,
    title: "Unmatched Quality",
    desc: "Rigorous quality control ensures every plastic moulding product meets the highest industry standards."
  },
  {
    icon: <RiTeamFill className="text-2xl" aria-hidden="true" />,
    title: "Customer-Focused Solutions",
    desc: "We prioritize your needs, offering tailored plastic injection molding solutions in Nashik."
  },
  {
    icon: <FaCheck className="text-2xl" aria-hidden="true" />,
    title: "On-Time Delivery",
    desc: "Efficient production and logistics ensure your plastic mould orders arrive as scheduled."
  },
  {
    icon: <FaCheck className="text-2xl" aria-hidden="true" />,
    title: "Cost-Effective Manufacturing",
    desc: "Optimized plastic moulding processes deliver competitive pricing without compromising quality."
  },
  {
    icon: <RiTeamFill className="text-2xl" aria-hidden="true" />,
    title: "Expert Team",
    desc: "Our skilled professionals bring years of experience in plastic moulding to ensure precision."
  },
  {
    icon: <MdOutlinePrecisionManufacturing className="text-2xl" aria-hidden="true" />,
    title: "Innovation-Driven",
    desc: "We continuously upgrade our plastic injection molding technology to provide advanced solutions."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

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

const featureVariants = {
  hover: {
    y: -5,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  }
};

const About = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      className="bg-gray-50 pt-16 md:pt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SEOHead 
        title={seoData.about.title}
        description={seoData.about.description}
        keywords={seoData.about.keywords}
        canonicalUrl={seoData.about.canonicalUrl}
        structuredData={seoData.about.structuredData}
      />
      
      {/* Hero Section */}
      <AboutHero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <AboutStory />

        {/* Leadership Section */}
        <LeadershipSection />

        {/* Core Principles Section */}
        <CorePrinciplesSection />

        {/* Why Choose Us */}
        <motion.section className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Why Choose <span className="text-red-500">Shivkrupa Technoplast</span> for Plastic Moulding in Nashik?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                variants={featureVariants}
                whileHover="hover"
                aria-labelledby={`feature-${index}-heading`}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <div className="text-red-500">{feature.icon}</div>
                  </div>
                  <h3 id={`feature-${index}-heading`} className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certificates Section */}
        <CertificatesSection />

        {/* Customers Section */}
        <Customers />

        {/* CTA */}
        <CtaSection></CtaSection>
      </main>
    </motion.div>
  );
};

export default About;