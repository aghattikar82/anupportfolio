import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => (
  <div id="aboutme" className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}>
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500 opacity-80"></div>

    {/* About Me Section */}
    <motion.div
      className="relative z-10 max-w-3xl bg-white bg-opacity-90 p-6 md:p-10 rounded-2xl shadow-2xl backdrop-filter backdrop-blur-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        About Me
      </motion.h2>

      {/* Text Content */}
      <motion.div
        className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <p className="mb-4">
          I'm Anup Ghattikar, a Full Stack Developer and DevOps enthusiast with a strong foundation in Python and Django. I specialize in building dynamic, scalable web applications and solving real-world problems through code.
        </p>

        <p className="mb-4">
          My passion for technology keeps me continuously learning and experimenting with new tools and techniques that push the boundaries of development. I enjoy working on challenging projects that enhance my skills and help me stay ahead in the tech industry.
        </p>

        <p className="mb-4">
          Beyond web development, I am particularly interested in cloud computing and automation. I love exploring platforms like AWS and optimizing CI/CD pipelines to make the development process smoother and more efficient.
        </p>

        <p>
          Every project I undertake is a step toward mastering seamless, efficient development practices, with a focus on delivering high-quality solutions.
        </p>
      </motion.div>
    </motion.div>
  </div>
);

export default AboutMe;
