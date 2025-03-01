import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center text-center text-white"
      style={{ backgroundImage: 'url(https://via.placeholder.com/1500)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-gray-900 bg-opacity-80 p-10 rounded-xl shadow-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fadeInUp">Hi, I'm <span className="text-blue-500">Anup Ghattikar</span></h1>
        <p className="text-xl md:text-2xl font-light mb-8 animate-fadeInUp delay-1s">Python Developer | DevOps Enthusiast | Data Research Analyst</p>
        <a href="#projects" className="inline-block mt-6 px-8 py-4 bg-blue-600 text-lg rounded-full shadow-lg hover:bg-blue-500 transition duration-300 transform hover:-translate-y-1">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
