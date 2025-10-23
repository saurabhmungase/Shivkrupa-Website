import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiSettings, 
  FiLayers, 
  FiTruck, 
  FiPackage,
  FiTool,
  FiCpu,
  FiCheckCircle,
  FiArrowRight,
  FiUsers,
  FiTarget,
  FiAward,
  FiShield,
  FiPlay,
  FiPieChart
} from 'react-icons/fi';
import { Helmet } from "react-helmet";

const ServicesInfo = () => {
  // Visual service cards with better icons and highlights
  const visualServices = [
    {
      icon: <div className="relative">
        <FiSettings className="w-10 h-10" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </div>,
      title: "Injection Molding",
      description: "Precision plastic components with advanced machinery",
      stats: "±0.01mm Tolerance",
      highlight: "High Volume",
      color: "red",
      features: ["Multi-material", "Complex Shapes", "Quick Turnaround"]
    },
    {
      icon: <div className="relative">
        <FiLayers className="w-10 h-10" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-500 rounded-full"></div>
      </div>,
      title: "Assembly Services",
      description: "Complete component assembly & integration",
      stats: "100% Tested",
      highlight: "Automated",
      color: "red",
      features: ["Multi-stage", "Quality Checks", "Custom Tooling"]
    },
    {
      icon: <FiTruck className="w-10 h-10" />,
      title: "Automotive Parts",
      description: "IATF 16949 certified automotive components",
      stats: "Zero Defects",
      highlight: "Certified",
      color: "red",
      features: ["Interior/Exterior", "Safety Parts", "JIT Delivery"]
    },
    {
      icon: <FiPackage className="w-10 h-10" />,
      title: "Packaging",
      description: "Complete packaging & supply chain solutions",
      stats: "Custom Design",
      highlight: "Protected",
      color: "red",
      features: ["Bulk Packaging", "Quality Standards", "Logistics"]
    }
  ];

  // Visual process timeline
  const visualProcess = [
    {
      step: "1",
      title: "Design & Engineering",
      icon: <FiTool className="w-8 h-8" />,
      description: "CAD/CAM design with simulation",
      visual: "📐",
      duration: "1-2 Weeks",
      details: ["3D Modeling", "DFM Analysis", "Prototype"]
    },
    {
      step: "2",
      title: "Production",
      icon: <FiCpu className="w-8 h-8" />,
      description: "Automated injection molding",
      visual: "🏭",
      duration: "2-4 Weeks",
      details: ["Precision Molding", "Quality Control", "High Volume"]
    },
    {
      step: "3",
      title: "Quality Check",
      icon: <FiCheckCircle className="w-8 h-8" />,
      description: "Rigorous quality assurance",
      visual: "✅",
      duration: "3-5 Days",
      details: ["Dimensional Check", "Performance Test", "Final Audit"]
    },
    {
      step: "4",
      title: "Delivery",
      icon: <FiTruck className="w-8 h-8" />,
      description: "Timely delivery & support",
      visual: "🚚",
      duration: "1 Week",
      details: ["Packaging", "Shipping", "After-Sales"]
    }
  ];

  // Key benefits with visual metrics
  const keyBenefits = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      metric: "99.8%",
      title: "Quality Rate",
      description: "Consistent high-quality output",
      
      color: "text-green-600"
    },
    {
      icon: <FiPieChart className="w-8 h-8" />,
      metric: "50K+",
      title: "Parts Daily",
      description: "High-volume production capacity",
      
      color: "text-blue-600"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      metric: "7+",
      title: "Years Experience",
      description: "Industry expertise & knowledge",
     
      color: "text-amber-600"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      metric: "200+",
      title: "Happy Clients",
      description: "Satisfied customers worldwide",
     
      color: "text-red-600"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white">
      <Helmet>
        <title>Manufacturing Services | Precision Plastic Solutions</title>
        <meta name="description" content="Visual guide to our plastic injection molding, automotive parts manufacturing, and assembly services with clear process flow." />
      </Helmet>

      {/* Visual Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-red-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold text-red-700">Trusted Manufacturing Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Our <span className="text-red-600">Services</span>
            </motion.h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-1 bg-red-600 mx-auto mb-6 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              See how we transform raw materials into precision components through our streamlined manufacturing process
            </motion.p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {benefit.metric}
                 
                </div>
                <div className={`text-sm font-semibold ${benefit.color} mb-1`}>
                  {benefit.title}
                </div>
                <div className="text-xs text-gray-500">
                  {benefit.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Core Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive manufacturing solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {visualServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Service Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-red-600">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Stats & Highlight */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                    {service.stats}
                  </span>
                  <span className="text-xs font-semibold text-gray-700 bg-gray-100 px-2 py-1 rounded">
                    {service.highlight}
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual Process Flow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Process Flow</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process from concept to delivery
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
              {visualProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative"
                >
                  {/* Step Number */}
                  <motion.div
                    className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto relative z-10 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 group">
                    {/* Visual Emoji */}
                    <div className="text-3xl mb-3">
                      {step.visual}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3">
                      {step.description}
                    </p>

                    {/* Duration */}
                    <div className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full inline-block mb-3">
                      {step.duration}
                    </div>

                    {/* Details */}
                    <div className="space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-xs text-gray-500 flex items-center justify-center">
                          <FiArrowRight className="w-3 h-3 text-red-500 mr-1" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Arrow */}
                  {index < visualProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                      <FiArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

 
      
    </div>
  );
};

export default ServicesInfo;