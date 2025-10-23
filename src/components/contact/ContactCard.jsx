import React from 'react';
import { motion } from 'framer-motion';

const ContactCard = ({ icon, title, content, action, index }) => {
  const cardHover = {
    hover: {
      y: -8,
      boxShadow: "0 15px 30px -10px rgba(0,0,0,0.15)",
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div 
      className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md flex items-start group"
      variants={cardHover}
      whileHover="hover"
      transition={{ duration: 0.4 }}
    >
      <div className="bg-red-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
        {React.cloneElement(icon, { 
          className: `${icon.props.className} text-red-500 group-hover:text-white transition-colors duration-300`
        })}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{title}</h3>
        <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {content}
        </div>
        {action && (
          <a 
            href={action.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 sm:mt-3 text-red-500 hover:text-red-600 font-medium text-sm sm:text-base transition-colors"
          >
            {action.text}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ContactCard;
