import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => (
  <motion.div 
    id="testimonials" 
    className="p-10 bg-gradient-to-r from-blue-50 via-white to-blue-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      Testimonials
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg italic mb-4 text-gray-700">
          "Amazing experience working with this developer. Delivered high-quality work on time!"
        
        </p>
        <h3 className="text-xl font-semibold text-blue-600">- Client Name 1</h3>
        <p className="text-sm text-gray-500">CEO, Company 1</p>
      </motion.div>

      <motion.div 
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg italic mb-4 text-gray-700">
          "Great communication and excellent problem-solving skills. Highly recommended!"
        </p>
        <h3 className="text-xl font-semibold text-blue-600">- Client Name 2</h3>
        <p className="text-sm text-gray-500">Founder, Company 2</p>
      </motion.div>
    </div>
  </motion.div>
);

export default Testimonials;
