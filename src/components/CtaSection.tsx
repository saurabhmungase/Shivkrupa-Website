import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

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

const CtaSection = () => {
    const navigate = useNavigate();
    
    return (
        <div className='bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.section 
                className="mt-8 sm:mt-12 lg:mt-16 mb-6 sm:mb-8 lg:mb-10 text-center" 
                variants={itemVariants}
            >
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 sm:p-8 lg:p-10 xl:p-12 text-white w-full">
                    {/* Heading with more balanced font sizes */}
                    <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-5 px-2 sm:px-0 leading-tight">
                        Let's Shape the Future of Plastic Manufacturing Together!
                    </h2>
                    
                    {/* Paragraph with optimized sizing */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl mb-4 sm:mb-5 lg:mb-6 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
                        Partner with us for high-performance, precision-molded solutions that drive your business forward.
                    </p>
                    
                    {/* Button with balanced sizing */}
                    <button 
                        onClick={() => navigate("/contact")}
                        className="bg-white text-red-600 font-bold py-3 px-6 sm:py-3 sm:px-8 lg:py-3 lg:px-10 rounded-lg hover:bg-gray-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 text-base sm:text-lg lg:text-lg min-h-[48px] sm:min-h-[50px]"
                        aria-label="Contact us today"
                    >
                        Contact Us Today
                    </button>
                </div>
            </motion.section>
        </div>
    )
}

export default CtaSection