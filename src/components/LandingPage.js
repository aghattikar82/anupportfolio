import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/profile.jpg';

const LandingPage = () => (
  <div id="LandingPage" className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 md:p-10">
    {/* Left Side - Text with Animations */}
    <div className="w-full md:w-1/2 mb-10 md:mb-0">
      <motion.div
        className="text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ y: -10 }} // Floating effect on hover
      >
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-white mb-4 md:mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Hi, I'm Anup Ghattikar
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white mb-4 md:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Full Stack Developer & DevOps Enthusiast with a passion for building web applications and mastering DevOps tools.
        </motion.p>

        <motion.button
          className="mt-4 bg-white text-blue-600 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
          }}
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </div>

    {/* Right Side - Image with Circular Animation */}
    <div className="relative w-full md:w-1/2 flex justify-center items-center">
      <motion.div
        className="relative rounded-full w-64 h-64 md:w-96 md:h-96"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image with Pulsating Effect */}
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-full h-full rounded-full object-cover shadow-lg"
          whileHover={{ scale: 1.05 }} // Subtle scaling on hover
          animate={{
            scale: [1, 1.05, 1], // Pulsating effect
          }}
        />

        {/* Circular Animation - Outer Ring */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        />

        {/* Second Rotating Ring with Opacity Change */}
        <motion.div
          className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] border-2 border-purple-300 rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360, opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        />

        {/* Third Rotating Ring with Delay */}
        <motion.div
          className="absolute top-4 left-4 w-[calc(100%-32px)] h-[calc(100%-32px)] border-2 border-pink-400 rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear', delay: 1 }}
        />
      </motion.div>
    </div>
  </div>
);

export default LandingPage;
