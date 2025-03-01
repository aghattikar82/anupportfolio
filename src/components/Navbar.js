import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/ag.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="bg-gray-900 text-white p-4 fixed w-full z-10 top-0 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <motion.a
          href="#LandingPage"
          className="font-bold text-3xl text-blue-400 flex items-center space-x-3"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Add your logo image here */}
          <img 
            src={profileImage}
            alt="Logo" 
            className="w-12 h-12"
          />
          <span>Anup Ghattikar</span>
        </motion.a>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          {['AboutMe', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((section, index) => (
            <motion.a
              key={index}
              href={`#${section.toLowerCase()}`}
              className="hover:text-blue-400 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.1 }}
            >
              {section}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {['AboutMe', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((section, index) => (
            <motion.a
              key={index}
              href={`#${section.toLowerCase()}`}
              className="block py-2 px-4 text-lg hover:bg-gray-700 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
            >
              {section}
            </motion.a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
