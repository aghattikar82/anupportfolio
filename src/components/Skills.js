import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaNodeJs, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaPaintBrush } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si'; // Import Kubernetes

const skills = [
  {
    field: 'Design',
    skills: [
      { name: 'Canva', level: '80%', color: 'bg-pink-500', icon: <FaPaintBrush size={40} /> },
    ],
  },
  {
    field: 'Frontend',
    skills: [
      { name: 'HTML', level: '90%', color: 'bg-orange-600', icon: <FaHtml5 size={40} /> },
      { name: 'CSS', level: '85%', color: 'bg-blue-600', icon: <FaCss3Alt size={40} /> },
      { name: 'Bootstrap', level: '80%', color: 'bg-purple-600', icon: <FaBootstrap size={40} /> },
      { name: 'React', level: '75%', color: 'bg-blue-500', icon: <FaReact size={40} /> },
    ],
  },
  {
    field: 'Backend',
    skills: [
      { name: 'Python', level: '90%', color: 'bg-yellow-600', icon: <FaPython size={40} /> },
      { name: 'Node.js', level: '70%', color: 'bg-green-600', icon: <FaNodeJs size={40} /> },
    ],
  },
  {
    field: 'DevOps',
    skills: [
      { name: 'AWS', level: '80%', color: 'bg-orange-500', icon: <FaAws size={40} /> },
      { name: 'Docker', level: '75%', color: 'bg-blue-400', icon: <FaDocker size={40} /> },
      { name: 'Kubernetes', level: '70%', color: 'bg-indigo-600', icon: <SiKubernetes size={40} /> },
    ],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Gradient background
    }}>
      <div className="bg-black bg-opacity-60 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-white mb-10">My Skills</h2>

          {/* Field-based skill sections */}
          {skills.map((skillCategory, index) => (
            <div key={index} className="mb-10">
              {/* Field Heading */}
              <h3 className="text-2xl font-semibold text-white mb-4">{skillCategory.field}</h3>
              
              {/* Skills grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategory.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    {/* Skill Icon */}
                    <div className="text-center mb-4 text-gray-700">
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <h4 className="text-xl font-bold text-center mb-2 text-gray-800">{skill.name}</h4>

                    {/* Skill Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-3 mb-3">
                      <div className={`${skill.color} h-3 rounded-full`} style={{ width: skill.level }}></div>
                    </div>

                    {/* Skill Level */}
                    <p className="text-center text-gray-600">{skill.level} proficiency</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
