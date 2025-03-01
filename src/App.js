import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe/>
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
