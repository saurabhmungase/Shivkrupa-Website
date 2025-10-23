import React from 'react';
import { 
    FiCheckCircle, FiAward, FiShield, FiSettings, FiUsers 
  } from 'react-icons/fi';

// Import customer logos
import iaclogo from '../../assets/iaclogo.png';
import mathersonlogo from '../../assets/mathersonlogo.png';
import abhijeetlogo from '../../assets/abhijeetlogo.png';
import viplogo from '../../assets/viplogo.png';
import samsonitelogo from '../../assets/Samsonitelogo.png';
  
  export const differentiators = [
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "High Precision & Quality",
      description: "Micron-level precision with rigorous quality control processes",
      color: "emerald"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Certified Manufacturer",
      description: "IATF 16949 & ISO 9001 certified production standards",
      color: "blue"
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Eco-Friendly Production",
      description: "Sustainable manufacturing with minimal environmental impact",
      color: "green"
    },
    {
      icon: <FiSettings className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "State-of-the-art machinery and automation systems",
      color: "violet"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Customer-Centric",
      description: "Tailored solutions with dedicated account management",
      color: "amber"
    }
  ];
  
  export const stats = [
    { label: "Total Plot Size", value: "4,100 Sq. Meter" },
    { label: "Storage Space", value: "20,000 Sq. ft." },
    { label: "Shop Floor No.1", value: "8,000 Sq. ft." },
    { label: "Shop Floor No.2", value: "9,500 Sq. ft." }
  ];
  
  export const seoData = {
    pageTitle: "Shivkrupa Techno-Plast | Precision Plastic Injection Molding Manufacturer",
    pageDescription: "Leading manufacturer of high-quality plastic components with IATF 16949 & ISO 9001 certification. Specializing in precision injection molding solutions for diverse industries.",
      canonicalUrl: "https://www.shivkrupatechnoplast.com",
  };

  export const customers = [
    {
      name: "IAC - International Automotive Components",
      logo: iaclogo,
      alt: "IAC logo"
    },
    {
      name: "MATE- Motherson Automotive Technologies & Engineering",
      logo: mathersonlogo,
      alt: "Motherson Automotive Technologies logo"
    },
    {
      name: "Abhijeet Techno Plast Pvt. Ltd. (ATPPL)",
      logo: abhijeetlogo,
      alt: "Abhijeet Techno Plast logo"
    },
    {
      name: "VIP Industries",
      logo: viplogo,
      alt: "VIP Industries logo"
    },
    {
      name: "Samsonite South Asia Pvt. Ltd.",
      logo: samsonitelogo,
      alt: "Samsonite logo"
    }
  ];