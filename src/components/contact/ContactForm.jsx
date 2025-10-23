import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [activeField, setActiveField] = useState(null);

  // Replace with your Formspree form ID
  const [state, handleSubmit] = useForm("mvgwvkeq");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFocus = (fieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  // Custom submit handler that works with Formspree
  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Your existing validation
    if (!validateForm()) return;
    
    // Let Formspree handle the submission
    handleSubmit(e);
  };

  // Your existing validateForm function
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\-\+]{9,15}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const inputFocus = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.2)",
      transition: { duration: 0.2 }
    }
  };

  // Show success message when Formspree submission succeeds
  if (state.succeeded) {
    return (
      <motion.div 
        className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-8 sm:p-10 lg:p-12 text-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-6">
          <motion.div 
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 text-lg">
            Thank you for your message. We'll get back to you within 24 hours.
          </p>
        </div>
        <motion.button
          onClick={() => window.location.reload()}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 sm:p-8 lg:p-10"
      variants={itemVariants}
      whileHover={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
          Send Us a <span className="text-red-500">Message</span>
        </h2>
        <motion.div 
          className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-4 sm:mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <p className="text-gray-600 text-sm sm:text-base">
          Have questions or need a quote? Fill out the form and our team will get back to you within 24 hours.
        </p>
      </div>
      
      <AnimatePresence>
        {state.errors && (
          <motion.div 
            className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            There was an error submitting the form. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
      
      <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6" noValidate>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              animate={activeField === 'name' ? "focus" : ""}
              variants={inputFocus}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                required
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.name ? 'border-red-300' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base`}
                placeholder="Enter your name"
              />
            </motion.div>
            {errors.name && (
              <motion.p 
                className="mt-1 text-xs sm:text-sm text-red-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.name}
              </motion.p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              animate={activeField === 'email' ? "focus" : ""}
              variants={inputFocus}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                required
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base`}
                placeholder="your@email.com"
              />
            </motion.div>
            {errors.email && (
              <motion.p 
                className="mt-1 text-xs sm:text-sm text-red-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.email}
              </motion.p>
            )}
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="mt-1 text-xs sm:text-sm text-red-600"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              animate={activeField === 'phone' ? "focus" : ""}
              variants={inputFocus}
            >
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.phone ? 'border-red-300' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base`}
                placeholder="+91 123456789"
              />
            </motion.div>
            {errors.phone && (
              <motion.p 
                className="mt-1 text-xs sm:text-sm text-red-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.phone}
              </motion.p>
            )}
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              animate={activeField === 'subject' ? "focus" : ""}
              variants={inputFocus}
            >
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
                required
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.subject ? 'border-red-300' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base`}
                placeholder="What's this about?"
              />
            </motion.div>
            {errors.subject && (
              <motion.p 
                className="mt-1 text-xs sm:text-sm text-red-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.subject}
              </motion.p>
            )}
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              animate={activeField === 'message' ? "focus" : ""}
              variants={inputFocus}
            >
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                required
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border ${errors.message ? 'border-red-300' : 'border-gray-200'} rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base`}
                placeholder="Tell us about your project..."
              ></textarea>
            </motion.div>
            {errors.message && (
              <motion.p 
                className="mt-1 text-xs sm:text-sm text-red-600"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {errors.message}
              </motion.p>
            )}
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="mt-1 text-xs sm:text-sm text-red-600"
            />
          </div>
        </div>
        
        <div className="pt-1 sm:pt-2">
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center text-sm sm:text-base"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 15px -3px rgba(239, 68, 68, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            disabled={state.submitting}
          >
            {state.submitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <>
                <FaPaperPlane className="mr-2" />
                Send Message
              </>
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;