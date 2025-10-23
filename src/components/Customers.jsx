import React from 'react'
import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa';

// Import logos (keep your existing imports)
import viplogo from '../assets/viplogo.png';
import abhijeetlogo from '../assets/abhijeetlogo.png';
import iaclogo from '../assets/iaclogo.png';
import mathersonlogo from '../assets/mathersonlogo.png';
import samsonitelogo from '../assets/samsonitelogo.png';

const Customers = ({ customers: customersData }) => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: { 
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    // Use provided customers data or fallback to default
    const customers = customersData || [
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

    return (
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-8 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center mb-3 md:mb-4">
                        <FaHandshake className="text-red-500 text-2xl md:text-3xl mr-2 md:mr-3" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                            Our <span className="text-red-500">Valuable Customers</span>
                        </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
                        We're proud to partner with industry leaders who trust our solutions
                    </p>
                </motion.div>

                {/* Customers Grid */}
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {customers.map((customer, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover="hover"
                            className="flex flex-col items-center"
                        >
                            <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-xs hover:shadow-sm transition-all duration-300 w-full h-32 sm:h-40 flex items-center justify-center">
                                <img 
                                    src={customer.logo} 
                                    alt={customer.alt} 
                                    className="max-h-12 sm:max-h-16 max-w-[80%] object-contain transition-transform duration-300 hover:scale-105"
                                    loading="lazy"
                                    width={120}
                                    height={80}
                                />
                            </div>
                            <h3 className="mt-3 sm:mt-4 text-center font-medium text-gray-800 text-xs sm:text-sm md:text-base leading-tight sm:leading-normal px-1">
                                {customer.name}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Customers;
