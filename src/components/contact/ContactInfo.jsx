import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import ContactCard from './ContactCard';

const ContactInfo = () => {
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

  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Our Location",
      content: (
        <>
          Gat No. 164/2-A & B, Near Samsonite Factory,<br />
          A/p. Gonde Dumala, Tal. Igatpuri,<br />
          Dist. Nashik, Maharashtra – 422403
        </>
      ),
      action: {
        text: "View on Map →",
        url: "https://maps.google.com/?q=Shivkrupa+Techno-Plast+Pvt.+Ltd."
      }
    },
    {
      icon: <IoMdCall className="text-xl" />,
      title: "Call Us",
      content: (
        <div className="space-y-1">
          <p>
            <a href="tel:+919423968288" className="hover:text-red-500 transition-colors font-medium">
              +91 94239 68288
            </a>
          </p>
          <p>
            <a href="tel:+918983028645" className="hover:text-red-500 transition-colors font-medium">
              +91 8983028645
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Available sun-fri, 9AM-9PM
          </p>
        </div>
      )
    },
    {
      icon: <MdEmail className="text-xl" />,
      title: "Email Us",
      content: (
        <div className="space-y-1">
          <p>
            <a href="mailto:shivkrupatechnoplast@gmail.com" className="hover:text-red-500 transition-colors font-medium">
              shivkrupatechnoplast@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Typically respond within 24 hours
          </p>
        </div>
      )
    }
  ];

  return (
    <motion.div 
      className="space-y-6 sm:space-y-8"
      variants={itemVariants}
    >

      
      {/* Contact Cards */}
      <div className="space-y-4 sm:space-y-6">
        {contactItems.map((item, index) => (
          <ContactCard
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
            action={item.action}
            index={index}
          />
        ))}
      </div>
      
      {/* Map Embed */}
      <motion.div 
        className="mt-6 sm:mt-8 rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl border border-gray-200"
        whileHover={{ 
          scale: 1.01,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
        }}
        transition={{ duration: 0.4 }}
      >
        <iframe
          title="Shivkrupa Technoplast Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50513.02375686294!2d73.66458909454043!3d19.820523333672064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd9100426c93e7%3A0x2672fd99b1019152!2sShivkrupa%20Techno-Plast%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1743166642760!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="filter hover:grayscale-0 transition-all duration-300"
        />
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
